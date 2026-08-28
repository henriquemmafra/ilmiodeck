(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.DeckSubjectFilter = api;
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
    createFilteredOrder: createFilteredOrder
  };
});
