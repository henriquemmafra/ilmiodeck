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
  },
  {
    "id": "nbme28-20261108-chemo-growth-fraction",
    "topic": "Pharmacology",
    "level": 1,
    "stem": "A patient develops neutropenia, mucositis, and alopecia after cytotoxic chemotherapy. What do the affected tissues have in common?",
    "options": [
      "High growth fraction and rapid cell turnover",
      "High abundance of postmitotic contractile cells",
      "Low DNA synthesis and minimal cell division"
    ],
    "answer": 0,
    "explanations": [
      "Bone marrow precursors, intestinal crypt cells, and hair matrix cells divide frequently and are vulnerable to cytotoxic chemotherapy.",
      "Cardiac and skeletal myocytes are largely postmitotic; some agents cause their own organ-specific toxicity, but not the classic rapid-turnover triad.",
      "Tissues with little proliferation are generally less sensitive to the nonspecific antiproliferative effects of many cytotoxic drugs."
    ],
    "teaching": "Rapidly proliferating normal tissue explains common marrow suppression, gastrointestinal mucositis, and alopecia."
  },
  {
    "id": "nbme28-20261108-5fu-leucovorin",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "Why is leucovorin administered with 5-fluorouracil in a regimen for metastatic colorectal cancer?",
    "options": [
      "It enhances inhibition of thymidylate synthase",
      "It rescues normal cells from 5-fluorouracil toxicity",
      "It inhibits topoisomerase I and prevents DNA repair"
    ],
    "answer": 0,
    "explanations": [
      "Leucovorin increases reduced folate availability and stabilizes the inhibitory FdUMP–thymidylate synthase–folate complex, potentiating 5-FU.",
      "Leucovorin rescues cells from methotrexate toxicity by bypassing dihydrofolate reductase inhibition; it does not rescue 5-FU toxicity.",
      "Irinotecan inhibits topoisomerase I; leucovorin is a reduced folate, not a topoisomerase inhibitor."
    ],
    "teaching": "Leucovorin potentiates 5-FU but rescues methotrexate toxicity—a favorite Step 1 contrast."
  },
  {
    "id": "nbme28-20261108-irinotecan-early-diarrhea",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "A patient receiving irinotecan develops acute abdominal cramping, diaphoresis, and diarrhea during infusion. Which medication treats this reaction?",
    "options": [
      "Atropine",
      "Loperamide",
      "Mesna"
    ],
    "answer": 0,
    "explanations": [
      "Early irinotecan-associated diarrhea is an acute cholinergic syndrome and may respond to atropine, a muscarinic antagonist.",
      "Late irinotecan-associated secretory diarrhea generally occurs more than 24 hours after administration and is managed with loperamide when appropriate.",
      "Mesna binds toxic acrolein metabolites to prevent hemorrhagic cystitis from ifosfamide and high-dose cyclophosphamide."
    ],
    "teaching": "Irinotecan inhibits topoisomerase I; early cholinergic diarrhea → atropine, delayed diarrhea → loperamide."
  },
  {
    "id": "nbme28-20261108-5fu-dpd-deficiency",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "A patient develops unexpectedly severe mucositis, pancytopenia, and diarrhea after standard-dose 5-fluorouracil. Which enzyme deficiency is likely?",
    "options": [
      "Dihydropyrimidine dehydrogenase",
      "Thiopurine methyltransferase",
      "Dihydrofolate reductase"
    ],
    "answer": 0,
    "explanations": [
      "Dihydropyrimidine dehydrogenase catabolizes 5-FU; deficiency markedly increases exposure and potentially life-threatening toxicity.",
      "Thiopurine methyltransferase deficiency raises toxicity from thiopurines such as 6-mercaptopurine and azathioprine.",
      "Dihydrofolate reductase is inhibited by methotrexate, whose cytotoxic effects can be mitigated with leucovorin rescue."
    ],
    "teaching": "DPD deficiency (often DPYD variants) causes severe 5-FU toxicity; TPMT deficiency causes thiopurine toxicity."
  },
  {
    "id": "nbme28-20261108-zenker-vagus",
    "topic": "Anatomy",
    "level": 2,
    "stem": "A patient has a posterior hypopharyngeal Zenker diverticulum between the thyropharyngeus and cricopharyngeus. Which nerve supplies these muscles?",
    "options": [
      "Motor fibers of the vagus nerve (CN X)",
      "Motor fibers of the glossopharyngeal nerve (CN IX)",
      "Motor fibers of the hypoglossal nerve (CN XII)"
    ],
    "answer": 0,
    "explanations": [
      "The inferior pharyngeal constrictor (thyropharyngeus and cricopharyngeus) receives branchial motor innervation from the vagus nerve.",
      "The glossopharyngeal nerve supplies stylopharyngeus, the major exception to vagal motor innervation of pharyngeal muscles.",
      "The hypoglossal nerve supplies most intrinsic and extrinsic tongue muscles, not the inferior pharyngeal constrictor."
    ],
    "teaching": "CN IX = stylopharyngeus; CN X = pharyngeal constrictors; CN XII = most tongue muscles."
  },
  {
    "id": "nbme28-20261108-zenker-presentation",
    "topic": "Gastroenterology",
    "level": 2,
    "stem": "An older adult has dysphagia, halitosis, gurgling in the neck, and regurgitation of undigested food. Which lesion is most likely?",
    "options": [
      "Zenker diverticulum due to impaired upper esophageal sphincter opening",
      "Achalasia due to failure of lower esophageal sphincter relaxation",
      "Esophageal varices due to portal hypertension"
    ],
    "answer": 0,
    "explanations": [
      "Zenker diverticulum is a posterior pharyngoesophageal false diverticulum through Killian dehiscence, classically causing retained food, halitosis, and regurgitation.",
      "Achalasia causes impaired lower esophageal sphincter relaxation, dysphagia to solids and liquids, and bird-beak narrowing.",
      "Esophageal varices are dilated submucosal veins due to portal hypertension and commonly present with upper gastrointestinal bleeding."
    ],
    "teaching": "Regurgitation of undigested food plus cervical gurgling and halitosis suggests Zenker diverticulum."
  },
  {
    "id": "nbme28-20261108-swallow-motor-vs-autonomic",
    "topic": "Anatomy",
    "level": 2,
    "stem": "The vagus nerve contracts pharyngeal skeletal muscle during swallowing. Which functional component of the nerve mediates this action?",
    "options": [
      "Branchial motor (special visceral efferent) fibers",
      "Parasympathetic (general visceral efferent) fibers",
      "Visceral sensory (general visceral afferent) fibers"
    ],
    "answer": 0,
    "explanations": [
      "Branchial motor fibers from CN X activate striated pharyngeal muscles derived from the pharyngeal arches.",
      "Parasympathetic fibers regulate smooth muscle, cardiac muscle, and glands rather than directly activating skeletal pharyngeal constrictors.",
      "Visceral afferent fibers carry sensory information from organs and do not provide efferent contraction of pharyngeal skeletal muscle."
    ],
    "teaching": "The vagus carries branchial motor, autonomic, and sensory fibers; pharyngeal constrictors use branchial motor fibers."
  },
  {
    "id": "nbme28-20261108-killian-jamieson",
    "topic": "Gastroenterology",
    "level": 2,
    "stem": "A contrast esophagram shows an anterolateral cervical esophageal pouch below the cricopharyngeus, near the recurrent laryngeal nerve. Diagnosis?",
    "options": [
      "Killian–Jamieson diverticulum",
      "Zenker diverticulum",
      "Epiphrenic diverticulum"
    ],
    "answer": 0,
    "explanations": [
      "Killian–Jamieson is an anterolateral pulsion pseudodiverticulum arising below the cricopharyngeus near the recurrent laryngeal nerve.",
      "Zenker arises posteriorly above the cricopharyngeus through Killian dehiscence and can cause halitosis and undigested food regurgitation.",
      "Epiphrenic diverticula arise in the distal esophagus near the diaphragm, commonly with an underlying motility disorder."
    ],
    "teaching": "Zenker: posterior and above the cricopharyngeus; Killian–Jamieson: anterolateral and below it."
  },
  {
    "id": "nbme28-20261108-traction",
    "topic": "Gastroenterology",
    "level": 2,
    "stem": "A patient with remote mediastinal tuberculosis develops a small outpouching of the middle esophagus. What mechanism is most likely?",
    "options": [
      "External fibrotic traction on the esophageal wall",
      "Increased distal intraluminal pressure from achalasia",
      "Impaired cricopharyngeal relaxation at Killian dehiscence"
    ],
    "answer": 0,
    "explanations": [
      "Midesophageal traction diverticula classically arise when mediastinal inflammatory scarring pulls outward on the esophageal wall; they are often true diverticula.",
      "Distal motility disorders such as achalasia can cause an epiphrenic pulsion diverticulum near the diaphragm.",
      "Zenker is a posterior pharyngoesophageal pulsion pseudodiverticulum above the cricopharyngeus."
    ],
    "teaching": "Midesophageal + prior mediastinal inflammation = traction, classically true; distal + dysmotility = epiphrenic pulsion."
  },
  {
    "id": "nbme28-20261108-epiphrenic",
    "topic": "Gastroenterology",
    "level": 2,
    "stem": "A barium swallow shows a diverticular pouch 4 cm above the diaphragm in a patient with achalasia. Which diverticulum is it?",
    "options": [
      "Zenker diverticulum",
      "Epiphrenic diverticulum",
      "Traction diverticulum of the middle esophagus"
    ],
    "answer": 1,
    "explanations": [
      "Zenker originates in the posterior hypopharynx, above the upper esophageal sphincter.",
      "Epiphrenic diverticula arise in the distal esophagus and are usually pulsion pseudodiverticula associated with dysmotility such as achalasia.",
      "Classic traction diverticula lie in the middle esophagus and result from external mediastinal inflammation or fibrosis."
    ],
    "teaching": "Epiphrenic = distal esophageal pulsion diverticulum associated with motility disorders."
  },
  {
    "id": "nbme28-20261108-tnf-granuloma",
    "topic": "Immunology",
    "level": 2,
    "stem": "A patient receiving infliximab for Crohn disease develops reactivated pulmonary tuberculosis. Which immune function was impaired?",
    "options": [
      "TNF-alpha-mediated granuloma maintenance",
      "TGF-beta-mediated fibroblast collagen deposition",
      "IL-8-mediated neutrophil chemotaxis"
    ],
    "answer": 0,
    "explanations": [
      "TNF-alpha is essential to granuloma formation and maintenance; anti-TNF treatment may reactivate latent tuberculosis.",
      "TGF-beta activates SMAD signaling, promotes tissue repair and fibrosis, and regulates immune responses; it is not the principal granuloma-maintaining cytokine.",
      "IL-8 (CXCL8) recruits neutrophils to inflammatory sites, but anti-TNF-associated TB reactivation reflects loss of granuloma integrity."
    ],
    "teaching": "Anti-TNF drugs impair granuloma maintenance: screen for latent TB before infliximab or adalimumab."
  },
  {
    "id": "nbme28-20261108-tgf-fibrosis",
    "topic": "Immunology",
    "level": 2,
    "stem": "A patient develops progressive tissue fibrosis due to fibroblast activation and excess extracellular matrix synthesis. Which cytokine is most directly involved?",
    "options": [
      "Interferon-gamma (IFN-gamma)",
      "Transforming growth factor-beta (TGF-beta)",
      "Tumor necrosis factor-alpha (TNF-alpha)"
    ],
    "answer": 1,
    "explanations": [
      "IFN-gamma primarily activates macrophages and supports Th1 responses against intracellular pathogens.",
      "TGF-beta signals through SMAD2/3 to promote fibroblast activation and collagen deposition; it also has immunoregulatory functions.",
      "TNF-alpha mainly promotes inflammation, endothelial activation, and granuloma maintenance rather than being the signature profibrotic cytokine."
    ],
    "teaching": "TGF-beta = tissue repair and fibrosis via SMAD; TNF-alpha = inflammation and granuloma maintenance."
  },
  {
    "id": "nbme28-20261108-ifng-macrophages",
    "topic": "Immunology",
    "level": 2,
    "stem": "A patient has recurrent disseminated infections with intracellular mycobacteria due to inadequate macrophage activation. Which cytokine pathway is most relevant?",
    "options": [
      "IL-4 signaling for IgE class switching",
      "IFN-gamma signaling from Th1 and NK cells",
      "TGF-beta signaling for collagen synthesis"
    ],
    "answer": 1,
    "explanations": [
      "IL-4 promotes Th2 responses and immunoglobulin class switching to IgE; it is not the main macrophage-activating cytokine.",
      "IFN-gamma activates macrophage antimicrobial functions; impaired IL-12/IFN-gamma signaling predisposes to disseminated intracellular infections.",
      "TGF-beta primarily regulates immune responses and promotes fibrosis; it is not the principal Th1 macrophage activation signal."
    ],
    "teaching": "IL-12 drives Th1 differentiation, IFN-gamma activates macrophages, and TNF-alpha preserves granulomas."
  },
  {
    "id": "nbme28-20261108-cervix-lymph",
    "topic": "Anatomy",
    "level": 2,
    "stem": "An invasive squamous cell carcinoma arising in the uterine cervix spreads through regional lymphatics. Which nodes are an expected early draining station?",
    "options": [
      "Internal iliac pelvic nodes",
      "Superficial inguinal nodes",
      "Para-aortic lumbar nodes as the exclusive first station"
    ],
    "answer": 0,
    "explanations": [
      "Internal iliac and other pelvic nodes, including obturator nodes, are major regional drainage stations for cervical carcinoma.",
      "Superficial inguinal nodes receive lymph from the vulva, lower vaginal region, scrotal skin, and anal canal below the pectinate line.",
      "Para-aortic nodes primarily receive lymph from gonads such as the ovaries and testes; cervical cancer generally reaches pelvic stations first."
    ],
    "teaching": "Cervix → pelvic (including internal iliac/obturator); ovary/testis → para-aortic; vulva/scrotal skin → superficial inguinal."
  },
  {
    "id": "nbme28-20261108-tnf-secretion-receptors",
    "topic": "Immunology",
    "level": 2,
    "stem": "A macrophage infected by Mycobacterium tuberculosis releases TNF-alpha. Which cell responds directly to this cytokine?",
    "options": [
      "Nearby macrophages expressing TNF receptors",
      "Only B cells expressing membrane immunoglobulin",
      "Only hepatocytes expressing the IL-6 receptor"
    ],
    "answer": 0,
    "explanations": [
      "TNF-alpha binds TNFR1 or TNFR2 on macrophages and other cells; autocrine and paracrine signaling supports granuloma organization and inflammation.",
      "B cells recognize antigen through B-cell receptors; TNF-alpha signals through TNF receptors on multiple cell types rather than exclusively through B-cell receptors.",
      "IL-6 is a major driver of hepatic acute-phase synthesis, while TNF-alpha has receptors across many tissues, including macrophages and endothelial cells."
    ],
    "teaching": "Activated macrophages are a major TNF-alpha source; TNFR1/TNFR2 on many target cells mediate inflammatory signaling."
  },
  {
    "id": "nbme28-20261108-tnf-endothelium",
    "topic": "Immunology",
    "level": 2,
    "stem": "A macrophage releases TNF-alpha during infection. What happens when TNF-alpha acts on vascular endothelium?",
    "options": [
      "Increased endothelial adhesion molecule expression",
      "Increased immunoglobulin E class switching through IL-4",
      "Increased fibroblast collagen deposition through SMAD2/3"
    ],
    "answer": 0,
    "explanations": [
      "TNF-alpha activates endothelial cells and increases adhesion molecules such as E-selectin, ICAM-1, and VCAM-1, facilitating leukocyte recruitment.",
      "IL-4 from Th2 cells helps promote IgE class switching and is not the principal endothelial effect of TNF-alpha.",
      "TGF-beta signals via SMAD2/3 to promote fibroblast activation and collagen synthesis; this is not the primary TNF-alpha effect described."
    ],
    "teaching": "Macrophage TNF-alpha → endothelial activation → adhesion molecules → leukocyte recruitment; anti-TNF weakens granulomas."
  },
  {
    "id": "nbme28-20261108-il12-ifng-loop",
    "topic": "Immunology",
    "level": 2,
    "stem": "A macrophage engulfs M. tuberculosis and secretes a cytokine that promotes Th1 differentiation and IFN-gamma secretion. Which cytokine is it?",
    "options": [
      "IL-12",
      "TNF-alpha",
      "TGF-beta"
    ],
    "answer": 0,
    "explanations": [
      "IL-12 from macrophages and dendritic cells stimulates NK cells and promotes Th1 differentiation, leading to IFN-gamma production.",
      "TNF-alpha promotes endothelial activation and granuloma formation and maintenance; it is not the key driver of Th1 differentiation.",
      "TGF-beta regulates immune responses and promotes fibrosis; with particular cytokines it can support Th17 differentiation rather than classical Th1 activation."
    ],
    "teaching": "Macrophage IL-12 → Th1/NK IFN-gamma → macrophage activation; TNF-alpha maintains granulomas."
  },
  {
    "id": "nbme28-20261108-ifng-stat1",
    "topic": "Immunology",
    "level": 3,
    "stem": "IFN-gamma released by Th1 cells binds a macrophage receptor. Which downstream pathway enhances intracellular mycobacterial killing?",
    "options": [
      "JAK1/JAK2–STAT1 signaling",
      "SMAD2/3 signaling after TGF-beta receptor activation",
      "Gq–phospholipase C–IP3 signaling"
    ],
    "answer": 0,
    "explanations": [
      "IFN-gamma receptors activate JAK1/JAK2–STAT1, inducing macrophage antimicrobial genes and enhancing phagolysosomal function.",
      "TGF-beta receptors activate SMAD2/3 and participate in immune regulation and fibrosis rather than classical IFN-gamma signaling.",
      "Gq–phospholipase C–IP3 is used by many seven-transmembrane G-protein-coupled receptors, not by IFN-gamma receptors."
    ],
    "teaching": "IFN-gamma → IFNGR → JAK1/JAK2 → STAT1 → macrophage antimicrobial activation."
  }
]);
