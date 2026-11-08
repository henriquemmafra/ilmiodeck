(function () {
  "use strict";

  var questions = Array.isArray(window.RAPIDFIRE_QUESTIONS) ? window.RAPIDFIRE_QUESTIONS.filter(function (q) {
    return q && typeof q.id === "string" && typeof q.stem === "string" &&
      Array.isArray(q.options) && (q.options.length === 3 || q.options.length === 4) &&
      Array.isArray(q.explanations) && q.explanations.length === q.options.length &&
      Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length;
  }) : [];

  var storageKey = "step1-rapidfire-progress-v1";
  var history = loadHistory();
  var seen = new Set();
  var session = { asked: 0, correct: 0, streak: 0, initialSize: 0 };
  var current = null;
  var selected = null;
  var finished = false;
  var trail = [];
  var trailPosition = -1;
  var swipeBusy = false;
  var ids = {
    topic: document.getElementById("topic"),
    mode: document.getElementById("mode"),
    level: document.getElementById("level"),
    stage: document.getElementById("stage"),
    answered: document.getElementById("answered"),
    accuracy: document.getElementById("accuracy"),
    streak: document.getElementById("streak"),
    pending: document.getElementById("pending"),
    count: document.getElementById("session-count"),
    type: document.getElementById("session-type"),
    progress: document.getElementById("progress-fill"),
    next: document.getElementById("next"),
    previous: document.getElementById("previous"),
    skip: document.getElementById("skip"),
    export: document.getElementById("export"),
    importInput: document.getElementById("import-file"),
    reset: document.getElementById("reset")
  };

  function loadHistory() {
    try {
      var raw = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
    } catch (error) {
      return {};
    }
  }

  function saveHistory() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(history));
    } catch (error) {
      // Private browsing may block storage.
    }
  }

  function make(tag, className, value) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (value !== undefined) el.textContent = value;
    return el;
  }

  function getProgress(q) {
    var value = history[q.id];
    return value && typeof value === "object" ? value : null;
  }

  function filtered() {
    var topic = ids.topic.value;
    var mode = ids.mode.value;
    var level = ids.level.value;
    var now = Date.now();
    return questions.filter(function (q) {
      var p = getProgress(q);
      if (topic !== "all" && q.topic !== topic) return false;
      if (level !== "all" && String(q.level) !== level) return false;
      if (mode === "missed") return Boolean(p && p.lastWrong);
      if (mode === "unseen") return !p || !p.attempts;
      if (mode === "due") return !p || !p.nextAt || p.nextAt <= now;
      return true;
    });
  }

  function priority(q) {
    var p = getProgress(q);
    if (!p) return 2.5 + Math.random() * 2;
    var score = (p.lastWrong ? 6 : 0) + Math.min(Number(p.misses) || 0, 5) * 0.7;
    if (p.nextAt && p.nextAt <= Date.now()) score += 2;
    return score + Math.random() * 3;
  }

  function updateNumbers() {
    var records = questions.map(getProgress).filter(Boolean);
    var attempts = records.reduce(function (s, p) { return s + (Number(p.attempts) || 0); }, 0);
    var hits = records.reduce(function (s, p) { return s + (Number(p.hits) || 0); }, 0);
    var missed = records.filter(function (p) { return p.lastWrong; }).length;
    ids.answered.textContent = String(attempts);
    ids.accuracy.textContent = attempts ? Math.round(100 * hits / attempts) + "%" : "—";
    ids.streak.textContent = String(session.streak);
    ids.pending.textContent = String(missed);
    ids.count.textContent = finished ? "Session complete" : "Question " + Math.max(1, trailPosition + 1) + " de " + session.initialSize;
    ids.type.textContent = session.asked + " answered this session · " + questions.length + " in bank";
    ids.progress.style.width = (session.initialSize ? Math.min(100, 100 * seen.size / session.initialSize) : 0) + "%";
  }

  function startSession() {
    seen = new Set();
    trail = [];
    trailPosition = -1;
    session = { asked: 0, correct: 0, streak: 0, initialSize: filtered().length };
    finished = false;
    selected = null;
    nextQuestion();
  }

  function nextQuestion() {
    selected = null;
    // Revisit the next card if the user previously swiped backward.
    if (trailPosition < trail.length - 1) {
      trailPosition++;
      current = trail[trailPosition].question;
      selected = trail[trailPosition].selected;
      finished = false;
      renderQuestion();
      return;
    }
    var candidates = filtered().filter(function (q) { return !seen.has(q.id); });
    if (candidates.length === 0) {
      current = null;
      finished = true;
      renderEnd();
      return;
    }
    var ranked = candidates.map(function (q) { return { question: q, score: priority(q) }; });
    ranked.sort(function (a, b) { return b.score - a.score; });
    current = ranked[0].question;
    seen.add(current.id);
    trail.push({ question: current, selected: null });
    trailPosition = trail.length - 1;
    renderQuestion();
  }

  function previousQuestion() {
    if (finished && trail.length) {
      trailPosition = trail.length - 1;
    } else if (trailPosition > 0) {
      trailPosition--;
    } else {
      return;
    }
    current = trail[trailPosition].question;
    selected = trail[trailPosition].selected;
    finished = false;
    renderQuestion();
  }

  function grade(index) {
    if (!current || selected !== null) return;
    selected = index;
    if (trail[trailPosition]) trail[trailPosition].selected = index;
    var q = current;
    var correct = index === q.answer;
    var p = getProgress(q) || { attempts: 0, hits: 0, misses: 0, streak: 0 };
    p.attempts = (Number(p.attempts) || 0) + 1;
    p.hits = (Number(p.hits) || 0) + (correct ? 1 : 0);
    p.misses = (Number(p.misses) || 0) + (correct ? 0 : 1);
    p.streak = correct ? (Number(p.streak) || 0) + 1 : 0;
    p.lastWrong = !correct;
    p.lastAt = Date.now();
    // Intervalos simples: 1, 3, 7, 14, 30 dias. Após erro, o item volta à fila de erros.
    var intervals = [1, 3, 7, 14, 30];
    p.nextAt = correct ? Date.now() + intervals[Math.min(p.streak - 1, 4)] * 86400000 : Date.now();
    history[q.id] = p;
    session.asked++;
    session.correct += correct ? 1 : 0;
    session.streak = correct ? session.streak + 1 : 0;
    saveHistory();
    renderQuestion();
  }

  function renderQuestion() {
    var q = current;
    ids.stage.replaceChildren();
    ids.next.disabled = selected === null;
    ids.previous.disabled = trailPosition <= 0;
    ids.previous.hidden = false;
    ids.next.hidden = false;
    ids.skip.hidden = false;
    ids.skip.disabled = selected !== null;
    if (!q) return;

    var chips = make("div", "chips");
    chips.appendChild(make("span", "chip", q.topic));
    chips.appendChild(make("span", "chip secondary", q.level === 1 ? "Foundational" : q.level === 2 ? "Intermediate" : "Advanced"));
    if (getProgress(q) && getProgress(q).lastWrong && selected === null) {
      chips.appendChild(make("span", "chip secondary", "Previously missed"));
    }
    ids.stage.appendChild(chips);
    ids.stage.appendChild(make("p", "stem", q.stem));

    if (typeof q.image === "string" && /^(\.\/)?images\/[a-zA-Z0-9_.\/-]+$/.test(q.image) && !q.image.includes("..")) {
      var img = make("img", "question-image");
      img.src = q.image;
      img.alt = q.imageAlt || "Question image";
      img.loading = "lazy";
      ids.stage.appendChild(img);
      if (q.imageCaption) ids.stage.appendChild(make("p", "image-caption", q.imageCaption));
    }

    var list = make("div", "options");
    q.options.forEach(function (label, index) {
      var wrapper = make("div", "option-group");
      var btn = make("button", "option");
      btn.type = "button";
      btn.disabled = selected !== null;
      if (selected !== null && index === q.answer) btn.classList.add("correct");
      if (selected === index && selected !== q.answer) btn.classList.add("incorrect");
      btn.appendChild(make("span", "letter", String.fromCharCode(65 + index)));
      btn.appendChild(make("span", "", label));
      btn.addEventListener("click", function () { grade(index); });
      wrapper.appendChild(btn);
      if (selected !== null) {
        var isCorrect = index === q.answer;
        var explanation = make("div", "inline-option-explanation " +
          (isCorrect ? "inline-correct" : index === selected ? "inline-selected" : ""));
        explanation.appendChild(make("span", "inline-result",
          isCorrect ? "Correct answer" : index === selected ? "Your answer" : "Why not"));
        explanation.appendChild(make("span", "inline-reason", q.explanations[index]));
        wrapper.appendChild(explanation);
      }
      list.appendChild(wrapper);
    });
    ids.stage.appendChild(list);

    if (selected !== null) {
      var feedback = make("section", "feedback feedback-compact");
      var success = selected === q.answer;
      feedback.appendChild(make("div", "verdict " + (success ? "good" : "bad"),
        success ? "Correct. Keep going." : "Incorrect. Correct answer: " + String.fromCharCode(65 + q.answer) + "."));
      feedback.appendChild(make("div", "takeaway", "Step 1 trap: " + q.teaching));
      ids.stage.appendChild(feedback);
    }
    if (window.RapidFireAssistant && typeof window.RapidFireAssistant.mount === "function") {
      window.RapidFireAssistant.mount(ids.stage, q, selected);
    }
    updateNumbers();
  }

  function renderEnd() {
    ids.stage.replaceChildren();
    ids.next.hidden = true;
    ids.skip.hidden = true;
    ids.previous.hidden = !trail.length;
    ids.previous.disabled = !trail.length;
    var empty = make("div", "empty");
    var count = session.asked;
    empty.appendChild(make("h2", "", session.initialSize === 0 ? "No questions match this filter" : "Session complete"));
    var msg = session.initialSize === 0
      ? "Choose a different subject or mode. Correct answers return for review on future days."
      : "You answered " + count + " questions and got " + session.correct +
        " (" + (count ? Math.round(100 * session.correct / count) : 0) + "%). Missed questions remain available for review.";
    empty.appendChild(make("p", "", msg));
    var restart = make("button", "finish-button", "Restart session");
    restart.type = "button";
    restart.addEventListener("click", startSession);
    empty.appendChild(restart);
    var review = make("button", "secondary finish-button", "Review missed questions");
    review.type = "button";
    review.addEventListener("click", function () { ids.mode.value = "missed"; startSession(); });
    empty.appendChild(review);
    ids.stage.appendChild(empty);
    updateNumbers();
  }

  function exportProgress() {
    var data = { app: "step1-rapidfire", version: 1, exportedAt: new Date().toISOString(), history: history };
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var anchor = make("a");
    anchor.href = url;
    anchor.download = "rapidfire-progress.json";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function importProgress(file) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var obj = JSON.parse(reader.result);
        if (!obj || obj.app !== "step1-rapidfire" || !obj.history || typeof obj.history !== "object" || Array.isArray(obj.history)) {
          throw new Error("Unrecognized file.");
        }
        var clean = {};
        questions.forEach(function (q) {
          var value = obj.history[q.id];
          if (!value || typeof value !== "object") return;
          clean[q.id] = {
            attempts: Math.max(0, Number(value.attempts) || 0),
            hits: Math.max(0, Number(value.hits) || 0),
            misses: Math.max(0, Number(value.misses) || 0),
            streak: Math.max(0, Number(value.streak) || 0),
            lastWrong: Boolean(value.lastWrong),
            lastAt: Number(value.lastAt) || 0,
            nextAt: Number(value.nextAt) || 0
          };
        });
        if (!confirm("Replace this browser's progress with the imported progress?")) return;
        history = clean;
        saveHistory();
        startSession();
      } catch (error) {
        alert("Could not import: " + error.message);
      }
    };
    reader.readAsText(file);
  }

  var topics = Array.from(new Set(questions.map(function (q) { return q.topic; }))).sort();
  topics.forEach(function (topic) {
    var option = make("option", "", topic);
    option.value = topic;
    ids.topic.appendChild(option);
  });

  [ids.topic, ids.mode, ids.level].forEach(function (control) {
    control.addEventListener("change", startSession);
  });
  ids.next.addEventListener("click", function () { if (selected !== null) nextQuestion(); });
  ids.previous.addEventListener("click", previousQuestion);
  ids.skip.addEventListener("click", function () { if (current && selected === null) nextQuestion(); });
  ids.export.addEventListener("click", exportProgress);
  ids.importInput.addEventListener("change", function () {
    importProgress(ids.importInput.files[0]);
    ids.importInput.value = "";
  });
  ids.reset.addEventListener("click", function () {
    if (!confirm("Delete saved answer history in this browser?")) return;
    history = {};
    saveHistory();
    startSession();
  });

  // Swipe left for the next card (skip if unanswered), right to revisit a card.
  // Pointer events work on touch screens and with mouse/trackpad dragging.
  var pointerStart = null;
  var suppressClickUntil = 0;
  ids.stage.addEventListener("pointerdown", function (event) {
    if (swipeBusy || event.button > 0 || (event.target.closest && event.target.closest(".chat-assist, input, textarea, select, a"))) return;
    pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
  });
  ids.stage.addEventListener("pointercancel", function () { pointerStart = null; });
  ids.stage.addEventListener("pointerup", function (event) {
    if (!pointerStart || pointerStart.id !== event.pointerId || swipeBusy) return;
    var dx = event.clientX - pointerStart.x;
    var dy = event.clientY - pointerStart.y;
    pointerStart = null;
    if (Math.abs(dx) < 65 || Math.abs(dx) < Math.abs(dy) * 1.3) return;
    var forward = dx < 0;
    if (forward && finished) return;
    if (!forward && trailPosition <= 0 && !finished) return;
    suppressClickUntil = Date.now() + 450;
    swipeBusy = true;
    ids.stage.classList.add(forward ? "swipe-exit-left" : "swipe-exit-right");
    setTimeout(function () {
      ids.stage.classList.remove("swipe-exit-left", "swipe-exit-right");
      if (forward) nextQuestion(); else previousQuestion();
      ids.stage.classList.add("swipe-enter");
      setTimeout(function () {
        ids.stage.classList.remove("swipe-enter");
        swipeBusy = false;
      }, 190);
    }, 145);
  });
  ids.stage.addEventListener("click", function (event) {
    if (Date.now() < suppressClickUntil) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  // Keyboard navigation: left/right arrows revisit/advance cards, space advances,
  // and 1–4 (or A–D) select an answer. Never steal keys from editable controls.
  document.addEventListener("keydown", function (event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.repeat || swipeBusy) return;
    var target = event.target;
    if (target && (target.isContentEditable || /^(INPUT|SELECT|TEXTAREA|BUTTON)$/.test(target.tagName) ||
        (target.closest && target.closest('[contenteditable="true"], [role="textbox"], .chat-assist')))) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previousQuestion();
      return;
    }
    if (event.key === "ArrowRight" || event.key === " " || event.code === "Space" ||
        (event.key === "Enter" && selected !== null)) {
      if (!finished) {
        event.preventDefault();
        nextQuestion();
      }
      return;
    }
    if (!current || selected !== null) return;
    var key = event.key.toUpperCase();
    var index = ["A", "B", "C", "D"].indexOf(key);
    if (index === -1 && /^[1-4]$/.test(key)) index = Number(key) - 1;
    if (index >= 0 && current && index < current.options.length) {
      event.preventDefault();
      grade(index);
    }
  });

  startSession();
})();
