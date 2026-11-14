// Original USMLE Step 1 questions inspired by TAP1/MHC processing review.
window.RAPIDFIRE_QUESTIONS = (window.RAPIDFIRE_QUESTIONS || []).concat([
{ id:"tap1-mhc-20261114-01",topic:"Immunology",level:2,
stem:"A 5-year-old with recurrent respiratory infections, normal serum immunoglobulins, and a TAP1 mutation has impaired presentation of cytosolic peptides. Which immune response is most directly affected?",
options:["Activation of CD8+ cytotoxic T cells by MHC class I","Activation of CD4+ helper T cells by MHC class II","Neutrophil adhesion through CD18 integrins"],answer:0,
explanations:["Correct. TAP1/TAP2 transport proteasome-generated peptides into the endoplasmic reticulum for loading onto MHC I, which presents to CD8+ T cells.","MHC II primarily loads endosomal/extracellular peptides and activates CD4+ T cells; TAP1 is not its principal transporter.","CD18 deficiency causes leukocyte adhesion deficiency, impairing neutrophil extravasation rather than MHC I peptide loading."],
teaching:"Proteasome → TAP1/TAP2 → ER → MHC I → CD8+. TAP deficiency causes bare lymphocyte syndrome type I."},
{ id:"tap1-mhc-20261114-02",topic:"Immunology",level:3,
stem:"A child has markedly reduced surface MHC class I due to TAP2 deficiency. Which laboratory pattern is most likely?",
options:["Reduced CD8+ T cells with relatively preserved CD4+ T cells","Reduced CD4+ T cells due to failed MHC II transcription","Absent oxidative burst on dihydrorhodamine testing"],answer:0,
explanations:["Correct. MHC I is required for normal positive selection of CD8+ T cells in the thymus; TAP deficiency decreases MHC I expression.","MHC II transcription defects cause bare lymphocyte syndrome type II, characterized by impaired CD4+ T-cell development.","An abnormal dihydrorhodamine oxidative burst assay indicates chronic granulomatous disease due to defective NADPH oxidase."],
teaching:"Bare lymphocyte syndrome I = MHC I/TAP defect → CD8 deficiency; type II = MHC II defect → CD4 deficiency."},
{ id:"tap1-mhc-20261114-03",topic:"Immunology",level:2,
stem:"A dendritic cell presents a phagocytosed extracellular bacterial protein to a naive CD4+ T cell. Which pathway ordinarily loads this antigen?",
options:["Endosomal peptide loading onto MHC class II","TAP-dependent peptide import into the ER for MHC class I","Proteasomal destruction followed by direct CD18 binding"],answer:0,
explanations:["Correct. Exogenous proteins are processed in acidified endosomal/lysosomal compartments and loaded onto MHC II for recognition by CD4+ T cells.","TAP-dependent ER loading is the canonical endogenous MHC I pathway for CD8+ T cells; cross-presentation is a specialized exception.","CD18 is a leukocyte adhesion integrin subunit and does not load antigenic peptides onto MHC molecules."],
teaching:"Endogenous → MHC I/CD8; exogenous → MHC II/CD4. Dendritic-cell cross-presentation is an important exception."}
]);