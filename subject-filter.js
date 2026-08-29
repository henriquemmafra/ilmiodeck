(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.DeckSubjectFilter = api;
  if (root.document && typeof api.installSwipeNavigation === 'function') api.installSwipeNavigation(root.document);
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function cardValue(card, key) {
    if (!card) return '';
    if (card.dataset) return String(card.dataset[key] || '').trim();
    return String(card[key] || '').trim();
  }

  function cardMeta(card) {
    return {
      subject: cardValue(card, 'subject'),
      subtopic: cardValue(card, 'subtopic')
    };
  }

  function buildCatalog(cards) {
    var subjects = new Map();
    cards.forEach(function (card) {
      var meta = cardMeta(card);
      if (!meta.subject || !meta.subtopic) return;
      if (!subjects.has(meta.subject)) subjects.set(meta.subject, new Map());
      var subtopics = subjects.get(meta.subject);
      subtopics.set(meta.subtopic, (subtopics.get(meta.subtopic) || 0) + 1);
    });

    return Array.from(subjects.keys()).sort(function (a, b) { return a.localeCompare(b); }).map(function (subject) {
      var subtopics = subjects.get(subject);
      var items = Array.from(subtopics.keys()).sort(function (a, b) { return a.localeCompare(b); }).map(function (subtopic) {
        return { subtopic: subtopic, count: subtopics.get(subtopic) };
      });
      return {
        subject: subject,
        count: items.reduce(function (total, item) { return total + item.count; }, 0),
        subtopics: items
      };
    });
  }

  function filterIndexes(cards, selectedSubject, selectedSubtopic) {
    var subject = selectedSubject || 'all';
    var subtopic = selectedSubtopic || 'all';
    var indexes = [];
    cards.forEach(function (card, index) {
      var meta = cardMeta(card);
      var subjectMatches = subject === 'all' || meta.subject === subject;
      var subtopicMatches = subtopic === 'all' || meta.subtopic === subtopic;
      if (subjectMatches && subtopicMatches) indexes.push(index);
    });
    return indexes;
  }

  function classifySwipe(startX, startY, endX, endY, width) {
    var dx = Number(endX) - Number(startX);
    var dy = Number(endY) - Number(startY);
    var cardWidth = Math.max(1, Number(width) || 360);
    var threshold = Math.max(64, Math.min(110, cardWidth * 0.18));
    if (Math.abs(dx) <= Math.abs(dy) * 1.15) return null;
    if (Math.abs(dx) < threshold) return null;
    return dx < 0 ? 'next' : 'previous';
  }

  function installSwipeNavigation(doc) {
    if (!doc || typeof doc.getElementById !== 'function') return false;
    var stage = doc.getElementById('study-stage');
    var previousBtn = doc.getElementById('prev-card');
    var nextBtn = doc.getElementById('next-card');
    if (!stage || !previousBtn || !nextBtn || typeof stage.addEventListener !== 'function') return false;

    var activePointer = null;
    var startX = 0, startY = 0, currentX = 0, currentY = 0;
    var moved = false, suppressClick = false;
    stage.style.touchAction = 'pan-y';
    stage.style.userSelect = 'none';

    function frame(fn) {
      var raf = (typeof requestAnimationFrame === 'function') ? requestAnimationFrame : function (cb) { return setTimeout(cb, 0); };
      raf(fn);
    }
    function resetVisual(animate) {
      stage.style.transition = animate ? 'transform 160ms ease, opacity 160ms ease' : 'none';
      stage.style.transform = '';
      stage.style.opacity = '';
    }
    function width() {
      var rect = typeof stage.getBoundingClientRect === 'function' ? stage.getBoundingClientRect() : null;
      return rect && rect.width ? rect.width : 360;
    }
    function onPointerDown(event) {
      if (event.button != null && event.button !== 0) return;
      activePointer = event.pointerId;
      startX = currentX = event.clientX;
      startY = currentY = event.clientY;
      moved = false;
      resetVisual(false);
      if (typeof stage.setPointerCapture === 'function' && event.pointerId != null) {
        try { stage.setPointerCapture(event.pointerId); } catch (_) {}
      }
    }
    function onPointerMove(event) {
      if (activePointer == null || (event.pointerId != null && event.pointerId !== activePointer)) return;
      currentX = event.clientX; currentY = event.clientY;
      var dx = currentX - startX, dy = currentY - startY;
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      moved = true;
      if (Math.abs(dx) <= Math.abs(dy)) { resetVisual(false); return; }
      var maxDrag = width() * 0.82;
      var drag = Math.max(-maxDrag, Math.min(maxDrag, dx));
      var rotation = Math.max(-5, Math.min(5, drag / width() * 7));
      stage.style.transform = 'translateX(' + drag + 'px) rotate(' + rotation + 'deg)';
      stage.style.opacity = String(Math.max(0.72, 1 - Math.abs(drag) / width() * 0.28));
      if (event.cancelable && typeof event.preventDefault === 'function') event.preventDefault();
    }
    function navigate(direction) {
      var button = direction === 'next' ? nextBtn : previousBtn;
      if (!button || button.disabled) { resetVisual(true); return; }
      var sign = direction === 'next' ? -1 : 1;
      stage.style.transition = 'transform 140ms ease, opacity 140ms ease';
      stage.style.transform = 'translateX(' + (sign * 110) + '%) rotate(' + (sign * 5) + 'deg)';
      stage.style.opacity = '0';
      setTimeout(function () {
        if (typeof button.click === 'function') button.click();
        stage.style.transition = 'none';
        stage.style.transform = 'translateX(' + (-sign * 24) + 'px)';
        stage.style.opacity = '0.78';
        frame(function () { resetVisual(true); });
      }, 140);
    }
    function finishPointer(event, cancelled) {
      if (activePointer == null || (event.pointerId != null && event.pointerId !== activePointer)) return;
      if (event.clientX != null) currentX = event.clientX;
      if (event.clientY != null) currentY = event.clientY;
      var direction = cancelled ? null : classifySwipe(startX, startY, currentX, currentY, width());
      activePointer = null;
      if (moved) {
        suppressClick = true;
        setTimeout(function () { suppressClick = false; }, 350);
      }
      if (direction) navigate(direction); else resetVisual(true);
    }
    stage.addEventListener('pointerdown', onPointerDown);
    stage.addEventListener('pointermove', onPointerMove);
    stage.addEventListener('pointerup', function (event) { finishPointer(event, false); });
    stage.addEventListener('pointercancel', function (event) { finishPointer(event, true); });
    stage.addEventListener('click', function (event) {
      if (!suppressClick) return;
      suppressClick = false;
      if (typeof event.preventDefault === 'function') event.preventDefault();
      if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
    }, true);
    return true;
  }

  function createFilteredOrder(cards, subject, subtopic, mode, rng) {
    var order = filterIndexes(cards, subject, subtopic);
    if (mode !== 'random') return order;
    var random = rng || Math.random;
    for (var i = order.length - 1; i > 0; i--) {
      var j = Math.floor(random() * (i + 1));
      var tmp = order[i]; order[i] = order[j]; order[j] = tmp;
    }
    return order;
  }

  return {
    buildCatalog: buildCatalog,
    filterIndexes: filterIndexes,
    createFilteredOrder: createFilteredOrder,
    classifySwipe: classifySwipe,
    installSwipeNavigation: installSwipeNavigation
  };
});
