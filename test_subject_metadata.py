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
        self.assertEqual(len(self.cards), 432)
        for card in self.cards:
            self.assertRegex(card, r'^<details class="card" data-subject="[^"]+" data-subtopic="[^"]+"[^>]*>')
        numbers = [
            int(re.search(r'<span class="num">(\d+)</span>', card).group(1))
            for card in self.cards
        ]
        self.assertEqual(numbers, list(range(1, 433)))

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

    def test_pain_pharmacology_set_is_complete_and_numbered(self):
        pain = [
            card
            for card in self.cards
            if 'data-expansion="pain-pharmacology-2026"' in card
        ]
        self.assertEqual(len(pain), 33)
        numbers = [
            int(re.search(r'<span class="num">(\d+)</span>', card).group(1))
            for card in pain
        ]
        self.assertEqual(numbers, list(range(400, 433)))
        self.assertTrue(all('data-subject="Pharmacology"' in card for card in pain))
        self.assertEqual(
            {
                re.search(r'data-subtopic="([^"]+)"', card).group(1)
                for card in pain
            },
            {
                "Pain Principles",
                "Opioids",
                "NSAIDs",
                "Acetaminophen",
                "Local Anesthetics",
                "Neuropathic Pain",
                "Muscle Relaxants",
                "Anti-inflammatory Analgesics",
                "Topical Analgesics",
            },
        )

    def test_pain_cards_capture_corrected_high_yield_mechanisms(self):
        pain = "\n".join(
            card
            for card in self.cards
            if 'data-expansion="pain-pharmacology-2026"' in card
        )
        for concept in (
            "high receptor affinity",
            "presynaptic voltage-gated Ca2+ channels",
            "Little tolerance develops to miosis and constipation",
            "afferent arteriole",
            "about 20 weeks",
            "about 30 weeks",
            "N-acetylcysteine",
            "Rumack–Matthew nomogram",
            "20% lipid emulsion",
            "alpha-2-delta",
            "carbamazepine or oxcarbazepine",
            "TRPV1",
            "pentazocine",
            "Tramadol",
            "pseudoallergic",
            "Reye syndrome",
        ):
            self.assertIn(concept, pain)

    def test_pain_cards_include_three_precise_visual_maps(self):
        pain = "\n".join(
            card
            for card in self.cards
            if 'data-expansion="pain-pharmacology-2026"' in card
        )
        for marker in (
            'data-diagram="opioid-synapse-map"',
            'data-diagram="pain-treatment-map"',
            'data-diagram="last-emergency-map"',
        ):
            self.assertEqual(pain.count(marker), 1)


if __name__ == "__main__":
    unittest.main()
