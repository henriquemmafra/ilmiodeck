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
PAIN_EXPANSION = "pain-pharmacology-2026"


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


OPIOID_SYNAPSE_VISUAL = visual(
    "Visual memory map · Mu-opioid receptor signaling",
    '''<svg aria-label="Mu opioid receptors couple to Gi proteins, close presynaptic calcium channels, open postsynaptic potassium channels, and reduce pain transmission" role="img" viewbox="0 0 900 360">
<rect class="vmuted" height="112" rx="22" width="330" x="40" y="44"></rect><text class="vlabel" x="92" y="76">PRESYNAPTIC TERMINAL</text><circle cx="112" cy="119" fill="#63a4ff" r="12"></circle><circle cx="158" cy="119" fill="#63a4ff" r="12"></circle><circle cx="204" cy="119" fill="#63a4ff" r="12"></circle><text class="vtiny" x="91" y="145">glutamate · substance P</text>
<rect fill="#321f29" height="68" rx="18" stroke="#ff6b6b" stroke-width="2" width="170" x="425" y="55"></rect><text class="vlabel" x="459" y="84">μ RECEPTOR</text><text class="vsmall" x="482" y="108">Gi/o</text><path d="M425 105 L385 105" stroke="#ff6b6b" stroke-width="7"></path><line stroke="#ff6b6b" stroke-width="7" x1="385" x2="385" y1="84" y2="126"></line><text class="vsmall" x="286" y="188">↓ presynaptic Ca2+ influx</text>
<path d="M595 91 L619 91" stroke="#63a4ff" stroke-width="7"></path><polygon fill="#63a4ff" points="635,91 615,80 615,102"></polygon><rect class="vmuted" height="92" rx="22" width="228" x="635" y="43"></rect><text class="vlabel" x="675" y="75">INTRACELLULAR</text><text class="vsmall" x="670" y="104">↓ adenylyl cyclase</text><text class="vsmall" x="705" y="128">↓ cAMP</text>
<path d="M105 218 L795 218" stroke="#53657d" stroke-width="6"></path><text class="vlabel" x="352" y="248">POSTSYNAPTIC NEURON</text><rect fill="#173228" height="66" rx="18" stroke="#58c99b" stroke-width="2" width="190" x="350" y="273"></rect><text class="vlabel" x="394" y="301">OPENS K+</text><text class="vsmall" x="380" y="326">hyperpolarization</text><path d="M445 218 L445 273" stroke="#58c99b" stroke-width="7"></path><polygon fill="#58c99b" points="445,286 433,266 457,266"></polygon><text class="vsmall" x="584" y="298">NET EFFECT: ↓ transmitter release</text><text class="vsmall" x="603" y="324">+ ↓ postsynaptic firing</text></svg>''',
    "<b>One receptor, three linked effects:</b> Gi lowers cAMP, presynaptic Ca2+ entry falls, and postsynaptic K+ efflux hyperpolarizes the neuron.",
    "opioid-synapse-map",
)


PAIN_TREATMENT_VISUAL = visual(
    "Visual memory map · Match the analgesic to the pain mechanism",
    '''<svg aria-label="Pain treatment map matching nociceptive inflammatory neuropathic and spasticity related pain with first line drug classes" role="img" viewbox="0 0 900 390">
<rect fill="#172438" height="132" rx="22" stroke="#63a4ff" stroke-width="2" width="390" x="35" y="38"></rect><text class="vlabel" x="105" y="72">NOCICEPTIVE / INFLAMMATORY</text><text class="vsmall" x="70" y="106">NSAID ± acetaminophen</text><text class="vtiny" x="70" y="135">severe acute pain: add a short-course opioid</text>
<rect fill="#172438" height="132" rx="22" stroke="#58c99b" stroke-width="2" width="390" x="475" y="38"></rect><text class="vlabel" x="585" y="72">NEUROPATHIC</text><text class="vsmall" x="510" y="106">gabapentinoid · TCA · SNRI</text><text class="vtiny" x="510" y="135">trigeminal neuralgia: Na+ channel blocker</text>
<rect fill="#172438" height="132" rx="22" stroke="#f6a04d" stroke-width="2" width="390" x="35" y="208"></rect><text class="vlabel" x="142" y="242">SPASTICITY</text><text class="vsmall" x="70" y="276">baclofen · tizanidine</text><text class="vtiny" x="70" y="305">dantrolene acts directly on skeletal muscle</text>
<rect fill="#321f29" height="132" rx="22" stroke="#cf83d4" stroke-width="2" width="390" x="475" y="208"></rect><text class="vlabel" x="558" y="242">MULTIMODAL LOGIC</text><text class="vsmall" x="510" y="276">combine different mechanisms</text><text class="vtiny" x="510" y="305">better analgesia · lower opioid exposure</text></svg>''',
    "<b>Start with mechanism, not intensity alone:</b> tissue injury, somatosensory injury, and spasticity require different primary drug classes.",
    "pain-treatment-map",
)


LAST_VISUAL = visual(
    "Visual memory map · Recognize and treat LAST",
    '''<svg aria-label="Local anesthetic systemic toxicity progresses from neurologic warning symptoms to seizures and cardiovascular collapse and is treated with immediate resuscitation and 20 percent lipid emulsion" role="img" viewbox="0 0 900 350">
<rect class="vmuted" height="104" rx="22" width="230" x="30" y="48"></rect><text class="vlabel" x="71" y="80">EARLY CNS</text><text class="vsmall" x="57" y="110">metallic taste · tinnitus</text><text class="vsmall" x="51" y="136">circumoral numbness</text><path d="M260 100 L326 100" stroke="#f6a04d" stroke-width="7"></path><polygon fill="#f6a04d" points="343,100 322,89 322,111"></polygon>
<rect fill="#33291b" height="104" rx="22" stroke="#f6a04d" stroke-width="2" width="210" x="343" y="48"></rect><text class="vlabel" x="397" y="80">SEIZURE</text><text class="vsmall" x="371" y="110">agitation · twitching</text><text class="vsmall" x="393" y="136">then coma</text><path d="M553 100 L620 100" stroke="#ff6b6b" stroke-width="7"></path><polygon fill="#ff6b6b" points="637,100 616,89 616,111"></polygon>
<rect fill="#321f29" height="104" rx="22" stroke="#ff6b6b" stroke-width="2" width="232" x="637" y="48"></rect><text class="vlabel" x="667" y="80">CARDIOVASCULAR</text><text class="vsmall" x="673" y="110">conduction delay · VT/VF</text><text class="vsmall" x="693" y="136">hypotension · arrest</text>
<rect fill="#173228" height="122" rx="22" stroke="#58c99b" stroke-width="2" width="839" x="30" y="194"></rect><text class="vlabel" x="63" y="228">ACT NOW</text><text class="vsmall" x="63" y="260">Stop local anesthetic · airway/oxygen · benzodiazepine for seizures</text><text class="vsmall" x="63" y="291">Serious LAST: 20% lipid emulsion + ASRA-modified resuscitation</text></svg>''',
    "<b>Do not wait for the full sequence:</b> LAST can present atypically or progress rapidly, especially after intravascular injection.",
    "last-emergency-map",
)


def make_pain_card(number: int, question: str, answer: str, why: str, subtopic: str, tags: str, extra: str = "") -> str:
    return (
        f'<details class="card" data-subject="Pharmacology" data-subtopic="{html.escape(subtopic)}" '
        f'data-expansion="{PAIN_EXPANSION}"><summary><span class="num">{number:03d}</span>{question}</summary>'
        f'<div class="ans"><b>Answer:</b> <b>{answer}</b><br><br><b>Why:</b> {why}'
        f'{extra}<div class="tags">Pharm::{subtopic.replace(" ", "_")} {tags}</div></div></details>'
    )


PAIN_PHARMACOLOGY_CARDS = [
    make_pain_card(400, "What is the mechanistic difference between nociceptive and neuropathic pain?", "Nociceptive pain comes from activation of nociceptors by actual or threatened non-neural tissue injury; neuropathic pain is caused by a lesion or disease of the somatosensory nervous system.", "Inflammation, trauma, and ischemia generate nociceptive pain through mediators such as prostaglandins and bradykinin. Diabetic neuropathy, postherpetic neuralgia, radiculopathy, and central post-stroke pain are neuropathic because the sensory pathway itself is diseased. The distinction predicts which drugs are most likely to work.", "Pain Principles", "Classification Mechanism High_Yield"),
    make_pain_card(401, "What is the logic of multimodal analgesia?", "Combine treatments with complementary mechanisms to improve analgesia while reducing the dose and toxicity of any one drug—especially opioids.", "For example, acetaminophen plus an NSAID can reduce the opioid requirement after surgery; a regional block can further reduce systemic exposure. Drug choice must still match pain mechanism, severity, comorbidities, and procedure.", "Pain Principles", "Treatment Strategy High_Yield", PAIN_TREATMENT_VISUAL),
    make_pain_card(402, "How do mu-opioid receptors suppress nociceptive transmission at a synapse?", "They are Gi/o-coupled receptors that inhibit adenylyl cyclase, close presynaptic voltage-gated Ca2+ channels, and open postsynaptic K+ channels.", "Less presynaptic calcium means less release of glutamate and substance P. Postsynaptic potassium efflux hyperpolarizes the neuron. Together these actions decrease transmission in ascending pain pathways and alter pain perception in the brain.", "Opioids", "Receptor_Signaling Mechanism High_Yield", OPIOID_SYNAPSE_VISUAL),
    make_pain_card(403, "Why can buprenorphine precipitate withdrawal in a patient maintained on morphine or another full mu agonist?", "Buprenorphine has high receptor affinity but only partial mu-agonist efficacy, so it displaces the full agonist and abruptly lowers net receptor activation.", "In a physiologically dependent patient, that sudden fall behaves like antagonism and can trigger mydriasis, sweating, vomiting, diarrhea, myalgias, and autonomic activation. Mixed agonist–antagonists such as pentazocine, nalbuphine, and butorphanol can do the same. Buprenorphine induction must therefore be timed after sufficient spontaneous withdrawal, except when a specialized low-dose induction protocol is used.", "Opioids", "Buprenorphine Withdrawal High_Yield"),
    make_pain_card(404, "How do affinity, potency, and efficacy explain buprenorphine's behavior?", "Affinity describes receptor binding; potency describes how much drug is needed; efficacy describes the maximal receptor response. Buprenorphine binds mu receptors very tightly but has lower efficacy than a full agonist.", "High affinity lets it outcompete morphine, fentanyl, or methadone. Partial efficacy produces a ceiling on some opioid effects and can stabilize dependence, but it can also create precipitated withdrawal if introduced while a full agonist is still strongly activating the receptors.", "Opioids", "Pharmacodynamics Partial_Agonist"),
    make_pain_card(405, "How do opioid tolerance and opioid-induced hyperalgesia differ?", "Tolerance is reduced drug effect requiring more drug for the same analgesia; opioid-induced hyperalgesia is paradoxically increased pain sensitivity caused by opioid exposure.", "Chronic signaling can cause receptor desensitization, uncoupling, and downregulation. Increased excitatory signaling—including NMDA-dependent central sensitization—can broaden pain and make normally minor stimuli painful. Simply escalating the opioid may improve tolerance briefly but can worsen hyperalgesia.", "Opioids", "Tolerance Hyperalgesia Mechanism"),
    make_pain_card(406, "What findings distinguish opioid intoxication from opioid withdrawal?", "Intoxication causes respiratory depression, CNS depression, and miosis; withdrawal causes mydriasis, lacrimation, rhinorrhea, piloerection, yawning, diarrhea, vomiting, myalgias, and autonomic hyperactivity.", "Opioid withdrawal reverses many receptor-mediated effects: pupils and bowel activity increase, secretions return, and sympathetic activity rises. It is intensely distressing but is usually not life-threatening in otherwise healthy adults; overdose is lethal because ventilation fails.", "Opioids", "Toxidrome Withdrawal Comparison"),
    make_pain_card(407, "To which opioid effects does tolerance develop poorly?", "Little tolerance develops to miosis and constipation, whereas tolerance develops to analgesia, euphoria, sedation, and respiratory depression.", "Persistent pinpoint pupils and constipation can remain even in a patient tolerant to other opioid effects. Cross-tolerance is incomplete, so equianalgesic conversion to another opioid still requires a safety reduction rather than a purely mathematical substitution.", "Opioids", "Tolerance Exam_Trap High_Yield"),
    make_pain_card(408, "Why may naloxone require repeated dosing or an infusion after opioid overdose?", "Naloxone's clinical duration is shorter than that of many opioids, so respiratory depression can recur after the antagonist wears off.", "Restore ventilation first, titrate naloxone to adequate breathing, and continue observation. Long-acting opioids such as methadone or sustained-release products can outlast multiple naloxone doses; excessive antagonist dosing can precipitate severe withdrawal in a dependent patient.", "Opioids", "Naloxone Overdose High_Yield"),
    make_pain_card(409, "Which pharmacologic features make methadone clinically distinctive?", "It is a long-acting mu agonist with NMDA-antagonist activity and can prolong the QT interval.", "Its long and variable half-life can exceed its apparent analgesic duration, so repeated dosing can accumulate and cause delayed respiratory depression. NMDA antagonism may help selected neuropathic or opioid-tolerant pain states, but QT prolongation and torsades risk require attention to dose, electrolytes, and interacting drugs.", "Opioids", "Methadone Mechanism Toxicity"),
    make_pain_card(410, "How do COX-1 and COX-2 explain both the benefits and harms of NSAIDs?", "COX inhibition lowers prostaglandin synthesis: blocking inflammation-associated COX-2 reduces inflammation, pain, and fever, while blocking COX-1 impairs gastric protection and platelet thromboxane production.", "COX-1 is largely constitutive. COX-2 is strongly induced at inflammatory sites but also has constitutive renal and vascular roles, so the simple 'COX-1 good, COX-2 bad' shortcut is false. Selective COX-2 inhibition reduces—but does not eliminate—GI ulcer risk and can favor thrombosis by lowering endothelial prostacyclin while relatively sparing platelet thromboxane.", "NSAIDs", "COX Mechanism High_Yield"),
    make_pain_card(411, "Why can NSAIDs precipitate acute kidney injury?", "They reduce renal prostaglandins that normally dilate the afferent arteriole, causing afferent constriction and a fall in renal blood flow and GFR.", "The risk is greatest when renal perfusion is prostaglandin-dependent: volume depletion, heart failure, cirrhosis, chronic kidney disease, or concurrent diuretic and renin–angiotensin system blockade. This is a hemodynamic injury, especially early, rather than direct tubular poisoning.", "NSAIDs", "Renal Hemodynamics High_Yield"),
    make_pain_card(412, "What are the major system-level toxicities of nonselective NSAIDs?", "GI ulceration and bleeding, hemodynamic kidney injury with sodium retention, hypertension, cardiovascular events, and reversible platelet dysfunction.", "Loss of gastric PGE2/PGI2 reduces mucus, bicarbonate, and mucosal perfusion. Renal prostaglandin loss promotes vasoconstriction and salt retention. Except for aspirin, platelet COX inhibition is reversible, so the antiplatelet effect fades as the drug is cleared.", "NSAIDs", "Adverse_Effects Mechanism"),
    make_pain_card(413, "Why does aspirin inhibit platelets for days after the drug has left the plasma?", "Aspirin irreversibly acetylates platelet COX-1, blocking thromboxane A2 synthesis for the remaining life of the platelet.", "Platelets lack nuclei and cannot synthesize new COX. Hemostasis recovers gradually as the marrow releases new platelets, whereas most other NSAIDs inhibit COX reversibly. Low doses preferentially exploit presystemic platelet COX-1 inhibition for antithrombotic therapy.", "NSAIDs", "Aspirin Platelets High_Yield"),
    make_pain_card(414, "What causes NSAID-exacerbated respiratory disease?", "COX-1 inhibition decreases protective prostaglandins and shifts arachidonic-acid metabolism toward cysteinyl leukotrienes, causing bronchoconstriction and upper-airway inflammation.", "The classic triad is asthma, chronic rhinosinusitis with nasal polyps, and respiratory reactions to aspirin or other COX-1-inhibiting NSAIDs. This is a pharmacologic intolerance, not an IgE allergy to one specific NSAID.", "NSAIDs", "AERD Leukotrienes High_Yield"),
    make_pain_card(415, "What is the corrected rule for NSAID use during pregnancy?", "At about 20 weeks or later, NSAIDs can cause fetal renal dysfunction and oligohydramnios; if necessary from 20–30 weeks, use the lowest dose for the shortest time. Avoid them at about 30 weeks and later because of premature ductus arteriosus closure.", "The common shortcut 'contraindicated only in the third trimester' misses the earlier renal risk. The warning does not apply to clinician-directed low-dose aspirin used for specific obstetric indications.", "NSAIDs", "Pregnancy Fetal_Toxicity High_Yield"),
    make_pain_card(416, "How does acetaminophen differ clinically from NSAIDs?", "It is an analgesic and antipyretic with primarily central actions but minimal peripheral anti-inflammatory and antiplatelet effects.", "Its precise mechanism is not fully established. Because it does not meaningfully inhibit peripheral prostaglandin production at therapeutic doses, it causes much less gastric irritation and platelet dysfunction than NSAIDs—but it does not treat inflammation well and overdose can cause fatal hepatic necrosis.", "Acetaminophen", "Mechanism Comparison High_Yield"),
    make_pain_card(417, "How does acetaminophen overdose cause hepatic necrosis?", "Glucuronidation and sulfation become saturated, more drug is oxidized by CYP2E1 to NAPQI, glutathione is depleted, and unbound NAPQI injures centrilobular hepatocytes.", "Fasting, malnutrition, and chronic heavy alcohol exposure reduce glutathione reserve and can increase susceptibility. Chronic alcohol induces CYP2E1, but acute alcohol competitively occupies the enzyme; the clinically important lesson is to assess timing and nutritional reserve rather than memorize alcohol as a single-direction interaction.", "Acetaminophen", "NAPQI Toxicology High_Yield"),
    make_pain_card(418, "How is acute acetaminophen overdose evaluated and treated?", "Obtain a serum level at least 4 hours after a single acute ingestion, plot it on the Rumack–Matthew nomogram, and give N-acetylcysteine promptly when indicated—or immediately when toxicity is suspected and results would delay treatment.", "N-acetylcysteine replenishes glutathione and can also bind or reduce the toxic metabolite. The nomogram is not valid for repeated supratherapeutic ingestion, an unknown ingestion time, or extended-release uncertainty without serial assessment.", "Acetaminophen", "Antidote Nomogram High_Yield"),
    make_pain_card(419, "How do local anesthetics block voltage-gated sodium channels?", "The uncharged weak-base form crosses the axonal membrane; inside the cell, the protonated form binds the intracellular side of open or inactivated Na+ channels and prevents action-potential propagation.", "Frequently firing nerves accumulate more channel block, producing use- or state-dependent inhibition. Acidic infected tissue keeps more drug ionized outside the neuron, reducing membrane penetration and making local anesthesia less effective.", "Local Anesthetics", "Sodium_Channel Mechanism High_Yield"),
    make_pain_card(420, "What is the clinically useful sequence of differential local-anesthetic blockade?", "Sympathetic function is generally blocked first, followed by pain and temperature; touch and pressure are more resistant, and large motor fibers are usually blocked last.", "Small myelinated preganglionic B fibers are highly sensitive; small A-delta and C fibers carry pain and temperature. Fiber diameter, myelination, firing rate, concentration, and anatomy all matter, so the exact order can overlap—avoid the oversimplification that one fiber type is always first in every block.", "Local Anesthetics", "Differential_Blockade Physiology"),
    make_pain_card(421, "How do amide and ester local anesthetics differ in metabolism and allergy risk?", "Amides such as lidocaine and bupivacaine are mainly metabolized in the liver; esters such as procaine and chloroprocaine are hydrolyzed by plasma pseudocholinesterase and can form allergenic PABA-related metabolites.", "True allergy is more common with esters. Tetracaine is an ester despite its long duration. Severe hepatic dysfunction can prolong amide exposure, whereas pseudocholinesterase deficiency can prolong ester metabolism.", "Local Anesthetics", "Amide Ester Comparison"),
    make_pain_card(422, "How should local anesthetic systemic toxicity (LAST) be recognized and treated?", "Suspect it after local-anesthetic exposure when circumoral numbness, metallic taste, tinnitus, agitation, or seizures progress to conduction disturbance, ventricular arrhythmia, hypotension, or cardiac arrest; stop injection, support oxygenation, control seizures, and start 20% lipid emulsion for serious LAST.", "Intravascular injection or excessive systemic absorption produces CNS and cardiac sodium-channel blockade; bupivacaine is particularly cardiotoxic. LAST resuscitation differs from routine ACLS, so follow the ASRA checklist and obtain a lipid-rescue kit immediately.", "Local Anesthetics", "LAST Emergency High_Yield", LAST_VISUAL),
    make_pain_card(423, "Which local anesthetics are classically associated with methemoglobinemia?", "Benzocaine and prilocaine are classic causes; oxidized Fe3+ hemoglobin produces cyanosis and low pulse oximetry that responds poorly to supplemental oxygen.", "PaO2 can remain normal because dissolved plasma oxygen is unaffected, creating a saturation gap. Treat clinically significant acquired methemoglobinemia with methylene blue, but use caution in G6PD deficiency because reduced NADPH can limit efficacy and increase hemolysis risk.", "Local Anesthetics", "Methemoglobinemia Toxicology"),
    make_pain_card(424, "How do gabapentin and pregabalin reduce neuropathic pain?", "They bind the alpha-2-delta auxiliary subunit of presynaptic voltage-gated calcium channels, reducing calcium-dependent release of excitatory neurotransmitters.", "They are GABA analogues but do not directly activate GABA receptors. High-yield adverse effects are dizziness, somnolence, edema, and weight gain; both require renal dose adjustment and can add to respiratory depression when combined with opioids or other CNS depressants.", "Neuropathic Pain", "Gabapentinoids Mechanism High_Yield"),
    make_pain_card(425, "What is first-line pharmacotherapy for classic trigeminal neuralgia?", "A voltage-gated sodium-channel blocker—carbamazepine or oxcarbazepine.", "The pain consists of brief electric-shock attacks triggered by light facial stimulation. Gabapentinoids and TCAs are useful for several neuropathic syndromes, but they should not replace the classic first-line association tested for trigeminal neuralgia.", "Neuropathic Pain", "Trigeminal_Neuralgia Exam_Trap"),
    make_pain_card(426, "Where do baclofen, tizanidine, and dantrolene act to reduce spasticity?", "Baclofen is a spinal GABA-B agonist; tizanidine is a central alpha-2 agonist; dantrolene acts peripherally on skeletal-muscle RyR1 channels to reduce sarcoplasmic-reticulum Ca2+ release.", "Baclofen and tizanidine reduce excitatory drive to motor neurons, whereas dantrolene directly weakens excitation–contraction coupling. Dantrolene also treats malignant hyperthermia; hepatotoxicity and muscle weakness are major concerns.", "Muscle Relaxants", "Spasticity Mechanisms High_Yield"),
    make_pain_card(427, "What adverse-effect patterns distinguish common centrally acting muscle relaxants?", "Cyclobenzaprine is TCA-like and causes sedation plus anticholinergic effects; tizanidine causes sedation, hypotension, bradycardia, and possible hepatotoxicity; abrupt baclofen withdrawal can cause severe rebound spasticity, hyperthermia, delirium, and autonomic instability.", "Carisoprodol is metabolized to meprobamate and carries misuse, dependence, and withdrawal risk. These agents are adjuncts; sedation becomes more dangerous when combined with opioids, alcohol, or other CNS depressants.", "Muscle Relaxants", "Adverse_Effects Withdrawal"),
    make_pain_card(428, "How do glucocorticoids reduce inflammatory pain and edema?", "They induce lipocortin/annexin A1, which inhibits phospholipase A2, and they suppress inflammatory gene transcription—reducing both prostaglandin and leukotriene pathways.", "They are not direct analgesics; pain improves because inflammation, capillary permeability, and tissue edema fall. Dexamethasone is especially useful for vasogenic edema around tumors and metastatic spinal cord compression, but hyperglycemia, infection risk, mood changes, and GI toxicity remain relevant.", "Anti-inflammatory Analgesics", "Corticosteroids PLA2 Mechanism"),
    make_pain_card(429, "How does capsaicin produce analgesia despite initially causing burning pain?", "It activates TRPV1 channels on nociceptive C fibers, causing depolarization and burning, followed by reversible defunctionalization and reduced responsiveness of those terminals with repeated or high-concentration exposure.", "TRPV1 normally responds to noxious heat, acid, and capsaicin. The older shorthand 'depletes substance P' is incomplete; persistent TRPV1 activation alters terminal function and neurotransmitter signaling, which explains the delayed local analgesic effect.", "Topical Analgesics", "Capsaicin TRPV1 Mechanism High_Yield"),
    make_pain_card(430, "Which opioids are most relevant to serotonin syndrome and seizure risk?", "Tramadol and meperidine are classic serotonergic opioids; fentanyl and methadone also have serotonergic potential. Tramadol additionally lowers the seizure threshold.", "Combining serotonergic opioids with SSRIs, SNRIs, MAO inhibitors, or other serotonin-enhancing drugs can produce clonus, hyperreflexia, autonomic instability, and agitation. The risk is a drug-property distinction, not a universal effect of every mu agonist.", "Opioids", "Serotonin_Syndrome Tramadol High_Yield"),
    make_pain_card(431, "Why can morphine cause pruritus, flushing, and hypotension without a true opioid allergy?", "Morphine can directly promote mast-cell histamine release, producing a non-IgE-mediated pseudoallergic reaction.", "Pruritus, erythema, vasodilation, and mild hypotension alone do not prove IgE-mediated anaphylaxis. Severe bronchospasm, angioedema, or cardiovascular collapse requires emergency evaluation, but an isolated histamine reaction does not automatically imply cross-allergy to every opioid class.", "Opioids", "Histamine Pseudoallergy"),
    make_pain_card(432, "Why is aspirin avoided in children and adolescents with viral illness?", "It is associated with Reye syndrome: acute encephalopathy with hepatic mitochondrial dysfunction and microvesicular fatty change.", "The classic setting is aspirin exposure during or after influenza or varicella. Vomiting, altered mental status, hyperammonemia, hypoglycemia, and elevated transaminases reflect impaired hepatic oxidative metabolism rather than an inflammatory hepatitis.", "NSAIDs", "Aspirin Reye_Syndrome High_Yield"),
]


def main() -> None:
    deck = gzip.decompress(base64.b64decode(DECK_PATH.read_bytes())).decode("utf-8")
    for expansion in (EXPANSION, PAIN_EXPANSION):
        deck = re.sub(
            rf'<details class="card"[^>]*data-expansion="{expansion}"[^>]*>.*?</details>',
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

    updated = "".join(curated + PSYCHIATRY_CARDS + PAIN_PHARMACOLOGY_CARDS)
    compressed = gzip.compress(updated.encode("utf-8"), mtime=0)
    DECK_PATH.write_bytes(base64.b64encode(compressed))


if __name__ == "__main__":
    main()
