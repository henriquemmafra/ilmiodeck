const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');

assert.equal(fs.existsSync('./subject-filter.js'), true, 'subject-filter.js must exist');

const {
  buildCatalog,
  filterIndexes,
  createFilteredOrder
} = require('./subject-filter.js');

const cards = [
  { subject: 'Neuroscience', subtopic: 'Spinal Cord' },
  { subject: 'Psychiatry', subtopic: 'Alcohol Withdrawal' },
  { subject: 'Psychiatry', subtopic: 'AUD Pharmacotherapy' },
  { subject: 'Biochemistry', subtopic: 'Alcohol Metabolism' }
];

test('buildCatalog groups subjects and subtopics with exact counts', () => {
  assert.deepEqual(buildCatalog(cards), [
    {
      subject: 'Biochemistry',
      count: 1,
      subtopics: [{ subtopic: 'Alcohol Metabolism', count: 1 }]
    },
    {
      subject: 'Neuroscience',
      count: 1,
      subtopics: [{ subtopic: 'Spinal Cord', count: 1 }]
    },
    {
      subject: 'Psychiatry',
      count: 2,
      subtopics: [
        { subtopic: 'Alcohol Withdrawal', count: 1 },
        { subtopic: 'AUD Pharmacotherapy', count: 1 }
      ]
    }
  ]);
});

test('filterIndexes supports all subjects, one subject, and one subtopic', () => {
  assert.deepEqual(filterIndexes(cards, 'all', 'all'), [0, 1, 2, 3]);
  assert.deepEqual(filterIndexes(cards, 'Psychiatry', 'all'), [1, 2]);
  assert.deepEqual(filterIndexes(cards, 'Psychiatry', 'AUD Pharmacotherapy'), [2]);
});

test('createFilteredOrder shuffles only cards inside the selected subset', () => {
  const randomValues = [0.1];
  const order = createFilteredOrder(
    cards,
    'Psychiatry',
    'all',
    'random',
    () => randomValues.shift()
  );
  assert.deepEqual(order, [2, 1]);
});

test('invalid or empty selections return an empty subset instead of unrelated cards', () => {
  assert.deepEqual(filterIndexes(cards, 'Cardiology', 'all'), []);
  assert.deepEqual(filterIndexes(cards, 'Psychiatry', 'Sleep'), []);
});
