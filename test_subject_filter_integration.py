from html.parser import HTMLParser
from pathlib import Path


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.elements = {}
        self.scripts = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        element_id = attributes.get("id")
        if element_id:
            self.elements[element_id] = {"tag": tag, "attrs": attributes}
        if tag == "script" and attributes.get("src"):
            self.scripts.append(attributes["src"])


page = Path("index.html").read_text(encoding="utf-8")
parser = PageParser()
parser.feed(page)

assert parser.elements["subject-select"]["tag"] == "select"
assert parser.elements["subtopic-select"]["tag"] == "select"
assert parser.elements["subject-select"]["attrs"]["aria-label"] == "Study subject"
assert parser.elements["subtopic-select"]["attrs"]["aria-label"] == "Study subtopic"
assert parser.scripts == ["subject-filter.js", "ask-chatgpt.js"]

for integration_point in (
    "window.DeckSubjectFilter.buildCatalog",
    "window.DeckSubjectFilter.createFilteredOrder",
    "populateSubjectSelect",
    "populateSubtopicSelect",
    "subjectSelect.addEventListener('change'",
    "subtopicSelect.addEventListener('change'",
):
    assert integration_point in page

assert "MASTER DECK · 399 CARDS" not in page
assert "deckKicker.textContent" in page
assert "No cards match this selection." in page

print("Subject filter page integration checks passed")
