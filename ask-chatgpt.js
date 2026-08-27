(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.AskChatGpt = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function clean(value) {
    return String(value == null ? '' : value).replace(/\s+/g, ' ').trim();
  }

  function buildChatGptPrompt(card) {
    var visitorQuestion = clean(card.visitorQuestion) || 'Please explain this card and why its answer is correct.';
    return [
      'I am studying this medical flashcard:',
      '',
      'Card ' + clean(card.cardNumber),
      'Question: ' + clean(card.question),
      'Answer: ' + clean(card.answer),
      '',
      'My question: ' + visitorQuestion,
      '',
      'Please answer accurately, explain the causal mechanism step by step, define unfamiliar terms, and point out any error or important nuance in the card.'
    ].join('\n');
  }

  async function askChatGpt(options) {
    var prompt = buildChatGptPrompt(options);
    var copyPromise = options.copyText(prompt);
    options.openChat('https://chatgpt.com/');
    await copyPromise;
    return prompt;
  }

  async function copyToClipboard(text, navigatorRef, documentRef) {
    var browserNavigator = navigatorRef || (typeof navigator !== 'undefined' ? navigator : {});
    if (browserNavigator.clipboard && browserNavigator.clipboard.writeText) {
      try {
        await browserNavigator.clipboard.writeText(text);
        return;
      } catch (error) {
        // Some mobile browsers expose the API but deny it; use the legacy path.
      }
    }
    var browserDocument = documentRef || document;
    var textarea = browserDocument.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    browserDocument.body.appendChild(textarea);
    textarea.select();
    try {
      if (!browserDocument.execCommand('copy')) throw new Error('Clipboard copy failed');
    } finally {
      browserDocument.body.removeChild(textarea);
    }
  }

  function setupAskChatGptUI(options) {
    options.button.addEventListener('click', async function (event) {
      event.stopPropagation();
      options.button.disabled = true;
      options.status.textContent = 'Copying prompt…';
      try {
        var card = options.getCurrentCard();
        await (options.ask || askChatGpt)({
          cardNumber: card.cardNumber,
          question: card.question,
          answer: card.answer,
          visitorQuestion: options.input.value,
          copyText: options.copyText,
          openChat: options.openChat
        });
        options.input.value = '';
        options.status.textContent = 'Prompt copied — paste it into ChatGPT.';
      } catch (error) {
        options.status.textContent = 'Could not copy the prompt. Please try again.';
      } finally {
        options.button.disabled = false;
      }
    });
  }

  return {
    buildChatGptPrompt: buildChatGptPrompt,
    askChatGpt: askChatGpt,
    setupAskChatGptUI: setupAskChatGptUI,
    copyToClipboard: copyToClipboard
  };
});
