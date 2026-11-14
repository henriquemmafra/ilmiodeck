(function () {
  "use strict";

  // The main RapidFire engine is also the flashcard engine.
  // Personal cards never leave the browser and are not committed to the repository.
  if (window.RapidFireCards && typeof window.RapidFireCards.migrateReviewHistory === "function") {
    window.RapidFireCards.migrateReviewHistory();
  }
  var builtIn = Array.isArray(window.RAPIDFIRE_QUESTIONS) ? window.RAPIDFIRE_QUESTIONS : [];
  var extras = window.RapidFireCards && typeof window.RapidFireCards.load === "function"
    ? window.RapidFireCards.load() : [];
  var questions = builtIn.concat(extras).filter(function (q) {
    return q && typeof q.id === "string" && typeof q.stem === "string" &&
      Array.isArray(q.options) && (
        (q.options.length >= 2 && q.options.length <= 6 &&
          Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length &&
          Array.isArray(q.explanations) && q.explanations.length === q.options.length) ||
        (q.options.length === 0 && typeof q.recallAnswer === "string" && q.recallAnswer.length > 0));
  });

  var storageKey = "step1-rapidfire-progress-v1";
  var history = loadHistory();
  var seen = new Set();
  var session = { asked: 0, correct: 0, streak: 0, initialSize: 0 };
  var current = null;
  var selected = null;
  var revealed = false;
  var cardShownAt = Date.now();
  var scheduler = window.RapidFireScheduler;
  var topicCounts = Object.create(null);
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
    reviewSummary: document.getElementById("review-summary"),
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

  // Shuffle each new presentation, but keep the same order when navigating back.
  // Options and their inline explanations always move together.
  var lastShownCorrectPosition = Object.create(null);

  function shuffleQuestionChoices(question) {
    if (!question.options.length) return Object.assign({}, question);
    var order = question.options.map(function (_, index) { return index; });
    for (var i = order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = order[i];
      order[i] = order[j];
      order[j] = temp;
    }

    var answerPosition = order.indexOf(question.answer);
    var previousPosition = lastShownCorrectPosition[question.id];
    if (Number.isInteger(previousPosition) && previousPosition === answerPosition) {
      // On repeat visits, force the correct answer to a different letter.
      var newPosition = (answerPosition + 1 + Math.floor(Math.random() * (order.length - 1))) % order.length;
      var swapped = order[newPosition];
      order[newPosition] = order[answerPosition];
      order[answerPosition] = swapped;
      answerPosition = newPosition;
    }
    lastShownCorrectPosition[question.id] = answerPosition;

    var shuffled = Object.assign({}, question);
    shuffled.options = order.map(function (index) { return question.options[index]; });
    shuffled.explanations = order.map(function (index) { return question.explanations[index]; });
    shuffled.answer = answerPosition;
    return shuffled;
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
      if (mode === "due") return Boolean(p && p.attempts && (!p.nextAt || p.nextAt <= now));
      if (mode === "smart") return !p || !p.attempts || !p.nextAt || p.nextAt <= now;
      return true;
    });
  }

  function priority(q) {
    var p = getProgress(q);
    if (!p || !p.attempts) return 2.5 + Math.random() * 2;
    var score = (p.lastWrong ? 6 : 0) + Math.min(Number(p.misses) || 0, 5) * 0.7;
    if (!p.nextAt || p.nextAt <= Date.now()) score += 5;
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
    if (ids.reviewSummary) {
      var now = Date.now();
      var due = questions.filter(function (q) {
        var p = getProgress(q);
        return p && p.attempts && (!p.nextAt || p.nextAt <= now);
      }).length;
      var newCards = questions.filter(function (q) {
        var p = getProgress(q);
        return !p || !p.attempts;
      }).length;
      ids.reviewSummary.textContent = due + " due now · " + newCards + " new";
    }
    ids.count.textContent = finished ? "Session complete" : "Question " + Math.max(1, trailPosition + 1) + " de " + session.initialSize;
    ids.type.textContent = session.asked + " answered this session · " + questions.length + " in bank";
    ids.progress.style.width = (session.initialSize ? Math.min(100, 100 * seen.size / session.initialSize) : 0) + "%";
  }

  function startSession() {
    seen = new Set();
    trail = [];
    trailPosition = -1;
    revealed = false;
    topicCounts = Object.create(null);
    session = { asked: 0, correct: 0, streak: 0, initialSize: filtered().length, startedAt: Date.now() };
    finished = false;
    selected = null;
    nextQuestion();
  }

  function nextQuestion() {
    selected = null;
    revealed = false;
    // Revisit the next card if the user previously swiped backward.
    if (trailPosition < trail.length - 1) {
      trailPosition++;
      current = trail[trailPosition].question;
      selected = trail[trailPosition].selected;
      revealed = Boolean(trail[trailPosition].revealed);
      cardShownAt = Date.now();
      finished = false;
      renderQuestion();
      return;
    }
    var candidates = filtered().filter(function (q) {
      if (!seen.has(q.id)) return true;
      // A failed card can become due again in this same session after 10 minutes.
      var p = getProgress(q);
      return Boolean(p && p.lastAt >= session.startedAt && p.nextAt &&
        p.nextAt <= Date.now() && p.lastWrong);
    });
    if (candidates.length === 0) {
      current = null;
      finished = true;
      renderEnd();
      return;
    }
    // Alternate subjects whenever possible while still giving missed cards extra weight.
    var previousTopic = trail.length ? trail[trail.length - 1].question.topic : "";
    var choices = candidates.filter(function (q) { return q.topic !== previousTopic; });
    if (!choices.length) choices = candidates;
    var ranked = choices.map(function (q) {
      return { question: q, score: priority(q) - (topicCounts[q.topic] || 0) * 1.25 };
    });
    ranked.sort(function (a, b) { return b.score - a.score; });
    current = shuffleQuestionChoices(ranked[0].question);
    cardShownAt = Date.now();
    topicCounts[current.topic] = (topicCounts[current.topic] || 0) + 1;
    seen.add(current.id);
    trail.push({ question: current, selected: null, revealed: false, revealSeconds: null });
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
    revealed = Boolean(trail[trailPosition].revealed);
    cardShownAt = Date.now();
    finished = false;
    renderQuestion();
  }

  function grade(index) {
    if (!current || selected !== null) return;
    var q = current;
    var correct = q.recallAnswer ? index === 0 : index === q.answer;
    var base = Object.assign({}, getProgress(q) || {});
    var entry = trail[trailPosition];
    var at = Date.now();
    var seconds = entry && entry.revealSeconds != null
      ? entry.revealSeconds : Math.max(0.5, (at - cardShownAt) / 1000);
    // A large pause / background tab should not count as a slow answer.
    if (seconds > 600) seconds = null;
    var rating = correct ? "good" : "again";
    var scheduled = scheduler.schedule(base, rating, seconds, at, q);
    selected = index;
    if (entry) {
      entry.selected = index;
      entry.reviewBase = base;
      entry.reviewAt = at;
      entry.answerSeconds = seconds;
      entry.rating = rating;
    }
    history[q.id] = Object.assign({}, base, scheduled, {
      attempts: (Number(base.attempts) || 0) + 1,
      hits: (Number(base.hits) || 0) + (correct ? 1 : 0),
      misses: (Number(base.misses) || 0) + (correct ? 0 : 1),
      streak: correct ? (Number(base.streak) || 0) + 1 : 0,
      lastWrong: !correct
    });
    session.asked++;
    session.correct += correct ? 1 : 0;
    session.streak = correct ? session.streak + 1 : 0;
    saveHistory();
    renderQuestion();
  }

  function changeRating(rating) {
    if (!current || selected === null) return;
    var q = current;
    var entry = trail[trailPosition];
    if (!entry || !entry.reviewBase || !entry.reviewAt) return;
    var correct = q.recallAnswer ? selected === 0 : selected === q.answer;
    if (!correct && rating !== "again") return;
    var currentProgress = getProgress(q);
    // Prevent editing an older attempt after this card was reviewed again.
    if (!currentProgress || currentProgress.lastAt !== entry.reviewAt) return;
    var scheduled = scheduler.schedule(entry.reviewBase, rating, entry.answerSeconds, entry.reviewAt, q);
    history[q.id] = Object.assign({}, currentProgress, scheduled, {
      lastWrong: !correct || rating === "again"
    });
    entry.rating = rating;
    saveHistory();
    renderQuestion();
  }

  function reviewControls(q) {
    var entry = trail[trailPosition];
    var p = getProgress(q);
    if (!entry || !p || !entry.reviewBase) return null;
    var correct = q.recallAnswer ? selected === 0 : selected === q.answer;
    var locked = p.lastAt !== entry.reviewAt;
    var panel = make("section", "spaced-review");
    var next = scheduler.formatInterval(Math.max(0, p.nextAt - Date.now()));
    panel.appendChild(make("p", "spaced-review-title", "Spaced repetition · next review in " + next));
    var secondsLabel = Number.isFinite(entry.answerSeconds)
      ? Math.round(entry.answerSeconds * 10) / 10 + "s response"
      : "response time unavailable";
    panel.appendChild(make("p", "spaced-review-note",
      secondsLabel + " · Faster correct recall stretches intervals; difficulty ratings can override it."));
    var ratings = make("div", "spaced-review-buttons");
    [["again", "Again"], ["hard", "Hard"], ["good", "Good"], ["easy", "Easy"]].forEach(function (item) {
      var plan = scheduler.schedule(entry.reviewBase, item[0], entry.answerSeconds, entry.reviewAt, q);
      var button = make("button", "spaced-rating", item[1] + " · " +
        scheduler.formatInterval(plan.nextAt - entry.reviewAt));
      button.type = "button";
      button.disabled = locked || (!correct && item[0] !== "again");
      if (entry.rating === item[0]) button.classList.add("active");
      button.setAttribute("aria-pressed", entry.rating === item[0] ? "true" : "false");
      button.addEventListener("click", function () { changeRating(item[0]); });
      ratings.appendChild(button);
    });
    panel.appendChild(ratings);
    if (!correct) panel.appendChild(make("p", "spaced-review-hint",
      "Incorrect answers always use Again. Review in 10 minutes."));
    else panel.appendChild(make("p", "spaced-review-hint",
      "Choose Again if you guessed. Hard = effortful recall; Good = normal; Easy = effortless."));
    return panel;
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

    if (q.recallAnswer) {
      if (!revealed && selected === null) {
        var reveal = make("button", "recall-show primary", "Show answer");
        reveal.type = "button";
        reveal.addEventListener("click", function () {
          revealed = true;
          if (trail[trailPosition]) {
            trail[trailPosition].revealed = true;
            trail[trailPosition].revealSeconds = Math.min(600,
              Math.max(0.5, (Date.now() - cardShownAt) / 1000));
          }
          renderQuestion();
        });
        ids.stage.appendChild(reveal);
      } else {
        var recallBox = make("section", "recall-answer");
        recallBox.appendChild(make("p", "recall-answer-label", "Answer"));
        recallBox.appendChild(make("p", "recall-answer-content", q.recallAnswer));
        if (q.teaching && q.teaching !== q.recallAnswer) {
          recallBox.appendChild(make("p", "recall-explanation", q.teaching));
        }
        ids.stage.appendChild(recallBox);
        if (selected === null) {
          var grades = make("div", "recall-grade-buttons");
          var again = make("button", "secondary recall-grade", "Again · I missed it");
          again.type = "button";
          again.addEventListener("click", function () { grade(-1); });
          var good = make("button", "primary recall-grade", "Good · I recalled it");
          good.type = "button";
          good.addEventListener("click", function () { grade(0); });
          grades.appendChild(again);
          grades.appendChild(good);
          ids.stage.appendChild(grades);
        }
      }
    } else {
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
    }

    if (selected !== null) {
      var feedback = make("section", "feedback feedback-compact");
      var success = q.recallAnswer ? selected === 0 : selected === q.answer;
      feedback.appendChild(make("div", "verdict " + (success ? "good" : "bad"),
        success ? "Correct. Keep going." : q.recallAnswer
          ? "Marked for review." : "Incorrect. Correct answer: " + String.fromCharCode(65 + q.answer) + "."));
      feedback.appendChild(make("div", "takeaway", "Step 1 trap: " + q.teaching));
      ids.stage.appendChild(feedback);
      var spaced = reviewControls(q);
      if (spaced) ids.stage.appendChild(spaced);

      // Keep the visual explanation hidden until the learner has answered.
      // Match the specific competitive-inhibition enzyme-kinetics card only.
      if (/reversible competitive inhibitor binds the active site of an enzyme/i.test(q.stem) && /km/i.test(q.stem) && /vmax/i.test(q.stem)) {
        var kineticsFigure = make("figure", "post-answer-figure");
        var kineticsImage = make("img", "question-image");
        kineticsImage.src = "./images/competitive-inhibition-michaelis-menten.svg";
        kineticsImage.alt = "Michaelis–Menten curves: competitive inhibition increases apparent Km, while Vmax remains unchanged.";
        kineticsImage.loading = "lazy";
        kineticsFigure.appendChild(kineticsImage);
        kineticsFigure.appendChild(make("figcaption", "image-caption", "Competitive inhibition shifts the curve right: more substrate is needed to reach half of Vmax, but excess substrate can still achieve the same Vmax."));
        ids.stage.appendChild(kineticsFigure);
      }
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
      ? (ids.mode.value === "smart" || ids.mode.value === "due"
        ? "No reviews are due right now. New cards and past mistakes will appear on their scheduled dates."
        : "Choose a different subject or mode. Correct answers return for review on future days.")
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
            nextAt: Number(value.nextAt) || 0,
            intervalDays: Math.max(0, Number(value.intervalDays) || 0),
            easeFactor: Math.min(3.3, Math.max(1.4, Number(value.easeFactor) || 2.3)),
            repetitions: Math.max(0, Number(value.repetitions) || 0),
            lapses: Math.max(0, Number(value.lapses) || 0),
            lastSeconds: Number.isFinite(value.lastSeconds) ? value.lastSeconds : null,
            averageSeconds: Math.max(0, Number(value.averageSeconds) || 0),
            lastRating: ["again","hard","good","easy"].includes(value.lastRating) ? value.lastRating : null,
            speedFactor: Number(value.speedFactor) || 1,
            reviewLog: Array.isArray(value.reviewLog) ? value.reviewLog.slice(-50).map(function (item) {
              return { at:Number(item.at)||0, grade:String(item.grade||""),seconds:Number(item.seconds)||null,
                intervalDays:Number(item.intervalDays)||0,dueAt:Number(item.dueAt)||0 };
            }) : []
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

  // Do not count time spent away from the tab as slow reasoning.
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible" && current && selected === null) {
      cardShownAt = Date.now();
    }
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
    var index = ["A", "B", "C", "D", "E", "F"].indexOf(key);
    if (index === -1 && /^[1-6]$/.test(key)) index = Number(key) - 1;
    if (index >= 0 && current && index < current.options.length) {
      event.preventDefault();
      grade(index);
    }
  });

  if (window.RapidFireCards && typeof window.RapidFireCards.setup === "function") {
    window.RapidFireCards.setup();
  }
  startSession();
})();
