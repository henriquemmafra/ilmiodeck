// Original USMLE Step 1 antibiotic-resistance questions. All option explanations in English.
window.RAPIDFIRE_QUESTIONS = (window.RAPIDFIRE_QUESTIONS || []).concat([
  {
    "id": "abx-20261107-mrsa-pbp2a",
    "topic": "Microbiology",
    "level": 2,
    "stem": "A child with a purulent skin infection has gram-positive cocci in clusters. The isolate is resistant to nafcillin but susceptible to vancomycin. What explains nafcillin resistance?",
    "options": [
      "Increased tetracycline efflux",
      "Beta-lactamase destruction of nafcillin",
      "Altered penicillin-binding protein PBP2a",
      "Mutation of DNA gyrase"
    ],
    "answer": 2,
    "explanations": [
      "Efflux pumps typically cause tetracycline or fluoroquinolone resistance, not the hallmark MRSA mechanism.",
      "Nafcillin is penicillinase-stable; beta-lactamase alone does not explain methicillin resistance.",
      "The mecA gene encodes PBP2a, which binds most beta-lactams poorly, allowing cell-wall synthesis despite nafcillin.",
      "DNA gyrase mutations confer fluoroquinolone resistance."
    ],
    "teaching": "MRSA: mecA → PBP2a → reduced beta-lactam binding; vancomycin binds D-Ala-D-Ala instead."
  },
  {
    "id": "abx-20261107-mrsa-mecA",
    "topic": "Microbiology",
    "level": 2,
    "stem": "Which gene encodes the altered penicillin-binding protein responsible for typical methicillin-resistant Staphylococcus aureus?",
    "options": [
      "vanA",
      "mecA",
      "blaZ",
      "gyrA"
    ],
    "answer": 1,
    "explanations": [
      "vanA mediates vancomycin resistance by changing the peptidoglycan terminus.",
      "mecA encodes low-affinity PBP2a and causes resistance to most beta-lactams.",
      "blaZ encodes staphylococcal penicillinase, not PBP2a.",
      "gyrA mutations are linked to fluoroquinolone resistance."
    ],
    "teaching": "mecA changes the drug target; blaZ destroys susceptible penicillins."
  },
  {
    "id": "abx-20261107-nafcillin-penicillinase",
    "topic": "Pharmacology",
    "level": 1,
    "stem": "Why does nafcillin retain activity against many penicillinase-producing methicillin-sensitive Staphylococcus aureus isolates?",
    "options": [
      "It inhibits bacterial DNA gyrase",
      "It resists hydrolysis by staphylococcal penicillinase",
      "It blocks 30S ribosomes",
      "It binds D-Ala-D-Ala"
    ],
    "answer": 1,
    "explanations": [
      "Fluoroquinolones inhibit DNA gyrase, not nafcillin.",
      "Nafcillin is a penicillinase-resistant beta-lactam but does not overcome mecA-mediated PBP2a resistance.",
      "Aminoglycosides and tetracyclines act on the 30S ribosomal subunit.",
      "Vancomycin binds D-Ala-D-Ala."
    ],
    "teaching": "Penicillinase-resistant does not mean methicillin-resistant S. aureus coverage."
  },
  {
    "id": "abx-20261107-beta-lactamase-hydrolysis",
    "topic": "Microbiology",
    "level": 1,
    "stem": "Which bacterial resistance mechanism directly hydrolyzes the beta-lactam ring of susceptible penicillins?",
    "options": [
      "Beta-lactamase production",
      "PBP2a expression",
      "Drug efflux",
      "Ribosomal methylation"
    ],
    "answer": 0,
    "explanations": [
      "Beta-lactamases enzymatically open the beta-lactam ring, inactivating susceptible antibiotics.",
      "PBP2a is a modified target, not a drug-destroying enzyme.",
      "Efflux reduces intracellular antibiotic concentration.",
      "Ribosomal methylation impairs binding of some protein-synthesis inhibitors."
    ],
    "teaching": "Beta-lactamase = drug destruction; altered PBP = target modification."
  },
  {
    "id": "abx-20261107-esbl-cephalosporin",
    "topic": "Microbiology",
    "level": 2,
    "stem": "An Escherichia coli isolate is resistant to ceftriaxone because it produces an extended-spectrum beta-lactamase. What is the mechanism?",
    "options": [
      "Alteration of 50S ribosomes",
      "Hydrolysis of the antibiotic beta-lactam ring",
      "Loss of vancomycin binding",
      "Altered DNA gyrase"
    ],
    "answer": 1,
    "explanations": [
      "50S modification is associated with macrolide resistance.",
      "Extended-spectrum beta-lactamases hydrolyze many penicillins and third-generation cephalosporins.",
      "Vancomycin targets peptidoglycan precursors, not ceftriaxone targets.",
      "DNA gyrase mutations affect fluoroquinolones."
    ],
    "teaching": "ESBL = enzymatic inactivation; porin loss = decreased entry."
  },
  {
    "id": "abx-20261107-aminoglycoside-acetyltransferase",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "A gram-negative isolate becomes resistant to gentamicin after acquiring an aminoglycoside acetyltransferase. What does the enzyme do?",
    "options": [
      "Changes the 30S ribosomal target",
      "Chemically modifies and inactivates the drug",
      "Increases porin-mediated uptake",
      "Inhibits beta-lactam binding"
    ],
    "answer": 1,
    "explanations": [
      "Target mutations can cause resistance but are distinct from aminoglycoside-modifying enzymes.",
      "Acetyltransferases covalently modify aminoglycosides and impair ribosomal binding.",
      "Increased uptake would generally increase susceptibility.",
      "Aminoglycosides do not target penicillin-binding proteins."
    ],
    "teaching": "Aminoglycoside resistance often involves acetylation, phosphorylation, or adenylation."
  },
  {
    "id": "abx-20261107-tetracycline-efflux",
    "topic": "Pharmacology",
    "level": 1,
    "stem": "A bacterium acquires a membrane transporter that pumps doxycycline out of the cell. What resistance mechanism is this?",
    "options": [
      "Reduced drug uptake",
      "Active drug efflux",
      "Enzymatic drug degradation",
      "Altered penicillin-binding proteins"
    ],
    "answer": 1,
    "explanations": [
      "Reduced uptake involves limited entry, often through porins.",
      "Efflux pumps actively lower intracellular tetracycline concentrations.",
      "Drug destruction requires a chemical inactivation mechanism.",
      "PBPs are beta-lactam targets, not tetracycline targets."
    ],
    "teaching": "Efflux = active export; porin loss = impaired entry."
  },
  {
    "id": "abx-20261107-fluoroquinolone-gyrase",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "Which target alteration most directly causes resistance to ciprofloxacin?",
    "options": [
      "Mutation in DNA gyrase or topoisomerase IV",
      "Mutation in RNA polymerase",
      "PBP2a expression",
      "Altered D-Ala-D-Ala terminus"
    ],
    "answer": 0,
    "explanations": [
      "Fluoroquinolones inhibit DNA gyrase and topoisomerase IV; target mutations reduce binding.",
      "Rifampin resistance classically involves RNA polymerase mutations.",
      "PBP2a confers methicillin resistance.",
      "D-Ala-D-Lac mediates vancomycin resistance."
    ],
    "teaching": "DNA gyrase = fluoroquinolones; RNA polymerase = rifampin."
  },
  {
    "id": "abx-20261107-rifampin-rpoB",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "A patient receiving rifampin develops resistance after a bacterial rpoB mutation. Which target is altered?",
    "options": [
      "DNA gyrase",
      "DNA-dependent RNA polymerase beta subunit",
      "30S ribosomal subunit",
      "Cell-wall D-Ala-D-Ala"
    ],
    "answer": 1,
    "explanations": [
      "DNA gyrase is the fluoroquinolone target.",
      "rpoB encodes the beta subunit of bacterial DNA-dependent RNA polymerase, rifampin's target.",
      "Aminoglycosides and tetracyclines bind the 30S subunit.",
      "Vancomycin binds D-Ala-D-Ala."
    ],
    "teaching": "Rifampin resistance can emerge rapidly with monotherapy; it is not a DNA gyrase inhibitor."
  },
  {
    "id": "abx-20261107-porin-loss",
    "topic": "Microbiology",
    "level": 2,
    "stem": "A gram-negative bacterium becomes less susceptible to a beta-lactam after losing an outer-membrane porin. What changed?",
    "options": [
      "Increased drug efflux",
      "Decreased antibiotic entry",
      "Enzymatic acetylation",
      "Ribosomal methylation"
    ],
    "answer": 1,
    "explanations": [
      "Efflux actively removes drug after entry.",
      "Porin loss decreases permeability of the outer membrane and limits drug access to periplasmic targets.",
      "Acetylation is an inactivation mechanism common for aminoglycosides.",
      "Ribosomal methylation is a target modification mechanism."
    ],
    "teaching": "Porin loss = decreased uptake; efflux pumps = increased export."
  },
  {
    "id": "abx-20261107-macrolide-erm",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "A Staphylococcus isolate has inducible clindamycin resistance due to an erm methylase. What is modified?",
    "options": [
      "23S ribosomal RNA of the 50S subunit",
      "16S ribosomal RNA of the 30S subunit",
      "Penicillin-binding protein 2a",
      "DNA gyrase"
    ],
    "answer": 0,
    "explanations": [
      "erm-mediated methylation of 23S ribosomal RNA reduces macrolide-lincosamide-streptogramin B binding.",
      "The 30S subunit is targeted by tetracyclines and aminoglycosides.",
      "PBP2a mediates methicillin resistance.",
      "DNA gyrase is targeted by fluoroquinolones."
    ],
    "teaching": "Macrolides and clindamycin act at 50S; tetracyclines and aminoglycosides act at 30S."
  },
  {
    "id": "abx-20261107-vre-vanA",
    "topic": "Microbiology",
    "level": 2,
    "stem": "Vancomycin-resistant Enterococcus acquires vanA. Which cell-wall change lowers vancomycin binding?",
    "options": [
      "D-Ala-D-Ala to D-Ala-D-Lac",
      "PBP2a expression",
      "Beta-lactam ring hydrolysis",
      "Loss of 30S binding"
    ],
    "answer": 0,
    "explanations": [
      "vanA changes the peptidoglycan precursor terminus to D-Ala-D-Lac, markedly reducing vancomycin affinity.",
      "PBP2a confers methicillin resistance in S. aureus.",
      "Beta-lactamases inactivate beta-lactams, not vancomycin.",
      "Vancomycin does not bind the 30S ribosome."
    ],
    "teaching": "MRSA = altered PBP; VRE = altered D-Ala terminus."
  },
  {
    "id": "abx-20261107-vancomycin-mechanism",
    "topic": "Pharmacology",
    "level": 1,
    "stem": "How does vancomycin inhibit bacterial cell-wall synthesis?",
    "options": [
      "Binds penicillin-binding proteins",
      "Binds D-Ala-D-Ala of peptidoglycan precursors",
      "Inhibits DNA gyrase",
      "Hydrolyzes beta-lactam rings"
    ],
    "answer": 1,
    "explanations": [
      "Beta-lactams bind penicillin-binding proteins.",
      "Vancomycin binds D-Ala-D-Ala, blocking cell-wall precursor incorporation.",
      "Fluoroquinolones inhibit DNA gyrase.",
      "Beta-lactamases hydrolyze beta-lactam antibiotics."
    ],
    "teaching": "Vancomycin and beta-lactams both affect cell walls but bind different targets."
  },
  {
    "id": "abx-20261107-beta-lactamase-inhibitors",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "Why can adding clavulanate restore amoxicillin activity against some beta-lactamase-producing bacteria?",
    "options": [
      "Clavulanate blocks many serine beta-lactamases",
      "Clavulanate replaces PBP2a",
      "Clavulanate blocks DNA gyrase",
      "Clavulanate increases aminoglycoside entry"
    ],
    "answer": 0,
    "explanations": [
      "Clavulanate inhibits many serine beta-lactamases, protecting amoxicillin from hydrolysis.",
      "It does not reverse mecA-mediated PBP2a resistance.",
      "DNA gyrase is a fluoroquinolone target.",
      "It does not act by aminoglycoside uptake."
    ],
    "teaching": "Beta-lactamase inhibitors do not reliably overcome altered PBPs or every beta-lactamase class."
  },
  {
    "id": "abx-20261107-dtest-clindamycin",
    "topic": "Microbiology",
    "level": 3,
    "stem": "A Staphylococcus aureus isolate is erythromycin-resistant but clindamycin-susceptible on routine testing. A positive D-test predicts what?",
    "options": [
      "Inducible clindamycin resistance",
      "Vancomycin resistance from vanA",
      "Fluoroquinolone resistance from gyrA",
      "Loss of beta-lactamase"
    ],
    "answer": 0,
    "explanations": [
      "A positive D-test detects inducible erm-mediated resistance and predicts possible clindamycin failure.",
      "vanA causes vancomycin resistance, not this phenotype.",
      "gyrA is linked to fluoroquinolone resistance.",
      "Beta-lactamase loss does not explain inducible clindamycin resistance."
    ],
    "teaching": "A positive D-test means do not treat the isolate as reliably clindamycin-susceptible."
  },
  {
    "id": "abx-20261107-methicillin-ceftaroline",
    "topic": "Pharmacology",
    "level": 3,
    "stem": "Which cephalosporin can bind the altered PBP2a target and treat susceptible methicillin-resistant Staphylococcus aureus?",
    "options": [
      "Cefazolin",
      "Ceftriaxone",
      "Ceftaroline",
      "Cephalexin"
    ],
    "answer": 2,
    "explanations": [
      "Cefazolin is useful for methicillin-susceptible S. aureus, not typical MRSA.",
      "Ceftriaxone does not reliably bind PBP2a.",
      "Ceftaroline is a fifth-generation cephalosporin with MRSA activity via PBP2a binding.",
      "Cephalexin does not cover typical MRSA."
    ],
    "teaching": "Most beta-lactams fail against MRSA; ceftaroline is an important exception."
  }
]);
