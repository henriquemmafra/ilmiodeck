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
  },
  {
    "id": "nbme28-20261108-hav-extrinsic-apoptosis",
    "topic": "Immunology",
    "level": 2,
    "stem": "A patient with acute hepatitis A develops apoptotic hepatocytes after CD8+ T-cell recognition of infected cells. Which signaling cascade mediates death-receptor apoptosis?",
    "options": [
      "Fas–FasL → FADD → caspase-8",
      "BAX/BAK → cytochrome c → caspase-9",
      "NLRP3 inflammasome → caspase-1 → gasdermin D"
    ],
    "answer": 0,
    "explanations": [
      "Fas ligand on cytotoxic T cells engages Fas (CD95), recruits FADD, and activates initiator caspase-8; executioner caspases such as caspase-3 then drive apoptosis.",
      "Mitochondrial outer-membrane permeabilization and cytochrome c release initiate intrinsic apoptosis via the Apaf-1 apoptosome and caspase-9.",
      "Inflammasome-driven caspase-1 cleaves gasdermin D, triggering inflammatory pyroptosis rather than classical death-receptor apoptosis."
    ],
    "teaching": "Acute viral hepatitis often causes immune-mediated hepatocyte apoptosis; Fas/FasL = extrinsic pathway = caspase-8."
  },
  {
    "id": "nbme28-20261108-councilman-body",
    "topic": "General Pathology",
    "level": 2,
    "stem": "A liver biopsy from a patient with acute viral hepatitis shows isolated shrunken eosinophilic hepatocytes with condensed nuclear remnants. What are these structures?",
    "options": [
      "Councilman (acidophilic) apoptotic bodies",
      "Mallory–Denk bodies",
      "Noncaseating granulomas"
    ],
    "answer": 0,
    "explanations": [
      "Councilman bodies are eosinophilic apoptotic hepatocytes classically seen in acute viral hepatitis and yellow fever.",
      "Mallory–Denk bodies are cytoplasmic keratin aggregates within injured ballooned hepatocytes, classically associated with steatohepatitis.",
      "Noncaseating granulomas are organized macrophage aggregates seen in conditions such as sarcoidosis and some granulomatous hepatitis cases."
    ],
    "teaching": "Councilman body = shrunken eosinophilic apoptotic hepatocyte; Mallory–Denk body = cytokeratin inclusion."
  },
  {
    "id": "nbme28-20261108-cd8-cytotoxic-pathways",
    "topic": "Immunology",
    "level": 2,
    "stem": "A CD8+ T lymphocyte recognizes an infected hepatocyte and delivers granzymes into its cytosol. Which molecule forms pores that facilitate granzyme entry?",
    "options": [
      "Perforin",
      "Fas ligand (FasL)",
      "BCL-2"
    ],
    "answer": 0,
    "explanations": [
      "Perforin facilitates granzyme entry into target cells; granzyme B can activate apoptotic caspases and mitochondrial death signaling.",
      "Fas ligand binds the Fas death receptor and initiates extrinsic apoptosis via FADD and caspase-8, rather than delivering granzymes.",
      "BCL-2 is an antiapoptotic mitochondrial protein that blocks BAX/BAK-mediated outer-membrane permeabilization."
    ],
    "teaching": "Cytotoxic CD8+ T cells kill by Fas–FasL or perforin–granzyme pathways; both can cause apoptosis."
  },
  {
    "id": "nbme28-20261108-hemophilia-cross-correction",
    "topic": "Hematology",
    "level": 2,
    "stem": "A boy has normal PT, bleeding time, and platelets but prolonged aPTT. His aPTT corrects after mixing his plasma with plasma from a patient with hemophilia A. What is the most likely deficiency?",
    "options": [
      "Factor IX (hemophilia B)",
      "Factor VIII (hemophilia A)",
      "Von Willebrand factor"
    ],
    "answer": 0,
    "explanations": [
      "Plasma from a patient with hemophilia A lacks factor VIII but contains factor IX; it complements factor IX deficiency in hemophilia B.",
      "If both plasma samples lacked factor VIII, mixing them would not adequately restore factor VIII activity or correct the aPTT.",
      "Von Willebrand disease primarily impairs platelet adhesion, often causes mucocutaneous bleeding, and may secondarily reduce factor VIII; it does not explain the classic hemophilia A plasma-complementation result as well as factor IX deficiency."
    ],
    "teaching": "Hemophilia A = factor VIII deficiency; hemophilia B = factor IX deficiency. Factor IX in hemophilia A plasma can correct hemophilia B aPTT."
  },
  {
    "id": "nbme28-20261108-mixing-study-inhibitor",
    "topic": "Hematology",
    "level": 2,
    "stem": "An isolated prolonged aPTT fails to correct after a 1:1 mixing study with normal plasma, including after incubation. What is the most likely explanation?",
    "options": [
      "A circulating coagulation inhibitor",
      "An isolated factor IX deficiency",
      "A low platelet count without a plasma coagulation disorder"
    ],
    "answer": 0,
    "explanations": [
      "A persistent failure to correct with normal plasma suggests an inhibitor such as lupus anticoagulant or a specific factor inhibitor; interpretation depends on assay and incubation.",
      "An isolated factor IX deficiency usually corrects when normal plasma supplies the missing factor.",
      "Platelet count changes do not usually cause an isolated prolonged aPTT, which measures plasma clotting factor activity."
    ],
    "teaching": "Mixing with normal plasma: correction suggests factor deficiency; persistent noncorrection suggests an inhibitor."
  },
  {
    "id": "nbme28-20261108-coagulation-factor-pattern",
    "topic": "Hematology",
    "level": 2,
    "stem": "A patient has prolonged PT but normal aPTT due to an isolated inherited clotting-factor deficiency. Which factor is most likely deficient?",
    "options": [
      "Factor VII",
      "Factor IX",
      "Factor V"
    ],
    "answer": 0,
    "explanations": [
      "Factor VII is in the extrinsic pathway; isolated factor VII deficiency causes a prolonged PT with normal aPTT.",
      "Factor IX is part of the intrinsic pathway; deficiency causes hemophilia B with prolonged aPTT and normal PT.",
      "Factor V belongs to the common pathway; severe factor V deficiency generally prolongs both PT and aPTT."
    ],
    "teaching": "Factor VII → PT; factors VIII/IX → aPTT; common-pathway factors such as V → both PT and aPTT."
  },
  {
    "id": "nbme28-20261108-somatic-symptom",
    "topic": "Psychiatry",
    "level": 2,
    "stem": "A woman reports multiple distressing physical symptoms over many years and devotes excessive time and energy to them. Evaluation has not identified a unifying disease. What is the best diagnosis?",
    "options": [
      "Somatic symptom disorder",
      "Illness anxiety disorder",
      "Functional neurological symptom disorder"
    ],
    "answer": 0,
    "explanations": [
      "Somatic symptom disorder requires one or more distressing somatic symptoms with excessive symptom-related thoughts, feelings, or behaviors and persistent symptom state (typically over 6 months). Symptoms may or may not have a medical explanation.",
      "Illness anxiety disorder features predominant fear of having or developing a serious illness, with absent or only mild physical symptoms.",
      "Functional neurological symptom disorder features motor or sensory deficits with positive clinical evidence of incompatibility with recognized neurological disease."
    ],
    "teaching": "Somatic symptom disorder emphasizes distressing bodily symptoms plus excessive symptom-focused responses; unexplained symptoms alone are insufficient."
  },
  {
    "id": "nbme28-20261108-factitious-malingering",
    "topic": "Psychiatry",
    "level": 2,
    "stem": "A patient intentionally falsifies laboratory findings to assume the sick role despite no clear financial, legal, or other external reward. What is most likely?",
    "options": [
      "Factitious disorder",
      "Malingering",
      "Somatic symptom disorder"
    ],
    "answer": 0,
    "explanations": [
      "Factitious disorder involves intentional deception about illness without an obvious external incentive; the motive is not necessarily consciously understood.",
      "Malingering is intentional symptom fabrication or exaggeration motivated by identifiable external incentives, such as money, avoiding work, or obtaining drugs.",
      "Somatic symptom disorder does not require intentional falsification, and patients experience distressing symptoms with excessive symptom-related concern."
    ],
    "teaching": "Factitious = intentional deception without obvious external gain; malingering = intentional deception for external gain."
  },
  {
    "id": "nbme28-20261108-illness-anxiety",
    "topic": "Psychiatry",
    "level": 2,
    "stem": "A patient with minimal bodily symptoms persistently fears having cancer despite appropriate reassurance and repeatedly checks for signs of disease. Which condition is most likely?",
    "options": [
      "Somatic symptom disorder",
      "Illness anxiety disorder",
      "Factitious disorder"
    ],
    "answer": 1,
    "explanations": [
      "Somatic symptom disorder has one or more prominent, distressing physical symptoms and disproportionate related concern or behavior.",
      "Illness anxiety disorder involves persistent preoccupation with having a serious illness despite absent or mild somatic symptoms, with excessive checking or avoidance.",
      "Factitious disorder involves intentional falsification or induction of signs and symptoms without obvious external reward."
    ],
    "teaching": "Illness anxiety = fear of disease with little/no physical symptoms; somatic symptom disorder = prominent distressing symptoms."
  },
  {
    "id": "nbme28-20261108-adhd-catecholamines",
    "topic": "Psychiatry",
    "level": 2,
    "stem": "A 7-year-old child has persistent inattention, impulsivity, and hyperactivity in school and at home. First-line stimulant medications primarily enhance signaling by which neurotransmitters?",
    "options": [
      "Dopamine and norepinephrine",
      "Gamma-aminobutyric acid and histamine",
      "Serotonin and acetylcholine"
    ],
    "answer": 0,
    "explanations": [
      "Stimulants such as methylphenidate and amphetamine increase synaptic dopamine and norepinephrine, enhancing attention and behavioral regulation.",
      "GABA is the main inhibitory neurotransmitter, and many antihistamines cause sedation; increasing sedation is not the primary mechanism of first-line ADHD stimulants.",
      "Serotonergic drugs are important in depression and anxiety, and acetylcholine supports several cognitive functions, but they are not the main neurotransmitter targets of first-line ADHD stimulants."
    ],
    "teaching": "ADHD stimulants enhance dopamine and norepinephrine transmission, not simply generalized CNS inhibition."
  },
  {
    "id": "nbme28-20261108-methylphenidate-vs-amphetamine",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "A child starts methylphenidate for ADHD. What is its principal action compared with amphetamine?",
    "options": [
      "Block dopamine and norepinephrine reuptake transporters",
      "Promote presynaptic catecholamine release and reverse transport",
      "Selectively activate postsynaptic alpha-2A adrenergic receptors"
    ],
    "answer": 0,
    "explanations": [
      "Methylphenidate inhibits DAT and NET, reducing reuptake of dopamine and norepinephrine.",
      "Amphetamines increase catecholamine release, in part through transporter reversal and vesicular monoamine transporter effects.",
      "Guanfacine is an alpha-2A adrenergic receptor agonist used as a nonstimulant option in ADHD."
    ],
    "teaching": "Methylphenidate blocks DAT/NET; amphetamines promote DA/NE release; guanfacine activates alpha-2A receptors."
  },
  {
    "id": "nbme28-20261108-adhd-nonstimulants",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "A child with ADHD cannot tolerate stimulants and is prescribed atomoxetine. Which mechanism best describes this drug?",
    "options": [
      "Selective norepinephrine reuptake inhibition",
      "Dopamine D2 receptor blockade",
      "Positive allosteric modulation of GABA-A receptors"
    ],
    "answer": 0,
    "explanations": [
      "Atomoxetine selectively inhibits the norepinephrine transporter, increasing norepinephrine and indirectly prefrontal cortical dopamine.",
      "Dopamine D2 receptor antagonists are antipsychotic drugs; blocking D2 receptors is not atomoxetine's mechanism.",
      "Benzodiazepines enhance GABA-A receptor activity but are not standard treatment for core ADHD symptoms."
    ],
    "teaching": "Atomoxetine = NET inhibitor; methylphenidate = DAT/NET inhibitor; amphetamine = increases catecholamine release."
  },
  {
    "id": "nbme28-20261108-down-first-trimester",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "A pregnant patient undergoes first-trimester aneuploidy screening. Which combination is most characteristic of fetal trisomy 21?",
    "options": [
      "Increased nuchal translucency, decreased PAPP-A, increased free beta-hCG",
      "Increased nuchal translucency, decreased PAPP-A, decreased free beta-hCG",
      "Normal nuchal translucency, elevated maternal serum AFP, decreased hCG"
    ],
    "answer": 0,
    "explanations": [
      "Trisomy 21 is associated with increased nuchal translucency, low pregnancy-associated plasma protein A, and elevated free beta-hCG in first-trimester combined screening.",
      "Trisomy 18 often has increased nuchal translucency and low PAPP-A, but free beta-hCG is typically decreased, not increased.",
      "High maternal serum alpha-fetoprotein is a second-trimester marker for open fetal neural tube defects, not the characteristic first-trimester Down syndrome pattern."
    ],
    "teaching": "Trisomy 21 first trimester: nuchal translucency up, PAPP-A down, free beta-hCG up; trisomy 18 typically has both serum markers down."
  },
  {
    "id": "nbme28-20261108-down-quad-screen",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "A second-trimester maternal serum quadruple screen raises concern for trisomy 21. Which marker pattern is expected?",
    "options": [
      "Low AFP, low unconjugated estriol, high hCG, high inhibin A",
      "High AFP, normal estriol, normal hCG, normal inhibin A",
      "Low AFP, low estriol, low hCG, and generally normal inhibin A"
    ],
    "answer": 0,
    "explanations": [
      "Trisomy 21 classically decreases AFP and unconjugated estriol while increasing hCG and inhibin A on second-trimester quadruple screening.",
      "Open neural tube defects typically raise maternal serum AFP, which is not the classic pattern of Down syndrome.",
      "Trisomy 18 usually decreases AFP, estriol, and hCG; inhibin A is generally not elevated as it is in trisomy 21."
    ],
    "teaching": "Down syndrome second trimester: AFP down, estriol down, hCG up, inhibin A up."
  },
  {
    "id": "nbme28-20261108-prenatal-confirmation",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "A patient at 12 weeks' gestation has a high-risk noninvasive screening result for trisomy 21. Which test can provide definitive fetal chromosome diagnosis at this gestational age?",
    "options": [
      "Chorionic villus sampling with chromosomal analysis",
      "Repeat cell-free fetal DNA screening only",
      "Maternal serum quadruple screen"
    ],
    "answer": 0,
    "explanations": [
      "Chorionic villus sampling is generally performed at 10–13 weeks and can obtain placental tissue for diagnostic chromosomal analysis; placental mosaicism may occasionally require follow-up.",
      "Cell-free DNA analysis is a highly accurate screening test, but positive results require diagnostic confirmation rather than simply another screening result.",
      "Quadruple serum screening is a second-trimester risk assessment, not a diagnostic fetal karyotype."
    ],
    "teaching": "Positive aneuploidy screening needs diagnostic confirmation: CVS at about 10–13 weeks or amniocentesis from 15 weeks."
  },
  {
    "id": "nbme28-20261108-trisomy21-maternal-age",
    "topic": "Genetics",
    "level": 2,
    "stem": "Why does increasing maternal age increase the probability of fetal trisomy 21?",
    "options": [
      "Increased risk of meiotic nondisjunction in maternal oocytes",
      "Increased probability of germline DNA polymerase point mutations",
      "Increased risk of mitochondrial DNA maternal inheritance"
    ],
    "answer": 0,
    "explanations": [
      "Age-related meiotic nondisjunction, most often during maternal meiosis I, is the main mechanism of trisomy 21.",
      "Errors in DNA polymerase may cause point mutations, but they do not explain the characteristic age-related risk of an extra chromosome 21.",
      "Mitochondrial inheritance transmits mitochondrial variants through maternal cytoplasm and does not cause autosomal trisomy 21."
    ],
    "teaching": "Most Down syndrome is caused by maternal meiotic nondisjunction; a minority results from Robertsonian translocation or mosaicism."
  },
  {
    "id": "gestational-20261108-hcg-peaks-early",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "During a normal pregnancy, maternal serum hCG peaks at about 9–10 weeks. What generally happens thereafter?",
    "options": [
      "It declines and remains at a lower level for the rest of gestation",
      "It rises steadily until labor begins",
      "It becomes undetectable as soon as the placenta produces progesterone"
    ],
    "answer": 0,
    "explanations": [
      "hCG rises rapidly during early pregnancy, peaks near 8–10 weeks, then declines to a lower plateau as the placenta assumes progesterone production.",
      "Human placental lactogen, not hCG, generally rises with placental mass toward term.",
      "hCG remains detectable during pregnancy even after the luteal–placental shift."
    ],
    "teaching": "hCG peaks in the first trimester; hPL and placental steroids generally increase with advancing gestation."
  },
  {
    "id": "gestational-20261108-pappa-relative-not-falling",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "First-trimester PAPP-A is reported as 0.35 multiples of the median in a pregnancy affected by trisomy 21. Which statement is most accurate?",
    "options": [
      "PAPP-A is low relative to the expected value at the same gestational age",
      "PAPP-A must continuously decline from conception until delivery",
      "Low PAPP-A alone establishes a diagnosis of trisomy 21"
    ],
    "answer": 0,
    "explanations": [
      "A low multiple of the median means that serum PAPP-A is below the gestational-age-adjusted expected concentration; absolute PAPP-A normally rises during pregnancy.",
      "PAPP-A concentrations normally rise as pregnancy progresses, although they are often relatively low during first-trimester trisomy 21 screening.",
      "PAPP-A is a nonspecific screening marker; diagnosis of fetal aneuploidy requires appropriate diagnostic genetic testing."
    ],
    "teaching": "PAPP-A in trisomy 21 is low for gestational age; this does not imply that its absolute level is falling."
  },
  {
    "id": "gestational-20261108-pappa-igf",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "Placental pregnancy-associated plasma protein A helps fetal growth by cleaving IGF-binding protein 4. What is the result?",
    "options": [
      "Greater local availability of insulin-like growth factor",
      "Direct stimulation of the maternal thyroid through TSH receptors",
      "Direct induction of myometrial contractions through oxytocin receptors"
    ],
    "answer": 0,
    "explanations": [
      "PAPP-A is a protease that cleaves IGF-binding proteins such as IGFBP-4, allowing more local IGF signaling involved in growth.",
      "High hCG can weakly stimulate TSH receptors, but this is not the principal role of PAPP-A.",
      "Oxytocin receptor signaling promotes myometrial contractions; PAPP-A is not the primary uterotonic signal."
    ],
    "teaching": "PAPP-A → IGFBP cleavage → increased local IGF bioavailability and placental/fetal growth."
  },
  {
    "id": "gestational-20261108-hpl-term",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "Which placental hormone generally increases through pregnancy and promotes maternal insulin resistance and lipolysis to spare glucose for the fetus?",
    "options": [
      "Human placental lactogen (hPL)",
      "Human chorionic gonadotropin (hCG)",
      "Follicle-stimulating hormone (FSH)"
    ],
    "answer": 0,
    "explanations": [
      "hPL is secreted by syncytiotrophoblasts, rises with placental mass, and has diabetogenic, lipolytic effects that favor fetal nutrient delivery.",
      "hCG peaks early in the first trimester and mainly supports the corpus luteum before the luteal–placental shift.",
      "FSH is suppressed during pregnancy by elevated gonadal/placental steroids and inhibin."
    ],
    "teaching": "hPL rises toward term and promotes maternal insulin resistance and lipolysis; hCG peaks early."
  },
  {
    "id": "gestational-20261108-placental-progesterone",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "A patient at term enters labor. What best describes circulating progesterone in normal human pregnancy?",
    "options": [
      "It stays high, with functional withdrawal of progesterone action in the myometrium",
      "Its serum concentration must abruptly fall before uterine contractions begin",
      "It is produced exclusively by the corpus luteum until delivery"
    ],
    "answer": 0,
    "explanations": [
      "Human maternal progesterone generally remains elevated through term; altered local receptor signaling permits functional progesterone withdrawal in the uterus.",
      "A systemic progesterone drop is not required for human labor; an abrupt fall follows delivery of the placenta.",
      "The placenta becomes the predominant progesterone source by the end of the first trimester."
    ],
    "teaching": "Human labor involves functional progesterone withdrawal, not obligatory serum progesterone withdrawal."
  },
  {
    "id": "gestational-20261108-placental-crh",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "Which placental hormone rises markedly late in pregnancy and contributes to fetal adrenal activation and the physiology of parturition?",
    "options": [
      "Corticotropin-releasing hormone (CRH)",
      "Parathyroid hormone (PTH)",
      "Thyroid-stimulating hormone (TSH)"
    ],
    "answer": 0,
    "explanations": [
      "Placental CRH rises steeply near term and participates in fetal HPA axis activity and pathways facilitating prostaglandin production and labor.",
      "PTH primarily regulates calcium and phosphate homeostasis, not the placental timing of parturition.",
      "TSH regulates thyroid hormone synthesis and is not the primary placental signal governing parturition."
    ],
    "teaching": "Placental CRH increases toward term and helps coordinate fetal–placental endocrine signals involved in labor."
  },
  {
    "id": "gestational-20261108-oxytocin-receptor",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "Why does the human myometrium become more responsive to oxytocin as term approaches?",
    "options": [
      "Increased myometrial oxytocin receptor expression",
      "Loss of all circulating maternal progesterone several weeks before delivery",
      "Decreased prostaglandin synthesis and fewer myometrial gap junctions"
    ],
    "answer": 0,
    "explanations": [
      "Estrogen-associated increases in oxytocin receptors and contraction-associated proteins enhance myometrial responsiveness near term.",
      "Maternal progesterone remains high until placental delivery; decreased functional progestational signaling is more important than a necessary systemic fall.",
      "Prostaglandin activity and myometrial gap junction formation increase, promoting coordinated labor contractions."
    ],
    "teaching": "Near term, increased oxytocin receptor density, prostaglandins, and connexin-43 gap junctions prepare the uterus for labor."
  },
  {
    "id": "gestational-20261108-estrogen-estriol-fetal",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "Maternal unconjugated estriol rises toward term. Which source provides crucial steroid precursors for placental estriol synthesis?",
    "options": [
      "The fetal adrenal glands and fetal liver",
      "Maternal thyroid follicular cells",
      "Maternal pancreatic beta cells"
    ],
    "answer": 0,
    "explanations": [
      "The fetal adrenal produces DHEA-S and the fetal liver contributes 16-alpha hydroxylation; the placenta converts precursors into estriol.",
      "Thyroid follicular cells produce thyroid hormones, not the major fetal precursors of placental estriol.",
      "Pancreatic beta cells produce insulin and do not supply the principal steroid precursor for estriol."
    ],
    "teaching": "Estriol reflects fetoplacental collaboration: fetal adrenal/liver precursors plus placental aromatization."
  },
  {
    "id": "gestational-20261108-surfactant-ls",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "In late pregnancy, the amniotic fluid lecithin-to-sphingomyelin ratio reaches 2.0. What does this historically indicate?",
    "options": [
      "Fetal pulmonary surfactant maturity",
      "Persistent surfactant deficiency due to absent lecithin",
      "Fetal trisomy 21 confirmed by amniotic fluid phospholipids"
    ],
    "answer": 0,
    "explanations": [
      "Increasing lecithin relative to relatively stable sphingomyelin was historically used as a surrogate for fetal pulmonary maturity; an L/S ratio of 2 or more suggested sufficient surfactant.",
      "Lecithin (phosphatidylcholine) rises with surfactant production, rather than indicating that surfactant is absent.",
      "The L/S ratio assesses lung maturity rather than fetal chromosomal number; modern clinical management does not routinely rely on this test."
    ],
    "teaching": "Late gestation: lecithin rises more than sphingomyelin; L/S ≥2 is a classic historical fetal lung maturity threshold."
  },
  {
    "id": "gestational-20261108-postpartum-steroid-fall",
    "topic": "Obstetrics",
    "level": 2,
    "stem": "After placental delivery, maternal progesterone and estrogen concentrations fall abruptly. What physiologic event does this facilitate?",
    "options": [
      "Prolactin-dependent milk secretion",
      "New hCG production by the corpus luteum",
      "Suppression of lactation despite unchanged prolactin levels"
    ],
    "answer": 0,
    "explanations": [
      "Loss of high placental progesterone and estrogen removes inhibition of prolactin-mediated milk production after delivery.",
      "The postpartum corpus luteum does not resume hCG production; hCG is principally of placental trophoblast origin.",
      "High placental steroids inhibit abundant milk secretion during pregnancy; their postpartum decline permits secretory activation."
    ],
    "teaching": "Placental delivery → abrupt progesterone/estrogen withdrawal → lactogenesis II with prolactin."
  },
  {
    "id": "nbme28-20261108-gck-mody",
    "topic": "Endocrinology",
    "level": 2,
    "stem": "A woman has lifelong mild fasting hyperglycemia, a history of gestational hyperglycemia, and several affected relatives in successive generations. Which defect is most likely?",
    "options": [
      "Heterozygous inactivating mutation in glucokinase (GCK)",
      "Inactivating mutation in the insulin receptor in all tissues",
      "Autoimmune destruction of pancreatic beta cells"
    ],
    "answer": 0,
    "explanations": [
      "GCK-MODY is autosomal dominant and raises the beta-cell glucose threshold for insulin secretion, causing mild, usually stable fasting hyperglycemia that may be discovered during pregnancy.",
      "Insulin receptor defects cause severe insulin resistance syndromes and are not the classic cause of stable, mild, multigenerational fasting hyperglycemia.",
      "Type 1 diabetes involves autoimmune beta-cell destruction and typically progresses toward insulin deficiency rather than stable mild lifelong hyperglycemia."
    ],
    "teaching": "GCK-MODY (MODY 2) = autosomal dominant, mild stable fasting hyperglycemia, increased glucose set point; often detected during pregnancy."
  },
  {
    "id": "nbme28-20261108-glucokinase-high-km",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Compared with hexokinase, which kinetic property enables pancreatic glucokinase to act as a glucose sensor?",
    "options": [
      "Higher Km and higher glucose concentration needed for half-maximal velocity",
      "Lower Km and saturation at very low glucose concentrations",
      "Strong feedback inhibition by glucose-6-phosphate"
    ],
    "answer": 0,
    "explanations": [
      "Glucokinase has a high apparent Km (lower affinity) and high capacity, allowing activity to vary across physiological blood glucose concentrations.",
      "Most hexokinase isoenzymes have a low Km and are active even when glucose concentrations are low, favoring basal tissue glucose use.",
      "Hexokinase is inhibited by its product glucose-6-phosphate, whereas glucokinase is not directly inhibited by glucose-6-phosphate."
    ],
    "teaching": "Glucokinase: high Km, high Vmax, no direct inhibition by G6P; hexokinase: low Km and G6P feedback inhibition."
  },
  {
    "id": "nbme28-20261108-gck-beta-cell-signaling",
    "topic": "Endocrinology",
    "level": 2,
    "stem": "Pancreatic beta-cell glucose metabolism raises the ATP/ADP ratio. Which membrane event directly leads toward insulin exocytosis?",
    "options": [
      "Closure of ATP-sensitive potassium channels, depolarization, and calcium influx",
      "Opening of ATP-sensitive potassium channels, hyperpolarization, and reduced calcium influx",
      "Activation of GABA-A chloride channels followed by membrane hyperpolarization"
    ],
    "answer": 0,
    "explanations": [
      "ATP closes KATP channels, reducing potassium efflux; membrane depolarization opens voltage-gated calcium channels, triggering insulin granule exocytosis.",
      "Opening KATP channels maintains a more negative membrane potential and limits insulin secretion.",
      "GABA-A chloride conductance is not the glucose-sensing mechanism that drives pancreatic beta-cell insulin release."
    ],
    "teaching": "Glucose → glucokinase → ATP rises → KATP closes → Ca2+ influx → insulin release. Sulfonylureas also close KATP channels."
  },
  {
    "id": "nbme28-20261108-mody-differential",
    "topic": "Endocrinology",
    "level": 3,
    "stem": "Which feature best differentiates GCK-MODY from HNF1A-MODY?",
    "options": [
      "Mild, stable fasting hyperglycemia from a higher glucose threshold for insulin release",
      "Progressive hyperglycemia that is often highly sensitive to sulfonylureas",
      "Marked insulin resistance with acanthosis nigricans and elevated endogenous insulin"
    ],
    "answer": 0,
    "explanations": [
      "GCK-MODY is typically mild and stable because glucokinase loss of function shifts the beta-cell glucose-sensing threshold upward.",
      "HNF1A-MODY often causes progressive beta-cell dysfunction and can respond strongly to low-dose sulfonylureas.",
      "Acanthosis and marked insulin resistance suggest insulin-resistant diabetes, not the characteristic monogenic beta-cell glucose sensor defect of GCK-MODY."
    ],
    "teaching": "GCK-MODY = stable and mild; HNF1A-MODY = progressive and sulfonylurea sensitive; type 2 diabetes commonly involves insulin resistance."
  },
  {
    "id": "nbme28-20261108-mcardle-second-wind",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A teenager has muscle cramps and myoglobinuria during exercise but can resume moderate activity after a short rest (second wind). Which enzyme is deficient?",
    "options": [
      "Muscle glycogen phosphorylase (PYGM)",
      "Muscle phosphofructokinase (PFKM)",
      "Lysosomal acid alpha-glucosidase (GAA)"
    ],
    "answer": 0,
    "explanations": [
      "McArdle disease (GSD V) is due to myophosphorylase deficiency and produces early exercise intolerance with a characteristic second-wind phenomenon as blood-derived fuels become available.",
      "Tarui disease (GSD VII) is caused by phosphofructokinase deficiency, usually lacks the classic second wind, and can produce compensated hemolysis.",
      "Pompe disease (GSD II) results from lysosomal acid alpha-glucosidase deficiency and classically causes infantile cardiomyopathy and hypotonia or later proximal muscle weakness."
    ],
    "teaching": "McArdle = myophosphorylase deficiency + second wind; Tarui = PFK deficiency + hemolysis, usually no second wind."
  },
  {
    "id": "nbme28-20261108-tarui-hemolysis",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A child has exercise-induced rhabdomyolysis, poor exercise tolerance, and mild compensated hemolytic anemia. Which defect is most likely?",
    "options": [
      "Muscle phosphofructokinase deficiency (Tarui disease)",
      "Muscle glycogen phosphorylase deficiency (McArdle disease)",
      "Carnitine palmitoyltransferase II deficiency"
    ],
    "answer": 0,
    "explanations": [
      "Tarui disease (GSD VII) involves PFKM deficiency in skeletal muscle and erythrocytes, impairing glycolytic ATP production and potentially causing hemolysis with exertional muscle symptoms.",
      "McArdle disease (GSD V) impairs muscle glycogenolysis and features second wind, but is not classically associated with hemolytic anemia.",
      "CPT II deficiency disrupts mitochondrial long-chain fatty acid oxidation and commonly causes rhabdomyolysis with prolonged exercise, fasting, or illness rather than hemolysis."
    ],
    "teaching": "Exercise intolerance + hemolysis = Tarui; exercise intolerance + second wind = McArdle."
  },
  {
    "id": "nbme28-20261108-tarui-glucose-loading",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "A patient with inherited muscle phosphofructokinase deficiency experiences worse exercise tolerance after ingesting glucose before activity. What explains this?",
    "options": [
      "Glucose cannot bypass the PFK block and may suppress use of fatty acid fuels",
      "Glucose restores muscle glycogen phosphorylase activity during a second-wind response",
      "Glucose accelerates lysosomal glycogen degradation by acid alpha-glucosidase"
    ],
    "answer": 0,
    "explanations": [
      "In Tarui disease the glycolytic block persists even with blood glucose availability; carbohydrate intake can impair fatty-acid fuel use and trigger an out-of-wind phenomenon.",
      "McArdle disease blocks muscle glycogenolysis; blood glucose can improve exercise tolerance by bypassing the glycogen phosphorylase block.",
      "Pompe disease impairs lysosomal glycogen breakdown, causing cardiomyopathy or myopathy rather than the classic carbohydrate-triggered Tarui out-of-wind phenomenon."
    ],
    "teaching": "Glucose before exercise may improve McArdle symptoms, but can worsen Tarui symptoms (out-of-wind)."
  },
  {
    "id": "nbme28-20261108-cpt2-vs-glycogenosis",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A young adult has recurrent rhabdomyolysis after prolonged endurance exercise or fasting but generally tolerates brief high-intensity exercise. Which disorder is most likely?",
    "options": [
      "Carnitine palmitoyltransferase II deficiency",
      "McArdle disease (GSD V)",
      "Tarui disease (GSD VII)"
    ],
    "answer": 0,
    "explanations": [
      "CPT II deficiency affects long-chain fatty acid oxidation, leading to energy deficiency particularly during prolonged exercise, fasting, or intercurrent illness.",
      "McArdle disease produces symptoms early in exercise from deficient skeletal muscle glycogen breakdown and often shows a second-wind phenomenon.",
      "Tarui disease blocks phosphofructokinase in glycolysis and causes early exercise intolerance, sometimes with hemolysis and no classic second wind."
    ],
    "teaching": "Early brief exertion → muscle glycogenolysis/glycolysis defects; prolonged endurance or fasting → fatty acid oxidation defects such as CPT II."
  },
  {
    "id": "nbme28-20261108-forearm-lactate",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A patient with McArdle disease performs a forearm exercise test. What is the expected biochemical response?",
    "options": [
      "Blunted blood lactate rise despite increased ammonia",
      "Marked lactate rise with low creatine kinase",
      "Marked increase in serum ketones immediately after brief handgrip"
    ],
    "answer": 0,
    "explanations": [
      "McArdle disease blocks muscle glycogen breakdown, producing a flat or blunted lactate response to exercise while ammonia may rise via AMP deamination.",
      "A brisk lactate rise is expected with normal muscle glycolysis, but is blunted in McArdle disease; creatine kinase is often elevated.",
      "A brief forearm exercise test evaluates local muscle metabolic pathways; an immediate major serum ketone rise is not the defining McArdle response."
    ],
    "teaching": "McArdle: absent/blunted exercise lactate rise with preserved ammonia rise; Tarui can also have an impaired lactate response, so use second wind and hemolysis to distinguish."
  },
  {
    "id": "nbme28-20261108-juvenile-granulosa-puberty",
    "topic": "Reproductive Pathology",
    "level": 2,
    "stem": "A 5-year-old girl has breast development, vaginal bleeding, an ovarian mass, high estradiol, and suppressed LH/FSH. Which tumor is most likely?",
    "options": [
      "Juvenile granulosa cell tumor",
      "Sertoli–Leydig cell tumor",
      "Ovarian dysgerminoma"
    ],
    "answer": 0,
    "explanations": [
      "Juvenile granulosa cell tumors are estrogen-producing ovarian sex cord–stromal neoplasms that can cause gonadotropin-independent precocious puberty and low LH/FSH through negative feedback.",
      "Sertoli–Leydig cell tumors often produce androgens and cause virilization, such as deepening of the voice and hirsutism.",
      "Dysgerminoma is a malignant ovarian germ cell tumor, often associated with elevated LDH, rather than the classic estrogen-secreting cause of precocious puberty."
    ],
    "teaching": "Ovarian mass + estrogen excess + suppressed gonadotropins in a young child suggests juvenile granulosa cell tumor."
  },
  {
    "id": "nbme28-20261108-two-cell-two-gonadotropin",
    "topic": "Endocrinology",
    "level": 2,
    "stem": "In normal ovarian follicles, which cell converts theca-derived androgens into estradiol through FSH-stimulated aromatase?",
    "options": [
      "Granulosa cells",
      "Theca interna cells",
      "Ovarian stromal fibroblasts"
    ],
    "answer": 0,
    "explanations": [
      "Granulosa cells express aromatase stimulated by FSH, converting androgens from neighboring theca cells into estrogens.",
      "Theca interna cells respond to LH and synthesize androgen precursors that diffuse to granulosa cells.",
      "Stromal fibroblasts provide connective tissue support and do not perform the primary follicular FSH-driven aromatization step."
    ],
    "teaching": "Two-cell model: LH → theca → androgens; FSH → granulosa/aromatase → estradiol."
  },
  {
    "id": "nbme28-20261108-puberty-central-peripheral",
    "topic": "Endocrinology",
    "level": 2,
    "stem": "A 6-year-old girl has precocious estrogenization with elevated estradiol but suppressed basal and stimulated LH. Which mechanism best explains this pattern?",
    "options": [
      "Gonadotropin-independent peripheral sex steroid production",
      "Premature GnRH-dependent activation of the hypothalamic–pituitary–gonadal axis",
      "Primary ovarian failure with absent estrogen negative feedback"
    ],
    "answer": 0,
    "explanations": [
      "Peripheral precocious puberty results from sex steroid production outside the normal gonadotropin drive, suppressing LH and FSH through negative feedback.",
      "Central precocious puberty involves premature activation of the GnRH–LH/FSH axis, often with a pubertal LH response to GnRH stimulation.",
      "Primary ovarian failure leads to low estradiol and elevated gonadotropins because estrogen negative feedback is lost."
    ],
    "teaching": "Precocious puberty + high estrogen + low LH/FSH = peripheral; pubertal LH response to GnRH favors central."
  },
  {
    "id": "nbme28-20261108-ovarian-stromal-differentials",
    "topic": "Reproductive Pathology",
    "level": 2,
    "stem": "An ovarian tumor is associated with ascites and pleural effusion but no prominent estrogen or androgen excess. Which diagnosis is classic?",
    "options": [
      "Ovarian fibroma (Meigs syndrome)",
      "Granulosa cell tumor",
      "Sertoli–Leydig cell tumor"
    ],
    "answer": 0,
    "explanations": [
      "Meigs syndrome classically consists of a benign ovarian fibroma, ascites, and pleural effusion that resolve after tumor removal.",
      "Granulosa cell tumors are often estrogen-producing and may cause precocious puberty or abnormal uterine bleeding.",
      "Sertoli–Leydig cell tumors may secrete androgens, producing virilization rather than the classic Meigs triad."
    ],
    "teaching": "Fibroma = Meigs; granulosa = estrogen; Sertoli–Leydig = androgen."
  },
  {
    "id": "nbme28-20261108-granulosa-histology-inhibin",
    "topic": "Reproductive Pathology",
    "level": 3,
    "stem": "An adult ovarian mass produces estrogen and shows grooved 'coffee-bean' nuclei with Call–Exner bodies. Which tumor is most likely?",
    "options": [
      "Adult-type granulosa cell tumor",
      "Juvenile granulosa cell tumor with uniformly absent estrogen production",
      "Yolk sac tumor with Schiller–Duval bodies"
    ],
    "answer": 0,
    "explanations": [
      "Adult-type granulosa cell tumor classically shows nuclear grooves and Call–Exner bodies; inhibin is a useful immunohistochemical and sometimes serum marker.",
      "Juvenile granulosa cell tumors often secrete estrogen but may lack the classic adult-type grooves and Call–Exner bodies, so the stated absolute description is incorrect.",
      "Yolk sac tumors are germ cell tumors with Schiller–Duval bodies and commonly elevated alpha-fetoprotein, not classic granulosa-type morphology."
    ],
    "teaching": "Adult granulosa = coffee-bean grooves/Call–Exner bodies; juvenile subtype may lack them. Inhibin is a helpful marker."
  },
  {
    "id": "nbme28-20261108-ulnar-tibial-diabetic-neuropathy",
    "topic": "Neurology",
    "level": 2,
    "stem": "A patient with longstanding diabetes has atrophy of hand interossei with inability to abduct the fingers and loss of plantar flexion in the opposite foot. Which nerve pair is affected?",
    "options": [
      "Ulnar and tibial nerves",
      "Median and common fibular nerves",
      "Radial and common fibular nerves"
    ],
    "answer": 0,
    "explanations": [
      "Ulnar nerve innervates the palmar and dorsal interossei; tibial nerve innervates gastrocnemius and soleus, major plantar flexors.",
      "Median nerve controls most thenar muscles and some forearm flexors, whereas common fibular nerve lesions impair dorsiflexion and eversion rather than plantar flexion.",
      "Radial nerve innervates wrist and finger extensors; common fibular nerve injury classically produces foot drop, not isolated inability to plantar flex."
    ],
    "teaching": "Finger abduction = ulnar (dorsal interossei); plantar flexion = tibial (gastrocnemius/soleus)."
  },
  {
    "id": "nbme28-20261108-pad-dab-ulnar",
    "topic": "Neurology",
    "level": 2,
    "stem": "A patient cannot spread the fingers apart or bring them back together against resistance. Which nerve supplies the responsible muscles?",
    "options": [
      "Ulnar nerve",
      "Median nerve",
      "Radial nerve"
    ],
    "answer": 0,
    "explanations": [
      "The ulnar nerve innervates both dorsal and palmar interossei. DAB = dorsal abduct; PAD = palmar adduct.",
      "The median nerve innervates most thenar muscles, enabling thumb opposition, but does not innervate the interossei.",
      "The radial nerve supplies forearm extensors, enabling wrist and finger extension, not interosseous abduction/adduction."
    ],
    "teaching": "PAD/DAB: palmar interossei adduct, dorsal interossei abduct; both are ulnar nerve muscles."
  },
  {
    "id": "nbme28-20261108-tibial-vs-fibular",
    "topic": "Neurology",
    "level": 2,
    "stem": "A patient cannot stand on tiptoes but can dorsiflex the ankle. Which nerve is most likely injured?",
    "options": [
      "Tibial nerve",
      "Deep fibular (peroneal) nerve",
      "Superficial fibular (peroneal) nerve"
    ],
    "answer": 0,
    "explanations": [
      "The tibial nerve innervates posterior leg muscles including gastrocnemius and soleus; injury impairs plantar flexion and tiptoe standing.",
      "The deep fibular nerve innervates anterior leg dorsiflexors including tibialis anterior; injury causes foot drop.",
      "The superficial fibular nerve innervates fibularis longus and brevis, which evert the foot; injury impairs eversion."
    ],
    "teaching": "Tibial → plantar flexion; deep fibular → dorsiflexion; superficial fibular → eversion."
  },
  {
    "id": "nbme28-20261108-wrist-drop-foot-drop",
    "topic": "Neurology",
    "level": 2,
    "stem": "A patient has wrist drop after a humeral shaft fracture. Another patient develops foot drop following trauma near the fibular neck. Which nerve pair explains these findings?",
    "options": [
      "Radial and common fibular nerves",
      "Ulnar and tibial nerves",
      "Median and tibial nerves"
    ],
    "answer": 0,
    "explanations": [
      "The radial nerve can be injured in the radial groove of the humerus, causing wrist drop; the common fibular nerve winds around the fibular neck and can cause foot drop.",
      "The ulnar nerve innervates interossei and the tibial nerve supplies plantar flexors; this combination does not explain wrist and foot drop.",
      "The median nerve mainly supports thumb opposition and forearm flexion, and the tibial nerve supports plantar flexion rather than dorsiflexion."
    ],
    "teaching": "Wrist drop = radial; foot drop = common/deep fibular; loss of finger abduction = ulnar."
  },
  {
    "id": "nbme28-20261108-mcardle-phosphorolysis",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "An adult has exertional cramps, myoglobinuria, and increased muscle glycogen on biopsy. Which reaction is directly impaired in McArdle disease?",
    "options": [
      "Cleavage of glycogen to release glucose-1-phosphate",
      "Conversion of fructose-6-phosphate to fructose-1,6-bisphosphate",
      "Dephosphorylation of glucose-6-phosphate to free glucose"
    ],
    "answer": 0,
    "explanations": [
      "Muscle glycogen phosphorylase (myophosphorylase) removes glucose residues from alpha-1,4 glycogen chains by phosphorolysis, releasing glucose-1-phosphate.",
      "Phosphofructokinase-1 catalyzes this glycolytic step; deficiency causes Tarui disease (GSD VII), which may also cause hemolytic anemia.",
      "Glucose-6-phosphatase releases free glucose in liver and kidney; its deficiency causes von Gierke disease (GSD I), classically with fasting hypoglycemia and hepatomegaly."
    ],
    "teaching": "McArdle (GSD V): myophosphorylase deficiency blocks muscle glycogen → glucose-1-phosphate; Tarui (GSD VII) blocks phosphofructokinase."
  },
  {
    "id": "nbme28-20261108-phosphorylase-kinase-distinction",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A child has hepatomegaly, impaired growth, fasting ketosis, and deficiency of the enzyme that phosphorylates and activates glycogen phosphorylase. Which enzyme is deficient?",
    "options": [
      "Phosphorylase kinase",
      "Muscle glycogen phosphorylase",
      "Glycogen synthase"
    ],
    "answer": 0,
    "explanations": [
      "Phosphorylase kinase activates glycogen phosphorylase by phosphorylation; its deficiency causes glycogen storage disease type IX, often with hepatic manifestations.",
      "Muscle glycogen phosphorylase deficiency causes McArdle disease (GSD V), featuring early exertional cramps, second wind, and possible myoglobinuria.",
      "Glycogen synthase deficiency reduces glycogen production and stores, often producing fasting ketotic hypoglycemia rather than excessive glycogen accumulation."
    ],
    "teaching": "Phosphorylase kinase activates phosphorylase; GSD IX often affects liver. McArdle (GSD V) directly lacks muscle phosphorylase."
  },
  {
    "id": "nbme28-20261108-hartnup-niacin",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A teenager has photosensitive dermatitis, decreased plasma tryptophan, and urinary loss of neutral amino acids. Which vitamin synthesis is impaired?",
    "options": [
      "Niacin (vitamin B3)",
      "Thiamine (vitamin B1)",
      "Riboflavin (vitamin B2)"
    ],
    "answer": 0,
    "explanations": [
      "Hartnup disease impairs intestinal and renal transport of neutral amino acids, including tryptophan, reducing endogenous niacin synthesis and producing pellagra-like symptoms.",
      "Thiamine is a cofactor for oxidative decarboxylation and transketolase; deficiency causes beriberi or Wernicke encephalopathy, not neutral aminoaciduria.",
      "Riboflavin forms FAD and FMN; deficiency produces cheilosis, glossitis, and seborrheic dermatitis, not the characteristic Hartnup neutral aminoaciduria."
    ],
    "teaching": "Hartnup = SLC6A19 neutral amino acid transport defect → tryptophan loss → reduced niacin → photosensitive pellagra-like dermatitis."
  },
  {
    "id": "nbme28-20261108-hartnup-cystinuria-differential",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which finding most strongly distinguishes cystinuria from Hartnup disease?",
    "options": [
      "Hexagonal urinary crystals and recurrent cystine stones",
      "Photosensitive dermatitis caused by low niacin",
      "Urinary wasting of tryptophan and other neutral amino acids"
    ],
    "answer": 0,
    "explanations": [
      "Cystinuria disrupts renal transport of cystine and dibasic amino acids (COLA), causing cystine stones with characteristic hexagonal crystals.",
      "Photosensitive dermatitis from niacin deficiency is a classic presentation of Hartnup disease, not cystinuria.",
      "Neutral aminoaciduria including tryptophan is the core transporter defect in Hartnup disease; cystinuria affects cystine, ornithine, lysine, and arginine."
    ],
    "teaching": "Cystinuria = COLA and hexagonal stones; Hartnup = neutral amino acids, tryptophan loss, pellagra-like rash."
  },
  {
    "id": "nbme28-20261108-carcinoid-niacin-differential",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "An adult has flushing, watery diarrhea, and bronchospasm from a serotonin-secreting neuroendocrine tumor, then develops photosensitive dermatitis. Why?",
    "options": [
      "Tryptophan is diverted toward serotonin, reducing niacin synthesis",
      "Impaired renal reabsorption of neutral amino acids from SLC6A19 deficiency",
      "Excess serotonin directly prevents vitamin C absorption"
    ],
    "answer": 0,
    "explanations": [
      "Carcinoid syndrome may redirect tryptophan toward serotonin production, leaving less substrate for endogenous niacin synthesis and causing pellagra.",
      "SLC6A19 deficiency is Hartnup disease, which can cause pellagra through poor tryptophan transport but not the classic adult carcinoid syndrome triad.",
      "Serotonin does not cause pellagra by inhibiting vitamin C uptake; niacin availability is the relevant mechanism."
    ],
    "teaching": "Hartnup loses tryptophan; carcinoid diverts tryptophan to serotonin. Both may cause niacin deficiency and photosensitive dermatitis."
  },
  {
    "id": "nbme28-20261108-b6-tryptophan-niacin",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A malnourished patient has vitamin B6 deficiency and reduced conversion of tryptophan to niacin. Which B6-dependent reaction contributes?",
    "options": [
      "Pyridoxal phosphate-dependent kynureninase activity",
      "Thiamine pyrophosphate-dependent pyruvate dehydrogenase activity",
      "Biotin-dependent acetyl-CoA carboxylase activity"
    ],
    "answer": 0,
    "explanations": [
      "Kynureninase requires pyridoxal phosphate (vitamin B6) in the tryptophan-to-NAD pathway; deficiency can reduce endogenous niacin synthesis.",
      "Pyruvate dehydrogenase requires thiamine pyrophosphate and other cofactors but does not perform the relevant tryptophan conversion.",
      "Acetyl-CoA carboxylase is biotin-dependent and supports fatty acid synthesis, not tryptophan conversion to niacin."
    ],
    "teaching": "Tryptophan → niacin requires vitamin B6-dependent kynureninase; niacin deficiency may follow Hartnup disease, carcinoid syndrome, or B6 deficiency."
  },
  {
    "id": "nbme28-20261108-cystinuria-homocystinuria",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A child has recurrent nephrolithiasis with hexagonal urinary crystals and high urinary cystine, ornithine, lysine, and arginine. What is defective?",
    "options": [
      "Renal proximal tubular amino acid transport",
      "Cystathionine beta-synthase activity",
      "Intestinal and renal neutral amino acid transport"
    ],
    "answer": 0,
    "explanations": [
      "Cystinuria is a proximal tubular transport defect involving cystine and dibasic amino acids (COLA). Poorly soluble cystine causes hexagonal kidney stones.",
      "Classic homocystinuria results from cystathionine beta-synthase deficiency, causing elevated homocysteine, thromboembolism, and ectopia lentis.",
      "Hartnup disease impairs transport of neutral amino acids such as tryptophan and may cause pellagra-like dermatitis."
    ],
    "teaching": "Cystinuria = COLA and hexagonal stones; classic homocystinuria = CBS deficiency and thrombosis; Hartnup = neutral aminoaciduria and pellagra."
  },
  {
    "id": "nbme28-20261108-homocystinuria-cbs-b6",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A tall child has developmental difficulties, inferior lens displacement, recurrent thrombosis, elevated homocysteine, and elevated methionine. Which enzyme is deficient?",
    "options": [
      "Cystathionine beta-synthase (vitamin B6 dependent)",
      "Cystine/dibasic amino acid transporter",
      "Homogentisate 1,2-dioxygenase"
    ],
    "answer": 0,
    "explanations": [
      "Classic homocystinuria is caused by cystathionine beta-synthase deficiency in the transsulfuration pathway; CBS requires pyridoxal phosphate (vitamin B6).",
      "Cystinuria causes renal cystine stones and COLA aminoaciduria rather than elevated plasma homocysteine, lens dislocation, and thrombosis.",
      "Homogentisate oxidase deficiency causes alkaptonuria with dark urine and ochronosis."
    ],
    "teaching": "Classic CBS deficiency: high homocysteine + high methionine + thrombosis + downward lens dislocation; pyridoxine responsiveness varies."
  },
  {
    "id": "nbme28-20261108-hartnup-cbs-cystinuria-triad",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which condition is associated with impaired intestinal and renal neutral amino acid transport causing tryptophan loss and photosensitive dermatitis?",
    "options": [
      "Hartnup disease",
      "Cystinuria",
      "Classic homocystinuria"
    ],
    "answer": 0,
    "explanations": [
      "Hartnup disease impairs neutral amino acid transport (including tryptophan), reducing endogenous niacin synthesis and causing pellagra-like photosensitive dermatitis.",
      "Cystinuria prevents reabsorption of cystine, ornithine, lysine, and arginine and causes recurrent cystine stones with hexagonal crystals.",
      "Classic homocystinuria is usually caused by CBS deficiency, with elevated homocysteine, thrombosis, and ectopia lentis rather than primary neutral aminoaciduria."
    ],
    "teaching": "Hartnup → tryptophan/niacin/dermatitis; cystinuria → COLA/stones; homocystinuria → CBS/B6/thrombosis."
  },
  {
    "id": "nbme28-20261108-homocysteine-b12-b6-routes",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which vitamin is required by cystathionine beta-synthase to convert homocysteine into cystathionine?",
    "options": [
      "Vitamin B6 (pyridoxal phosphate)",
      "Vitamin B12 (cobalamin)",
      "Vitamin B9 (folate)"
    ],
    "answer": 0,
    "explanations": [
      "CBS uses pyridoxal phosphate (vitamin B6) to transfer homocysteine into the transsulfuration pathway and form cystathionine.",
      "Vitamin B12 is required for methionine synthase, which remethylates homocysteine to methionine, not for CBS.",
      "Folate provides a methyl group as 5-methyl-THF for B12-dependent methionine synthase, not the CBS reaction."
    ],
    "teaching": "B6/CBS sends homocysteine toward cystathionine; B12/folate recycles it into methionine."
  },
  {
    "id": "nbme28-20261108-b12-mma-hcy",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "An adult has macrocytosis, paresthesias, increased plasma homocysteine, and elevated methylmalonic acid. Which vitamin is deficient?",
    "options": [
      "Vitamin B12 (cobalamin)",
      "Vitamin B6 (pyridoxine)",
      "Vitamin B9 (folate)"
    ],
    "answer": 0,
    "explanations": [
      "Vitamin B12 is required by methionine synthase and methylmalonyl-CoA mutase, so deficiency increases both homocysteine and methylmalonic acid and can cause neurologic deficits.",
      "Vitamin B6 supports CBS and other PLP-dependent enzymes; it can increase homocysteine when deficient but does not cause the classic increased methylmalonic acid pattern.",
      "Folate deficiency can elevate homocysteine and cause megaloblastic anemia, but methylmalonic acid remains normal."
    ],
    "teaching": "B12 deficiency: homocysteine up + MMA up; folate deficiency: homocysteine up + MMA normal; CBS deficiency: homocysteine and methionine up, MMA normal."
  },
  {
    "id": "nbme28-20261108-cbs-vs-remethylation",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "A child has thrombosis and ectopia lentis, with high plasma homocysteine and methionine but normal methylmalonic acid. What is the most likely defect?",
    "options": [
      "Cystathionine beta-synthase deficiency",
      "Methionine synthase dysfunction from cobalamin deficiency",
      "Methylmalonyl-CoA mutase deficiency"
    ],
    "answer": 0,
    "explanations": [
      "CBS deficiency prevents transsulfuration of homocysteine, which accumulates and can be remethylated to methionine; classic manifestations include thrombosis and lens displacement.",
      "Methionine synthase dysfunction impairs homocysteine remethylation and generally does not produce the characteristic elevated methionine of classical CBS deficiency; B12 deficiency may increase MMA.",
      "Methylmalonyl-CoA mutase deficiency elevates methylmalonic acid and causes metabolic acidosis rather than the classic high methionine and lens findings of CBS deficiency."
    ],
    "teaching": "High homocysteine + high methionine + normal MMA = classic CBS deficiency (B6-dependent)."
  },
  {
    "id": "nbme28-20261108-loop-enac-hypokalemia",
    "topic": "Renal Pharmacology",
    "level": 2,
    "stem": "A patient receiving furosemide for edema develops hypokalemia. Which add-on drug directly decreases luminal sodium permeability in collecting duct principal cells?",
    "options": [
      "Amiloride",
      "Hydrochlorothiazide",
      "Acetazolamide"
    ],
    "answer": 0,
    "explanations": [
      "Amiloride blocks the apical epithelial sodium channel (ENaC) in collecting duct principal cells. This reduces sodium uptake, lumen-negative potential, and potassium secretion.",
      "Hydrochlorothiazide blocks the sodium-chloride cotransporter (NCC) in the distal convoluted tubule and can further increase urinary potassium loss.",
      "Acetazolamide inhibits proximal tubular carbonic anhydrase, promoting bicarbonate excretion and potentially causing hypokalemia."
    ],
    "teaching": "Loop diuretics increase distal Na+ delivery, increasing ENaC-driven K+ secretion; amiloride or triamterene blocks ENaC and spares potassium."
  },
  {
    "id": "nbme28-20261108-enac-lumen-potential",
    "topic": "Renal Physiology",
    "level": 2,
    "stem": "Why does increased sodium reabsorption through ENaC promote urinary potassium loss in collecting duct principal cells?",
    "options": [
      "It makes the tubular lumen relatively negative, favoring potassium secretion",
      "It directly blocks the basolateral sodium-potassium ATPase",
      "It makes the tubular lumen more positive and prevents potassium exit"
    ],
    "answer": 0,
    "explanations": [
      "Electrogenic apical sodium entry through ENaC removes positive charge from the lumen, promoting potassium secretion through apical ROMK and flow-dependent channels.",
      "The basolateral Na+/K+-ATPase supports sodium reabsorption and potassium uptake; ENaC does not directly block this pump.",
      "ENaC activity makes the lumen relatively negative, not positive, and this favors rather than prevents potassium secretion."
    ],
    "teaching": "ENaC: Na+ enters cell → lumen relatively negative → K+ secreted via apical ROMK; blocking ENaC preserves K+."
  },
  {
    "id": "nbme28-20261108-mra-vs-enac",
    "topic": "Renal Pharmacology",
    "level": 2,
    "stem": "Which potassium-sparing medication competitively blocks aldosterone signaling rather than directly blocking the ENaC channel?",
    "options": [
      "Spironolactone",
      "Triamterene",
      "Amiloride"
    ],
    "answer": 0,
    "explanations": [
      "Spironolactone antagonizes the mineralocorticoid receptor, reducing aldosterone-dependent ENaC and Na+/K+-ATPase expression; it also has antiandrogenic adverse effects such as gynecomastia.",
      "Triamterene directly blocks apical ENaC in principal cells, independently of mineralocorticoid receptor blockade.",
      "Amiloride directly blocks ENaC and is also used for lithium-induced nephrogenic diabetes insipidus."
    ],
    "teaching": "Spironolactone/eplerenone = aldosterone receptor antagonists; amiloride/triamterene = ENaC channel blockers. Both spare K+."
  },
  {
    "id": "nbme28-20261108-loop-electrolyte-changes",
    "topic": "Renal Pharmacology",
    "level": 2,
    "stem": "A patient begins high-dose furosemide. Which electrolyte pattern is classically associated with this loop diuretic?",
    "options": [
      "Hypokalemia, hypomagnesemia, and increased urinary calcium excretion",
      "Hyperkalemia, hypermagnesemia, and reduced urinary calcium excretion",
      "Hyperkalemia with metabolic acidosis due to mineralocorticoid receptor blockade"
    ],
    "answer": 0,
    "explanations": [
      "Loop diuretics inhibit NKCC2 and reduce the lumen-positive potential in the thick ascending limb, increasing urinary calcium and magnesium loss; increased distal sodium delivery promotes potassium loss.",
      "Thiazides reduce urinary calcium excretion, whereas loop diuretics increase calcium and magnesium excretion and usually promote hypokalemia.",
      "Mineralocorticoid receptor antagonists can cause hyperkalemia and metabolic acidosis; furosemide usually produces potassium depletion and metabolic alkalosis."
    ],
    "teaching": "Loop diuretics: lose K+, Ca2+, Mg2+; risk hypokalemic metabolic alkalosis. Thiazides decrease urinary Ca2+."
  },
  {
    "id": "nbme28-20261108-nak-atpase-k-secretory-path",
    "topic": "Renal Physiology",
    "level": 2,
    "stem": "Why would stimulating the basolateral Na+/K+-ATPase in a collecting duct principal cell NOT be a suitable way to prevent urinary potassium loss?",
    "options": [
      "It brings K+ into the cell, supporting K+ secretion through apical ROMK channels",
      "It directly prevents Na+ entry through apical ENaC channels",
      "It makes K+ move from the tubular lumen into the blood via an apical cotransporter"
    ],
    "answer": 0,
    "explanations": [
      "The basolateral Na+/K+-ATPase moves 3 Na+ out and 2 K+ into the principal cell. With ENaC activity, it sustains Na+ reabsorption and intracellular K+ supply for apical ROMK-mediated secretion.",
      "Blocking the epithelial Na+ channel is the action of amiloride and triamterene, not stimulation of the basolateral Na+/K+-ATPase.",
      "Principal cells primarily secrete K+ through apical ROMK/BK channels; the basolateral Na+/K+ pump is not an apical K+ reabsorption transporter."
    ],
    "teaching": "Na+/K+-ATPase: basolateral 3 Na+ out, 2 K+ in. Intracellular K+ can then be secreted via apical ROMK; ENaC blockade spares K+."
  },
  {
    "id": "nbme28-20261108-apical-vs-basolateral-channels",
    "topic": "Renal Physiology",
    "level": 2,
    "stem": "Which apical transport process in a principal cell most directly determines the lumen-negative voltage that drives potassium secretion?",
    "options": [
      "Electrogenic Na+ entry through ENaC",
      "Basolateral K+ recycling channels",
      "Na+/K+-ATPase directly pumping K+ into the tubular lumen"
    ],
    "answer": 0,
    "explanations": [
      "ENaC-mediated Na+ entry removes positive charge from the tubular lumen, making it relatively negative and favoring K+ secretion through apical ROMK/BK channels.",
      "Basolateral K+ conductances exist and support membrane electrical properties, but they are not the direct apical drug target responsible for ENaC-dependent luminal sodium permeability.",
      "The Na+/K+-ATPase is basolateral, moving Na+ into the interstitium and K+ into the cell, not secreting K+ directly into the tubular lumen."
    ],
    "teaching": "Apical = ENaC and ROMK/BK; basolateral = Na+/K+-ATPase. Blocking apical ENaC lowers the drive for potassium secretion."
  },
  {
    "id": "nbme28-20261108-prpp-amidotransferase",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "PRPP reacts with glutamine to form 5-phosphoribosylamine, glutamate, and pyrophosphate. Feedback inhibition of the responsible enzyme reduces the de novo synthesis of what?",
    "options": [
      "Purine nucleotides through the first committed step",
      "Pyrimidine nucleotides through carbamoyl phosphate synthetase II",
      "Ribose-5-phosphate through the pentose phosphate pathway"
    ],
    "answer": 0,
    "explanations": [
      "Glutamine-PRPP amidotransferase catalyzes the first committed step of de novo purine synthesis; IMP, AMP, and GMP inhibit it by feedback.",
      "Carbamoyl phosphate synthetase II catalyzes the committed step of pyrimidine synthesis using glutamine, bicarbonate, and ATP before the ring attaches to PRPP.",
      "The pentose phosphate pathway supplies ribose-5-phosphate that can be converted into PRPP, but the depicted reaction consumes PRPP and adds nitrogen rather than synthesizing pentoses."
    ],
    "teaching": "Purine committed step: PRPP + glutamine → 5-phosphoribosylamine; inhibited by IMP, AMP, GMP and activated by PRPP."
  },
  {
    "id": "nbme28-20261108-purine-vs-pyrimidine-assembly",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which statement correctly distinguishes de novo purine and pyrimidine nucleotide synthesis?",
    "options": [
      "Purine rings are assembled stepwise on PRPP-derived ribose; pyrimidine rings are assembled before attachment to PRPP",
      "Both complete rings are synthesized freely and then attached to PRPP",
      "Pyrimidines are assembled stepwise on PRPP-derived ribose, while purines are made as free rings"
    ],
    "answer": 0,
    "explanations": [
      "In de novo purine synthesis, atoms are added to a ribose scaffold derived from PRPP until IMP forms; pyrimidine rings are first synthesized as orotate and then attached to PRPP to form OMP.",
      "A free preformed ring added to PRPP describes the pyrimidine pathway but not the usual de novo purine pathway.",
      "This reverses the two pathways: purines are built on the ribose scaffold, while pyrimidines form their ring first."
    ],
    "teaching": "Purines: build ON PRPP → IMP → AMP/GMP; pyrimidines: build ring FIRST → orotate + PRPP → OMP → UMP."
  },
  {
    "id": "nbme28-20261108-purine-feedback-regulation",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A cell accumulates IMP, AMP, and GMP. Which enzyme in de novo purine synthesis is inhibited by these end products?",
    "options": [
      "Glutamine-PRPP amidotransferase",
      "Carbamoyl phosphate synthetase II",
      "Glucose-6-phosphate dehydrogenase"
    ],
    "answer": 0,
    "explanations": [
      "IMP, AMP, and GMP inhibit glutamine-PRPP amidotransferase, reducing de novo purine synthesis when purine nucleotides are abundant.",
      "CPS II controls an early pyrimidine step and is classically inhibited by UTP and activated by PRPP and ATP.",
      "Glucose-6-phosphate dehydrogenase controls the oxidative pentose phosphate pathway, generating NADPH rather than serving as the committed purine synthesis enzyme."
    ],
    "teaching": "Purine de novo feedback = IMP/AMP/GMP inhibit glutamine-PRPP amidotransferase; pyrimidine feedback = UTP inhibits CPS II."
  },
  {
    "id": "nbme28-20261108-prpp-pentose-folate",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A cell requires ribose-5-phosphate and one-carbon units to synthesize purine nucleotides. Which pairing identifies their principal metabolic sources?",
    "options": [
      "Pentose phosphate pathway and tetrahydrofolate one-carbon metabolism",
      "Glycogen synthase and vitamin B12 methylmalonyl-CoA mutase",
      "Urea cycle and heme oxygenase"
    ],
    "answer": 0,
    "explanations": [
      "The pentose phosphate pathway supplies ribose-5-phosphate for PRPP; N10-formyl-tetrahydrofolate donates one-carbon units incorporated at C2 and C8 of the purine ring.",
      "Glycogen synthase stores glucose as glycogen, while methylmalonyl-CoA mutase uses vitamin B12 to convert methylmalonyl-CoA to succinyl-CoA.",
      "The urea cycle disposes of nitrogen as urea, and heme oxygenase degrades heme; neither is the principal supplier of purine ribose and one-carbon units."
    ],
    "teaching": "PPP → ribose-5-phosphate → PRPP; folate (N10-formyl-THF) contributes C2/C8 of purine rings."
  },
  {
    "id": "nbme28-20261108-purine-imp-branch",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "Which nucleotide is the common first complete purine product in the de novo pathway and serves as the precursor of both AMP and GMP?",
    "options": [
      "Inosine monophosphate (IMP)",
      "Uridine monophosphate (UMP)",
      "5-Phosphoribosyl-1-pyrophosphate (PRPP)"
    ],
    "answer": 0,
    "explanations": [
      "IMP is the first complete purine nucleotide produced de novo and branches into AMP and GMP biosynthesis.",
      "UMP is the principal first pyrimidine nucleotide produced from OMP decarboxylation, not a purine branch-point intermediate.",
      "PRPP is an activated ribose precursor used in nucleotide synthesis and salvage, not a complete purine nucleotide."
    ],
    "teaching": "Purines: PRPP → 5-phosphoribosylamine → IMP → AMP or GMP; pyrimidines: orotate → OMP → UMP."
  },
  {
    "id": "nbme28-20261108-ump-synthase-megaloblasts",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "An infant has growth failure, megaloblastic anemia unresponsive to folate or vitamin B12, high urinary orotic acid, and normal plasma ammonia. Which defect explains the anemia?",
    "options": [
      "UMP synthase deficiency limiting pyrimidine nucleotide production",
      "Ornithine transcarbamylase deficiency impairing ammonia disposal",
      "Cystathionine beta-synthase deficiency blocking homocysteine transsulfuration"
    ],
    "answer": 0,
    "explanations": [
      "UMP synthase catalyzes orotate → OMP → UMP. Low UMP limits pyrimidine nucleotides, including dTMP needed for DNA replication, causing defective nuclear maturation and megaloblastic anemia without hyperammonemia.",
      "OTC deficiency raises orotic acid via excess carbamoyl phosphate but causes marked hyperammonemia; primary megaloblastic anemia is not its signature manifestation.",
      "CBS deficiency causes elevated homocysteine and methionine with thrombosis and ectopia lentis, not elevated orotic acid and impaired pyrimidine synthesis."
    ],
    "teaching": "Orotic aciduria with normal ammonia and megaloblastic anemia = UMP synthase deficiency; treat with uridine."
  },
  {
    "id": "nbme28-20261108-megaloblastic-mechanism",
    "topic": "Hematology",
    "level": 2,
    "stem": "Why does impaired pyrimidine nucleotide production in UMP synthase deficiency cause macro-ovalocytes and hypersegmented neutrophils?",
    "options": [
      "Defective DNA synthesis delays nuclear maturation despite continued cytoplasmic growth",
      "Reduced hemoglobin synthesis causes small hypochromic red cells",
      "Accelerated red cell membrane destruction causes schistocytes"
    ],
    "answer": 0,
    "explanations": [
      "Inadequate deoxypyrimidines slow DNA replication in rapidly dividing marrow precursors, producing nuclear–cytoplasmic asynchrony and megaloblastic changes.",
      "Impaired hemoglobin synthesis classically causes microcytosis, as in iron deficiency or thalassemia, not the megaloblastic pattern.",
      "Schistocytes result from mechanical fragmentation of erythrocytes, such as in thrombotic microangiopathy, rather than deficient nucleotide synthesis."
    ],
    "teaching": "Megaloblastic = impaired DNA synthesis → nuclear-cytoplasmic asynchrony, macro-ovalocytes and hypersegmented neutrophils."
  }
]);
