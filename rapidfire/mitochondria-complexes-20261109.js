// Original three-choice mitochondrial respiratory chain questions based on user review of Leigh syndrome and complex II.
window.RAPIDFIRE_QUESTIONS = (window.RAPIDFIRE_QUESTIONS || []).concat([
  {
    "id": "mitochondria-complexes-20261109-01",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "An infant develops psychomotor regression, nystagmus, and evidence of mitochondrial complex II dysfunction. Which Krebs cycle reaction is directly impaired?",
    "options": [
      "Succinate oxidation to fumarate",
      "Malate oxidation to oxaloacetate",
      "Isocitrate oxidation to alpha-ketoglutarate"
    ],
    "answer": 0,
    "explanations": [
      "Succinate dehydrogenase is both Krebs-cycle enzyme and respiratory-chain complex II; it oxidizes succinate to fumarate and reduces its bound FAD.",
      "Malate dehydrogenase generates NADH from malate and belongs to the citric acid cycle but not complex II.",
      "Isocitrate dehydrogenase produces alpha-ketoglutarate, NADH, and carbon dioxide, but is not complex II."
    ],
    "teaching": "Complex II equals succinate dehydrogenase: succinate to fumarate."
  },
  {
    "id": "mitochondria-complexes-20261109-02",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which electron transport chain complex does not directly pump protons across the inner mitochondrial membrane?",
    "options": [
      "Complex III",
      "Complex II",
      "Complex IV"
    ],
    "answer": 1,
    "explanations": [
      "Complex III transfers electrons from ubiquinol toward cytochrome c and pumps protons via the Q cycle.",
      "Complex II passes electrons from succinate through FAD and iron-sulfur centers to coenzyme Q without pumping protons.",
      "Complex IV transfers electrons to oxygen and contributes to the proton gradient."
    ],
    "teaching": "I, III, and IV pump H+; II does not."
  },
  {
    "id": "mitochondria-complexes-20261109-03",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A mitochondrial disorder prevents entry of electrons from NADH into the respiratory chain. Which complex is primarily defective?",
    "options": [
      "Complex II",
      "Complex V",
      "Complex I"
    ],
    "answer": 2,
    "explanations": [
      "Complex II transfers electrons originating from succinate/FAD rather than NADH.",
      "Complex V uses the existing proton gradient to synthesize ATP.",
      "Complex I (NADH:ubiquinone oxidoreductase) transfers electrons from NADH to coenzyme Q and pumps protons."
    ],
    "teaching": "NADH enters at I; FAD-derived succinate electrons enter at II."
  },
  {
    "id": "mitochondria-complexes-20261109-04",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "A child has a respiratory-chain defect that prevents the proton gradient from powering ATP synthesis even though the gradient is present. Which protein is directly affected?",
    "options": [
      "Succinate dehydrogenase (complex II)",
      "ATP synthase (complex V)",
      "Cytochrome bc1 (complex III)"
    ],
    "answer": 1,
    "explanations": [
      "Complex II oxidizes succinate and reduces coenzyme Q without directly producing ATP.",
      "ATP synthase allows proton flow to drive phosphorylation of ADP to ATP.",
      "Complex III transfers electrons and contributes to the electrochemical proton gradient."
    ],
    "teaching": "Complex V couples the proton gradient to ATP synthesis."
  },
  {
    "id": "mitochondria-complexes-20261109-05",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which electron carrier accepts electrons from both respiratory complexes I and II?",
    "options": [
      "Cytochrome c",
      "Molecular oxygen",
      "Ubiquinone (coenzyme Q)"
    ],
    "answer": 2,
    "explanations": [
      "Cytochrome c receives electrons from complex III and carries them to complex IV.",
      "Oxygen is the terminal electron acceptor at complex IV.",
      "Ubiquinone collects reducing equivalents from complexes I and II and delivers them to complex III."
    ],
    "teaching": "Coenzyme Q links complexes I and II to complex III."
  },
  {
    "id": "mitochondria-complexes-20261109-06",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A mitochondrial experiment finds impaired electron transfer from ubiquinol to cytochrome c. Which complex is most likely affected?",
    "options": [
      "Complex III",
      "Complex II",
      "Complex V"
    ],
    "answer": 0,
    "explanations": [
      "Complex III (cytochrome bc1) oxidizes ubiquinol and reduces cytochrome c.",
      "Complex II transfers succinate-derived electrons to ubiquinone, not directly to cytochrome c.",
      "Complex V produces ATP using proton flow rather than transferring electrons between carriers."
    ],
    "teaching": "Complex III transfers QH2 electrons to cytochrome c."
  },
  {
    "id": "mitochondria-complexes-20261109-07",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "When mitochondrial oxygen delivery becomes inadequate, which cytosolic reaction regenerates NAD+ for glycolysis?",
    "options": [
      "Succinate oxidation to fumarate by complex II",
      "Pyruvate reduction to lactate by lactate dehydrogenase",
      "ATP synthesis by complex V"
    ],
    "answer": 1,
    "explanations": [
      "Succinate dehydrogenase is a mitochondrial Krebs-cycle/respiratory-chain enzyme, not the cytosolic NAD+ rescue step.",
      "Lactate dehydrogenase reduces pyruvate to lactate while oxidizing NADH to NAD+, permitting glycolysis to continue.",
      "Complex V requires the proton gradient and is not the reaction converting pyruvate into lactate."
    ],
    "teaching": "Lactate dehydrogenase: pyruvate + NADH → lactate + NAD+."
  },
  {
    "id": "mitochondria-complexes-20261109-08",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Why do electrons entering the respiratory chain through FAD-linked succinate dehydrogenase yield less ATP than electrons from NADH?",
    "options": [
      "They bypass proton-pumping complex IV",
      "They directly inhibit ATP synthase",
      "They bypass proton-pumping complex I"
    ],
    "answer": 2,
    "explanations": [
      "Complex IV remains downstream of both electron entry routes.",
      "FAD-linked electron entry does not directly inhibit ATP synthase.",
      "Succinate-derived electrons enter via complex II and bypass complex I, so fewer protons are pumped overall; typical yields are ~1.5 versus ~2.5 ATP."
    ],
    "teaching": "NADH ≈ 2.5 ATP, FADH2 ≈ 1.5 ATP."
  },
  {
    "id": "mitochondria-complexes-20261109-09",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "An infant has progressive neurologic dysfunction, lactic acidosis, and bilateral symmetric basal ganglia lesions. Which diagnosis best fits a mitochondrial energy defect?",
    "options": [
      "Leigh syndrome",
      "X-linked agammaglobulinemia",
      "Hereditary angioedema"
    ],
    "answer": 0,
    "explanations": [
      "Leigh syndrome is a mitochondrial energy-metabolism disorder featuring early neurodevelopmental regression and characteristic symmetric CNS lesions.",
      "Bruton agammaglobulinemia causes recurrent infections due to deficient mature B cells.",
      "Hereditary angioedema causes episodic bradykinin-mediated swelling rather than a neurodegenerative mitochondrial phenotype."
    ],
    "teaching": "Leigh syndrome can reflect defects in several respiratory complexes or pyruvate dehydrogenase, not exclusively complex II."
  },
  {
    "id": "mitochondria-complexes-20261109-10",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "Which prosthetic cofactor accepts electrons during oxidation of succinate by respiratory complex II?",
    "options": [
      "NAD+",
      "FAD",
      "Pyridoxal phosphate"
    ],
    "answer": 1,
    "explanations": [
      "NAD+ accepts electrons in several other Krebs-cycle dehydrogenase reactions but not in the succinate dehydrogenase step.",
      "Succinate dehydrogenase uses enzyme-bound FAD, which is reduced as succinate is oxidized to fumarate.",
      "Pyridoxal phosphate supports aminotransferases and other amino-acid reactions."
    ],
    "teaching": "Complex II is FAD-dependent and participates in both the Krebs cycle and electron transport."
  }
]);
