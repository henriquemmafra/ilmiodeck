(function () {
  "use strict";
  var all = Array.isArray(window.RAPIDFIRE_BRAIN_TUMORS) ? window.RAPIDFIRE_BRAIN_TUMORS : [];
  var size = 4;
  var mode = document.getElementById("match-mode");
  var board = document.getElementById("board");
  var status = document.getElementById("feedback");
  var next = document.getElementById("next-set");
  var progress = document.getElementById("progress-bar");
  var setLabel = document.getElementById("round");
  var pairsLabel = document.getElementById("pairs");
  var firstTryLabel = document.getElementById("first-try");
  var order = [], current = [], shuffledClues = [];
  var setIndex = 0, selected = null, matched = new Set(), missed = new Set(), firstTry = 0, completed = false;
  var pointer = null, ghost = null, hovered = null, suppressSourceClicksUntil = 0;
  var storageKey = "rapidfire-brain-tumors-match-v1";

  function shuffle(items) {
    var copy = items.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i]; copy[i] = copy[j]; copy[j] = temp;
    }
    return copy;
  }
  function node(tag, cls, text) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text !== undefined) el.textContent = text;
    return el;
  }
  function announce(text, kind) {
    status.textContent = text;
    status.className = "feedback" + (kind ? " " + kind : "");
  }
  function setCounters() {
    setLabel.textContent = Math.min(setIndex + 1, Math.ceil(all.length / size)) + " / " + Math.ceil(all.length / size);
    pairsLabel.textContent = matched.size + " / " + current.length;
    firstTryLabel.textContent = String(firstTry);
    progress.style.width = (100 * (setIndex * size + matched.size) / Math.max(1, all.length)) + "%";
  }
  function start() {
    completed = false;
    cleanupDrag();
    order = shuffle(all);
    setIndex = 0;
    firstTry = 0;
    startSet();
  }
  function startSet() {
    matched = new Set();
    missed = new Set();
    selected = null;
    current = order.slice(setIndex * size, setIndex * size + size);
    shuffledClues = shuffle(current);
    next.hidden = true;
    announce("Choose a tumor, then drag it onto the correct clue (or tap both cards).");
    render();
  }
  function selectTumor(id) {
    if (matched.has(id)) return;
    selected = selected === id ? null : id;
    paintSelection();
    if (selected) announce("Selected: " + getCase(id).name + ". Now choose its matching clue.");
  }
  function getCase(id) { return current.find(function (item) { return item.id === id; }); }
  function tryMatch(sourceId, targetId) {
    var item = getCase(sourceId);
    if (!item || matched.has(sourceId) || matched.has(targetId)) return;
    if (sourceId !== targetId) {
      selected = sourceId;
      paintSelection();
      missed.add(sourceId);
      announce("Not a match. Try another clue for " + item.name + ".", "bad");
      return;
    }
    if (!missed.has(sourceId)) firstTry++;
    matched.add(sourceId);
    selected = null;
    announce("Correct — " + item.pearl, "good");
    render();
    if (matched.size === current.length) {
      var isFinal = (setIndex + 1) * size >= all.length;
      next.hidden = false;
      next.textContent = isFinal ? "Finish game →" : "Next set →";
      if (!isFinal) announce("Set complete! " + item.pearl, "good");
    }
  }
  function paintSelection() {
    board.querySelectorAll(".match-source").forEach(function (el) {
      el.classList.toggle("is-selected", el.dataset.id === selected);
      el.setAttribute("aria-pressed", el.dataset.id === selected ? "true" : "false");
    });
  }
  function render() {
    board.replaceChildren();
    var left = node("div", "match-column");
    var right = node("div", "match-column");
    current.forEach(function (item) {
      var btn = node("button", "match-source" + (matched.has(item.id) ? " is-matched" : ""), item.name);
      btn.type = "button";
      btn.dataset.id = item.id;
      btn.disabled = matched.has(item.id);
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("aria-label", item.name + ". Select or drag to the matching clue.");
      btn.addEventListener("click", function () {
        if (Date.now() < suppressSourceClicksUntil) return;
        selectTumor(item.id);
      });
      btn.addEventListener("pointerdown", beginDrag);
      left.appendChild(btn);
    });
    shuffledClues.forEach(function (item) {
      var btn = node("button", "match-target" + (matched.has(item.id) ? " is-matched" : ""), item[mode.value]);
      btn.type = "button";
      btn.dataset.id = item.id;
      btn.disabled = matched.has(item.id);
      btn.setAttribute("aria-label", "Match clue: " + item[mode.value]);
      btn.addEventListener("click", function () {
        if (!selected) {
          announce("Choose a tumor from the left column first.");
          return;
        }
        tryMatch(selected, item.id);
      });
      right.appendChild(btn);
    });
    board.append(left, right);
    paintSelection();
    setCounters();
  }
  function targetAt(x, y) {
    var el = document.elementFromPoint(x, y);
    var target = el && el.closest ? el.closest(".match-target") : null;
    return target && !target.disabled ? target : null;
  }
  function clearHover() {
    if (hovered) hovered.classList.remove("is-hovered");
    hovered = null;
  }
  function cleanupDrag() {
    clearHover();
    if (pointer && pointer.source) pointer.source.classList.remove("is-dragging");
    if (ghost) ghost.remove();
    ghost = null;
    pointer = null;
  }
  function beginDrag(event) {
    if (event.button > 0 || event.currentTarget.disabled || pointer) return;
    pointer = {
      id: event.pointerId, source: event.currentTarget, tumorId: event.currentTarget.dataset.id,
      x: event.clientX, y: event.clientY, moved: false
    };
    try { event.currentTarget.setPointerCapture(event.pointerId); } catch (error) {}
  }
  window.addEventListener("pointermove", function (event) {
    if (!pointer || event.pointerId !== pointer.id) return;
    if (!pointer.moved && Math.hypot(event.clientX - pointer.x, event.clientY - pointer.y) < 9) return;
    if (!pointer.moved) {
      pointer.moved = true;
      pointer.source.classList.add("is-dragging");
      ghost = node("div", "drag-ghost", getCase(pointer.tumorId).name);
      document.body.appendChild(ghost);
    }
    ghost.style.left = (event.clientX + 12) + "px";
    ghost.style.top = (event.clientY - 24) + "px";
    var target = targetAt(event.clientX, event.clientY);
    if (target !== hovered) {
      clearHover();
      hovered = target;
      if (hovered) hovered.classList.add("is-hovered");
    }
  });
  window.addEventListener("pointerup", function (event) {
    if (!pointer || pointer.id !== event.pointerId) return;
    var dragged = pointer.moved;
    var fromId = pointer.tumorId;
    var target = dragged ? targetAt(event.clientX, event.clientY) : null;
    try { pointer.source.releasePointerCapture(pointer.id); } catch (error) {}
    cleanupDrag();
    if (dragged) {
      suppressSourceClicksUntil = Date.now() + 350;
      event.preventDefault();
      if (target) tryMatch(fromId, target.dataset.id);
      else announce("Drop onto a clue in the right column, or tap a tumor and then its clue.");
    }
  });
  window.addEventListener("pointercancel", function (event) {
    if (pointer && event.pointerId === pointer.id) cleanupDrag();
  });
  next.addEventListener("click", function () {
    if (completed) { start(); return; }
    if (matched.size !== current.length) return;
    if ((setIndex + 1) * size >= all.length) {
      completed = true;
      board.replaceChildren();
      board.appendChild(node("p", "completion", "All 12 tumors matched. " + firstTry + " of " + all.length + " correct on the first try."));
      try {
        var record = JSON.parse(localStorage.getItem(storageKey) || "{}");
        var best = Number(record[mode.value]) || 0;
        record[mode.value] = Math.max(best, firstTry);
        localStorage.setItem(storageKey, JSON.stringify(record));
      } catch (error) {}
      announce("Round complete. Switch categories to test locations or clinical clues.");
      next.hidden = false;
      next.textContent = "Play again →";
      return;
    }
    setIndex++;
    startSet();
  });
  mode.addEventListener("change", start);
  document.getElementById("restart").addEventListener("click", start);
  if (all.length) start();
  else announce("Tumor data could not be loaded. Refresh the page.", "bad");
})();