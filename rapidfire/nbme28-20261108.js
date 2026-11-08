// Original English-language three-choice review questions inspired by user-identified NBME learning gaps; not reproductions of NBME content.
window.RAPIDFIRE_QUESTIONS = (window.RAPIDFIRE_QUESTIONS || []).concat([
  {
    "id": "nbme28-20261108-relative-risk",
    "topic": "Biostatistics",
    "level": 1,
    "stem": "A cohort study reports disease in 30 of 100 exposed patients and 10 of 100 unexposed patients. What is the relative risk?",
    "options": [
      "3.0",
      "3.86",
      "0.20"
    ],
    "answer": 0,
    "explanations": [
      "Relative risk = (30/100)/(10/100) = 3; it compares event probabilities.",
      "The odds ratio is (30/70)/(10/90) ≈ 3.86, not the relative risk.",
      "The risk difference is 0.30 − 0.10 = 0.20, an absolute increase of 20 percentage points."
    ],
    "teaching": "Relative risk divides probabilities; odds ratio divides odds; risk difference subtracts probabilities."
  },
  {
    "id": "nbme28-20261108-absolute-reduction",
    "topic": "Biostatistics",
    "level": 1,
    "stem": "An intervention reduces event risk from 20% to 10%. Which statistic is the absolute risk reduction?",
    "options": [
      "Relative risk of 0.5",
      "Absolute risk reduction of 10 percentage points",
      "Number needed to treat of 5"
    ],
    "answer": 1,
    "explanations": [
      "Relative risk = 0.10/0.20 = 0.5; it is a ratio, not a risk difference.",
      "ARR = control event risk − treatment event risk = 0.20 − 0.10 = 0.10.",
      "Number needed to treat = 1/0.10 = 10, not 5."
    ],
    "teaching": "ARR subtracts risks; NNT is the inverse of ARR expressed as a proportion."
  },
  {
    "id": "nbme28-20261108-cannon-a-wave",
    "topic": "Cardiology",
    "level": 2,
    "stem": "A patient with complete atrioventricular block has intermittent giant jugular a waves. What causes them?",
    "options": [
      "Atrial contraction against a closed tricuspid valve",
      "Systolic blood reflux through an incompetent tricuspid valve",
      "Delayed carotid upstroke from severe aortic stenosis"
    ],
    "answer": 0,
    "explanations": [
      "Cannon a waves occur when atria contract against closed atrioventricular valves during AV dissociation.",
      "Tricuspid regurgitation produces prominent systolic jugular v waves rather than cannon a waves.",
      "Severe aortic stenosis produces pulsus parvus et tardus in the arterial carotid pulse."
    ],
    "teaching": "Cannon a = AV dissociation; giant v = tricuspid regurgitation; parvus et tardus = aortic stenosis."
  },
  {
    "id": "nbme28-20261108-glaucoma-timolol",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "A patient develops wheezing after starting eye drops for glaucoma. Which medication is the likely cause?",
    "options": [
      "Timolol",
      "Latanoprost",
      "Acetazolamide"
    ],
    "answer": 0,
    "explanations": [
      "Topical timolol is a nonselective beta blocker; systemic absorption may cause beta-2-mediated bronchospasm and bradycardia.",
      "Latanoprost increases uveoscleral outflow and can darken the iris and lengthen eyelashes.",
      "Acetazolamide inhibits carbonic anhydrase, reducing aqueous humor production; it can cause metabolic acidosis."
    ],
    "teaching": "Even topical timolol can cause systemic beta-blockade and asthma exacerbations."
  },
  {
    "id": "nbme28-20261108-urea-asl",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "An infant has hyperammonemia, hepatomegaly, brittle hair, and elevated urinary argininosuccinate. Which enzyme is deficient?",
    "options": [
      "Ornithine transcarbamylase",
      "Argininosuccinate synthetase 1",
      "Argininosuccinate lyase"
    ],
    "answer": 2,
    "explanations": [
      "OTC deficiency causes low citrulline, hyperammonemia, and elevated urinary orotic acid.",
      "ASS1 deficiency causes citrullinemia type I, with marked citrulline accumulation.",
      "ASL deficiency causes argininosuccinic aciduria, with elevated argininosuccinate and often brittle hair."
    ],
    "teaching": "Accumulation reveals the blocked next enzyme: ASL normally splits argininosuccinate into arginine and fumarate."
  },
  {
    "id": "nbme28-20261108-urea-otc",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A 3-day-old boy has hyperammonemia, respiratory alkalosis, high urinary orotic acid, and low citrulline. What is deficient?",
    "options": [
      "Carbamoyl phosphate synthetase I",
      "Ornithine transcarbamylase",
      "Argininosuccinate synthetase 1"
    ],
    "answer": 1,
    "explanations": [
      "CPS1 deficiency causes hyperammonemia with low citrulline but does not typically elevate orotic acid.",
      "OTC deficiency is X-linked; excess carbamoyl phosphate enters pyrimidine synthesis, increasing orotic acid.",
      "ASS1 deficiency causes markedly elevated citrulline rather than low citrulline."
    ],
    "teaching": "Hyperammonemia + high orotic acid + low citrulline indicates OTC deficiency."
  },
  {
    "id": "nbme28-20261108-listeria-meningitis",
    "topic": "Microbiology",
    "level": 2,
    "stem": "An older adult has meningitis caused by Listeria monocytogenes. Which antibiotic is preferred?",
    "options": [
      "Ampicillin",
      "Ceftriaxone alone",
      "Azithromycin"
    ],
    "answer": 0,
    "explanations": [
      "Ampicillin binds penicillin-binding proteins and inhibits peptidoglycan cross-linking.",
      "Third-generation cephalosporins lack reliable Listeria activity, despite broad meningitis coverage.",
      "Azithromycin binds the 50S subunit but is not standard treatment for invasive Listeria meningitis."
    ],
    "teaching": "Listeria meningitis requires ampicillin-based therapy; cephalosporins do not cover it reliably."
  },
  {
    "id": "nbme28-20261108-listeria-intracellular",
    "topic": "Microbiology",
    "level": 2,
    "stem": "Which bacterial factor enables Listeria monocytogenes to move between host cells by using host cytoskeletal machinery?",
    "options": [
      "ActA-mediated actin polymerization",
      "Shiga toxin-mediated 60S ribosome damage",
      "Pertussis toxin-mediated Gi inactivation"
    ],
    "answer": 0,
    "explanations": [
      "ActA recruits host actin machinery, producing comet tails for intracellular movement and cell-to-cell spread.",
      "Shiga toxin cleaves 28S rRNA in the 60S ribosomal subunit, inhibiting protein synthesis.",
      "Pertussis toxin ADP-ribosylates Gi, increasing adenylyl cyclase activity and cyclic AMP."
    ],
    "teaching": "Listeriolysin O permits phagosomal escape; ActA mediates actin-based cell-to-cell movement."
  },
  {
    "id": "nbme28-20261108-skin-dh",
    "topic": "Immunology",
    "level": 2,
    "stem": "A patient with celiac disease develops intensely itchy vesicles on the elbows and buttocks. Which immunofluorescence pattern is expected?",
    "options": [
      "Granular IgA in dermal papillae",
      "Linear IgG/C3 at the basement membrane",
      "Intercellular IgG throughout the epidermis"
    ],
    "answer": 0,
    "explanations": [
      "Dermatitis herpetiformis is associated with epidermal transglutaminase autoimmunity and granular IgA deposits.",
      "Bullous pemphigoid produces linear IgG/C3 along the basement membrane and tense bullae.",
      "Pemphigus vulgaris produces intercellular IgG against desmogleins and flaccid bullae."
    ],
    "teaching": "Celiac disease + intense extensor pruritus + granular papillary IgA = dermatitis herpetiformis."
  },
  {
    "id": "nbme28-20261108-skin-blister-depth",
    "topic": "Immunology",
    "level": 2,
    "stem": "An older patient has large tense bullae, intact epidermal roof, and linear IgG against BP180. Where does the split occur?",
    "options": [
      "Subepidermal junction",
      "Suprabasal epidermis",
      "Intraepidermal spongiotic spaces in palms"
    ],
    "answer": 0,
    "explanations": [
      "Bullous pemphigoid targets hemidesmosomal BP180/BP230, causing a subepidermal blister.",
      "Pemphigus vulgaris causes suprabasal acantholysis with flaccid, easily ruptured bullae.",
      "Dyshidrotic eczema produces intensely pruritic spongiotic vesicles on palms, soles, and lateral digits."
    ],
    "teaching": "Tense and linear suggests pemphigoid; flaccid and intercellular suggests pemphigus."
  },
  {
    "id": "nbme28-20261108-tcell-dj",
    "topic": "Immunology",
    "level": 2,
    "stem": "A thymocyte has T-cell receptor beta-chain D–J rearrangement but expresses neither CD4 nor CD8. Which stage is it in?",
    "options": [
      "Double-negative thymocyte",
      "Double-positive thymocyte",
      "Mature CD8-positive T cell"
    ],
    "answer": 0,
    "explanations": [
      "Early TCR beta-chain rearrangement occurs in CD4-negative/CD8-negative thymocytes, primarily in the thymic cortex.",
      "Double-positive thymocytes express CD4 and CD8, rearrange the TCR alpha chain, and undergo positive selection.",
      "Mature CD8-positive T cells have completed thymic selection and recognize antigens on MHC class I."
    ],
    "teaching": "TCR beta-chain D–J then V–DJ rearrangement starts during the double-negative stage."
  },
  {
    "id": "nbme28-20261108-thymic-selection",
    "topic": "Immunology",
    "level": 2,
    "stem": "A double-positive thymocyte can recognize self-MHC class II with an appropriate affinity. Which process allows its survival?",
    "options": [
      "Positive selection in the thymic cortex",
      "Negative selection of strongly self-reactive cells",
      "RAG1/RAG2 deficiency causing absent T and B cells"
    ],
    "answer": 0,
    "explanations": [
      "Positive selection rescues thymocytes recognizing self-MHC and guides CD4 or CD8 lineage commitment.",
      "Negative selection removes thymocytes that bind self-antigens too strongly, primarily in the thymic medulla.",
      "RAG deficiency prevents V(D)J recombination and may cause T-negative, B-negative, NK-positive severe combined immunodeficiency."
    ],
    "teaching": "Positive selection tests self-MHC recognition; negative selection limits dangerous self-reactivity."
  },
  {
    "id": "nbme28-20261108-sle-itp",
    "topic": "Hematology",
    "level": 2,
    "stem": "A woman with systemic lupus erythematosus develops petechiae, isolated thrombocytopenia, and increased marrow megakaryocytes. What is the mechanism?",
    "options": [
      "IgG-mediated peripheral platelet destruction",
      "Microangiopathic hemolysis from Shiga toxin-associated HUS",
      "Marrow replacement producing a leukoerythroblastic smear"
    ],
    "answer": 0,
    "explanations": [
      "Lupus-associated immune thrombocytopenia involves antibody-coated platelets cleared by splenic macrophages, often with compensatory megakaryocytes.",
      "Hemolytic uremic syndrome produces thrombocytopenia with schistocytes and acute kidney injury, usually after Shiga toxin exposure.",
      "Marrow infiltration can release immature nucleated red blood cells and myeloid precursors rather than cause isolated immune platelet loss."
    ],
    "teaching": "SLE can cause secondary immune thrombocytopenia with increased megakaryocytes and mucocutaneous bleeding."
  },
  {
    "id": "nbme28-20261108-sle-aps",
    "topic": "Hematology",
    "level": 2,
    "stem": "A woman with lupus has recurrent deep vein thrombosis and pregnancy losses with persistently positive anticardiolipin antibodies. Which syndrome is likely?",
    "options": [
      "Antiphospholipid syndrome",
      "Immune thrombocytopenia",
      "Evans syndrome"
    ],
    "answer": 0,
    "explanations": [
      "Antiphospholipid syndrome causes arterial/venous thrombosis and obstetric morbidity; antibodies must persist on testing at least 12 weeks apart.",
      "Immune thrombocytopenia mainly produces low platelets with mucocutaneous bleeding, not recurrent thromboses and pregnancy morbidity.",
      "Evans syndrome combines autoimmune hemolytic anemia and immune thrombocytopenia, without defining antiphospholipid antibodies."
    ],
    "teaching": "Antiphospholipid syndrome is prothrombotic despite possible mild thrombocytopenia."
  },
  {
    "id": "nbme28-20261108-hus-contrast",
    "topic": "Hematology",
    "level": 2,
    "stem": "A child develops bloody diarrhea followed by anemia, fragmented red cells, thrombocytopenia, and acute kidney injury. What is most likely?",
    "options": [
      "Hemolytic uremic syndrome",
      "Immune thrombocytopenia",
      "Multiple myeloma with rouleaux formation"
    ],
    "answer": 0,
    "explanations": [
      "Shiga toxin-associated HUS causes microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury.",
      "Immune thrombocytopenia can cause petechiae but does not by itself cause schistocytes and acute kidney injury.",
      "Multiple myeloma causes elevated immunoglobulins and rouleaux stacking, not the classic postdiarrheal HUS triad."
    ],
    "teaching": "HUS triad = microangiopathic hemolytic anemia + thrombocytopenia + acute kidney injury."
  },
  {
    "id": "nbme28-20261108-rouleaux",
    "topic": "Hematology",
    "level": 2,
    "stem": "A blood smear shows red blood cells stacked like coins in a patient with back pain, anemia, and elevated total protein. What explains the smear?",
    "options": [
      "Increased immunoglobulins decreasing erythrocyte repulsion",
      "Platelet-directed IgG causing splenic clearance",
      "Deficient folate causing impaired DNA synthesis"
    ],
    "answer": 0,
    "explanations": [
      "Monoclonal immunoglobulins in multiple myeloma promote rouleaux by reducing the red cell zeta potential.",
      "Immune thrombocytopenia destroys platelets but does not produce red cell rouleaux.",
      "Folate deficiency causes megaloblastic macrocytosis and hypersegmented neutrophils."
    ],
    "teaching": "Rouleaux = elevated plasma proteins such as monoclonal immunoglobulins, classically multiple myeloma."
  }
]);
