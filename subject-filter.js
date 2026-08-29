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
    return { subject: cardValue(card, 'subject'), subtopic: cardValue(card, 'subtopic') };
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
      return { subject: subject, count: items.reduce(function (total, item) { return total + item.count; }, 0), subtopics: items };
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

  function classifySwipe(startX, startY, endX, endY, width, velocityX) {
    var dx = Number(endX) - Number(startX);
    var dy = Number(endY) - Number(startY);
    var cardWidth = Math.max(1, Number(width) || 360);
    var speed = Math.abs(Number(velocityX) || 0);
    var distanceThreshold = Math.max(42, Math.min(72, cardWidth * 0.12));
    var flickThreshold = 0.55;
    var horizontalEnough = Math.abs(dx) > Math.abs(dy) * 0.72;
    if (!horizontalEnough) return null;
    if (Math.abs(dx) < distanceThreshold && !(speed >= flickThreshold && Math.abs(dx) >= 24)) return null;
    return dx < 0 ? 'next' : 'previous';
  }

  function installSwipeNavigation(doc) {
    if (!doc || typeof doc.getElementById !== 'function') return false;
    var stage = doc.getElementById('study-stage');
    var previousBtn = doc.getElementById('prev-card');
    var nextBtn = doc.getElementById('next-card');
    if (!stage || !previousBtn || !nextBtn || typeof stage.addEventListener !== 'function') return false;

    var activePointer = null;
    var startX = 0, startY = 0, currentX = 0, currentY = 0, startTime = 0;
    var moved = false, suppressClick = false;
    stage.style.touchAction = 'pan-y';
    stage.style.userSelect = 'none';
    stage.style.willChange = 'transform, opacity';

    function frame(fn) {
      var raf = (typeof requestAnimationFrame === 'function') ? requestAnimationFrame : function (cb) { return setTimeout(cb, 0); };
      raf(fn);
    }
    function now(event) {
      return event && Number.isFinite(Number(event.timeStamp)) ? Number(event.timeStamp) : Date.now();
    }
    function resetVisual(animate) {
      stage.style.transition = animate ? 'transform 260ms cubic-bezier(.22,1.35,.36,1), opacity 220ms ease' : 'none';
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
      startTime = now(event);
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
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      moved = true;
      if (Math.abs(dx) <= Math.abs(dy) * 0.68) { resetVisual(false); return; }
      var cardWidth = width();
      var maxDrag = cardWidth * 0.94;
      var drag = Math.max(-maxDrag, Math.min(maxDrag, dx));
      var progress = Math.min(1, Math.abs(drag) / (cardWidth * 0.55));
      var rotation = Math.max(-10, Math.min(10, drag / cardWidth * 13));
      var scale = 1 - progress * 0.018;
      var lift = progress * -3;
      stage.style.transform = 'translate3d(' + drag + 'px,' + lift + 'px,0) rotate(' + rotation + 'deg) scale(' + scale + ')';
      stage.style.opacity = String(Math.max(0.82, 1 - progress * 0.16));
      if (event.cancelable && typeof event.preventDefault === 'function') event.preventDefault();
    }
    function navigate(direction, velocity) {
      var button = direction === 'next' ? nextBtn : previousBtn;
      if (!button || button.disabled) { resetVisual(true); return; }
      var sign = direction === 'next' ? -1 : 1;
      var speed = Math.min(1.6, Math.max(0.55, Math.abs(velocity || 0)));
      var duration = Math.round(205 - (speed - 0.55) * 45);
      var exitDistance = Math.max(width() * 1.35, 520);
      stage.style.transition = 'transform ' + duration + 'ms cubic-bezier(.18,.72,.22,1), opacity ' + duration + 'ms ease-out';
      stage.style.transform = 'translate3d(' + (sign * exitDistance) + 'px,-10px,0) rotate(' + (sign * 13) + 'deg) scale(.97)';
      stage.style.opacity = '0';
      setTimeout(function () {
        if (typeof button.click === 'function') button.click();
        stage.style.transition = 'none';
        stage.style.transform = 'translate3d(' + (-sign * Math.min(72, width() * 0.18)) + 'px,4px,0) rotate(' + (-sign * 2.5) + 'deg) scale(.985)';
        stage.style.opacity = '0.72';
        frame(function () {
          stage.style.transition = 'transform 300ms cubic-bezier(.2,1.28,.32,1), opacity 220ms ease-out';
          stage.style.transform = '';
          stage.style.opacity = '';
        });
      }, duration);
    }
    function finishPointer(event, cancelled) {
      if (activePointer == null || (event.pointerId != null && event.pointerId !== activePointer)) return;
      if (event.clientX != null) currentX = event.clientX;
      if (event.clientY != null) currentY = event.clientY;
      var elapsed = Math.max(16, now(event) - startTime);
      var velocityX = (currentX - startX) / elapsed;
      var direction = cancelled ? null : classifySwipe(startX, startY, currentX, currentY, width(), velocityX);
      activePointer = null;
      if (moved) {
        suppressClick = true;
        setTimeout(function () { suppressClick = false; }, 350);
      }
      if (direction) navigate(direction, velocityX); else resetVisual(true);
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
