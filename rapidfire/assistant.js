(function (root, factory) {
  "use strict";
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.RapidFireAssistant = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  function promptFor(question, chosenIndex, visitorQuestion) {
    var lines = [
      "I am doing a USMLE Step 1 RapidFire review. Please respond in Brazilian Portuguese, define all abbreviations, and explain mechanisms step by step. Use English medical terms when helpful.",
      "",
      "Current question (" + (question.topic || "Step 1") + "):",
      question.stem,
      "",
      "Options:"
    ];
    (question.options || []).forEach(function (option, index) {
      lines.push(String.fromCharCode(65 + index) + ". " + option);
    });
    if (chosenIndex !== null && chosenIndex !== undefined) {
      lines.push("Correct answer: " + String.fromCharCode(65 + question.answer) + ". " + question.options[question.answer]);
      lines.push("My answer: " + String.fromCharCode(65 + chosenIndex) + ". " + question.options[chosenIndex]);
    } else {
      lines.push("I have not answered this question yet. Please avoid revealing the correct answer; give hints without spoilers.");
    }
    if (chosenIndex !== null && chosenIndex !== undefined) {
      lines.push("Explanation: " + ((question.explanations || [])[question.answer] || ""));
    }
    if (question.teaching && chosenIndex !== null && chosenIndex !== undefined) lines.push("High-yield takeaway: " + question.teaching);
    lines.push("", "My question: " + String(visitorQuestion || "").trim());
    return lines.join("\n");
  }

  function element(tag, cssClass, text) {
    var result = document.createElement(tag);
    if (cssClass) result.className = cssClass;
    if (text !== undefined) result.textContent = text;
    return result;
  }

  function mount(stage, question, chosenIndex) {
    var section = element("section", "chat-assist");
    section.setAttribute("aria-label", "Ask ChatGPT about the current question");
    section.appendChild(element("div", "chat-assist-heading", "Ask ChatGPT about this question"));
    section.appendChild(element("p", "chat-assist-note", "Ask anything. This automatically includes the question, choices, and your answer. ChatGPT opens separately; it does not reply inside RapidFire."));
    var form = element("form");
    var input = element("textarea");
    input.placeholder = "Why is this correct? What is the mechanism? Explain the difference...";
    input.rows = 2;
    input.setAttribute("aria-label", "Your question for ChatGPT");
    input.required = true;
    form.appendChild(input);
    var actions = element("div", "chat-assist-actions");
    var status = element("p", "chat-assist-status", "The context will be prepared for ChatGPT.");
    status.setAttribute("role", "status");
    var button = element("button", "chat-assist-button", "Ask in ChatGPT ↗");
    button.type = "submit";
    actions.appendChild(button);
    actions.appendChild(status);
    form.appendChild(actions);
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var message = input.value.trim();
      if (!message) return;
      var prompt = promptFor(question, chosenIndex, message);
      // Prefill the composer in ChatGPT. User sends there, with no API key on a public page.
      var url = "https://chatgpt.com/?q=" + encodeURIComponent(prompt);
      // Release focus before opening ChatGPT, so iOS does not preserve a zoomed input on return.
      input.blur();
      // Use a direct user gesture so mobile Safari does not block a new tab.
      var newWindow = window.open(url, "_blank");
      if (!newWindow) {
        status.textContent = "Pop-up blocked. Tap the link below to open ChatGPT.";
        var fallback = element("a", "", "Open ChatGPT with my question");
        fallback.href = url;
        fallback.target = "_blank";
        fallback.rel = "noopener noreferrer";
        status.appendChild(document.createTextNode(" "));
        status.appendChild(fallback);
      } else {
        try { newWindow.opener = null; } catch (ignored) {}
        status.textContent = "Question sent to ChatGPT composer; tap Send there.";
      }
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(prompt).catch(function () { /* Prefill remains available. */ });
      }
    });
    section.appendChild(form);
    stage.appendChild(section);
  }

  return { mount: mount, promptFor: promptFor };
});
