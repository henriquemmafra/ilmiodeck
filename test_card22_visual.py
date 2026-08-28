import base64
import gzip
import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parent


def load_deck() -> str:
    encoded = (ROOT / "cards.gz.b64").read_bytes()
    return gzip.decompress(base64.b64decode(encoded)).decode("utf-8")


def card_22(deck: str) -> str:
    match = re.search(
        r'<details class="card"[^>]*><summary><span class="num">022</span>.*?</details>',
        deck,
        flags=re.DOTALL,
    )
    if not match:
        raise AssertionError("Card 022 was not found")
    return match.group(0)


class Card22VisualTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.deck = load_deck()
        cls.card = card_22(cls.deck)

    def test_replaces_generic_crossing_map_with_brown_sequard_map(self):
        self.assertIn('data-diagram="brown-sequard-corticospinal-map"', self.card)
        self.assertNotIn("Major tract crossings", self.card)

    def test_corticospinal_pathway_and_side_are_explicit(self):
        visible_text = re.sub(r"<[^>]+>", " ", self.card)
        visible_text = " ".join(visible_text.split())
        for label in (
            "LEFT MOTOR CORTEX",
            "CAUDAL MEDULLA",
            "PYRAMIDAL DECUSSATION",
            "RIGHT LATERAL CORTICOSPINAL TRACT",
            "RIGHT HEMISECTION",
            "IPSILATERAL RIGHT UMN WEAKNESS",
            "SPASTICITY · HYPERREFLEXIA · BABINSKI",
        ):
            self.assertIn(label, visible_text)

    def test_brown_sequard_comparison_is_complete(self):
        for label in (
            "RIGHT loss of vibration + proprioception",
            "LEFT loss of pain + temperature",
            "starts ~1–2 levels below",
            "LMN signs at lesion level",
        ):
            self.assertIn(label, self.card)

    def test_answer_explains_sequence_not_only_location(self):
        visible_text = re.sub(r"<[^>]+>", " ", self.card)
        visible_text = " ".join(visible_text.split())
        self.assertIn("crossed before entering the spinal cord", visible_text)
        self.assertIn("controls the ipsilateral body", visible_text)


if __name__ == "__main__":
    unittest.main()
