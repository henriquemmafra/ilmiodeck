import base64
import gzip
import re
import unittest
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parent


def load_cards():
    encoded = (ROOT / "cards.gz.b64").read_bytes()
    deck = gzip.decompress(base64.b64decode(encoded)).decode("utf-8")
    return re.findall(r'<details class="card"[^>]*>.*?</details>', deck, re.DOTALL)


class SubjectMetadataTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.cards = load_cards()

    def test_every_card_has_one_explicit_subject_and_subtopic(self):
        self.assertEqual(len(self.cards), 399)
        for card in self.cards:
            self.assertRegex(card, r'^<details class="card" data-subject="[^"]+" data-subtopic="[^"]+"[^>]*>')

    def test_subjects_use_the_curated_catalog(self):
        allowed = {
            "Anatomy",
            "Biochemistry",
            "Cardiology",
            "Cell Biology",
            "Dermatology",
            "Embryology",
            "Genetics",
            "Hematology",
            "Immunology",
            "Microbiology",
            "Neuroscience",
            "Pathology",
            "Pharmacology",
            "Psychiatry",
            "Renal",
            "Respiratory",
            "Rheumatology",
        }
        subjects = {
            re.search(r'data-subject="([^"]+)"', card).group(1)
            for card in self.cards
        }
        self.assertEqual(subjects - allowed, set())
        self.assertIn("Psychiatry", subjects)
        self.assertIn("Cell Biology", subjects)
        self.assertIn("Biochemistry", subjects)
        self.assertIn("Neuroscience", subjects)

    def test_first_psychiatry_set_is_complete_and_numbered(self):
        psychiatry = [card for card in self.cards if 'data-subject="Psychiatry"' in card]
        self.assertEqual(len(psychiatry), 20)
        numbers = [
            int(re.search(r'<span class="num">(\d+)</span>', card).group(1))
            for card in psychiatry
        ]
        self.assertEqual(numbers, list(range(380, 400)))

        subtopics = Counter(
            re.search(r'data-subtopic="([^"]+)"', card).group(1)
            for card in psychiatry
        )
        self.assertEqual(
            set(subtopics),
            {
                "Alcohol Use Disorder",
                "Alcohol Neurobiology",
                "Alcohol Withdrawal",
                "AUD Pharmacotherapy",
                "Alcohol Complications",
                "Alcohol Screening",
                "Prenatal Alcohol Exposure",
            },
        )

    def test_psychiatry_cards_capture_the_high_yield_mechanisms(self):
        psychiatry = "\n".join(
            card for card in self.cards if 'data-subject="Psychiatry"' in card
        )
        for concept in (
            "mu-opioid receptor antagonist",
            "glutamate homeostasis",
            "aldehyde dehydrogenase",
            "6–24 hours",
            "12–48 hours",
            "48–96 hours",
            "thiamine before glucose",
            "AST:ALT ratio is often &gt;2",
            "AUDIT-C",
            "no known safe amount",
        ):
            self.assertIn(concept, psychiatry)

    def test_meralgia_paresthetica_is_cataloged_as_peripheral_neuroscience(self):
        card = next(
            card
            for card in self.cards
            if '<span class="num">332</span>' in card
        )
        self.assertIn('data-subject="Neuroscience"', card)
        self.assertIn('data-subtopic="Peripheral Nerves"', card)

    def test_subtopic_catalog_normalizes_acronyms_and_synonyms(self):
        subtopics = {
            re.search(r'data-subtopic="([^"]+)"', card).group(1)
            for card in self.cards
        }
        for expected in (
            "G6PD Deficiency",
            "Natural Killer Cells",
            "Antigen-Presenting Cells",
            "Chronic Granulomatous Disease",
            "Acute Myeloid Leukemia",
            "Type II Hypersensitivity",
            "RAS/MAPK Syndromes",
            "Innate Immunity",
            "Purine Metabolism",
        ):
            self.assertIn(expected, subtopics)
        for duplicate_or_malformed in (
            "G6Pd",
            "Nk",
            "Apc",
            "Cgd",
            "Aml",
            "Type Ii",
            "Ras Mapk",
            "RASopathies",
            "Innate",
            "Purines",
        ):
            self.assertNotIn(duplicate_or_malformed, subtopics)


if __name__ == "__main__":
    unittest.main()
