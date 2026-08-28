from html.parser import HTMLParser
from pathlib import Path


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.elements = {}
        self.scripts = []
        self._current_id = None

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        element_id = attributes.get("id")
        if element_id:
            self.elements[element_id] = {"tag": tag, "attrs": attributes, "text": ""}
            self._current_id = element_id
        if tag == "script" and attributes.get("src"):
            self.scripts.append(attributes["src"])

    def handle_endtag(self, tag):
        if self._current_id and self.elements[self._current_id]["tag"] == tag:
            self._current_id = None

    def handle_data(self, data):
        if self._current_id:
            self.elements[self._current_id]["text"] += data


page = Path("index.html").read_text(encoding="utf-8")
parser = PageParser()
parser.feed(page)

panel = parser.elements["ask-chatgpt-panel"]
question = parser.elements["ask-chatgpt-question"]
button = parser.elements["ask-chatgpt-button"]
status = parser.elements["ask-chatgpt-status"]

assert panel["tag"] == "section"
assert "hidden" in panel["attrs"]
assert question["tag"] == "textarea"
assert question["attrs"]["placeholder"] == "What would you like to ask about this card?"
assert button["tag"] == "button"
assert button["attrs"]["type"] == "button"
assert button["text"].strip() == "Ask ChatGPT about this card ↗"
assert status["attrs"]["aria-live"] == "polite"
assert parser.scripts == ["subject-filter.js", "ask-chatgpt.js"]

# The study UI must connect the current rendered card to the tested controller.
assert "window.AskChatGpt.setupAskChatGptUI" in page
assert "askPanel.hidden=false" in page
assert "askPanel.hidden=true" in page

print("Ask ChatGPT page integration checks passed")
