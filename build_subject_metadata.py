#!/usr/bin/env python3
"""Curate subject metadata and add the first Psychiatry card set."""

import base64
import gzip
import html
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
DECK_PATH = ROOT / "cards.gz.b64"
EXPANSION = "psychiatry-alcohol-2026"


def clean_label(value: str) -> str:
    replacements = {
        "AML": "Acute Myeloid Leukemia",
        "APC": "Antigen-Presenting Cells",
        "CGD": "Chronic Granulomatous Disease",
        "G6PD": "G6PD Deficiency",
        "Innate": "Innate Immunity",
        "NMJ": "Neuromuscular Junction",
        "NK": "Natural Killer Cells",
        "CNS": "CNS Development",
        "PPP": "Pentose Phosphate Pathway",
        "Purines": "Purine Metabolism",
        "RBC": "Red Blood Cells",
        "RASopathy": "RAS/MAPK Syndromes",
        "RAS_MAPK": "RAS/MAPK Syndromes",
        "Type_II": "Type II Hypersensitivity",
    }
    return replacements.get(value, value.replace("_", " ").title())


def first_tag(tags: str, root: str, fallback: str) -> str:
    for tag in tags.split():
        if tag.startswith(root + "::"):
            return clean_label(tag.split("::", 1)[1])
    return fallback


def classify(number: int, tags: str) -> tuple[str, str]:
    if 1 <= number <= 3:
        return "Cell Biology", "Intracellular Transport"
    if 4 <= number <= 5:
        return "Cell Biology", "Protein Synthesis"
    if 6 <= number <= 12:
        return "Neuroscience", "Electrophysiology"
    if 13 <= number <= 21:
        return "Neuroscience", "Major Tracts"
    if 22 <= number <= 29:
        return "Neuroscience", "Spinal Cord"
    if 30 <= number <= 50:
        return "Neuroscience", "Brainstem"
    if 51 <= number <= 57:
        return "Neuroscience", "Cranial Nerves"
    if 58 <= number <= 62:
        return "Pharmacology", "Neuromuscular Blockers"
    if 63 <= number <= 67:
        return "Neuroscience", "Neuromuscular Junction"
    if 68 <= number <= 69:
        return "Neuroscience", "Neurotransmission"
    if 70 <= number <= 72:
        return "Pharmacology", "GABAergic Drugs"
    if 73 <= number <= 74:
        return "Pharmacology", "Neuropathic Pain"
    if 75 <= number <= 76:
        return "Pharmacology", "Autonomic Pharmacology"
    if 77 <= number <= 78:
        return "Pharmacology", "Opioids"
    if 79 <= number <= 84:
        return "Neuroscience", "Sleep Physiology"
    if 85 <= number <= 88:
        return "Neuroscience", "Autonomic Nervous System"
    if 89 <= number <= 92:
        return "Neuroscience", "Movement Disorders"
    if number == 93:
        return "Cardiology", "Electrophysiology"
    if number == 94:
        return "Pharmacology", "Cardiovascular Pharmacology"
    if 95 <= number <= 100:
        return "Neuroscience", "Motor System"
    if 101 <= number <= 104:
        return "Neuroscience", "Vision and Cortex"
    if 105 <= number <= 106:
        return "Neuroscience", "Autonomic Nervous System"
    if 107 <= number <= 109:
        return "Pharmacology", "Autonomic Pharmacology"
    if 110 <= number <= 130:
        return "Genetics", first_tag(tags, "Genetics", "General Genetics")
    if 131 <= number <= 149:
        return "Biochemistry", first_tag(tags, "Biochem", "Metabolism")
    if number == 150:
        return "Pharmacology", "Parkinson Drugs"
    if 151 <= number <= 167:
        return "Biochemistry", first_tag(tags, "Biochem", "Metabolism")
    if 168 <= number <= 178 or 180 <= number <= 192:
        return "Immunology", first_tag(tags, "Immunology", "Innate Immunity")
    if number == 179 or 193 <= number <= 207:
        return "Microbiology", first_tag(tags, "Micro", "Microbial Pathogenesis")
    if 208 <= number <= 214:
        return "Embryology", first_tag(tags, "Embryology", "General Embryology")
    if 215 <= number <= 216 or 231 <= number <= 233:
        return "Pharmacology", "Autonomic Pharmacology"
    if 217 <= number <= 219:
        return "Pharmacology", "Pain Pharmacology"
    if 220 <= number <= 222:
        return "Pharmacology", "Antiseizure and Sedative Drugs"
    if 223 <= number <= 225:
        return "Pharmacology", "ADHD Pharmacotherapy"
    if number == 226 or 234 <= number <= 240:
        return "Pharmacology", "Cardiovascular and Renal Drugs"
    if 227 <= number <= 230:
        return "Pharmacology", "Endocrine Pharmacology"
    if 241 <= number <= 244:
        return "Pathology", first_tag(tags, "Path", "Neoplasia")
    if 245 <= number <= 251:
        return "Genetics", first_tag(tags, "Genetics", "Genetic Syndromes")
    if number == 252:
        return "Neuroscience", "Intracranial Pressure"
    if number == 253:
        return "Respiratory", "Ventilation"
    if 254 <= number <= 258:
        return "Neuroscience", "Sleep Physiology"
    if 259 <= number <= 270:
        return "Microbiology", "CNS Infections"
    if 271 <= number <= 280:
        return "Pharmacology", "Antiseizure Drugs"
    if 281 <= number <= 289:
        return "Neuroscience", "Brainstem Localization"
    if 290 <= number <= 292:
        return "Pharmacology", "ADHD Pharmacotherapy"
    if 293 <= number <= 296:
        return "Neuroscience", "Peripheral Nerves"
    if 297 <= number <= 301:
        return "Microbiology", "Microbial Toxins"
    if 302 <= number <= 305:
        return "Neuroscience", "Peripheral Neuropathy and Ataxia"
    if 306 <= number <= 308:
        return "Embryology", "CNS Development"
    if number == 309:
        return "Rheumatology", "Inflammatory Myopathy"
    if number == 310:
        return "Immunology", "Innate Immunity"
    if number == 311:
        return "Neuroscience", "Circadian Rhythm"
    if number == 312:
        return "Pathology", "Brain Tumors"
    if 313 <= number <= 314:
        return "Pharmacology", "Antidepressants"
    if 315 <= number <= 316 or 318 <= number <= 319:
        return "Genetics", "Ataxia-Telangiectasia"
    if number == 317 or number == 326:
        return "Immunology", "Immunodeficiency"
    if 320 <= number <= 325:
        return "Neuroscience", "Cerebellum"
    if number == 327:
        return "Genetics", "Inheritance Patterns"
    if number == 328:
        return "Biochemistry", "Purine Metabolism"
    if number == 332:
        return "Neuroscience", "Peripheral Nerves"
    if 329 <= number <= 342:
        return "Biochemistry", "Lysosomal Storage Diseases"
    if 343 <= number <= 345:
        return "Neuroscience", "Brainstem Posturing"
    if 346 <= number <= 350:
        return "Genetics", "Genetic Syndromes"
    if 351 <= number <= 355 or number == 379:
        return "Dermatology", "Drug Eruptions"
    if 356 <= number <= 357 or 360 <= number <= 361:
        return "Immunology", first_tag(tags, "Immunology", "Hypersensitivity")
    if 358 <= number <= 359:
        return "Hematology", first_tag(tags, "Heme", "Hematopathology")
    if 362 <= number <= 367:
        return "Neuroscience", "Narcolepsy"
    if 368 <= number <= 369:
        return "Pharmacology", "Sedative-Hypnotics"
    if 370 <= number <= 374:
        return "Pathology", "Neuro-oncology"
    if number == 375:
        return "Anatomy", "Spine"
    if number == 376:
        return "Renal", "Renal Physiology"
    if number == 377:
        return "Biochemistry", "Lysosomal Storage Diseases"
    if number == 378:
        return "Neuroscience", "Peripheral Nerves"
    raise ValueError(f"No curated subject for card {number}")


def visual(title: str, svg: str, caption: str, marker: str) -> str:
    return (
        f'<div class="visual-box" data-diagram="{marker}">'
        f'<div class="visual-title">{title}</div>{svg}'
        f'<div class="visual-caption">{caption}</div></div>'
    )


NEUROADAPTATION_VISUAL = visual(
    "Visual memory map · Why withdrawal is hyperexcitable",
    '''<svg aria-label="Acute alcohol enhances GABA and inhibits NMDA; chronic exposure produces the opposite compensatory adaptation, so abrupt cessation causes unopposed excitation" role="img" viewbox="0 0 900 330">
<text class="vlabel" x="34" y="32">ACUTE ALCOHOL</text><rect class="vmuted" height="104" rx="22" width="245" x="34" y="52"></rect><text class="vsmall" x="62" y="83">↑ GABA-A inhibitory effect</text><text class="vsmall" x="62" y="112">↓ NMDA glutamate effect</text><text class="vtiny" x="62" y="139">sedation · ataxia · impaired memory</text>
<path d="M282 105 L365 105" stroke="#63a4ff" stroke-width="7"></path><polygon fill="#63a4ff" points="382,105 361,94 361,116"></polygon><rect class="vmuted" height="104" rx="22" width="245" x="382" y="52"></rect><text class="vlabel" x="425" y="83">CHRONIC ADAPTATION</text><text class="vsmall" x="413" y="112">↓ GABA responsiveness</text><text class="vsmall" x="413" y="139">↑ NMDA signaling</text>
<path d="M627 105 L704 105" stroke="#ff6b6b" stroke-width="7"></path><polygon fill="#ff6b6b" points="721,105 700,94 700,116"></polygon><rect fill="#321f29" height="104" rx="22" stroke="#ff6b6b" stroke-width="2" width="155" x="721" y="52"></rect><text class="vlabel" x="744" y="84">STOP SUDDENLY</text><text class="vsmall" x="746" y="113">unopposed CNS</text><text class="vsmall" x="754" y="139">excitation</text>
<rect fill="#172438" height="105" rx="22" stroke="#f6a04d" stroke-width="2" width="842" x="34" y="192"></rect><text class="vlabel" x="66" y="225">WITHDRAWAL = TREMOR + AUTONOMIC HYPERACTIVITY + SEIZURES ± DELIRIUM</text><text class="vsmall" x="66" y="258">The compensatory state was useful only while alcohol was present.</text><text class="vtiny" x="66" y="282">Remove alcohol abruptly → too little inhibition + too much excitation.</text></svg>''',
    "<b>Causal anchor:</b> dependence is neuroadaptation; withdrawal reveals the adaptation after alcohol disappears.",
    "alcohol-neuroadaptation-map",
)


WITHDRAWAL_TIMELINE_VISUAL = visual(
    "Visual memory map · Alcohol withdrawal timeline",
    '''<svg aria-label="Alcohol withdrawal timeline from minor symptoms through hallucinosis and seizures to delirium tremens" role="img" viewbox="0 0 900 280"><path d="M70 130 L830 130" stroke="#53657d" stroke-width="7"></path><polygon fill="#53657d" points="850,130 825,116 825,144"></polygon>
<circle cx="150" cy="130" fill="#63a4ff" r="14"></circle><text class="vlabel" x="78" y="50">6–24 HOURS</text><text class="vsmall" x="76" y="78">minor withdrawal</text><text class="vtiny" x="76" y="101">tremor · anxiety · insomnia</text><text class="vtiny" x="76" y="170">tachycardia · hypertension</text>
<circle cx="380" cy="130" fill="#f6a04d" r="14"></circle><text class="vlabel" x="300" y="50">12–48 HOURS</text><text class="vsmall" x="295" y="78">hallucinosis ± seizures</text><text class="vtiny" x="294" y="101">hallucinosis: clear sensorium</text><text class="vtiny" x="294" y="170">generalized tonic-clonic seizures</text>
<circle cx="675" cy="130" fill="#ff6b6b" r="14"></circle><text class="vlabel" x="596" y="50">48–96 HOURS</text><text class="vsmall" x="584" y="78">delirium tremens</text><text class="vtiny" x="563" y="101">delirium + severe autonomic instability</text><text class="vtiny" x="576" y="170">confusion · agitation · fever</text>
<rect fill="#252334" height="52" rx="16" stroke="#cf83d4" stroke-width="2" width="760" x="70" y="205"></rect><text class="vsmall" x="115" y="237">Timings overlap: identify the syndrome by cognition, autonomic severity, and complications.</text></svg>''',
    "<b>Key discriminator:</b> hallucinosis preserves attention and orientation; delirium tremens does not.",
    "alcohol-withdrawal-timeline",
)


AUD_MEDICATION_VISUAL = visual(
    "Visual memory map · Three FDA-approved AUD medications",
    '''<svg aria-label="Comparison of naltrexone, acamprosate, and disulfiram for alcohol use disorder" role="img" viewbox="0 0 900 350">
<rect fill="#172438" height="270" rx="24" stroke="#63a4ff" stroke-width="2" width="260" x="34" y="40"></rect><text class="vlabel" x="96" y="73">NALTREXONE</text><text class="vsmall" x="61" y="108">μ-opioid receptor antagonist</text><text class="vsmall" x="61" y="140">↓ reward + ↓ heavy drinking</text><text class="vtiny" x="61" y="174">can start while still drinking</text><text class="vtiny" x="61" y="204">avoid: current opioids</text><text class="vtiny" x="61" y="228">avoid: acute hepatitis / liver failure</text><text class="vtiny" x="61" y="272">oral or monthly injection</text>
<rect fill="#172438" height="270" rx="24" stroke="#58c99b" stroke-width="2" width="260" x="320" y="40"></rect><text class="vlabel" x="388" y="73">ACAMPROSATE</text><text class="vsmall" x="347" y="108">modulates glutamate homeostasis</text><text class="vsmall" x="347" y="140">maintains abstinence</text><text class="vtiny" x="347" y="174">best after abstinence achieved</text><text class="vtiny" x="347" y="204">renally cleared</text><text class="vtiny" x="347" y="228">avoid: severe renal impairment</text><text class="vtiny" x="347" y="272">does not cause aversion</text>
<rect fill="#172438" height="270" rx="24" stroke="#f6a04d" stroke-width="2" width="260" x="606" y="40"></rect><text class="vlabel" x="678" y="73">DISULFIRAM</text><text class="vsmall" x="633" y="108">inhibits aldehyde dehydrogenase</text><text class="vsmall" x="633" y="140">acetaldehyde accumulates</text><text class="vtiny" x="633" y="174">aversive reaction if alcohol used</text><text class="vtiny" x="633" y="204">does not reduce craving</text><text class="vtiny" x="633" y="228">needs motivation / supervision</text><text class="vtiny" x="633" y="272">abstinence required before first dose</text></svg>''',
    "<b>Choose by goal and contraindications:</b> reduce reward, maintain abstinence, or create aversion.",
    "aud-medication-comparison",
)


def make_card(number: int, question: str, answer: str, why: str, subtopic: str, tags: str, extra: str = "") -> str:
    return (
        f'<details class="card" data-subject="Psychiatry" data-subtopic="{html.escape(subtopic)}" '
        f'data-expansion="{EXPANSION}"><summary><span class="num">{number:03d}</span>{question}</summary>'
        f'<div class="ans"><b>Answer:</b> <b>{answer}</b><br><br><b>Why:</b> {why}'
        f'{extra}<div class="tags">Psychiatry::{subtopic.replace(" ", "_")} {tags}</div></div></details>'
    )


PSYCHIATRY_CARDS = [
    make_card(380, "What DSM-5-TR pattern defines alcohol use disorder, and how is severity graded?", "At least 2 of 11 criteria occurring within a 12-month period.", "The criteria capture impaired control, social impairment, risky use, and pharmacologic adaptation. Severity is mild with 2–3 criteria, moderate with 4–5, and severe with 6 or more. The diagnosis depends on the maladaptive clinical pattern, not merely the quantity consumed on one occasion.", "Alcohol Use Disorder", "Diagnosis High_Yield"),
    make_card(381, "What are alcohol's major acute effects on GABA, glutamate, and dopamine signaling?", "It enhances GABA-A inhibition, inhibits NMDA glutamate signaling, and increases mesolimbic dopamine release.", "More inhibition plus less excitation produces sedation, anxiolysis, ataxia, and impaired memory; dopamine in the reward pathway reinforces repeated use.", "Alcohol Neurobiology", "Mechanism High_Yield"),
    make_card(382, "Why does abrupt cessation after chronic heavy alcohol use cause CNS hyperexcitability?", "Chronic exposure reduces GABAergic responsiveness and increases NMDA-mediated excitation; removing alcohol unmasks that compensatory state.", "The brain adapted to a persistent depressant. Without alcohol, inhibitory tone is insufficient and excitatory tone is excessive, producing tremor, autonomic hyperactivity, hallucinations, seizures, and potentially delirium.", "Alcohol Neurobiology", "Mechanism High_Yield", NEUROADAPTATION_VISUAL),
    make_card(383, "What is the classic timeline of alcohol withdrawal?", "Minor symptoms begin at 6–24 hours; hallucinosis and generalized seizures usually occur at 12–48 hours; delirium tremens usually occurs at 48–96 hours.", "These windows overlap, so the syndrome is more important than an exact hour: tremor and autonomic activation appear early, seizures and hallucinosis follow, and delirium with severe autonomic instability is the late life-threatening form.", "Alcohol Withdrawal", "Timeline Pattern_Recognition", WITHDRAWAL_TIMELINE_VISUAL),
    make_card(384, "How do alcoholic hallucinosis and delirium tremens differ?", "Hallucinosis causes hallucinations with a clear sensorium; delirium tremens causes delirium, disorientation, and marked autonomic instability.", "Both may include vivid visual hallucinations, but impaired attention and fluctuating cognition point to delirium tremens. Fever, severe hypertension, tachycardia, and agitation reinforce that diagnosis.", "Alcohol Withdrawal", "Comparison High_Yield"),
    make_card(385, "What is first-line pharmacotherapy for clinically significant alcohol withdrawal?", "Benzodiazepines, dosed according to severity and monitoring.", "They restore GABA-A-mediated inhibitory tone, reduce seizures, and prevent progression to delirium tremens. Phenobarbital can be an alternative or adjunct in closely monitored settings with experienced clinicians; antipsychotics are not adequate monotherapy.", "Alcohol Withdrawal", "Treatment Mechanism"),
    make_card(386, "Which benzodiazepines are preferred when alcohol withdrawal occurs with significant liver dysfunction?", "Lorazepam or oxazepam.", "They undergo glucuronidation and lack long-lived active oxidative metabolites, so their clearance is less dependent on impaired hepatic phase I metabolism than diazepam or chlordiazepoxide.", "Alcohol Withdrawal", "Pharmacology Liver_Disease High_Yield"),
    make_card(387, "Why are clonidine or beta-blockers not sufficient treatment for alcohol withdrawal?", "They can reduce adrenergic signs but do not correct the GABA/glutamate imbalance or reliably prevent seizures and delirium.", "A lower heart rate or blood pressure can cosmetically improve the vital signs while dangerous CNS hyperexcitability persists. They are adjuncts, not substitutes for appropriate withdrawal pharmacotherapy.", "Alcohol Withdrawal", "Treatment Exam_Trap"),
    make_card(388, "How does naltrexone treat alcohol use disorder?", "It is a mu-opioid receptor antagonist that reduces alcohol's rewarding reinforcement, craving, and heavy-drinking days.", "Endogenous opioid signaling contributes to alcohol-induced reward and downstream mesolimbic dopamine release. Blocking that signal makes drinking less reinforcing. Oral and monthly extended-release injectable formulations are available.", "AUD Pharmacotherapy", "Naltrexone Mechanism High_Yield"),
    make_card(389, "When should naltrexone be avoided?", "Avoid it with current opioid use or physiologic opioid dependence and in acute hepatitis or liver failure.", "Opioid receptor blockade can precipitate abrupt withdrawal and prevents opioid analgesia. Hepatic risk requires clinical assessment. Unlike acamprosate or disulfiram, naltrexone can be initiated even if the patient has not yet achieved complete abstinence.", "AUD Pharmacotherapy", "Naltrexone Contraindications"),
    make_card(390, "How does acamprosate help alcohol use disorder?", "It modulates glutamate homeostasis and helps maintain abstinence after alcohol cessation.", "It is most useful once abstinence has been achieved, when persistent neuroadaptation can generate negative craving and discomfort. It is renally eliminated and should be avoided in severe renal impairment.", "AUD Pharmacotherapy", "Acamprosate Mechanism High_Yield"),
    make_card(391, "How does disulfiram deter alcohol use?", "It inhibits aldehyde dehydrogenase, so drinking causes acetaldehyde accumulation and an aversive reaction.", "Flushing, throbbing headache, nausea, vomiting, palpitations, and hypotension discourage drinking. It does not reduce craving; effectiveness depends heavily on motivation, adherence, or supervised dosing.", "AUD Pharmacotherapy", "Disulfiram Mechanism High_Yield", AUD_MEDICATION_VISUAL),
    make_card(392, "How do naltrexone, acamprosate, and disulfiram differ by therapeutic goal?", "Naltrexone reduces reward and heavy drinking; acamprosate supports maintained abstinence; disulfiram creates aversion if alcohol is consumed.", "The choice is not just memorizing mechanisms: current opioid use argues against naltrexone, severe renal impairment argues against acamprosate, and poor adherence or ongoing drinking makes disulfiram unsafe or ineffective.", "AUD Pharmacotherapy", "Comparison High_Yield"),
    make_card(393, "Why should a patient at risk for Wernicke encephalopathy receive thiamine before glucose?", "A carbohydrate load increases thiamine demand and can worsen an already critical deficiency; give thiamine before glucose when feasible.", "Thiamine is required by pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase, and transketolase. The classic acute pattern is confusion, ophthalmoplegia or nystagmus, and gait ataxia, but the full triad is often absent. <b>Safety nuance:</b> treat thiamine promptly, preferably before or with glucose, but never delay lifesaving glucose in true hypoglycemia.", "Alcohol Complications", "Wernicke_Encephalopathy Mechanism High_Yield"),
    make_card(394, "How does Korsakoff syndrome differ from Wernicke encephalopathy?", "Korsakoff syndrome is a chronic amnestic state with severe anterograde memory impairment, variable retrograde amnesia, and confabulation.", "Wernicke encephalopathy is the acute, potentially reversible thiamine-deficiency emergency. Untreated injury can progress to persistent diencephalic memory-circuit damage and Korsakoff syndrome.", "Alcohol Complications", "Wernicke_Korsakoff Comparison"),
    make_card(395, "Why can heavy alcohol use cause hypoglycemia, lactic acidosis, and hepatic steatosis?", "Ethanol metabolism raises the hepatic NADH/NAD+ ratio.", "High NADH drives pyruvate toward lactate, inhibits gluconeogenesis, suppresses fatty-acid oxidation, and favors triglyceride synthesis. Fasting makes hypoglycemia especially likely because glycogen stores are already depleted.", "Alcohol Complications", "Alcohol_Metabolism Mechanism High_Yield"),
    make_card(396, "What laboratory and histologic pattern suggests alcohol-associated hepatitis?", "The AST:ALT ratio is often &gt;2, usually with modest absolute transaminase elevations; histology shows steatosis, ballooning, neutrophils, and Mallory-Denk bodies.", "Mitochondrial injury disproportionately releases AST, while pyridoxal-phosphate deficiency limits ALT activity. Jaundice, fever, tender hepatomegaly, coagulopathy, and elevated bilirubin indicate clinically important disease.", "Alcohol Complications", "Alcoholic_Hepatitis Pathology High_Yield"),
    make_card(397, "Which cardiac and neurologic complications are classically associated with chronic or binge alcohol exposure?", "Dilated cardiomyopathy and holiday-heart atrial fibrillation are classic cardiac effects; anterior-superior vermian degeneration causes gait and truncal ataxia.", "Alcohol causes direct myocardial mitochondrial and oxidative injury, while acute excess and electrolyte disturbance increase atrial electrical instability. Cerebellar degeneration preferentially impairs axial coordination rather than producing an isolated limb deficit.", "Alcohol Complications", "Cardiac Cerebellar High_Yield"),
    make_card(398, "Which tools are used to screen for unhealthy alcohol use, and why is CAGE not the best initial screen?", "AUDIT-C or a validated single-question screen is preferred initially; CAGE is better at detecting established consequences and more severe alcohol problems.", "An initial screen should detect the full spectrum from risky use to alcohol use disorder. CAGE can miss binge or habitual unhealthy drinking before classic complications develop.", "Alcohol Screening", "AUDIT_C CAGE Comparison"),
    make_card(399, "Is any amount or timing of alcohol exposure known to be safe during pregnancy?", "No—there is no known safe amount, safe type, or safe time during pregnancy.", "Alcohol crosses the placenta and can produce fetal alcohol spectrum disorders, including growth restriction, characteristic facial findings, neurodevelopmental impairment, and behavioral dysfunction. Risk cannot be reduced to a single trimester.", "Prenatal Alcohol Exposure", "Fetal_Alcohol_Spectrum High_Yield"),
]


def main() -> None:
    deck = gzip.decompress(base64.b64decode(DECK_PATH.read_bytes())).decode("utf-8")
    deck = re.sub(
        rf'<details class="card"[^>]*data-expansion="{EXPANSION}"[^>]*>.*?</details>',
        "",
        deck,
        flags=re.DOTALL,
    )
    deck = re.sub(r'(<details class="card") data-subject="[^"]+" data-subtopic="[^"]+"', r"\1", deck)

    pattern = re.compile(r'<details class="card">.*?</details>', re.DOTALL)
    cards = pattern.findall(deck)
    if len(cards) != 379:
        raise SystemExit(f"Expected 379 base cards; found {len(cards)}")

    curated = []
    for card in cards:
        number = int(re.search(r'<span class="num">(\d+)</span>', card).group(1))
        tags_match = re.search(r'<div class="tags">([^<]*)</div>', card)
        subject, subtopic = classify(number, tags_match.group(1) if tags_match else "")
        opening = (
            f'<details class="card" data-subject="{html.escape(subject)}" '
            f'data-subtopic="{html.escape(subtopic)}">'
        )
        curated.append(card.replace('<details class="card">', opening, 1))

    updated = "".join(curated + PSYCHIATRY_CARDS)
    compressed = gzip.compress(updated.encode("utf-8"), mtime=0)
    DECK_PATH.write_bytes(base64.b64encode(compressed))


if __name__ == "__main__":
    main()
