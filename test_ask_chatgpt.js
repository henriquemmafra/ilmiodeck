const assert = require('node:assert/strict');
const test = require('node:test');

const { buildChatGptPrompt, askChatGpt, setupAskChatGptUI, copyToClipboard } = require('./ask-chatgpt.js');

function clickableElement(initialValue = '') {
  let clickHandler;
  return {
    value: initialValue,
    textContent: '',
    disabled: false,
    addEventListener(type, handler) {
      if (type === 'click') clickHandler = handler;
    },
    click(event = { stopPropagation() {} }) {
      return clickHandler(event);
    }
  };
}

test('buildChatGptPrompt sends the visitor question with only the current card context', () => {
  const prompt = buildChatGptPrompt({
    cardNumber: '292',
    question: 'How does atomoxetine differ mechanistically from stimulants?',
    answer: 'Atomoxetine blocks NET. Methylphenidate blocks DAT and NET.',
    visitorQuestion: 'Where is NET located?'
  });

  assert.equal(prompt, [
    'I am studying this medical flashcard:',
    '',
    'Card 292',
    'Question: How does atomoxetine differ mechanistically from stimulants?',
    'Answer: Atomoxetine blocks NET. Methylphenidate blocks DAT and NET.',
    '',
    'My question: Where is NET located?',
    '',
    'Please answer accurately, explain the causal mechanism step by step, define unfamiliar terms, and point out any error or important nuance in the card.'
  ].join('\n'));
});

test('buildChatGptPrompt falls back to a useful request when the visitor leaves the field empty', () => {
  const prompt = buildChatGptPrompt({
    cardNumber: '1',
    question: 'What is resting membrane potential?',
    answer: 'A steady-state voltage across the membrane.',
    visitorQuestion: '   '
  });

  assert.match(prompt, /My question: Please explain this card and why its answer is correct\./);
});

test('askChatGpt copies the contextual prompt before opening a new ChatGPT tab', async () => {
  const events = [];
  const prompt = await askChatGpt({
    cardNumber: '7',
    question: 'Question text',
    answer: 'Answer text',
    visitorQuestion: 'Why?',
    copyText: async (text) => events.push(['copy', text]),
    openChat: (url) => events.push(['open', url])
  });

  assert.deepEqual(events, [
    ['copy', prompt],
    ['open', 'https://chatgpt.com/']
  ]);
});

test('setupAskChatGptUI sends the typed question with the currently displayed card', async () => {
  const input = clickableElement('Why does NET also affect dopamine in the PFC?');
  const button = clickableElement();
  const status = clickableElement();
  const calls = [];

  setupAskChatGptUI({
    input,
    button,
    status,
    getCurrentCard: () => ({
      cardNumber: '292',
      question: 'How does atomoxetine differ?',
      answer: 'Atomoxetine blocks NET.'
    }),
    copyText: async () => {},
    openChat: () => {},
    ask: async (options) => calls.push(options)
  });

  let stopped = false;
  await button.click({ stopPropagation() { stopped = true; } });

  assert.equal(stopped, true);
  assert.equal(calls.length, 1);
  assert.deepEqual(
    {
      cardNumber: calls[0].cardNumber,
      question: calls[0].question,
      answer: calls[0].answer,
      visitorQuestion: calls[0].visitorQuestion
    },
    {
      cardNumber: '292',
      question: 'How does atomoxetine differ?',
      answer: 'Atomoxetine blocks NET.',
      visitorQuestion: 'Why does NET also affect dopamine in the PFC?'
    }
  );
  assert.equal(status.textContent, 'Prompt copied — paste it into ChatGPT.');
  assert.equal(input.value, '');
  assert.equal(button.disabled, false);
});

test('setupAskChatGptUI keeps the question and reports a clipboard failure', async () => {
  const input = clickableElement('Why?');
  const button = clickableElement();
  const status = clickableElement();

  setupAskChatGptUI({
    input,
    button,
    status,
    getCurrentCard: () => ({ cardNumber: '3', question: 'Q', answer: 'A' }),
    copyText: async () => {},
    openChat: () => {},
    ask: async () => { throw new Error('Clipboard denied'); }
  });

  await button.click();

  assert.equal(status.textContent, 'Could not copy the prompt. Please try again.');
  assert.equal(input.value, 'Why?');
  assert.equal(button.disabled, false);
});

test('copyToClipboard uses the secure clipboard API when available', async () => {
  const copied = [];
  await copyToClipboard('card prompt', {
    clipboard: { writeText: async (text) => copied.push(text) }
  });
  assert.deepEqual(copied, ['card prompt']);
});

test('copyToClipboard falls back to a temporary textarea on older mobile browsers', async () => {
  const events = [];
  const textarea = {
    value: '',
    style: {},
    setAttribute(name, value) { events.push(['attribute', name, value]); },
    select() { events.push(['select']); }
  };
  const documentRef = {
    body: {
      appendChild(node) { events.push(['append', node.value]); },
      removeChild() { events.push(['remove']); }
    },
    createElement(tag) {
      assert.equal(tag, 'textarea');
      return textarea;
    },
    execCommand(command) {
      events.push(['command', command]);
      return true;
    }
  };

  await copyToClipboard('fallback prompt', {}, documentRef);

  assert.deepEqual(events, [
    ['attribute', 'readonly', ''],
    ['append', 'fallback prompt'],
    ['select'],
    ['command', 'copy'],
    ['remove']
  ]);
});

test('copyToClipboard falls back when the secure clipboard API is denied', async () => {
  let command = '';
  const textarea = { value: '', style: {}, setAttribute() {}, select() {} };
  const documentRef = {
    body: { appendChild() {}, removeChild() {} },
    createElement: () => textarea,
    execCommand(value) { command = value; return true; }
  };

  await copyToClipboard(
    'permission fallback',
    { clipboard: { writeText: async () => { throw new Error('denied'); } } },
    documentRef
  );

  assert.equal(command, 'copy');
  assert.equal(textarea.value, 'permission fallback');
});
