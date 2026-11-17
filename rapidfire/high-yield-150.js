/* RapidFire High-Yield 150: original USMLE Step 1 review cards. */
(function () {
  "use strict";
  var incoming = [
  {
    "id": "hy150-001",
    "topic": "Genetics",
    "level": 2,
    "stem": "Which DNA strand is synthesized discontinuously as short fragments subsequently sealed into a continuous molecule?",
    "options": [
      "Leading strand",
      "RNA primer",
      "Lagging strand"
    ],
    "answer": 2,
    "explanations": [
      "It is made continuously toward the replication fork.",
      "This initiates DNA synthesis but is not a DNA strand.",
      "Okazaki fragments are formed on the lagging strand. DNA ligase seals the remaining nicks."
    ],
    "teaching": "Okazaki fragments are formed on the lagging strand. DNA ligase seals the remaining nicks.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 1
  },
  {
    "id": "hy150-002",
    "topic": "Genetics",
    "level": 2,
    "stem": "Which enzyme synthesizes the short RNA starter needed before a DNA polymerase can elongate a new strand?",
    "options": [
      "DNA ligase",
      "DNA polymerase I",
      "Primase"
    ],
    "answer": 2,
    "explanations": [
      "It seals remaining DNA nicks, rather than creating primers.",
      "In bacteria, it removes RNA primers and fills gaps with DNA.",
      "Primase lays down an RNA primer. In bacteria, DNA polymerase III elongates and DNA polymerase I replaces RNA primers with DNA."
    ],
    "teaching": "Primase lays down an RNA primer. In bacteria, DNA polymerase III elongates and DNA polymerase I replaces RNA primers with DNA.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 2
  },
  {
    "id": "hy150-003",
    "topic": "Genetics",
    "level": 2,
    "stem": "Which bacterial enzyme relieves positive supercoiling during replication and is a target of fluoroquinolones?",
    "options": [
      "DNA gyrase (topoisomerase II)",
      "Bacterial topoisomerase I",
      "Human topoisomerase II"
    ],
    "answer": 0,
    "explanations": [
      "DNA gyrase is a bacterial type II topoisomerase; ciprofloxacin also targets topoisomerase IV. Etoposide targets human topoisomerase II.",
      "It relaxes negative supercoiling and is not the main fluoroquinolone target.",
      "It is targeted by etoposide, not by ciprofloxacin."
    ],
    "teaching": "DNA gyrase is a bacterial type II topoisomerase; ciprofloxacin also targets topoisomerase IV. Etoposide targets human topoisomerase II.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 3
  },
  {
    "id": "hy150-004",
    "topic": "Genetics",
    "level": 2,
    "stem": "Which DNA polymerase activity removes a newly inserted mismatched nucleotide during proofreading?",
    "options": [
      "3′→5′ exonuclease",
      "Mismatch repair",
      "5′→3′ exonuclease"
    ],
    "answer": 0,
    "explanations": [
      "The 3′→5′ exonuclease proofreading activity removes misincorporated nucleotides and increases replication fidelity.",
      "This post-replicative pathway corrects errors escaping polymerase proofreading.",
      "DNA polymerase I uses this to remove RNA primers, not for proofreading."
    ],
    "teaching": "The 3′→5′ exonuclease proofreading activity removes misincorporated nucleotides and increases replication fidelity.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 4
  },
  {
    "id": "hy150-005",
    "topic": "Genetics",
    "level": 1,
    "stem": "Which Watson–Crick base pair forms only two hydrogen bonds and is enriched in easily separated replication origins?",
    "options": [
      "G–C base pair",
      "A–T base pair",
      "Purine–purine pairing"
    ],
    "answer": 1,
    "explanations": [
      "G–C forms three hydrogen bonds and is harder to melt.",
      "A–T has two hydrogen bonds; G–C has three. AT-rich regions melt more easily.",
      "Two purines are too bulky for a normal Watson–Crick pair."
    ],
    "teaching": "A–T has two hydrogen bonds; G–C has three. AT-rich regions melt more easily.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 5
  },
  {
    "id": "hy150-006",
    "topic": "Genetics",
    "level": 2,
    "stem": "A single-base substitution changes a codon without changing the encoded amino acid. What is this called?",
    "options": [
      "Nonsense mutation",
      "Missense mutation",
      "Silent mutation"
    ],
    "answer": 2,
    "explanations": [
      "A nonsense change introduces a premature stop codon.",
      "A missense mutation changes the encoded amino acid.",
      "A synonymous (silent) mutation leaves the amino acid unchanged, often because of third-position wobble."
    ],
    "teaching": "A synonymous (silent) mutation leaves the amino acid unchanged, often because of third-position wobble.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 6
  },
  {
    "id": "hy150-007",
    "topic": "Genetics",
    "level": 3,
    "stem": "A coding-sequence insertion not divisible by three disrupts the reading frame and abolishes dystrophin expression. What mutation class is involved?",
    "options": [
      "Frameshift mutation",
      "In-frame deletion",
      "Nonsense mutation"
    ],
    "answer": 0,
    "explanations": [
      "Out-of-frame variants often cause Duchenne muscular dystrophy. In-frame deletions may permit partial dystrophin expression in Becker muscular dystrophy.",
      "Deleting a multiple of three bases preserves the reading frame.",
      "A point change can create an early stop rather than shift the reading frame."
    ],
    "teaching": "Out-of-frame variants often cause Duchenne muscular dystrophy. In-frame deletions may permit partial dystrophin expression in Becker muscular dystrophy.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 7
  },
  {
    "id": "hy150-008",
    "topic": "Genetics",
    "level": 2,
    "stem": "A child develops severe photosensitivity and early skin cancers because ultraviolet-induced pyrimidine dimers cannot be excised. What disorder is likely?",
    "options": [
      "Ataxia-telangiectasia",
      "Lynch syndrome",
      "Xeroderma pigmentosum"
    ],
    "answer": 2,
    "explanations": [
      "ATM signaling for double-strand breaks is defective.",
      "Mismatch repair, not UV-induced dimer removal, is defective.",
      "Xeroderma pigmentosum results from defective nucleotide excision repair (NER) and is usually autosomal recessive."
    ],
    "teaching": "Xeroderma pigmentosum results from defective nucleotide excision repair (NER) and is usually autosomal recessive.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 8
  },
  {
    "id": "hy150-009",
    "topic": "Genetics",
    "level": 2,
    "stem": "A family has colorectal and endometrial cancer from inherited defective DNA mismatch repair. What syndrome is likely?",
    "options": [
      "Familial adenomatous polyposis",
      "Lynch syndrome",
      "Xeroderma pigmentosum"
    ],
    "answer": 1,
    "explanations": [
      "APC disruption drives adenoma formation, not mismatch repair.",
      "Lynch syndrome is autosomal dominant cancer predisposition involving MLH1, MSH2, MSH6, or PMS2; ovarian cancer risk also rises.",
      "Defective nucleotide excision repair causes UV sensitivity."
    ],
    "teaching": "Lynch syndrome is autosomal dominant cancer predisposition involving MLH1, MSH2, MSH6, or PMS2; ovarian cancer risk also rises.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 9
  },
  {
    "id": "hy150-010",
    "topic": "Genetics",
    "level": 1,
    "stem": "Which repair pathway corrects small, non-bulky lesions such as deaminated or oxidized bases?",
    "options": [
      "Nucleotide excision repair",
      "Mismatch repair",
      "Base excision repair"
    ],
    "answer": 2,
    "explanations": [
      "It removes bulky UV-induced dimers and distortions.",
      "It fixes replication mismatches and short insertion/deletion loops.",
      "DNA glycosylase creates an abasic site, then AP endonuclease, DNA synthesis and ligase restore the strand."
    ],
    "teaching": "DNA glycosylase creates an abasic site, then AP endonuclease, DNA synthesis and ligase restore the strand.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 10
  },
  {
    "id": "hy150-011",
    "topic": "Genetics",
    "level": 2,
    "stem": "A child has ataxia, telangiectasias, recurrent infections and heightened radiation sensitivity due to impaired DNA-break signaling. Which disease?",
    "options": [
      "Ataxia-telangiectasia",
      "Lynch syndrome",
      "Fanconi anemia"
    ],
    "answer": 0,
    "explanations": [
      "ATM kinase responds to DNA double-strand breaks. Ataxia-telangiectasia is autosomal recessive; ionizing radiation poses increased risk.",
      "It increases cancer risk through mismatch repair defects.",
      "It causes failure of DNA interstrand cross-link repair and marrow failure."
    ],
    "teaching": "ATM kinase responds to DNA double-strand breaks. Ataxia-telangiectasia is autosomal recessive; ionizing radiation poses increased risk.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 11
  },
  {
    "id": "hy150-012",
    "topic": "Genetics",
    "level": 2,
    "stem": "Which high-fidelity DNA double-strand break repair pathway uses an intact sister chromatid and involves BRCA1/2?",
    "options": [
      "Nonhomologous end joining",
      "Nucleotide excision repair",
      "Homologous recombination"
    ],
    "answer": 2,
    "explanations": [
      "It rejoins DNA ends without requiring a homologous template.",
      "It removes bulky single-strand lesions such as UV dimers.",
      "Homologous recombination is template-guided. Nonhomologous end joining (NHEJ) is faster but more error-prone."
    ],
    "teaching": "Homologous recombination is template-guided. Nonhomologous end joining (NHEJ) is faster but more error-prone.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 12
  },
  {
    "id": "hy150-013",
    "topic": "Genetics",
    "level": 2,
    "stem": "A child with congenital anomalies and progressive bone marrow failure has defective repair of DNA interstrand cross-links. What diagnosis fits?",
    "options": [
      "Fanconi anemia",
      "Dyskeratosis congenita",
      "Ataxia-telangiectasia"
    ],
    "answer": 0,
    "explanations": [
      "Fanconi anemia often follows autosomal recessive inheritance and raises the risk of acute myeloid leukemia.",
      "Telomere maintenance failure causes marrow failure by another mechanism.",
      "ATM defects affect double-strand break signaling and radiosensitivity."
    ],
    "teaching": "Fanconi anemia often follows autosomal recessive inheritance and raises the risk of acute myeloid leukemia.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 13
  },
  {
    "id": "hy150-014",
    "topic": "Genetics",
    "level": 3,
    "stem": "What replication mechanism expands repetitive DNA sequences and contributes to anticipation in trinucleotide-repeat diseases?",
    "options": [
      "Slipped-strand mispairing",
      "Nucleotide excision repair",
      "Mismatch repair"
    ],
    "answer": 0,
    "explanations": [
      "Slipped-strand mispairing can expand CAG repeats in Huntington disease and CGG repeats in fragile X syndrome.",
      "It removes bulky DNA lesions, especially pyrimidine dimers.",
      "It corrects replication mismatches rather than expanding repeats."
    ],
    "teaching": "Slipped-strand mispairing can expand CAG repeats in Huntington disease and CGG repeats in fragile X syndrome.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 14
  },
  {
    "id": "hy150-015",
    "topic": "Genetics",
    "level": 1,
    "stem": "In which cell-cycle phase does the cyclin D–CDK4/6 pathway phosphorylate Rb to release E2F before DNA synthesis?",
    "options": [
      "G1 phase",
      "G2 phase",
      "S phase"
    ],
    "answer": 0,
    "explanations": [
      "In G1, phosphorylated retinoblastoma protein releases E2F, permitting progression toward S phase. Cyclin B accumulates during G2.",
      "The cell prepares for mitosis during G2, after DNA replication.",
      "DNA is replicated during S phase after restriction-point passage."
    ],
    "teaching": "In G1, phosphorylated retinoblastoma protein releases E2F, permitting progression toward S phase. Cyclin B accumulates during G2.",
    "sourceGroup": "DNA & REPAIR",
    "sourceNumber": 15
  },
  {
    "id": "hy150-016",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "Which eukaryotic RNA polymerase produces precursor messenger RNA and is inhibited by α-amanitin?",
    "options": [
      "RNA polymerase I",
      "RNA polymerase II",
      "RNA polymerase III"
    ],
    "answer": 1,
    "explanations": [
      "It transcribes major ribosomal RNAs, not precursor mRNA.",
      "RNA polymerase I makes most rRNA, II makes mRNA, and III makes tRNA and 5S rRNA. α-Amanitin can cause liver failure.",
      "It transcribes tRNAs and 5S rRNA, not precursor mRNA."
    ],
    "teaching": "RNA polymerase I makes most rRNA, II makes mRNA, and III makes tRNA and 5S rRNA. α-Amanitin can cause liver failure.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 16
  },
  {
    "id": "hy150-017",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "What DNA region, often containing a TATA box, recruits the transcription initiation machinery near a gene?",
    "options": [
      "Terminator",
      "Promoter",
      "Enhancer"
    ],
    "answer": 1,
    "explanations": [
      "This is involved in ending transcription, not its initiation.",
      "A promoter lies close to the transcription start site; enhancers can regulate transcription from far away and in either orientation.",
      "Enhancers can work at long distances and in either orientation."
    ],
    "teaching": "A promoter lies close to the transcription start site; enhancers can regulate transcription from far away and in either orientation.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 17
  },
  {
    "id": "hy150-018",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "Which snRNP-containing complex removes introns from precursor messenger RNA?",
    "options": [
      "Exosome",
      "Spliceosome",
      "Ribosome"
    ],
    "answer": 1,
    "explanations": [
      "It processes or degrades RNAs, not spliceosome-mediated intron removal.",
      "Spliceosomes use small nuclear ribonucleoproteins. Anti-Smith antibodies target snRNP components in systemic lupus erythematosus.",
      "It translates RNA into protein rather than removing introns."
    ],
    "teaching": "Spliceosomes use small nuclear ribonucleoproteins. Anti-Smith antibodies target snRNP components in systemic lupus erythematosus.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 18
  },
  {
    "id": "hy150-019",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "How can one gene produce distinct protein isoforms in different tissues without changing its DNA sequence?",
    "options": [
      "Alternative splicing",
      "Post-translational cleavage",
      "RNA editing"
    ],
    "answer": 0,
    "explanations": [
      "Alternative splicing includes or excludes different exons. POMC-derived peptides instead also illustrate post-translational processing.",
      "A protein precursor is cleaved after translation, not differentially spliced.",
      "RNA nucleotides are modified after transcription rather than exon choices changing."
    ],
    "teaching": "Alternative splicing includes or excludes different exons. POMC-derived peptides instead also illustrate post-translational processing.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 19
  },
  {
    "id": "hy150-020",
    "topic": "Molecular Biology",
    "level": 1,
    "stem": "What protective modification is added to the 5′ end of eukaryotic messenger RNA?",
    "options": [
      "Shine–Dalgarno sequence",
      "7-methylguanosine cap",
      "Poly(A) tail"
    ],
    "answer": 1,
    "explanations": [
      "This bacterial ribosome-binding sequence is not a eukaryotic cap.",
      "A 7-methylguanosine cap protects RNA and helps initiation. A poly(A) tail is added to the 3′ end in the nucleus.",
      "This is added to the 3′ end of many eukaryotic mRNAs."
    ],
    "teaching": "A 7-methylguanosine cap protects RNA and helps initiation. A poly(A) tail is added to the 3′ end in the nucleus.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 20
  },
  {
    "id": "hy150-021",
    "topic": "Molecular Biology",
    "level": 3,
    "stem": "Which codons terminate translation rather than encoding an amino acid?",
    "options": [
      "UGG",
      "AUG",
      "Stop codons UAA, UAG, UGA"
    ],
    "answer": 2,
    "explanations": [
      "This codon encodes tryptophan and does not terminate translation.",
      "This codon initiates translation and encodes methionine.",
      "UAA, UAG and UGA are stop codons; AUG starts translation and codes for methionine."
    ],
    "teaching": "UAA, UAG and UGA are stop codons; AUG starts translation and codes for methionine.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 21
  },
  {
    "id": "hy150-022",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "What property means multiple different codons may specify the same amino acid?",
    "options": [
      "Degenerate genetic code",
      "Universal genetic code",
      "Unambiguous genetic code"
    ],
    "answer": 0,
    "explanations": [
      "The genetic code is degenerate but unambiguous: each codon specifies one amino acid or stop. Methionine and tryptophan each have one codon.",
      "Most organisms use a shared code, with mitochondrial and other exceptions.",
      "Each codon specifies one amino acid or a stop signal."
    ],
    "teaching": "The genetic code is degenerate but unambiguous: each codon specifies one amino acid or stop. Methionine and tryptophan each have one codon.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 22
  },
  {
    "id": "hy150-023",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "Which ATP-dependent enzyme attaches the correct amino acid to the 3′ CCA end of a transfer RNA?",
    "options": [
      "Aminoacyl-tRNA synthetase",
      "Peptidyl transferase",
      "Elongation factor G"
    ],
    "answer": 0,
    "explanations": [
      "Aminoacyl-tRNA synthetases charge transfer RNAs; mischarging can place the wrong amino acid into a growing protein.",
      "Ribosomal RNA forms peptide bonds; it does not charge tRNA.",
      "This bacterial factor supports translocation rather than aminoacylation."
    ],
    "teaching": "Aminoacyl-tRNA synthetases charge transfer RNAs; mischarging can place the wrong amino acid into a growing protein.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 23
  },
  {
    "id": "hy150-024",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "Which ribosomal site holds the transfer RNA bearing the growing peptide chain?",
    "options": [
      "P site of ribosome",
      "E site",
      "A site"
    ],
    "answer": 0,
    "explanations": [
      "A accepts incoming aminoacyl-tRNA, P holds peptidyl-tRNA, and E is the exit site. Peptidyl transferase is ribosomal RNA.",
      "This releases a deacylated tRNA after peptide transfer.",
      "This receives the incoming aminoacyl-tRNA."
    ],
    "teaching": "A accepts incoming aminoacyl-tRNA, P holds peptidyl-tRNA, and E is the exit site. Peptidyl transferase is ribosomal RNA.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 24
  },
  {
    "id": "hy150-025",
    "topic": "Molecular Biology",
    "level": 1,
    "stem": "Which two antibiotic classes act on the bacterial 30S ribosomal subunit?",
    "options": [
      "Aminoglycosides and tetracyclines",
      "Chloramphenicol and linezolid",
      "Macrolides and clindamycin"
    ],
    "answer": 0,
    "explanations": [
      "Aminoglycosides and tetracyclines bind 30S. Macrolides, clindamycin, chloramphenicol and linezolid target 50S.",
      "Both primarily inhibit the bacterial 50S subunit.",
      "Both primarily bind the bacterial 50S subunit."
    ],
    "teaching": "Aminoglycosides and tetracyclines bind 30S. Macrolides, clindamycin, chloramphenicol and linezolid target 50S.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 25
  },
  {
    "id": "hy150-026",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "Which pair of bacterial exotoxins inhibits translation by ADP-ribosylating elongation factor 2?",
    "options": [
      "Cholera toxin and pertussis toxin",
      "Diphtheria toxin and exotoxin A",
      "Botulinum toxin and tetanus toxin"
    ],
    "answer": 1,
    "explanations": [
      "They ADP-ribosylate G proteins, affecting cAMP signaling.",
      "Diphtheria toxin and Pseudomonas exotoxin A disable eukaryotic elongation factor 2 (EF-2), stopping protein elongation.",
      "They cleave SNARE proteins, impairing neurotransmitter release."
    ],
    "teaching": "Diphtheria toxin and Pseudomonas exotoxin A disable eukaryotic elongation factor 2 (EF-2), stopping protein elongation.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 26
  },
  {
    "id": "hy150-027",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "Which ribonucleoprotein directs translating ribosomes to the rough endoplasmic reticulum for secreted proteins?",
    "options": [
      "Signal recognition particle",
      "Sec61 translocon",
      "Clathrin adaptor complex"
    ],
    "answer": 0,
    "explanations": [
      "Signal recognition particle recognizes an ER signal sequence. Free ribosomes produce many cytosolic and mitochondrial proteins.",
      "It forms the ER membrane channel downstream of SRP targeting.",
      "It helps vesicle budding, not ribosome targeting to ER."
    ],
    "teaching": "Signal recognition particle recognizes an ER signal sequence. Free ribosomes produce many cytosolic and mitochondrial proteins.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 27
  },
  {
    "id": "hy150-028",
    "topic": "Molecular Biology",
    "level": 3,
    "stem": "Which intracellular pathway marks proteins with ubiquitin for ATP-dependent degradation?",
    "options": [
      "Ubiquitin–proteasome system",
      "COPII transport",
      "Autophagy–lysosome pathway"
    ],
    "answer": 0,
    "explanations": [
      "Polyubiquitination labels many proteins for proteasomal breakdown. MDM2 ubiquitinates p53; misfolded ΔF508 CFTR is degraded.",
      "It transports cargo toward the Golgi instead of degrading proteins.",
      "It degrades organelles and bulk cytoplasmic material via lysosomes."
    ],
    "teaching": "Polyubiquitination labels many proteins for proteasomal breakdown. MDM2 ubiquitinates p53; misfolded ΔF508 CFTR is degraded.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 28
  },
  {
    "id": "hy150-029",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "Which vesicular coat mediates forward transport from endoplasmic reticulum to Golgi?",
    "options": [
      "Clathrin-coated vesicles",
      "COPI vesicles",
      "COPII vesicles"
    ],
    "answer": 2,
    "explanations": [
      "They participate in endocytosis and selected trans-Golgi trafficking.",
      "They support Golgi-to-ER retrograde traffic.",
      "COPII drives ER-to-Golgi transport; COPI supports retrograde Golgi-to-ER transport; clathrin mediates selected endocytic/TGN routes."
    ],
    "teaching": "COPII drives ER-to-Golgi transport; COPI supports retrograde Golgi-to-ER transport; clathrin mediates selected endocytic/TGN routes.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 29
  },
  {
    "id": "hy150-030",
    "topic": "Molecular Biology",
    "level": 1,
    "stem": "Which chromatin modification generally increases DNA accessibility and transcription?",
    "options": [
      "DNA methylation",
      "Histone deacetylation",
      "Histone acetylation"
    ],
    "answer": 2,
    "explanations": [
      "CpG promoter methylation typically represses gene expression.",
      "Removal of acetyl groups generally condenses chromatin.",
      "Histone acetyltransferases loosen nucleosomes. Histone deacetylase inhibitors include valproate; DNA methylation commonly represses transcription."
    ],
    "teaching": "Histone acetyltransferases loosen nucleosomes. Histone deacetylase inhibitors include valproate; DNA methylation commonly represses transcription.",
    "sourceGroup": "RNA & TRANSLATION",
    "sourceNumber": 30
  },
  {
    "id": "hy150-031",
    "topic": "Genetics",
    "level": 2,
    "stem": "Two unaffected carriers of the same autosomal recessive disorder have a child. What is the risk that the child is affected?",
    "options": [
      "75% affected offspring risk",
      "25% affected offspring risk",
      "50% affected offspring risk"
    ],
    "answer": 1,
    "explanations": [
      "Three in four inherit at least one normal allele, but not disease.",
      "Aa × Aa gives 25% aa affected, 50% Aa carriers and 25% AA noncarriers in each pregnancy.",
      "Half of the children are expected to be carriers, not affected."
    ],
    "teaching": "Aa × Aa gives 25% aa affected, 50% Aa carriers and 25% AA noncarriers in each pregnancy.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 31
  },
  {
    "id": "hy150-032",
    "topic": "Genetics",
    "level": 2,
    "stem": "An unaffected sibling of a patient with an autosomal recessive disorder has two carrier parents. What is the sibling's carrier probability?",
    "options": [
      "1/2 carrier probability",
      "2/3 carrier probability",
      "1/4 carrier probability"
    ],
    "answer": 1,
    "explanations": [
      "This ignores that the affected sibling's genotype has been excluded.",
      "Among unaffected offspring from Aa × Aa, the possibilities are AA, Aa and Aa, so 2 of 3 are carriers.",
      "One quarter is the risk of an affected child before conditioning."
    ],
    "teaching": "Among unaffected offspring from Aa × Aa, the possibilities are AA, Aa and Aa, so 2 of 3 are carriers.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 32
  },
  {
    "id": "hy150-033",
    "topic": "Genetics",
    "level": 2,
    "stem": "An autosomal recessive disorder affects 1 in 10,000 people in Hardy–Weinberg equilibrium. What is the approximate heterozygote frequency?",
    "options": [
      "1/10,000 carrier frequency",
      "1/100 carrier frequency",
      "1/50 carrier frequency"
    ],
    "answer": 2,
    "explanations": [
      "That is q², the disease frequency, not heterozygosity.",
      "That is q, the mutant allele frequency, not approximately 2pq.",
      "q² = 1/10,000, so q = 1/100 and 2pq ≈ 2q = 1/50 when p is approximately 1."
    ],
    "teaching": "q² = 1/10,000, so q = 1/100 and 2pq ≈ 2q = 1/50 when p is approximately 1.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 33
  },
  {
    "id": "hy150-034",
    "topic": "Genetics",
    "level": 2,
    "stem": "A known cystic fibrosis carrier has children with a partner whose carrier frequency is 1/25. What is the affected-child risk per pregnancy?",
    "options": [
      "1/100 affected-child risk",
      "1/150 affected-child risk",
      "1/25 affected-child risk"
    ],
    "answer": 0,
    "explanations": [
      "The risk equals 1 × (1/25) × (1/4) = 1/100, assuming independent carrier probabilities.",
      "That applies when the first partner is an unaffected sibling with 2/3 carrier risk.",
      "This uses the partner's carrier probability without Mendelian risk reduction."
    ],
    "teaching": "The risk equals 1 × (1/25) × (1/4) = 1/100, assuming independent carrier probabilities.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 34
  },
  {
    "id": "hy150-035",
    "topic": "Genetics",
    "level": 1,
    "stem": "An affected father transmits a trait to every daughter and none of his sons. Which inheritance pattern is suggested?",
    "options": [
      "X-linked recessive inheritance",
      "Autosomal dominant inheritance",
      "X-linked dominant inheritance"
    ],
    "answer": 2,
    "explanations": [
      "An affected father makes daughters carriers if the mother is unaffected, not typically affected.",
      "Father-to-son transmission can occur in autosomal dominant disease.",
      "A father transmits his X chromosome to all daughters but to no sons; classic X-linked dominant examples include X-linked hypophosphatemia."
    ],
    "teaching": "A father transmits his X chromosome to all daughters but to no sons; classic X-linked dominant examples include X-linked hypophosphatemia.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 35
  },
  {
    "id": "hy150-036",
    "topic": "Genetics",
    "level": 2,
    "stem": "A woman transmits a disorder to sons and daughters, but an affected man transmits it to none. What inheritance pattern fits?",
    "options": [
      "Autosomal recessive inheritance",
      "Mitochondrial inheritance",
      "X-linked dominant inheritance"
    ],
    "answer": 1,
    "explanations": [
      "Two parental alleles govern risk; paternal transmission remains possible.",
      "Mitochondrial DNA is inherited maternally; heteroplasmy can cause variation in severity. Examples include MELAS, MERRF and LHON.",
      "An affected father typically transmits to all daughters, unlike maternal-only mitochondrial inheritance."
    ],
    "teaching": "Mitochondrial DNA is inherited maternally; heteroplasmy can cause variation in severity. Examples include MELAS, MERRF and LHON.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 36
  },
  {
    "id": "hy150-037",
    "topic": "Genetics",
    "level": 2,
    "stem": "Advanced maternal age, characteristic facies and a single palmar crease suggest which chromosomal disorder?",
    "options": [
      "Trisomy 18 (Edwards syndrome)",
      "Trisomy 21 (Down syndrome)",
      "Trisomy 13 (Patau syndrome)"
    ],
    "answer": 1,
    "explanations": [
      "It is associated with clenched fists and rocker-bottom feet.",
      "Most cases result from meiotic nondisjunction, usually maternal. First-trimester screening often shows increased free β-hCG and decreased PAPP-A.",
      "It often has holoprosencephaly, polydactyly and cleft lip/palate."
    ],
    "teaching": "Most cases result from meiotic nondisjunction, usually maternal. First-trimester screening often shows increased free β-hCG and decreased PAPP-A.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 37
  },
  {
    "id": "hy150-038",
    "topic": "Genetics",
    "level": 2,
    "stem": "A hypotonic infant later develops hyperphagia and obesity due to absent paternal expression at chromosome 15q11–q13. Which syndrome?",
    "options": [
      "Angelman syndrome",
      "Prader–Willi syndrome",
      "Beckwith–Wiedemann syndrome"
    ],
    "answer": 1,
    "explanations": [
      "Maternal UBE3A expression loss causes ataxia, seizures and characteristic happy affect.",
      "Prader–Willi involves loss of paternally expressed genes. Angelman commonly involves loss of maternal UBE3A expression.",
      "Chromosome 11p15 imprinting alterations cause overgrowth and macroglossia."
    ],
    "teaching": "Prader–Willi involves loss of paternally expressed genes. Angelman commonly involves loss of maternal UBE3A expression.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 38
  },
  {
    "id": "hy150-039",
    "topic": "Genetics",
    "level": 2,
    "stem": "A child inherits both copies of chromosome 15 from the mother rather than one from each parent. What is this called?",
    "options": [
      "Nondisjunction",
      "Genomic imprinting",
      "Uniparental disomy"
    ],
    "answer": 2,
    "explanations": [
      "Failure of chromosomes to separate may produce aneuploidy or contribute to UPD after rescue.",
      "It is parent-of-origin gene silencing, not inheritance of both homologs from one parent.",
      "Uniparental disomy can cause imprinting disorders even with a normal chromosome count."
    ],
    "teaching": "Uniparental disomy can cause imprinting disorders even with a normal chromosome count.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 39
  },
  {
    "id": "hy150-040",
    "topic": "Genetics",
    "level": 1,
    "stem": "A trinucleotide-repeat disorder develops at younger ages in successive generations. What genetic phenomenon is illustrated?",
    "options": [
      "Variable expressivity",
      "Incomplete penetrance",
      "Anticipation"
    ],
    "answer": 2,
    "explanations": [
      "The severity differs among affected individuals, not necessarily across generations.",
      "Not everyone with a pathogenic variant shows the phenotype.",
      "Repeat expansion produces anticipation in disorders such as Huntington disease, myotonic dystrophy and some fragile X pedigrees."
    ],
    "teaching": "Repeat expansion produces anticipation in disorders such as Huntington disease, myotonic dystrophy and some fragile X pedigrees.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 40
  },
  {
    "id": "hy150-041",
    "topic": "Genetics",
    "level": 2,
    "stem": "A boy has intellectual disability, long face, prominent ears and postpubertal macroorchidism from CGG expansion. What diagnosis?",
    "options": [
      "Rett syndrome",
      "Fragile X syndrome",
      "Klinefelter syndrome"
    ],
    "answer": 1,
    "explanations": [
      "MECP2 variants typically cause regression and stereotyped hand movements in girls.",
      "CGG expansion and methylation silence FMR1. Fragile X is a major inherited cause of intellectual disability and may involve mitral valve prolapse.",
      "47,XXY causes small testes and infertility rather than FMR1 repeat expansion."
    ],
    "teaching": "CGG expansion and methylation silence FMR1. Fragile X is a major inherited cause of intellectual disability and may involve mitral valve prolapse.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 41
  },
  {
    "id": "hy150-042",
    "topic": "Genetics",
    "level": 3,
    "stem": "Two siblings have the same supposedly de novo genetic disease despite unaffected parents. Which mechanism can explain recurrence?",
    "options": [
      "Incomplete penetrance",
      "Gonadal mosaicism",
      "Somatic mosaicism"
    ],
    "answer": 1,
    "explanations": [
      "It makes a carrier asymptomatic but does not explain recurrent de novo transmission as directly.",
      "A parent may have the mutation in some germ cells but not blood or other somatic tissues. This is germline (gonadal) mosaicism.",
      "A postzygotic mutation creates genetically distinct somatic cell lineages."
    ],
    "teaching": "A parent may have the mutation in some germ cells but not blood or other somatic tissues. This is germline (gonadal) mosaicism.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 42
  },
  {
    "id": "hy150-043",
    "topic": "Genetics",
    "level": 2,
    "stem": "A retinoblastoma develops after a second somatic event removes the remaining functional RB1 allele. What process is this?",
    "options": [
      "Haploinsufficiency",
      "Gain-of-function mutation",
      "Loss of heterozygosity"
    ],
    "answer": 2,
    "explanations": [
      "One functional allele produces insufficient protein, without a second hit.",
      "A mutant allele increases or changes activity instead of removing the normal tumor suppressor.",
      "Loss of heterozygosity is central to the two-hit mechanism for many tumor-suppressor genes, such as RB1."
    ],
    "teaching": "Loss of heterozygosity is central to the two-hit mechanism for many tumor-suppressor genes, such as RB1.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 43
  },
  {
    "id": "hy150-044",
    "topic": "Genetics",
    "level": 2,
    "stem": "A mutant p53 protein interferes with wild-type p53 by entering the same multimeric complex. What kind of effect?",
    "options": [
      "Haploinsufficiency",
      "Recessive loss of function",
      "Dominant-negative mutation"
    ],
    "answer": 2,
    "explanations": [
      "A single normal gene copy cannot provide enough activity, even without poisoned multimers.",
      "Both alleles ordinarily must be lost before the phenotype appears.",
      "A dominant-negative allele disrupts the function of protein produced by the normal allele; p53 normally functions as a tetramer."
    ],
    "teaching": "A dominant-negative allele disrupts the function of protein produced by the normal allele; p53 normally functions as a tetramer.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 44
  },
  {
    "id": "hy150-045",
    "topic": "Genetics",
    "level": 1,
    "stem": "Why can a deleterious sickle-cell allele remain relatively common where malaria is endemic?",
    "options": [
      "Founder effect",
      "Genetic drift",
      "Heterozygote advantage"
    ],
    "answer": 2,
    "explanations": [
      "A small ancestral gene pool can raise allele frequency without selective benefit.",
      "Chance changes allele frequency, not necessarily malaria-related fitness.",
      "Heterozygous carriers have some protection against severe malaria, promoting balanced polymorphism under selective pressure."
    ],
    "teaching": "Heterozygous carriers have some protection against severe malaria, promoting balanced polymorphism under selective pressure.",
    "sourceGroup": "GENETICS MATH",
    "sourceNumber": 45
  },
  {
    "id": "hy150-046",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which glycolytic enzyme is activated by AMP and fructose-2,6-bisphosphate but inhibited by ATP and citrate?",
    "options": [
      "Pyruvate kinase",
      "Phosphofructokinase-1",
      "Hexokinase"
    ],
    "answer": 1,
    "explanations": [
      "It catalyzes PEP-to-pyruvate, a different irreversible glycolytic step.",
      "PFK-1 is the key rate-limiting glycolytic enzyme; insulin promotes fructose-2,6-bisphosphate formation in liver.",
      "It phosphorylates glucose at entry but is not activated by fructose-2,6-bisphosphate."
    ],
    "teaching": "PFK-1 is the key rate-limiting glycolytic enzyme; insulin promotes fructose-2,6-bisphosphate formation in liver.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 46
  },
  {
    "id": "hy150-047",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which hepatic enzyme has a high Km for glucose and helps the liver increase phosphorylation when blood glucose rises?",
    "options": [
      "Glucose-6-phosphatase",
      "Glucokinase",
      "Hexokinase"
    ],
    "answer": 1,
    "explanations": [
      "It generates free glucose in liver/kidney rather than trapping glucose after uptake.",
      "Glucokinase has high Km and high capacity. Hexokinase has lower Km and is inhibited by glucose-6-phosphate.",
      "It has low Km and is inhibited by glucose-6-phosphate."
    ],
    "teaching": "Glucokinase has high Km and high capacity. Hexokinase has lower Km and is inhibited by glucose-6-phosphate.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 47
  },
  {
    "id": "hy150-048",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A child has chronic nonspherocytic hemolytic anemia and elevated erythrocyte 2,3-BPG. Which enzyme is deficient?",
    "options": [
      "Hereditary spherocytosis",
      "Pyruvate kinase deficiency",
      "Glucose-6-phosphate dehydrogenase deficiency"
    ],
    "answer": 1,
    "explanations": [
      "It causes membrane-related hemolysis with spherocytes and increased osmotic fragility.",
      "Red blood cells depend on glycolysis for ATP. Pyruvate kinase deficiency is typically autosomal recessive and causes hemolysis.",
      "It causes oxidative hemolysis with Heinz bodies and bite cells."
    ],
    "teaching": "Red blood cells depend on glycolysis for ATP. Pyruvate kinase deficiency is typically autosomal recessive and causes hemolysis.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 48
  },
  {
    "id": "hy150-049",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "Which set of five cofactors is required by pyruvate dehydrogenase and α-ketoglutarate dehydrogenase?",
    "options": [
      "PDH cofactor set (B1, B2, B3, B5, lipoate)",
      "Vitamin B6 and pyridoxal phosphate",
      "Biotin, ATP and bicarbonate"
    ],
    "answer": 0,
    "explanations": [
      "Thiamine pyrophosphate (B1), FAD (B2), NAD+ (B3), CoA (B5) and lipoic acid are required; arsenic inhibits lipoate-dependent enzymes.",
      "PLP supports transamination and heme synthesis, not all PDH subunits.",
      "These support pyruvate carboxylase, not the PDH complex cofactor set."
    ],
    "teaching": "Thiamine pyrophosphate (B1), FAD (B2), NAD+ (B3), CoA (B5) and lipoic acid are required; arsenic inhibits lipoate-dependent enzymes.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 49
  },
  {
    "id": "hy150-050",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "An infant has lactic acidosis, developmental impairment and elevated alanine because pyruvate cannot efficiently enter the TCA cycle. What deficiency?",
    "options": [
      "Glycogen storage disease type I",
      "Pyruvate carboxylase deficiency",
      "Pyruvate dehydrogenase deficiency"
    ],
    "answer": 2,
    "explanations": [
      "It causes hypoglycemia and lactic acidosis from glucose-6-phosphatase deficiency.",
      "It impairs anaplerosis and gluconeogenesis rather than oxidative decarboxylation by PDH.",
      "Pyruvate dehydrogenase defects can be X-linked via PDHA1. A ketogenic diet may supply alternative fuel in selected cases."
    ],
    "teaching": "Pyruvate dehydrogenase defects can be X-linked via PDHA1. A ketogenic diet may supply alternative fuel in selected cases.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 50
  },
  {
    "id": "hy150-051",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which metabolic cycle carries nitrogen and carbon from exercising skeletal muscle to liver as alanine?",
    "options": [
      "Cori cycle",
      "Glucose–alanine cycle",
      "Urea cycle"
    ],
    "answer": 1,
    "explanations": [
      "Lactate, not alanine, carries carbon from muscle to liver.",
      "The glucose–alanine (Cahill) cycle transfers muscle alanine to the liver; the Cori cycle instead carries lactate.",
      "It disposes of nitrogen as urea, not glucose–alanine carbon recycling."
    ],
    "teaching": "The glucose–alanine (Cahill) cycle transfers muscle alanine to the liver; the Cori cycle instead carries lactate.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 51
  },
  {
    "id": "hy150-052",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which enzyme set bypasses the three irreversible steps of glycolysis during gluconeogenesis?",
    "options": [
      "Glycogen phosphorylase and debranching enzyme",
      "Hexokinase, PFK-1 and pyruvate kinase",
      "Four gluconeogenic bypass enzymes"
    ],
    "answer": 2,
    "explanations": [
      "These break down glycogen, not synthesize glucose de novo.",
      "These are the irreversible glycolysis enzymes, not their gluconeogenic bypasses.",
      "Pyruvate carboxylase, PEP carboxykinase, fructose-1,6-bisphosphatase and glucose-6-phosphatase; pyruvate carboxylase needs biotin."
    ],
    "teaching": "Pyruvate carboxylase, PEP carboxykinase, fructose-1,6-bisphosphatase and glucose-6-phosphatase; pyruvate carboxylase needs biotin.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 52
  },
  {
    "id": "hy150-053",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Why does β-oxidation of even-chain fatty acids fail to produce net glucose in humans?",
    "options": [
      "Odd-chain fatty acids cannot yield net glucose",
      "Even-chain fatty acids cannot yield net glucose",
      "Glycerol cannot yield glucose"
    ],
    "answer": 1,
    "explanations": [
      "Odd-chain β-oxidation produces glucogenic propionyl-CoA.",
      "Acetyl-CoA cannot yield net oxaloacetate via the TCA cycle; odd-chain fatty acids produce propionyl-CoA and can contribute to gluconeogenesis.",
      "Glycerol from triacylglycerol can enter gluconeogenesis through DHAP."
    ],
    "teaching": "Acetyl-CoA cannot yield net oxaloacetate via the TCA cycle; odd-chain fatty acids produce propionyl-CoA and can contribute to gluconeogenesis.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 53
  },
  {
    "id": "hy150-054",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A fasting child develops hypoglycemia with inappropriately low ketones. Which metabolic category should be suspected?",
    "options": [
      "Fatty acid oxidation defect",
      "Isolated glycogen phosphorylase deficiency",
      "Insulin excess"
    ],
    "answer": 0,
    "explanations": [
      "MCAD or carnitine-pathway defects impair fatty acid fuel and ketone-body production during fasting.",
      "It impairs glycogen breakdown but preserves normal ability to make ketones from fat.",
      "It can suppress ketogenesis, but the fasting-pattern inherited oxidation defect is the classic cause."
    ],
    "teaching": "MCAD or carnitine-pathway defects impair fatty acid fuel and ketone-body production during fasting.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 54
  },
  {
    "id": "hy150-055",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "What water-soluble fuels are produced by the liver during prolonged fasting and used increasingly by the brain?",
    "options": [
      "Glycogen",
      "Ketone bodies",
      "Lactate"
    ],
    "answer": 1,
    "explanations": [
      "It supplies glucose early in fasting, not increasing brain fuel after several days.",
      "Acetoacetate and β-hydroxybutyrate are major ketone bodies. Red blood cells cannot use them because they lack mitochondria; liver lacks SCOT.",
      "Lactate is a gluconeogenic substrate, not a liver-made ketone fuel."
    ],
    "teaching": "Acetoacetate and β-hydroxybutyrate are major ketone bodies. Red blood cells cannot use them because they lack mitochondria; liver lacks SCOT.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 55
  },
  {
    "id": "hy150-056",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "A patient with diabetic ketoacidosis has severe ketosis but a relatively weak urine nitroprusside result. Which ketone predominates?",
    "options": [
      "β-Hydroxybutyrate",
      "Acetone",
      "Acetoacetate"
    ],
    "answer": 0,
    "explanations": [
      "Nitroprusside tests detect mainly acetoacetate, not β-hydroxybutyrate, which rises when mitochondrial NADH is elevated.",
      "This volatile ketone causes fruity breath rather than dominating blood ketone concentration.",
      "This is the ketone chiefly detected by nitroprusside tests."
    ],
    "teaching": "Nitroprusside tests detect mainly acetoacetate, not β-hydroxybutyrate, which rises when mitochondrial NADH is elevated.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 56
  },
  {
    "id": "hy150-057",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A patient develops fasting hypoglycemia and lactic acidosis after heavy drinking. Which redox change impairs gluconeogenesis?",
    "options": [
      "Increased acetyl-CoA carboxylase activity",
      "High NAD+/NADH ratio",
      "High NADH/NAD+ after ethanol"
    ],
    "answer": 2,
    "explanations": [
      "Fat synthesis may be affected, but it does not explain acute lactic acidosis from ethanol metabolism.",
      "This favors oxidation and does not explain the ethanol-associated redox shift.",
      "Ethanol metabolism increases NADH, pushing pyruvate to lactate and oxaloacetate to malate; it also promotes fatty liver."
    ],
    "teaching": "Ethanol metabolism increases NADH, pushing pyruvate to lactate and oxaloacetate to malate; it also promotes fatty liver.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 57
  },
  {
    "id": "hy150-058",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "During fasting, what does glucagon-driven protein kinase A phosphorylation do to the liver PFK-2/FBPase-2 bifunctional enzyme?",
    "options": [
      "Activation of hepatic PFK-2 by glucagon",
      "Activation of hepatic FBPase-2 by glucagon",
      "Activation of PFK-1 by glucagon"
    ],
    "answer": 1,
    "explanations": [
      "Hepatic PFK-2 is inhibited after glucagon-driven phosphorylation.",
      "Phosphorylation activates the FBPase-2 domain in liver, lowers fructose-2,6-bisphosphate and favors gluconeogenesis. Isoform effects differ by tissue.",
      "Glucagon lowers fructose-2,6-bisphosphate and reduces hepatic PFK-1 activity."
    ],
    "teaching": "Phosphorylation activates the FBPase-2 domain in liver, lowers fructose-2,6-bisphosphate and favors gluconeogenesis. Isoform effects differ by tissue.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 58
  },
  {
    "id": "hy150-059",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which cytosolic reducing-equivalent shuttle preserves NADH's higher ATP yield, permitting about 32 ATP per glucose?",
    "options": [
      "Carnitine shuttle",
      "Glycerol-3-phosphate shuttle",
      "Malate–aspartate shuttle"
    ],
    "answer": 2,
    "explanations": [
      "It transports long-chain fatty acyl groups, not cytosolic NADH equivalents.",
      "It passes reducing equivalents to FAD-linked carriers, yielding less ATP per cytosolic NADH.",
      "Malate–aspartate transfers reducing equivalents into mitochondrial NADH; glycerol-3-phosphate gives mitochondrial FADH2-equivalent electrons and about 30 ATP."
    ],
    "teaching": "Malate–aspartate transfers reducing equivalents into mitochondrial NADH; glycerol-3-phosphate gives mitochondrial FADH2-equivalent electrons and about 30 ATP.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 59
  },
  {
    "id": "hy150-060",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "A poison blocks cytochrome c oxidase (electron transport complex IV), causing impaired oxygen utilization. Which poison?",
    "options": [
      "Oligomycin poisoning",
      "Rotenone poisoning",
      "Cyanide poisoning"
    ],
    "answer": 2,
    "explanations": [
      "Oligomycin inhibits ATP synthase (complex V), not cytochrome c oxidase.",
      "Rotenone inhibits electron transport complex I.",
      "Cyanide blocks complex IV. Rotenone blocks I; oligomycin inhibits ATP synthase; 2,4-dinitrophenol uncouples oxidative phosphorylation."
    ],
    "teaching": "Cyanide blocks complex IV. Rotenone blocks I; oligomycin inhibits ATP synthase; 2,4-dinitrophenol uncouples oxidative phosphorylation.",
    "sourceGroup": "FED VS FASTING",
    "sourceNumber": 60
  },
  {
    "id": "hy150-061",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A child has severe fasting hypoglycemia, hepatomegaly, lactic acidosis and hyperuricemia from glucose-6-phosphatase deficiency. Which glycogenosis?",
    "options": [
      "Von Gierke disease",
      "Hers disease (type VI)",
      "Cori disease (type III)"
    ],
    "answer": 0,
    "explanations": [
      "Type I glycogen storage disease prevents release of free glucose. Frequent feeds and uncooked cornstarch help prevent fasting hypoglycemia.",
      "Liver glycogen phosphorylase deficiency often has mild fasting hypoglycemia.",
      "Debranching deficiency usually causes milder hypoglycemia without marked lactic acidosis."
    ],
    "teaching": "Type I glycogen storage disease prevents release of free glucose. Frequent feeds and uncooked cornstarch help prevent fasting hypoglycemia.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 61
  },
  {
    "id": "hy150-062",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A floppy infant develops cardiomegaly and hypertrophic cardiomyopathy from lysosomal acid α-glucosidase deficiency. Which glycogenosis?",
    "options": [
      "McArdle disease (type V)",
      "Cori disease (type III)",
      "Pompe disease"
    ],
    "answer": 2,
    "explanations": [
      "A muscle phosphorylase defect causes exercise cramps, not infant cardiomegaly.",
      "A debranching defect chiefly causes liver and sometimes muscle disease, not lysosomal cardiomyopathy.",
      "Pompe is type II glycogen storage disease and uniquely lysosomal among classic glycogenoses. Enzyme-replacement therapy changes prognosis."
    ],
    "teaching": "Pompe is type II glycogen storage disease and uniquely lysosomal among classic glycogenoses. Enzyme-replacement therapy changes prognosis.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 62
  },
  {
    "id": "hy150-063",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "A child has hepatomegaly and fasting hypoglycemia with relatively little lactic acidosis due to impaired glycogen debranching. Which glycogenosis?",
    "options": [
      "Cori disease",
      "Von Gierke disease (type I)",
      "Andersen disease (type IV)"
    ],
    "answer": 0,
    "explanations": [
      "Type III deficiency of the debranching enzyme (AGL) leaves limit dextrins; hypoglycemia is usually less severe than in von Gierke.",
      "Glucose-6-phosphatase deficiency produces prominent lactic acidosis and severe hypoglycemia.",
      "Branching enzyme deficiency produces abnormal glycogen and can cause progressive cirrhosis."
    ],
    "teaching": "Type III deficiency of the debranching enzyme (AGL) leaves limit dextrins; hypoglycemia is usually less severe than in von Gierke.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 63
  },
  {
    "id": "hy150-064",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Exercise causes cramps and myoglobinuria; lactate fails to rise, but effort improves after a second wind. Which glycogenosis?",
    "options": [
      "McArdle disease",
      "Tarui disease (type VII)",
      "Pompe disease (type II)"
    ],
    "answer": 0,
    "explanations": [
      "Type V is muscle glycogen phosphorylase deficiency. Later use of circulating glucose and fatty acids explains the second wind.",
      "Muscle phosphofructokinase deficiency can also cause exercise intolerance and hemolysis.",
      "Lysosomal acid maltase deficiency causes muscle weakness and often cardiomyopathy."
    ],
    "teaching": "Type V is muscle glycogen phosphorylase deficiency. Later use of circulating glucose and fatty acids explains the second wind.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 64
  },
  {
    "id": "hy150-065",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "What rapidly activates muscle glycogen phosphorylase during increased ATP demand, independently of hormonal phosphorylation?",
    "options": [
      "Citrate allosteric activation",
      "Allosteric AMP activation",
      "ATP allosteric activation"
    ],
    "answer": 1,
    "explanations": [
      "Citrate is generally a signal of energy abundance and inhibits key glycolytic enzymes.",
      "AMP allosterically activates muscle phosphorylase. Epinephrine also signals through phosphorylase kinase; skeletal muscle is not a major glucagon target.",
      "ATP generally indicates adequate energy and antagonizes AMP effects."
    ],
    "teaching": "AMP allosterically activates muscle phosphorylase. Epinephrine also signals through phosphorylase kinase; skeletal muscle is not a major glucagon target.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 65
  },
  {
    "id": "hy150-066",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "During glucagon signaling in liver, what happens to glycogen synthase activity?",
    "options": [
      "Glycogen synthase inhibition by phosphorylation",
      "Glycogen phosphorylase inhibition by phosphorylation",
      "Glycogen synthase activation by phosphorylation"
    ],
    "answer": 0,
    "explanations": [
      "Phosphorylation inhibits glycogen synthase, reducing glycogen formation. Insulin promotes dephosphorylation and activation.",
      "Phosphorylation generally activates phosphorylase via its kinase cascade.",
      "Phosphorylation inhibits rather than activates glycogen synthase."
    ],
    "teaching": "Phosphorylation inhibits glycogen synthase, reducing glycogen formation. Insulin promotes dephosphorylation and activation.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 66
  },
  {
    "id": "hy150-067",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A milk-fed neonate has vomiting, liver injury, cataracts and E. coli sepsis. What inherited enzyme deficiency fits?",
    "options": [
      "Hereditary fructose intolerance",
      "Galactokinase deficiency",
      "Classic galactosemia (GALT deficiency)"
    ],
    "answer": 2,
    "explanations": [
      "It follows fructose/sucrose exposure and is caused by aldolase B deficiency.",
      "It causes cataracts but usually lacks severe liver failure or sepsis.",
      "Galactose-1-phosphate uridyltransferase (GALT) deficiency leads to toxic galactose-1-phosphate accumulation; eliminate lactose and galactose."
    ],
    "teaching": "Galactose-1-phosphate uridyltransferase (GALT) deficiency leads to toxic galactose-1-phosphate accumulation; eliminate lactose and galactose.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 67
  },
  {
    "id": "hy150-068",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which sugar alcohol accumulates in the lens and causes cataracts in galactose metabolism disorders?",
    "options": [
      "Sorbitol",
      "Fructose-1-phosphate",
      "Galactitol"
    ],
    "answer": 2,
    "explanations": [
      "Glucose is reduced to sorbitol, especially in chronic hyperglycemia.",
      "This metabolite accumulates in aldolase B deficiency and causes phosphate trapping.",
      "Aldose reductase reduces galactose to galactitol, which creates osmotic injury in the lens."
    ],
    "teaching": "Aldose reductase reduces galactose to galactitol, which creates osmotic injury in the lens.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 68
  },
  {
    "id": "hy150-069",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which polyol contributes to osmotic injury in diabetic lenses, retina, kidneys and Schwann cells?",
    "options": [
      "Sorbitol accumulation",
      "Galactitol",
      "Mannitol"
    ],
    "answer": 0,
    "explanations": [
      "Aldose reductase converts glucose to sorbitol; tissues with limited sorbitol dehydrogenase can accumulate sorbitol.",
      "This polyol accumulates from galactose and causes cataracts in galactosemia.",
      "This is an osmotic drug rather than the usual diabetic intracellular polyol."
    ],
    "teaching": "Aldose reductase converts glucose to sorbitol; tissues with limited sorbitol dehydrogenase can accumulate sorbitol.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 69
  },
  {
    "id": "hy150-070",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "A weaning infant develops vomiting, hypoglycemia and liver dysfunction after fruit juice because fructose-1-phosphate traps phosphate. Which disorder?",
    "options": [
      "Essential fructosuria",
      "Hereditary fructose intolerance",
      "Classic galactosemia"
    ],
    "answer": 1,
    "explanations": [
      "Fructokinase deficiency causes benign urinary fructose without hypoglycemia.",
      "Aldolase B deficiency causes fructose-1-phosphate accumulation, ATP depletion and impaired gluconeogenesis and glycogenolysis.",
      "GALT deficiency causes neonatal problems after milk, not fruit juice."
    ],
    "teaching": "Aldolase B deficiency causes fructose-1-phosphate accumulation, ATP depletion and impaired gluconeogenesis and glycogenolysis.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 70
  },
  {
    "id": "hy150-071",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A healthy child has fructose in urine after fruit intake, without symptoms. What enzyme deficiency explains it?",
    "options": [
      "Hereditary fructose intolerance",
      "Essential fructosuria",
      "Fructose-1,6-bisphosphatase deficiency"
    ],
    "answer": 1,
    "explanations": [
      "Aldolase B deficiency causes symptomatic hypoglycemia after fructose.",
      "Fructokinase deficiency is benign. Fructose can make reducing-sugar tests positive while a glucose-specific dipstick remains negative.",
      "This impairs gluconeogenesis and causes fasting intolerance, not isolated urinary fructose."
    ],
    "teaching": "Fructokinase deficiency is benign. Fructose can make reducing-sugar tests positive while a glucose-specific dipstick remains negative.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 71
  },
  {
    "id": "hy150-072",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Why can large amounts of dietary fructose supply unregulated triose substrates for hepatic lipogenesis?",
    "options": [
      "Fructose bypass of PFK-1",
      "Direct conversion of fructose to acetyl-CoA",
      "Activation of PFK-1"
    ],
    "answer": 0,
    "explanations": [
      "Fructose metabolism via fructose-1-phosphate enters at triose phosphate level, bypassing phosphofructokinase-1 control.",
      "Fructose still enters central metabolism through phosphorylated intermediates.",
      "Fructose metabolism bypasses PFK-1 instead of activating that regulatory checkpoint."
    ],
    "teaching": "Fructose metabolism via fructose-1-phosphate enters at triose phosphate level, bypassing phosphofructokinase-1 control.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 72
  },
  {
    "id": "hy150-073",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A patient has bloating and osmotic diarrhea after drinking milk with normal small-intestinal villi. What diagnosis fits?",
    "options": [
      "Lactase deficiency",
      "Glucose–galactose malabsorption",
      "Celiac disease"
    ],
    "answer": 0,
    "explanations": [
      "Undigested lactose is fermented and draws water into the intestine; stool can be acidic. Secondary deficiency can follow enteritis.",
      "SGLT1 deficiency causes severe early diarrhea with glucose and galactose.",
      "Villous atrophy and immune-mediated gluten sensitivity distinguish this disorder."
    ],
    "teaching": "Undigested lactose is fermented and draws water into the intestine; stool can be acidic. Secondary deficiency can follow enteritis.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 73
  },
  {
    "id": "hy150-074",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A toddler has severe diarrhea from glucose and galactose but tolerates fructose. Which transporter is defective?",
    "options": [
      "GLUT4 deficiency",
      "GLUT5 deficiency",
      "SGLT1 deficiency"
    ],
    "answer": 2,
    "explanations": [
      "GLUT4 mediates insulin-stimulated muscle/adipose uptake, not intestinal luminal transport.",
      "GLUT5 handles fructose absorption rather than glucose/galactose uptake.",
      "Sodium–glucose cotransporter 1 handles intestinal glucose and galactose. Fructose uses GLUT5."
    ],
    "teaching": "Sodium–glucose cotransporter 1 handles intestinal glucose and galactose. Fructose uses GLUT5.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 74
  },
  {
    "id": "hy150-075",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "Which glucose transporter responds to insulin by translocating to the cell surface in skeletal muscle and adipose tissue?",
    "options": [
      "GLUT1",
      "GLUT4",
      "GLUT2"
    ],
    "answer": 1,
    "explanations": [
      "It mediates basal uptake, including in erythrocytes, without insulin-driven translocation.",
      "GLUT4 is insulin-responsive in muscle and adipose tissue. GLUT1 serves basal uptake, including erythrocytes; GLUT2 supports hepatic bidirectional transport.",
      "It supports bidirectional hepatic glucose transport rather than insulin-stimulated muscle uptake."
    ],
    "teaching": "GLUT4 is insulin-responsive in muscle and adipose tissue. GLUT1 serves basal uptake, including erythrocytes; GLUT2 supports hepatic bidirectional transport.",
    "sourceGroup": "GLYCOGEN & SUGARS",
    "sourceNumber": 75
  },
  {
    "id": "hy150-076",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "What biotin-dependent enzyme forms malonyl-CoA, the committed step in fatty-acid synthesis?",
    "options": [
      "Carnitine palmitoyltransferase I",
      "Acetyl-CoA carboxylase",
      "HMG-CoA reductase"
    ],
    "answer": 1,
    "explanations": [
      "It supports long-chain fatty acid transport for oxidation and is inhibited by malonyl-CoA.",
      "Acetyl-CoA carboxylase is activated by insulin; malonyl-CoA inhibits CPT-I, preventing simultaneous β-oxidation.",
      "It is rate-limiting in cholesterol synthesis, not fatty-acid synthesis."
    ],
    "teaching": "Acetyl-CoA carboxylase is activated by insulin; malonyl-CoA inhibits CPT-I, preventing simultaneous β-oxidation.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 76
  },
  {
    "id": "hy150-077",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "Which transport mechanism moves acetyl units from mitochondria to cytosol for fatty-acid synthesis?",
    "options": [
      "Citrate shuttle",
      "Malate–aspartate shuttle",
      "Carnitine shuttle"
    ],
    "answer": 0,
    "explanations": [
      "Citrate carries acetyl units to cytosol. Carnitine transports long-chain fatty acyl groups toward mitochondrial oxidation.",
      "It transfers cytosolic NADH reducing equivalents for oxidative phosphorylation.",
      "It carries long-chain fatty acyl groups into mitochondria for oxidation."
    ],
    "teaching": "Citrate carries acetyl units to cytosol. Carnitine transports long-chain fatty acyl groups toward mitochondrial oxidation.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 77
  },
  {
    "id": "hy150-078",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which outer mitochondrial membrane enzyme transfers long-chain fatty acyl groups onto carnitine and is blocked by malonyl-CoA?",
    "options": [
      "Acyl-CoA dehydrogenase",
      "Carnitine palmitoyltransferase II",
      "Carnitine palmitoyltransferase I"
    ],
    "answer": 2,
    "explanations": [
      "It catalyzes the first FAD-dependent β-oxidation reaction after entry.",
      "It regenerates acyl-CoA on the matrix side after carnitine transport.",
      "CPT-I gates entry of long-chain fatty acids into the mitochondrial matrix; medium-chain species can bypass the carnitine shuttle."
    ],
    "teaching": "CPT-I gates entry of long-chain fatty acids into the mitochondrial matrix; medium-chain species can bypass the carnitine shuttle.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 78
  },
  {
    "id": "hy150-079",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "An infant becomes lethargic after an overnight fast, with hypoketotic hypoglycemia and dicarboxylic aciduria. What is the defect?",
    "options": [
      "Carnitine transport defect",
      "Very-long-chain acyl-CoA dehydrogenase deficiency",
      "MCAD deficiency"
    ],
    "answer": 2,
    "explanations": [
      "It also causes hypoketotic hypoglycemia, but impairs long-chain transport rather than medium-chain dehydrogenation.",
      "It affects long-chain oxidation and often causes muscle or cardiac manifestations.",
      "Medium-chain acyl-CoA dehydrogenase deficiency prevents adequate β-oxidation and ketogenesis. Avoid prolonged fasting."
    ],
    "teaching": "Medium-chain acyl-CoA dehydrogenase deficiency prevents adequate β-oxidation and ketogenesis. Avoid prolonged fasting.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 79
  },
  {
    "id": "hy150-080",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "Which enzyme is inhibited by statins and rate-limits endogenous cholesterol biosynthesis?",
    "options": [
      "HMG-CoA synthase",
      "Acetyl-CoA carboxylase",
      "HMG-CoA reductase"
    ],
    "answer": 2,
    "explanations": [
      "The mitochondrial isoform helps make ketone bodies rather than cholesterol.",
      "It forms malonyl-CoA during fatty acid synthesis, not mevalonate.",
      "HMG-CoA reductase makes mevalonate in cholesterol synthesis; HMG-CoA synthase instead participates in ketogenesis."
    ],
    "teaching": "HMG-CoA reductase makes mevalonate in cholesterol synthesis; HMG-CoA synthase instead participates in ketogenesis.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 80
  },
  {
    "id": "hy150-081",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which enzyme, activated by apolipoprotein A-I, esterifies free cholesterol on HDL particles?",
    "options": [
      "CETP",
      "Lipoprotein lipase",
      "LCAT"
    ],
    "answer": 2,
    "explanations": [
      "It exchanges HDL cholesteryl ester for triglycerides on other lipoproteins.",
      "It hydrolyzes circulating triglycerides after activation by ApoC-II.",
      "Lecithin–cholesterol acyltransferase matures HDL. CETP exchanges cholesteryl esters and triglycerides among particles."
    ],
    "teaching": "Lecithin–cholesterol acyltransferase matures HDL. CETP exchanges cholesteryl esters and triglycerides among particles.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 81
  },
  {
    "id": "hy150-082",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which apolipoprotein activates endothelial lipoprotein lipase to clear triglyceride-rich lipoproteins?",
    "options": [
      "Apolipoprotein B-100",
      "Apolipoprotein E",
      "Apolipoprotein C-II"
    ],
    "answer": 2,
    "explanations": [
      "It binds LDL receptors and provides structure for VLDL/LDL.",
      "It mediates uptake of remnant lipoproteins by hepatic receptors.",
      "ApoC-II activates LPL; ApoE mediates remnant uptake; ApoB-100 binds the LDL receptor; ApoB-48 builds chylomicrons."
    ],
    "teaching": "ApoC-II activates LPL; ApoE mediates remnant uptake; ApoB-100 binds the LDL receptor; ApoB-48 builds chylomicrons.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 82
  },
  {
    "id": "hy150-083",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A child has creamy plasma, eruptive xanthomas and recurrent pancreatitis from very high triglycerides. Which dyslipidemia?",
    "options": [
      "Familial chylomicronemia (type I)",
      "Familial hypercholesterolemia (type IIa)",
      "Dysbetalipoproteinemia (type III)"
    ],
    "answer": 0,
    "explanations": [
      "LPL or ApoC-II deficiency causes type I hyperlipoproteinemia and severe chylomicron accumulation; restrict long-chain dietary fat.",
      "It chiefly elevates LDL cholesterol and causes tendon xanthomas.",
      "It impairs remnant clearance and causes palmar xanthomas."
    ],
    "teaching": "LPL or ApoC-II deficiency causes type I hyperlipoproteinemia and severe chylomicron accumulation; restrict long-chain dietary fat.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 83
  },
  {
    "id": "hy150-084",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "A young adult has tendon xanthomas and premature myocardial infarction with very high LDL cholesterol. Which condition?",
    "options": [
      "Familial hypertriglyceridemia (type IV)",
      "Familial hypercholesterolemia",
      "Familial chylomicronemia"
    ],
    "answer": 1,
    "explanations": [
      "It raises VLDL triglycerides without the classic LDL receptor phenotype.",
      "Autosomal dominant LDL-receptor pathway defects, including LDLR and APOB, reduce LDL clearance; PCSK9 gain-of-function is another cause.",
      "It causes marked triglyceridemia and pancreatitis rather than isolated severe LDL elevation."
    ],
    "teaching": "Autosomal dominant LDL-receptor pathway defects, including LDLR and APOB, reduce LDL clearance; PCSK9 gain-of-function is another cause.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 84
  },
  {
    "id": "hy150-085",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "Palmar xanthomas accompany accumulation of chylomicron and VLDL remnants. Which lipoprotein disorder?",
    "options": [
      "Familial hypercholesterolemia",
      "Dysbetalipoproteinemia (type III)",
      "Familial chylomicronemia"
    ],
    "answer": 1,
    "explanations": [
      "LDL receptor pathway disruption raises LDL rather than chylomicron remnants.",
      "ApoE-related impaired remnant clearance causes type III disease; isolated VLDL excess typifies type IV.",
      "It primarily causes failure of triglyceride hydrolysis due to LPL/ApoC-II defects."
    ],
    "teaching": "ApoE-related impaired remnant clearance causes type III disease; isolated VLDL excess typifies type IV.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 85
  },
  {
    "id": "hy150-086",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A child has steatorrhea, acanthocytosis, ataxia and absent ApoB-containing lipoproteins. What diagnosis?",
    "options": [
      "Abetalipoproteinemia",
      "Tangier disease",
      "Familial hypobetalipoproteinemia"
    ],
    "answer": 0,
    "explanations": [
      "Microsomal triglyceride transfer protein (MTP) deficiency disrupts chylomicron/VLDL formation; fat-soluble vitamin replacement is needed.",
      "ABCA1 deficiency causes very low HDL and orange tonsils.",
      "Some APOB variants lower ApoB lipoproteins, but the severe MTP phenotype is distinct."
    ],
    "teaching": "Microsomal triglyceride transfer protein (MTP) deficiency disrupts chylomicron/VLDL formation; fat-soluble vitamin replacement is needed.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 86
  },
  {
    "id": "hy150-087",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which circulating lipoprotein delivers most cholesterol to peripheral cells for receptor-mediated uptake?",
    "options": [
      "LDL",
      "Chylomicron",
      "HDL"
    ],
    "answer": 0,
    "explanations": [
      "LDL delivers cholesterol; HDL carries cholesterol for reverse transport. Chylomicrons carry dietary triglycerides and VLDL hepatic triglycerides.",
      "It primarily carries dietary triglyceride from intestine, not LDL-like cholesterol cargo.",
      "It mediates reverse cholesterol transport rather than delivering most cholesterol to peripheral tissues."
    ],
    "teaching": "LDL delivers cholesterol; HDL carries cholesterol for reverse transport. Chylomicrons carry dietary triglycerides and VLDL hepatic triglycerides.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 87
  },
  {
    "id": "hy150-088",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which two fatty acids are essential in humans because they cannot be synthesized de novo?",
    "options": [
      "Linoleic and α-linolenic acids",
      "Arachidonic and stearic acids",
      "Oleic and palmitic acids"
    ],
    "answer": 0,
    "explanations": [
      "Linoleic acid is omega-6 and α-linolenic acid omega-3. Deficiency can cause scaly dermatitis and poor growth.",
      "Arachidonic acid can be synthesized from linoleic acid and stearate is not essential.",
      "Humans can synthesize these common fatty acids de novo."
    ],
    "teaching": "Linoleic acid is omega-6 and α-linolenic acid omega-3. Deficiency can cause scaly dermatitis and poor growth.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 88
  },
  {
    "id": "hy150-089",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which adipocyte enzyme is activated during fasting to mobilize stored triglyceride droplets?",
    "options": [
      "Lipoprotein lipase",
      "Hormone-sensitive lipase",
      "Hepatic lipase"
    ],
    "answer": 1,
    "explanations": [
      "It hydrolyzes triglycerides inside circulating lipoproteins at capillary endothelium.",
      "Hormone-sensitive lipase facilitates lipolysis under catecholamine signaling and is suppressed by insulin; adipose triglyceride lipase acts upstream.",
      "It remodels lipoproteins, not the major fasting adipose lipid-droplet response."
    ],
    "teaching": "Hormone-sensitive lipase facilitates lipolysis under catecholamine signaling and is suppressed by insulin; adipose triglyceride lipase acts upstream.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 89
  },
  {
    "id": "hy150-090",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "Which lipid-lowering drug sequesters bile acids in the intestine and indirectly upregulates hepatic LDL receptors?",
    "options": [
      "Cholestyramine",
      "Ezetimibe",
      "Statins"
    ],
    "answer": 0,
    "explanations": [
      "Cholestyramine is a bile-acid resin. It can increase triglycerides and interfere with absorption of some drugs.",
      "It blocks intestinal NPC1L1 cholesterol absorption, not bile acid reabsorption.",
      "They directly inhibit HMG-CoA reductase and decrease cholesterol synthesis."
    ],
    "teaching": "Cholestyramine is a bile-acid resin. It can increase triglycerides and interfere with absorption of some drugs.",
    "sourceGroup": "LIPIDS & LIPOPROTEINS",
    "sourceNumber": 90
  },
  {
    "id": "hy150-091",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "A newborn develops a musty odor, eczema, seizures and developmental delay due to phenylalanine metabolism failure. What diagnosis?",
    "options": [
      "Phenylketonuria",
      "Maple syrup urine disease",
      "Homocystinuria"
    ],
    "answer": 0,
    "explanations": [
      "Phenylalanine hydroxylase or cofactor defects cause hyperphenylalaninemia; tyrosine becomes conditionally essential. Dietary therapy prevents injury.",
      "It impairs branched-chain amino acid catabolism and gives sweet-smelling urine.",
      "It raises homocysteine and causes thrombosis and downward lens displacement."
    ],
    "teaching": "Phenylalanine hydroxylase or cofactor defects cause hyperphenylalaninemia; tyrosine becomes conditionally essential. Dietary therapy prevents injury.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 91
  },
  {
    "id": "hy150-092",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Severe hyperphenylalaninemia accompanies dopamine and serotonin deficiency despite an intact phenylalanine hydroxylase gene. What cofactor disorder fits?",
    "options": [
      "Tetrahydrobiopterin deficiency",
      "Tyrosinase deficiency",
      "Phenylalanine hydroxylase deficiency"
    ],
    "answer": 0,
    "explanations": [
      "BH4 is required for phenylalanine, tyrosine and tryptophan hydroxylases; DHPR defects impair BH4 regeneration and need specific treatment.",
      "This affects melanin production and albinism without causing neurotransmitter depletion.",
      "This is classic PKU from the enzyme rather than the cofactor recycling pathway."
    ],
    "teaching": "BH4 is required for phenylalanine, tyrosine and tryptophan hydroxylases; DHPR defects impair BH4 regeneration and need specific treatment.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 92
  },
  {
    "id": "hy150-093",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "An infant has microcephaly and congenital heart disease after exposure to high maternal phenylalanine in utero. What caused the embryopathy?",
    "options": [
      "Fetal alcohol syndrome",
      "Maternal phenylketonuria syndrome",
      "Congenital rubella syndrome"
    ],
    "answer": 1,
    "explanations": [
      "It causes growth restriction and craniofacial/neurodevelopmental defects via prenatal ethanol.",
      "Uncontrolled maternal PKU is teratogenic; tight phenylalanine control is necessary before conception and during pregnancy.",
      "It produces cataracts and congenital heart disease with maternal infection."
    ],
    "teaching": "Uncontrolled maternal PKU is teratogenic; tight phenylalanine control is necessary before conception and during pregnancy.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 93
  },
  {
    "id": "hy150-094",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Urine darkens after standing, and an adult develops ochronotic cartilage and degenerative arthritis. Which disorder?",
    "options": [
      "Phenylketonuria",
      "Alkaptonuria",
      "Tyrosinemia type I"
    ],
    "answer": 1,
    "explanations": [
      "Elevated phenylalanine causes developmental problems rather than ochronosis.",
      "Homogentisate 1,2-dioxygenase deficiency causes homogentisic acid accumulation. It is autosomal recessive and can cause substantial arthropathy.",
      "Fumarylacetoacetate hydrolase deficiency causes liver and renal disease."
    ],
    "teaching": "Homogentisate 1,2-dioxygenase deficiency causes homogentisic acid accumulation. It is autosomal recessive and can cause substantial arthropathy.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 94
  },
  {
    "id": "hy150-095",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "Which enzyme defect can cause oculocutaneous albinism with normal melanocyte numbers but poor melanin production?",
    "options": [
      "Tyrosinase deficiency",
      "Homogentisate oxidase deficiency",
      "Phenylalanine hydroxylase deficiency"
    ],
    "answer": 0,
    "explanations": [
      "Tyrosinase converts tyrosine toward melanin. Reduced pigment increases ultraviolet damage risk; other albinism genes also exist.",
      "This causes ochronosis and dark urine (alkaptonuria).",
      "This causes PKU and phenylalanine accumulation, not melanin loss."
    ],
    "teaching": "Tyrosinase converts tyrosine toward melanin. Reduced pigment increases ultraviolet damage risk; other albinism genes also exist.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 95
  },
  {
    "id": "hy150-096",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A child has marfanoid habitus, developmental delay, thrombosis and downward lens dislocation. What diagnosis?",
    "options": [
      "Homocystinuria (CBS deficiency)",
      "Ehlers–Danlos syndrome",
      "Marfan syndrome"
    ],
    "answer": 0,
    "explanations": [
      "Cystathionine β-synthase deficiency raises homocysteine and usually methionine; pyridoxine (B6) is useful in responsive patients.",
      "Collagen defects cause hypermobility and skin fragility, not typically high homocysteine and thrombosis.",
      "FBN1 defects cause lens dislocation usually upward and no characteristic intellectual impairment."
    ],
    "teaching": "Cystathionine β-synthase deficiency raises homocysteine and usually methionine; pyridoxine (B6) is useful in responsive patients.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 96
  },
  {
    "id": "hy150-097",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A child forms recurrent hexagonal urinary stones because proximal tubules cannot reabsorb dibasic amino acids. Which disorder?",
    "options": [
      "Cystinosis",
      "Hartnup disease",
      "Cystinuria"
    ],
    "answer": 2,
    "explanations": [
      "Lysosomal cystine transport failure causes renal Fanconi syndrome and corneal crystals.",
      "Neutral amino acid absorption is defective and can cause pellagra-like findings.",
      "The COLA transporter handles cystine, ornithine, lysine and arginine. Hydration and urine alkalinization reduce cystine stones."
    ],
    "teaching": "The COLA transporter handles cystine, ornithine, lysine and arginine. Hydration and urine alkalinization reduce cystine stones.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 97
  },
  {
    "id": "hy150-098",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "A neonate has poor feeding, encephalopathy and sweet-smelling urine from impaired branched-chain amino acid breakdown. What disorder?",
    "options": [
      "Phenylketonuria",
      "Maple syrup urine disease",
      "Isovaleric acidemia"
    ],
    "answer": 1,
    "explanations": [
      "Phenylalanine metabolism causes musty odor rather than maple-syrup odor.",
      "Branched-chain α-ketoacid dehydrogenase deficiency affects isoleucine, leucine and valine; thiamine-responsive forms exist.",
      "Leucine catabolism defects can cause sweaty-feet odor, not maple syrup."
    ],
    "teaching": "Branched-chain α-ketoacid dehydrogenase deficiency affects isoleucine, leucine and valine; thiamine-responsive forms exist.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 98
  },
  {
    "id": "hy150-099",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which mitochondrial enzyme starts the urea cycle and requires N-acetylglutamate for activation?",
    "options": [
      "Carbamoyl phosphate synthetase II",
      "Carbamoyl phosphate synthetase I",
      "Ornithine transcarbamylase"
    ],
    "answer": 1,
    "explanations": [
      "It works in cytosolic pyrimidine synthesis rather than removing ammonia in urea cycle.",
      "CPS-I uses ammonia and bicarbonate in mitochondria. Deficiency produces hyperammonemia without the orotic-acid elevation typical of OTC deficiency.",
      "It acts after CPS-I in the mitochondrial urea cycle and may raise orotic acid when deficient."
    ],
    "teaching": "CPS-I uses ammonia and bicarbonate in mitochondria. Deficiency produces hyperammonemia without the orotic-acid elevation typical of OTC deficiency.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 99
  },
  {
    "id": "hy150-100",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "A newborn boy has hyperammonemia and elevated urine orotic acid but no megaloblastic anemia. Which defect?",
    "options": [
      "Carbamoyl phosphate synthetase I deficiency",
      "UMP synthase deficiency",
      "Ornithine transcarbamylase deficiency"
    ],
    "answer": 2,
    "explanations": [
      "It causes hyperammonemia without the characteristic rise in urinary orotate.",
      "It elevates orotic acid with megaloblastic anemia but normal ammonia.",
      "OTC deficiency is X-linked. Excess mitochondrial carbamoyl phosphate enters pyrimidine synthesis, raising orotic acid."
    ],
    "teaching": "OTC deficiency is X-linked. Excess mitochondrial carbamoyl phosphate enters pyrimidine synthesis, raising orotic acid.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 100
  },
  {
    "id": "hy150-101",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A child has orotic aciduria and refractory megaloblastic anemia with normal ammonia. Which enzyme is deficient?",
    "options": [
      "Ornithine transcarbamylase deficiency",
      "UMP synthase deficiency",
      "Dihydrofolate reductase deficiency"
    ],
    "answer": 1,
    "explanations": [
      "It causes hyperammonemia with elevated orotic acid, usually without megaloblastic anemia.",
      "Hereditary orotic aciduria results from UMP synthase deficiency and responds to uridine; unlike OTC deficiency, hyperammonemia is absent.",
      "Folate cycle impairment may cause megaloblastic anemia but not isolated hereditary orotic aciduria."
    ],
    "teaching": "Hereditary orotic aciduria results from UMP synthase deficiency and responds to uridine; unlike OTC deficiency, hyperammonemia is absent.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 101
  },
  {
    "id": "hy150-102",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "How does elevated ammonia compromise the neuronal tricarboxylic acid cycle and contribute to brain dysfunction?",
    "options": [
      "Primary glutamate excitotoxicity",
      "α-Ketoglutarate depletion in hyperammonemia",
      "Increased α-ketoglutarate supply"
    ],
    "answer": 1,
    "explanations": [
      "Glutamate toxicity can injure neurons, but the classic ammonia-linked TCA mechanism is intermediate depletion.",
      "Ammonia is incorporated into glutamate and glutamine, depleting TCA intermediates; astrocyte glutamine accumulation contributes to cerebral edema.",
      "Ammonia consumption of α-ketoglutarate reduces rather than increases usable TCA intermediates."
    ],
    "teaching": "Ammonia is incorporated into glutamate and glutamine, depleting TCA intermediates; astrocyte glutamine accumulation contributes to cerebral edema.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 102
  },
  {
    "id": "hy150-103",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which circulating amino acid provides nitrogen for renal ammoniagenesis during metabolic acidosis?",
    "options": [
      "Glutamate",
      "Alanine",
      "Glutamine"
    ],
    "answer": 2,
    "explanations": [
      "It can be deaminated in renal tubules, but glutamine is the major transported nitrogen carrier.",
      "It is important for muscle-to-liver nitrogen transfer in the Cahill cycle.",
      "Proximal tubular glutaminase generates NH4+ and bicarbonate from glutamine. Glutamine also donates nitrogen in biosynthetic pathways."
    ],
    "teaching": "Proximal tubular glutaminase generates NH4+ and bicarbonate from glutamine. Glutamine also donates nitrogen in biosynthetic pathways.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 103
  },
  {
    "id": "hy150-104",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which BH4-dependent enzyme catalyzes the rate-limiting step of catecholamine synthesis?",
    "options": [
      "Tyrosine hydroxylase",
      "Aromatic L-amino acid decarboxylase",
      "Dopamine β-hydroxylase"
    ],
    "answer": 0,
    "explanations": [
      "Tyrosine hydroxylase makes DOPA. Aromatic L-amino acid decarboxylase needs B6; PNMT converts norepinephrine to epinephrine.",
      "It converts DOPA into dopamine using vitamin B6.",
      "It converts dopamine into norepinephrine and needs copper/ascorbate."
    ],
    "teaching": "Tyrosine hydroxylase makes DOPA. Aromatic L-amino acid decarboxylase needs B6; PNMT converts norepinephrine to epinephrine.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 104
  },
  {
    "id": "hy150-105",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "Which two amino acids are exclusively ketogenic and cannot provide net glucose?",
    "options": [
      "Isoleucine and valine",
      "Leucine and lysine",
      "Phenylalanine and tyrosine"
    ],
    "answer": 1,
    "explanations": [
      "Both are branched-chain amino acids with glucogenic products; isoleucine is also ketogenic.",
      "Leucine and lysine yield ketogenic products only. Most other amino acids have glucogenic or mixed fates.",
      "Both can yield glucogenic fumarate as well as ketogenic acetoacetate."
    ],
    "teaching": "Leucine and lysine yield ketogenic products only. Most other amino acids have glucogenic or mixed fates.",
    "sourceGroup": "AMINO ACIDS & UREA",
    "sourceNumber": 105
  },
  {
    "id": "hy150-106",
    "topic": "Metabolic Disorders",
    "level": 2,
    "stem": "An infant has neurodegeneration and a cherry-red macula without hepatosplenomegaly. Which lysosomal disease?",
    "options": [
      "Niemann–Pick disease type A",
      "Gaucher disease",
      "Tay–Sachs disease"
    ],
    "answer": 2,
    "explanations": [
      "It can cause cherry-red spots WITH hepatosplenomegaly.",
      "It often causes hepatosplenomegaly, bone crises and crumpled-paper cells.",
      "Hexosaminidase A deficiency accumulates GM2 ganglioside; neurons may contain onion-skin lysosomes."
    ],
    "teaching": "Hexosaminidase A deficiency accumulates GM2 ganglioside; neurons may contain onion-skin lysosomes.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 106
  },
  {
    "id": "hy150-107",
    "topic": "Metabolic Disorders",
    "level": 2,
    "stem": "A child has neurodegeneration, hepatosplenomegaly, foam cells and a cherry-red macula. Which storage disorder?",
    "options": [
      "Tay–Sachs disease",
      "Niemann–Pick disease (A/B)",
      "Gaucher disease"
    ],
    "answer": 1,
    "explanations": [
      "It causes GM2 accumulation and cherry-red macula without marked hepatosplenomegaly.",
      "Acid sphingomyelinase deficiency causes Niemann–Pick types A/B with sphingomyelin buildup. Type C has a different trafficking defect.",
      "It causes glucocerebroside storage and crumpled-paper macrophages."
    ],
    "teaching": "Acid sphingomyelinase deficiency causes Niemann–Pick types A/B with sphingomyelin buildup. Type C has a different trafficking defect.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 107
  },
  {
    "id": "hy150-108",
    "topic": "Metabolic Disorders",
    "level": 2,
    "stem": "An adult has bone crises, splenomegaly and macrophages with crumpled-tissue-paper cytoplasm. Which disease?",
    "options": [
      "Tay–Sachs disease",
      "Gaucher disease",
      "Niemann–Pick disease"
    ],
    "answer": 1,
    "explanations": [
      "Hexosaminidase A deficiency causes neuronal GM2 buildup and no marked organomegaly.",
      "β-Glucocerebrosidase deficiency causes glucosylceramide accumulation and can cause cytopenias and osteonecrosis.",
      "Sphingomyelinase deficiency causes foam cells rather than crumpled macrophages."
    ],
    "teaching": "β-Glucocerebrosidase deficiency causes glucosylceramide accumulation and can cause cytopenias and osteonecrosis.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 108
  },
  {
    "id": "hy150-109",
    "topic": "Metabolic Disorders",
    "level": 2,
    "stem": "A boy has acroparesthesias, angiokeratomas and progressive renal/cardiac disease from a lysosomal enzyme defect. What diagnosis?",
    "options": [
      "Gaucher disease",
      "Fabry disease",
      "Hunter syndrome"
    ],
    "answer": 1,
    "explanations": [
      "It is autosomal recessive and causes bone crises and enlarged spleen.",
      "X-linked α-galactosidase A deficiency causes globotriaosylceramide accumulation. Stroke and cardiomyopathy can occur.",
      "It is X-linked but causes mucopolysaccharidosis with coarse features, not angiokeratomas."
    ],
    "teaching": "X-linked α-galactosidase A deficiency causes globotriaosylceramide accumulation. Stroke and cardiomyopathy can occur.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 109
  },
  {
    "id": "hy150-110",
    "topic": "Metabolic Disorders",
    "level": 1,
    "stem": "An infant develops severe neurologic regression, peripheral neuropathy and globoid macrophages. Which leukodystrophy?",
    "options": [
      "Metachromatic leukodystrophy",
      "Adrenoleukodystrophy",
      "Krabbe disease"
    ],
    "answer": 2,
    "explanations": [
      "Arylsulfatase A deficiency causes sulfatide accumulation and central/peripheral demyelination.",
      "ABCD1 deficiency causes VLCFA buildup, often with adrenal insufficiency.",
      "Galactocerebrosidase deficiency leads to psychosine accumulation and widespread demyelination."
    ],
    "teaching": "Galactocerebrosidase deficiency leads to psychosine accumulation and widespread demyelination.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 110
  },
  {
    "id": "hy150-111",
    "topic": "Metabolic Disorders",
    "level": 2,
    "stem": "Progressive central and peripheral demyelination is accompanied by sulfatide accumulation. Which enzyme is deficient?",
    "options": [
      "Tay–Sachs disease",
      "Krabbe disease",
      "Metachromatic leukodystrophy"
    ],
    "answer": 2,
    "explanations": [
      "Hexosaminidase A deficiency accumulates GM2 ganglioside in neurons.",
      "Galactocerebrosidase deficiency produces globoid cells and psychosine toxicity.",
      "Arylsulfatase A deficiency produces metachromatic leukodystrophy and is typically autosomal recessive."
    ],
    "teaching": "Arylsulfatase A deficiency produces metachromatic leukodystrophy and is typically autosomal recessive.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 111
  },
  {
    "id": "hy150-112",
    "topic": "Metabolic Disorders",
    "level": 3,
    "stem": "A young child has coarse features, hepatosplenomegaly, corneal clouding and dysostosis multiplex. Which mucopolysaccharidosis?",
    "options": [
      "Morquio syndrome",
      "Hunter syndrome",
      "Hurler syndrome"
    ],
    "answer": 2,
    "explanations": [
      "It causes skeletal abnormalities with typically preserved intellect and a distinct GAG defect.",
      "It resembles Hurler but is X-linked and usually lacks corneal clouding.",
      "MPS I results from α-L-iduronidase deficiency and heparan/dermatan sulfate buildup; inheritance is autosomal recessive."
    ],
    "teaching": "MPS I results from α-L-iduronidase deficiency and heparan/dermatan sulfate buildup; inheritance is autosomal recessive.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 112
  },
  {
    "id": "hy150-113",
    "topic": "Metabolic Disorders",
    "level": 2,
    "stem": "A boy has coarse facial features and organomegaly resembling Hurler syndrome but clear corneas. Which disorder?",
    "options": [
      "Sanfilippo syndrome",
      "Hurler syndrome",
      "Hunter syndrome"
    ],
    "answer": 2,
    "explanations": [
      "This MPS often has severe neurobehavioral disease with less marked somatic features.",
      "It is autosomal recessive and classically produces corneal clouding.",
      "MPS II results from X-linked iduronate-2-sulfatase deficiency and heparan/dermatan sulfate accumulation. Severity varies."
    ],
    "teaching": "MPS II results from X-linked iduronate-2-sulfatase deficiency and heparan/dermatan sulfate accumulation. Severity varies.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 113
  },
  {
    "id": "hy150-114",
    "topic": "Metabolic Disorders",
    "level": 2,
    "stem": "An infant has coarse features and very high plasma lysosomal enzyme activities because enzymes were not correctly tagged. What is the disorder?",
    "options": [
      "I-cell disease",
      "Hurler syndrome",
      "Pompe disease"
    ],
    "answer": 0,
    "explanations": [
      "Defective GlcNAc-1-phosphotransferase impairs mannose-6-phosphate tagging in the Golgi, causing lysosomal enzyme missorting.",
      "α-L-iduronidase itself is deficient, not all lysosomal enzyme sorting.",
      "Lysosomal acid maltase is deficient, rather than lysosomal enzyme targeting in the Golgi."
    ],
    "teaching": "Defective GlcNAc-1-phosphotransferase impairs mannose-6-phosphate tagging in the Golgi, causing lysosomal enzyme missorting.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 114
  },
  {
    "id": "hy150-115",
    "topic": "Metabolic Disorders",
    "level": 1,
    "stem": "Which Golgi-derived marker targets soluble hydrolases to lysosomes via specific receptors?",
    "options": [
      "Signal recognition particle",
      "KDEL retention signal",
      "Mannose-6-phosphate tag"
    ],
    "answer": 2,
    "explanations": [
      "It targets translating ribosomes to rough ER, not lysosomal hydrolases.",
      "It retrieves certain soluble ER proteins from the Golgi rather than targeting lysosomes.",
      "Mannose-6-phosphate labeling enables hydrolase sorting; failure leads to mucolipidosis II (I-cell disease)."
    ],
    "teaching": "Mannose-6-phosphate labeling enables hydrolase sorting; failure leads to mucolipidosis II (I-cell disease).",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 115
  },
  {
    "id": "hy150-116",
    "topic": "Metabolic Disorders",
    "level": 2,
    "stem": "A hypotonic neonate has seizures, liver dysfunction and elevated very-long-chain fatty acids from defective organelle assembly. What is the diagnosis?",
    "options": [
      "X-linked adrenoleukodystrophy",
      "Zellweger spectrum disorder",
      "Refsum disease"
    ],
    "answer": 1,
    "explanations": [
      "ABCD1 transporter is defective with existing but malfunctioning peroxisomes.",
      "PEX gene defects impair peroxisome biogenesis; VLCFA β-oxidation and plasmalogen production are affected.",
      "Phytanic acid α-oxidation is defective, not peroxisome biogenesis."
    ],
    "teaching": "PEX gene defects impair peroxisome biogenesis; VLCFA β-oxidation and plasmalogen production are affected.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 116
  },
  {
    "id": "hy150-117",
    "topic": "Metabolic Disorders",
    "level": 2,
    "stem": "An adult has retinitis pigmentosa, polyneuropathy, ataxia and ichthyosis from phytanic acid accumulation. Which disease?",
    "options": [
      "Zellweger syndrome",
      "Refsum disease",
      "Metachromatic leukodystrophy"
    ],
    "answer": 1,
    "explanations": [
      "There is a general peroxisome biogenesis defect with VLCFA buildup.",
      "Impaired peroxisomal α-oxidation of branched phytanic acid causes Refsum disease. Dietary restriction is central.",
      "Sulfatide accumulates due to arylsulfatase A deficiency."
    ],
    "teaching": "Impaired peroxisomal α-oxidation of branched phytanic acid causes Refsum disease. Dietary restriction is central.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 117
  },
  {
    "id": "hy150-118",
    "topic": "Metabolic Disorders",
    "level": 2,
    "stem": "A boy develops adrenal insufficiency and progressive white-matter injury with increased very-long-chain fatty acids. What disorder?",
    "options": [
      "Refsum disease",
      "X-linked adrenoleukodystrophy",
      "Krabbe disease"
    ],
    "answer": 1,
    "explanations": [
      "Phytanic acid α-oxidation fails and retinitis pigmentosa is prominent.",
      "ABCD1 transporter defects prevent normal peroxisomal VLCFA metabolism. Phenotypes vary substantially.",
      "Galactocerebrosidase deficiency produces infantile demyelination and globoid macrophages."
    ],
    "teaching": "ABCD1 transporter defects prevent normal peroxisomal VLCFA metabolism. Phenotypes vary substantially.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 118
  },
  {
    "id": "hy150-119",
    "topic": "Metabolic Disorders",
    "level": 3,
    "stem": "Which cellular process shortens very-long-chain fatty acids before further mitochondrial metabolism?",
    "options": [
      "Peroxisomal β-oxidation",
      "Peroxisomal α-oxidation",
      "Mitochondrial β-oxidation"
    ],
    "answer": 0,
    "explanations": [
      "Peroxisomes initiate shortening of very-long-chain fatty acids and also participate in ether-lipid and bile-acid metabolism.",
      "It handles branched fatty acids such as phytanic acid, not the main VLCFA β-oxidation step.",
      "It handles most short-, medium-, and long-chain fatty acids, but VLCFA shortening begins in peroxisomes."
    ],
    "teaching": "Peroxisomes initiate shortening of very-long-chain fatty acids and also participate in ether-lipid and bile-acid metabolism.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 119
  },
  {
    "id": "hy150-120",
    "topic": "Metabolic Disorders",
    "level": 1,
    "stem": "Which two classic lysosomal storage diseases are X-linked rather than autosomal recessive?",
    "options": [
      "Fabry and Hunter diseases",
      "Tay–Sachs and Gaucher",
      "Niemann–Pick and Krabbe"
    ],
    "answer": 0,
    "explanations": [
      "Fabry is α-galactosidase A deficiency; Hunter is iduronate-2-sulfatase deficiency. Most classic lysosomal storage diseases are recessive.",
      "Both are autosomal recessive, not X-linked.",
      "Both classic enzyme deficiencies are autosomal recessive, not X-linked."
    ],
    "teaching": "Fabry is α-galactosidase A deficiency; Hunter is iduronate-2-sulfatase deficiency. Most classic lysosomal storage diseases are recessive.",
    "sourceGroup": "STORAGE DISEASES",
    "sourceNumber": 120
  },
  {
    "id": "hy150-121",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A boy has dystonia, self-injury and hyperuricemia from failed purine salvage. Which disorder?",
    "options": [
      "PRPP synthetase deficiency",
      "Lesch–Nyhan syndrome",
      "Adenosine deaminase deficiency"
    ],
    "answer": 1,
    "explanations": [
      "This can change purine availability but is not the HGPRT salvage defect.",
      "X-linked HGPRT deficiency reduces guanine/hypoxanthine salvage, increases PRPP and drives uric acid production.",
      "It causes SCID from toxic deoxyadenosine, not self-injury and gout."
    ],
    "teaching": "X-linked HGPRT deficiency reduces guanine/hypoxanthine salvage, increases PRPP and drives uric acid production.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 121
  },
  {
    "id": "hy150-122",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "An infant has severe combined immunodeficiency with toxic dATP accumulation. Which enzyme is lacking?",
    "options": [
      "Purine nucleoside phosphorylase deficiency",
      "HGPRT deficiency",
      "Adenosine deaminase deficiency"
    ],
    "answer": 2,
    "explanations": [
      "It causes primarily T-cell immunodeficiency rather than classic ADA-SCID.",
      "It causes Lesch–Nyhan syndrome with hyperuricemia and self-injury.",
      "ADA deficiency impairs lymphocyte development by increasing deoxyadenosine and dATP, inhibiting ribonucleotide reductase."
    ],
    "teaching": "ADA deficiency impairs lymphocyte development by increasing deoxyadenosine and dATP, inhibiting ribonucleotide reductase.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 122
  },
  {
    "id": "hy150-123",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which enzyme catalyzes the first committed step of de novo purine synthesis?",
    "options": [
      "Ribonucleotide reductase",
      "Carbamoyl phosphate synthetase II",
      "Glutamine-PRPP amidotransferase"
    ],
    "answer": 2,
    "explanations": [
      "It converts ribonucleotides to deoxy forms downstream of nucleotide synthesis.",
      "It initiates pyrimidine, not purine, ring synthesis.",
      "Glutamine-PRPP amidotransferase is feedback-inhibited by IMP, AMP and GMP. Thiopurines suppress de novo purine production."
    ],
    "teaching": "Glutamine-PRPP amidotransferase is feedback-inhibited by IMP, AMP and GMP. Thiopurines suppress de novo purine production.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 123
  },
  {
    "id": "hy150-124",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which enzyme converts ribonucleotides into deoxyribonucleotides and is inhibited by hydroxyurea?",
    "options": [
      "Ribonucleotide reductase",
      "Thymidylate synthase",
      "Dihydrofolate reductase"
    ],
    "answer": 0,
    "explanations": [
      "Ribonucleotide reductase supplies precursors for DNA synthesis and is subject to allosteric regulation by nucleotides.",
      "It converts dUMP to dTMP and is inhibited by 5-FU.",
      "It regenerates reduced folate and is inhibited by methotrexate."
    ],
    "teaching": "Ribonucleotide reductase supplies precursors for DNA synthesis and is subject to allosteric regulation by nucleotides.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 124
  },
  {
    "id": "hy150-125",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "Which cytosolic enzyme initiates de novo pyrimidine synthesis using glutamine and bicarbonate?",
    "options": [
      "PRPP amidotransferase",
      "Carbamoyl phosphate synthetase II",
      "Carbamoyl phosphate synthetase I"
    ],
    "answer": 1,
    "explanations": [
      "It initiates committed de novo purine synthesis.",
      "CPS-II belongs to cytosolic pyrimidine synthesis, whereas mitochondrial CPS-I begins the urea cycle.",
      "It is mitochondrial and starts the urea cycle."
    ],
    "teaching": "CPS-II belongs to cytosolic pyrimidine synthesis, whereas mitochondrial CPS-I begins the urea cycle.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 125
  },
  {
    "id": "hy150-126",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "Which two nucleotide synthesis enzymes are inhibited by 5-fluorouracil and methotrexate, respectively?",
    "options": [
      "Ribonucleotide reductase and CPS-II",
      "Thymidylate synthase and DHFR",
      "Xanthine oxidase and HGPRT"
    ],
    "answer": 1,
    "explanations": [
      "Hydroxyurea inhibits the first; the second starts pyrimidine synthesis.",
      "5-FU forms FdUMP to inhibit thymidylate synthase; methotrexate inhibits dihydrofolate reductase.",
      "These participate in purine turnover/salvage, not the paired 5-FU/MTX targets."
    ],
    "teaching": "5-FU forms FdUMP to inhibit thymidylate synthase; methotrexate inhibits dihydrofolate reductase.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 126
  },
  {
    "id": "hy150-127",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which enzyme is inhibited by allopurinol and metabolizes 6-mercaptopurine, making the drug interaction clinically important?",
    "options": [
      "Xanthine oxidase",
      "Adenosine deaminase",
      "HGPRT"
    ],
    "answer": 0,
    "explanations": [
      "Allopurinol inhibits xanthine oxidase, reducing urate production but increasing thiopurine exposure unless dosing is adjusted.",
      "It clears adenosine/deoxyadenosine and is deficient in a form of SCID.",
      "It salvages hypoxanthine/guanine and is deficient in Lesch–Nyhan syndrome."
    ],
    "teaching": "Allopurinol inhibits xanthine oxidase, reducing urate production but increasing thiopurine exposure unless dosing is adjusted.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 127
  },
  {
    "id": "hy150-128",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which mitochondrial, vitamin B6-dependent enzyme begins heme synthesis using glycine and succinyl-CoA?",
    "options": [
      "ALA dehydratase",
      "ALA synthase",
      "Ferrochelatase"
    ],
    "answer": 1,
    "explanations": [
      "It converts ALA to porphobilinogen and is inhibited by lead.",
      "δ-Aminolevulinate synthase is rate limiting in hepatic heme synthesis; heme negatively regulates ALAS1.",
      "It inserts iron into protoporphyrin and is inhibited by lead."
    ],
    "teaching": "δ-Aminolevulinate synthase is rate limiting in hepatic heme synthesis; heme negatively regulates ALAS1.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 128
  },
  {
    "id": "hy150-129",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A patient develops abdominal pain, neuropathy and psychiatric symptoms after an enzyme-inducing drug, without a blistering rash. What porphyria?",
    "options": [
      "Lead poisoning",
      "Acute intermittent porphyria",
      "Porphyria cutanea tarda"
    ],
    "answer": 1,
    "explanations": [
      "It raises ALA and causes anemia/neuropathy, but not PBG deaminase deficiency.",
      "Porphobilinogen deaminase deficiency raises ALA and porphobilinogen; hemin and carbohydrate suppress hepatic ALAS1.",
      "It causes blistering photosensitivity rather than primarily neurovisceral attacks."
    ],
    "teaching": "Porphobilinogen deaminase deficiency raises ALA and porphobilinogen; hemin and carbohydrate suppress hepatic ALAS1.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 129
  },
  {
    "id": "hy150-130",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "A patient with hepatitis C and alcohol use develops blistering photosensitivity on the hands. Which porphyria?",
    "options": [
      "Porphyria cutanea tarda",
      "Acute intermittent porphyria",
      "Erythropoietic protoporphyria"
    ],
    "answer": 0,
    "explanations": [
      "Uroporphyrinogen decarboxylase deficiency causes porphyrin buildup. Porphyria cutanea tarda is the most common porphyria.",
      "It causes neurovisceral attacks without a characteristic blistering rash.",
      "It typically causes painful photosensitivity without PCT-like blistering."
    ],
    "teaching": "Uroporphyrinogen decarboxylase deficiency causes porphyrin buildup. Porphyria cutanea tarda is the most common porphyria.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 130
  },
  {
    "id": "hy150-131",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which two heme biosynthesis enzymes are inhibited by lead exposure?",
    "options": [
      "ALA synthase and porphobilinogen deaminase",
      "ALA dehydratase and ferrochelatase",
      "Uroporphyrinogen decarboxylase and DHFR"
    ],
    "answer": 1,
    "explanations": [
      "These affect heme synthesis but are not the two classic lead targets.",
      "Lead inhibits δ-ALA dehydratase and ferrochelatase, raising ALA and erythrocyte protoporphyrin.",
      "The former causes PCT when deficient; the latter is targeted by methotrexate."
    ],
    "teaching": "Lead inhibits δ-ALA dehydratase and ferrochelatase, raising ALA and erythrocyte protoporphyrin.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 131
  },
  {
    "id": "hy150-132",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A child with abdominal symptoms and microcytic anemia has basophilic stippling after ingesting paint chips. Which toxin?",
    "options": [
      "Lead poisoning",
      "Iron deficiency anemia",
      "Vitamin B6 deficiency"
    ],
    "answer": 0,
    "explanations": [
      "Lead impairs heme synthesis and can cause neuropathy and cognitive injury. Blood lead level confirms exposure.",
      "It causes microcytosis but does not by itself explain lead exposure and basophilic stippling.",
      "It may cause sideroblastic anemia through reduced ALA synthase function."
    ],
    "teaching": "Lead impairs heme synthesis and can cause neuropathy and cognitive injury. Blood lead level confirms exposure.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 132
  },
  {
    "id": "hy150-133",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "Which red-cell metabolite decreases hemoglobin oxygen affinity and promotes a rightward dissociation-curve shift?",
    "options": [
      "Fetal hemoglobin",
      "2,3-Bisphosphoglycerate",
      "Carbon monoxide"
    ],
    "answer": 1,
    "explanations": [
      "It has higher O2 affinity partly because it binds 2,3-BPG less strongly.",
      "2,3-BPG stabilizes deoxyhemoglobin. Fetal hemoglobin binds 2,3-BPG less strongly and has higher oxygen affinity.",
      "It occupies heme sites and left-shifts the remaining oxygen-binding sites."
    ],
    "teaching": "2,3-BPG stabilizes deoxyhemoglobin. Fetal hemoglobin binds 2,3-BPG less strongly and has higher oxygen affinity.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 133
  },
  {
    "id": "hy150-134",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Cyanosis, chocolate-brown blood and normal arterial oxygen tension occur after dapsone exposure. What diagnosis?",
    "options": [
      "Carbon monoxide poisoning",
      "Sulfhemoglobinemia",
      "Methemoglobinemia"
    ],
    "answer": 2,
    "explanations": [
      "It causes elevated carboxyhemoglobin and impaired O2 carriage, not Fe3+ methemoglobin.",
      "It can cause cyanosis resistant to methylene blue and is chemically distinct.",
      "Oxidized Fe3+ in methemoglobin cannot bind O2. Methylene blue can help but may be unsafe/ineffective in G6PD deficiency."
    ],
    "teaching": "Oxidized Fe3+ in methemoglobin cannot bind O2. Methylene blue can help but may be unsafe/ineffective in G6PD deficiency.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 134
  },
  {
    "id": "hy150-135",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "What specific hemoglobin beta-chain missense change causes sickle cell disease?",
    "options": [
      "Lys→Glu substitution at β6",
      "Glu→Lys substitution at β6",
      "Glu→Val substitution at β6"
    ],
    "answer": 2,
    "explanations": [
      "This reverses the amino acid change and is not the HbS mutation.",
      "This produces hemoglobin C rather than S.",
      "Substituting valine for glutamic acid at position 6 promotes deoxygenated HbS polymerization; HbC substitutes lysine instead."
    ],
    "teaching": "Substituting valine for glutamic acid at position 6 promotes deoxygenated HbS polymerization; HbC substitutes lysine instead.",
    "sourceGroup": "PURINES & HEME",
    "sourceNumber": 135
  },
  {
    "id": "hy150-136",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which collagen type is most abundant in bone, skin, tendons and mature scar tissue?",
    "options": [
      "Type II collagen",
      "Type I collagen",
      "Type IV collagen"
    ],
    "answer": 1,
    "explanations": [
      "It predominates in cartilage and vitreous body.",
      "Type I collagen predominates in bone and skin; type II in cartilage, III in reticular tissue/vessels and IV in basement membranes.",
      "It is a network-forming component of basement membranes."
    ],
    "teaching": "Type I collagen predominates in bone and skin; type II in cartilage, III in reticular tissue/vessels and IV in basement membranes.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 136
  },
  {
    "id": "hy150-137",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "What recurring amino-acid sequence allows three collagen α-chains to pack tightly into a triple helix?",
    "options": [
      "Lys–X–Y repeat",
      "Gly–X–Y repeat",
      "Pro–Gly–Gly repeat"
    ],
    "answer": 1,
    "explanations": [
      "Lysine is involved in cross-linking but does not occupy every third residue.",
      "Glycine occurs every third residue, while X/Y often include proline or hydroxyproline. Glycine substitutions can disrupt type I collagen.",
      "Collagen requires glycine at every third position, not this fixed repeating triplet."
    ],
    "teaching": "Glycine occurs every third residue, while X/Y often include proline or hydroxyproline. Glycine substitutions can disrupt type I collagen.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 137
  },
  {
    "id": "hy150-138",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which cofactor is required to hydroxylate proline and lysine during intracellular collagen maturation?",
    "options": [
      "Vitamin B6",
      "Vitamin C",
      "Vitamin K"
    ],
    "answer": 1,
    "explanations": [
      "It supports PLP-dependent enzymes, including ALA synthase, not collagen hydroxylation.",
      "Ascorbate supports prolyl/lysyl hydroxylases in rough ER; deficiency causes scurvy and unstable collagen.",
      "It supports γ-carboxylation of clotting proteins, not proline/lysine hydroxylation."
    ],
    "teaching": "Ascorbate supports prolyl/lysyl hydroxylases in rough ER; deficiency causes scurvy and unstable collagen.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 138
  },
  {
    "id": "hy150-139",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which collagen biosynthesis event occurs outside the cell before fibrils become cross-linked?",
    "options": [
      "Hydroxylation of proline and lysine",
      "Cleavage of procollagen propeptides",
      "Triple-helix formation"
    ],
    "answer": 1,
    "explanations": [
      "This takes place inside rough ER before secretion.",
      "Extracellular procollagen peptidases remove terminal propeptides; copper-dependent lysyl oxidase then cross-links fibrils.",
      "This occurs inside the cell before procollagen reaches the extracellular space."
    ],
    "teaching": "Extracellular procollagen peptidases remove terminal propeptides; copper-dependent lysyl oxidase then cross-links fibrils.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 139
  },
  {
    "id": "hy150-140",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "Which copper-dependent enzyme forms covalent cross-links in extracellular collagen and elastin?",
    "options": [
      "Lysyl oxidase",
      "Elastase",
      "Prolyl hydroxylase"
    ],
    "answer": 0,
    "explanations": [
      "Lysyl oxidase stabilizes collagen and elastin. Copper transport disorders such as Menkes disease can weaken connective tissue.",
      "It breaks down elastin rather than cross-linking it.",
      "It stabilizes collagen triple helices and requires vitamin C and iron."
    ],
    "teaching": "Lysyl oxidase stabilizes collagen and elastin. Copper transport disorders such as Menkes disease can weaken connective tissue.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 140
  },
  {
    "id": "hy150-141",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Recurrent fractures, blue sclerae, dental abnormalities and hearing loss point to what type I collagen disorder?",
    "options": [
      "Ehlers–Danlos syndrome",
      "Alport syndrome",
      "Osteogenesis imperfecta"
    ],
    "answer": 2,
    "explanations": [
      "It commonly causes joint hypermobility and hyperextensible skin from varied collagen defects.",
      "Type IV collagen defects cause renal, auditory and ocular disease.",
      "Pathogenic variants often involve COL1A1 or COL1A2; dominant forms affect type I collagen quantity or structure."
    ],
    "teaching": "Pathogenic variants often involve COL1A1 or COL1A2; dominant forms affect type I collagen quantity or structure.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 141
  },
  {
    "id": "hy150-142",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Hyperextensible skin, hypermobile joints and tissue fragility suggest which connective-tissue disorder group?",
    "options": [
      "Marfan syndrome",
      "Ehlers–Danlos syndrome",
      "Osteogenesis imperfecta"
    ],
    "answer": 1,
    "explanations": [
      "Fibrillin-1 defects cause aortic root dilation and lens displacement.",
      "EDS is genetically heterogeneous; vascular EDS typically involves type III collagen (COL3A1) and arterial rupture risk.",
      "Type I collagen defects cause fragile bones and blue sclerae."
    ],
    "teaching": "EDS is genetically heterogeneous; vascular EDS typically involves type III collagen (COL3A1) and arterial rupture risk.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 142
  },
  {
    "id": "hy150-143",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A young man has hematuria, sensorineural hearing loss and anterior lenticonus with a basket-weave glomerular basement membrane. Diagnosis?",
    "options": [
      "Thin basement membrane nephropathy",
      "Goodpasture disease",
      "Alport syndrome"
    ],
    "answer": 2,
    "explanations": [
      "It commonly causes isolated familial microscopic hematuria without classic Alport extrarenal signs.",
      "It is an acquired autoimmune response against type IV collagen, not a hereditary collagen IV gene disorder.",
      "Alport commonly results from X-linked COL4A5 mutations affecting type IV collagen; other inheritance patterns occur."
    ],
    "teaching": "Alport commonly results from X-linked COL4A5 mutations affecting type IV collagen; other inheritance patterns occur.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 143
  },
  {
    "id": "hy150-144",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "A patient has rapidly progressive glomerulonephritis, hemoptysis and linear IgG staining of glomeruli. What disease?",
    "options": [
      "Anti-GBM (Goodpasture) disease",
      "Lupus nephritis",
      "Alport syndrome"
    ],
    "answer": 0,
    "explanations": [
      "Anti-GBM antibodies target the α3 chain of type IV collagen in glomerular and alveolar basement membranes.",
      "Immune complex deposits typically create granular, not linear, immunofluorescence.",
      "Inherited type IV collagen mutations cause renal and hearing disease, not anti-GBM autoantibodies."
    ],
    "teaching": "Anti-GBM antibodies target the α3 chain of type IV collagen in glomerular and alveolar basement membranes.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 144
  },
  {
    "id": "hy150-145",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "Which extracellular matrix protein confers recoil to the lungs and large arteries and is damaged by unopposed elastase?",
    "options": [
      "Type I collagen",
      "Elastin",
      "Fibrillin-1"
    ],
    "answer": 1,
    "explanations": [
      "It provides tensile strength to bone, tendon and skin rather than elastic recoil.",
      "Elastin provides elastic recoil. α1-antitrypsin protects against neutrophil elastase; fibrillin-1 defects underlie Marfan syndrome.",
      "It forms microfibrillar scaffolding for elastic fibers and is mutated in Marfan syndrome."
    ],
    "teaching": "Elastin provides elastic recoil. α1-antitrypsin protects against neutrophil elastase; fibrillin-1 defects underlie Marfan syndrome.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 145
  },
  {
    "id": "hy150-146",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "What kinetic quantity equals the substrate concentration at half of maximal initial enzyme velocity for Michaelis–Menten kinetics?",
    "options": [
      "Maximum velocity (Vmax)",
      "Catalytic constant (kcat)",
      "Michaelis constant (Km)"
    ],
    "answer": 2,
    "explanations": [
      "This is reaction rate at enzyme saturation, not the substrate concentration at half Vmax.",
      "This is turnover number per active site per unit time, not substrate concentration.",
      "Km is the substrate concentration at Vmax/2; a lower Km often indicates higher apparent substrate affinity under simple conditions."
    ],
    "teaching": "Km is the substrate concentration at Vmax/2; a lower Km often indicates higher apparent substrate affinity under simple conditions.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 146
  },
  {
    "id": "hy150-147",
    "topic": "Biochemistry",
    "level": 3,
    "stem": "Which reversible inhibitor pattern raises apparent Km but leaves Vmax unchanged if sufficient substrate is supplied?",
    "options": [
      "Competitive inhibition",
      "Uncompetitive inhibition",
      "Pure noncompetitive inhibition"
    ],
    "answer": 0,
    "explanations": [
      "A competitive inhibitor competes with substrate for active site, so Vmax is unchanged at high substrate concentration.",
      "It lowers both apparent Km and Vmax by binding enzyme–substrate complexes.",
      "It reduces Vmax with unchanged Km in the idealized pure case."
    ],
    "teaching": "A competitive inhibitor competes with substrate for active site, so Vmax is unchanged at high substrate concentration.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 147
  },
  {
    "id": "hy150-148",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which enzyme inhibition pattern reduces Vmax without changing Km in the idealized pure case?",
    "options": [
      "Uncompetitive inhibition",
      "Competitive inhibition",
      "Pure noncompetitive inhibition"
    ],
    "answer": 2,
    "explanations": [
      "It lowers both apparent Km and Vmax in the standard model.",
      "It raises apparent Km while leaving Vmax unchanged.",
      "Pure noncompetitive inhibition decreases active enzyme function while substrate binding affinity remains unchanged; mixed inhibition can change Km."
    ],
    "teaching": "Pure noncompetitive inhibition decreases active enzyme function while substrate binding affinity remains unchanged; mixed inhibition can change Km.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 148
  },
  {
    "id": "hy150-149",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which kinetic pattern removes a constant amount of drug per unit time once the responsible pathway is saturated?",
    "options": [
      "Capacity-limited Michaelis–Menten at low concentration",
      "Zero-order elimination",
      "First-order elimination"
    ],
    "answer": 1,
    "explanations": [
      "Below saturation, clearance approximates first-order rather than zero-order behavior.",
      "Zero-order elimination can occur with ethanol and high-dose phenytoin or salicylates; first-order removes a constant fraction per unit time.",
      "A constant fraction, not a constant amount, is eliminated per time interval."
    ],
    "teaching": "Zero-order elimination can occur with ethanol and high-dose phenytoin or salicylates; first-order removes a constant fraction per unit time.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 149
  },
  {
    "id": "hy150-150",
    "topic": "Biochemistry",
    "level": 1,
    "stem": "Hemoglobin has an S-shaped oxygen binding curve because binding at one site alters affinity at other sites. What phenomenon?",
    "options": [
      "Cooperative binding",
      "Noncooperative binding",
      "Allosteric inhibition"
    ],
    "answer": 0,
    "explanations": [
      "Hemoglobin displays positive cooperativity among subunits. Myoglobin has one binding site and a hyperbolic curve.",
      "A single binding site does not change affinity with prior binding events.",
      "This involves reduced activity or binding at another site, not the positive cooperative sigmoidal effect."
    ],
    "teaching": "Hemoglobin displays positive cooperativity among subunits. Myoglobin has one binding site and a hyperbolic curve.",
    "sourceGroup": "COLLAGEN & KINETICS",
    "sourceNumber": 150
  }
];
  var bank = Array.isArray(window.RAPIDFIRE_QUESTIONS) ? window.RAPIDFIRE_QUESTIONS : [];
  var seen = new Set(bank.map(function (question) { return question.id; }));
  incoming.forEach(function (question) {
    if (!seen.has(question.id)) { bank.push(question); seen.add(question.id); }
  });
  window.RAPIDFIRE_QUESTIONS = bank;
})();
