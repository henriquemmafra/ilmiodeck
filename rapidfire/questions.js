// Questões originais para revisão (não copiar enunciados de bancos comerciais).
// Cada id deve permanecer estável para preservar o histórico de respostas.
window.RAPIDFIRE_QUESTIONS = [
  {
    "id": "polio-serum",
    "topic": "Imunologia",
    "level": 1,
    "stem": "A child receives either oral attenuated poliovirus vaccine or injected inactivated poliovirus vaccine. What most directly prevents paralytic poliomyelitis?",
    "options": [
      "Circulating cytotoxic T lymphocytes",
      "Serum neutralizing antibodies",
      "Intestinal secretory immunoglobulin A alone",
      "Complement-mediated viral lysis"
    ],
    "answer": 1,
    "explanations": [
      "Linfócitos T citotóxicos combatem células infectadas, mas não são a proteção sistêmica principal contra a paralisia.",
      "Anticorpos neutralizantes no sangue impedem que o poliovírus alcance o sistema nervoso.",
      "A imunoglobulina A secretória reduz a infecção e a transmissão intestinal, mas isoladamente não explica a proteção contra paralisia oferecida pelas duas vacinas.",
      "A neutralização por anticorpos é mais importante que a lise pelo sistema complemento."
    ],
    "teaching": "Distinguir imunidade intestinal de proteção sistêmica contra a paralisia."
  },
  {
    "id": "polio-mucosal",
    "topic": "Imunologia",
    "level": 2,
    "stem": "Compared with the injected inactivated poliovirus vaccine, what additional immune response is typically stronger after the oral live-attenuated vaccine?",
    "options": [
      "Intestinal secretory immunoglobulin A",
      "Absence of circulating neutralizing antibodies",
      "Selective production of immunoglobulin E",
      "Elimination of all memory lymphocytes"
    ],
    "answer": 0,
    "explanations": [
      "A vacina oral se replica na mucosa intestinal e estimula imunoglobulina A secretória local.",
      "As duas vacinas induzem anticorpos neutralizantes no sangue.",
      "Imunoglobulina E participa principalmente de alergia e defesa antiparasitária.",
      "Vacinação normalmente forma células de memória, não as elimina."
    ],
    "teaching": "A vacina oral tende a produzir maior imunidade mucosa."
  },
  {
    "id": "b-memory",
    "topic": "Imunologia",
    "level": 1,
    "stem": "A vaccinated adult has circulating antibodies years after immunization. Which cells directly maintain antibody secretion during this period?",
    "options": [
      "Memory B lymphocytes",
      "Long-lived plasma cells",
      "Memory cytotoxic T lymphocytes",
      "Naive B lymphocytes"
    ],
    "answer": 1,
    "explanations": [
      "Linfócitos B de memória permanecem prontos para reativação, mas não são a fonte principal da secreção contínua.",
      "Plasmócitos de longa duração, frequentemente na medula óssea, secretam anticorpos persistentemente.",
      "Linfócitos T citotóxicos não secretam anticorpos.",
      "Linfócitos B virgens ainda não foram ativados por aquele antígeno."
    ],
    "teaching": "Plasmócito produz anticorpos agora; linfócito B de memória reforça a resposta futura."
  },
  {
    "id": "t-memory",
    "topic": "Imunologia",
    "level": 2,
    "stem": "After re-exposure to a previously encountered virus, what is a key role of memory cytotoxic T lymphocytes?",
    "options": [
      "Secretion of immunoglobulin G",
      "Generation of effector cells that kill infected cells",
      "Continuous production of serum antibodies",
      "Conversion into bone marrow plasma cells"
    ],
    "answer": 1,
    "explanations": [
      "Anticorpos são produzidos por plasmócitos, não por linfócitos T.",
      "Linfócitos T citotóxicos de memória proliferam e recuperam a capacidade de eliminar células infectadas.",
      "Produção contínua de anticorpos é função dos plasmócitos de longa duração.",
      "Linfócitos T não se diferenciam em plasmócitos."
    ],
    "teaching": "Memória T significa resposta celular; memória B contribui para futura resposta humoral."
  },
  {
    "id": "pralidoxime-mechanism",
    "topic": "Toxicologia",
    "level": 1,
    "stem": "A farmworker has sweating, salivation, bronchorrhea, miosis, and muscle fasciculations after insecticide exposure. Which action describes pralidoxime?",
    "options": [
      "Blocks muscarinic acetylcholine receptors",
      "Reactivates inhibited acetylcholinesterase",
      "Inhibits acetylcholine release from nerve terminals",
      "Antagonizes nicotinic acetylcholine receptors"
    ],
    "answer": 1,
    "explanations": [
      "Atropina bloqueia os receptores muscarínicos; pralidoxima não age principalmente por esse bloqueio.",
      "Pralidoxima remove o grupo organofosforado da acetilcolinesterase antes do envelhecimento da ligação, reativando a enzima.",
      "A pralidoxima não bloqueia a liberação de acetilcolina.",
      "Ela não funciona como bloqueador direto dos receptores nicotínicos."
    ],
    "teaching": "A pralidoxima restaura a enzima acetilcolinesterase; a atropina bloqueia receptores muscarínicos."
  },
  {
    "id": "pralidoxime-aging",
    "topic": "Toxicologia",
    "level": 2,
    "stem": "Why is pralidoxime most useful when administered early after organophosphate poisoning?",
    "options": [
      "The toxin is eliminated only by the kidneys during the first hour",
      "Aging makes the enzyme-organophosphate bond resistant to reactivation",
      "Atropine irreversibly destroys acetylcholine receptors",
      "Neuromuscular junctions stop using acetylcholine after six hours"
    ],
    "answer": 1,
    "explanations": [
      "A eliminação renal não explica a janela farmacológica da pralidoxima.",
      "Envelhecimento é o fortalecimento da ligação entre organofosforado e acetilcolinesterase, dificultando sua reativação.",
      "Atropina não destrói receptores; ela os bloqueia temporariamente.",
      "A junção neuromuscular continua utilizando acetilcolina."
    ],
    "teaching": "Administrar precocemente, antes do envelhecimento irreversível da ligação."
  },
  {
    "id": "pralidoxime-nicotinic",
    "topic": "Toxicologia",
    "level": 2,
    "stem": "A poisoned patient has severe bronchorrhea and muscle weakness due to organophosphates. Which treatment helps restore acetylcholinesterase function and may improve neuromuscular weakness?",
    "options": [
      "Atropine alone",
      "Pralidoxime given early",
      "Diphenhydramine",
      "Physostigmine"
    ],
    "answer": 1,
    "explanations": [
      "Atropina trata efeitos muscarínicos, sobretudo secreções e broncoconstrição; não reativa a enzima.",
      "Pralidoxima precoce pode reativar a acetilcolinesterase também nas junções neuromusculares.",
      "Difenidramina é um anti-histamínico e não reverte a inibição da acetilcolinesterase.",
      "Fisostigmina inibe ainda mais a acetilcolinesterase."
    ],
    "teaching": "Intoxicação importante: suporte ventilatório quando necessário, atropina e pralidoxima precoce."
  },
  {
    "id": "homocystinuria-cbs",
    "topic": "Bioquímica",
    "level": 1,
    "stem": "A child has inferonasal lens displacement, venous thrombosis, and developmental delay. Which blood pattern best fits cystathionine beta-synthase deficiency?",
    "options": [
      "High homocysteine, high methionine",
      "High homocysteine, low methionine",
      "Low homocysteine, high cysteine",
      "Low methionine, low homocysteine"
    ],
    "answer": 0,
    "explanations": [
      "A via de produção de cistationina está bloqueada: sobe homocisteína e parte retorna à metionina.",
      "Metionina baixa sugere defeito de remetilação, por exemplo da metionina sintase.",
      "O defeito causa elevação, não redução, da homocisteína; a cisteína tende a cair.",
      "A homocisteína não costuma cair nessa deficiência."
    ],
    "teaching": "Deficiência de cistationina beta-sintase: homocisteína e metionina elevadas."
  },
  {
    "id": "homocystinuria-remethylation",
    "topic": "Bioquímica",
    "level": 2,
    "stem": "A patient has elevated plasma homocysteine but low methionine due to an inherited defect in remethylation. Which enzyme is most directly impaired?",
    "options": [
      "Cystathionine beta-synthase",
      "Methionine synthase",
      "Phenylalanine hydroxylase",
      "Homogentisate dioxygenase"
    ],
    "answer": 1,
    "explanations": [
      "A deficiência de cistationina beta-sintase tipicamente eleva também a metionina.",
      "Metionina sintase devolve um grupo metil à homocisteína, formando metionina.",
      "Fenilalanina hidroxilase converte fenilalanina em tirosina.",
      "Homogentisato dioxigenase participa da degradação da tirosina e está relacionada à alcaptonúria."
    ],
    "teaching": "Defeito de remetilação: homocisteína alta e metionina baixa."
  },
  {
    "id": "methyl-donor",
    "topic": "Bioquímica",
    "level": 2,
    "stem": "Which compound formed from methionine serves as a major methyl-group donor in cellular reactions?",
    "options": [
      "S-adenosylmethionine",
      "S-adenosylhomocysteine",
      "Cystathionine",
      "Homocysteine"
    ],
    "answer": 0,
    "explanations": [
      "S-adenosilmetionina é a forma ativada da metionina que doa grupos metil.",
      "S-adenosil-homocisteína é formada após a doação do grupo metil.",
      "Cistationina é um intermediário na via de formação de cisteína.",
      "Homocisteína é produzida após remoção da adenosina da S-adenosil-homocisteína."
    ],
    "teaching": "Metionina → S-adenosilmetionina → S-adenosil-homocisteína → homocisteína."
  },
  {
    "id": "cbs-vitamin",
    "topic": "Bioquímica",
    "level": 1,
    "stem": "Cystathionine beta-synthase, the enzyme that converts homocysteine toward cysteine production, requires which vitamin-derived cofactor?",
    "options": [
      "Vitamin B1 (thiamine)",
      "Vitamin B6 (pyridoxine)",
      "Vitamin B12 (cobalamin)",
      "Vitamin B3 (niacin)"
    ],
    "answer": 1,
    "explanations": [
      "Tiamina é importante em reações oxidativas, mas não é o cofator dessa enzima.",
      "A cistationina beta-sintase utiliza fosfato de piridoxal, derivado da vitamina B6.",
      "Vitamina B12 é cofator para metionina sintase, que recicla homocisteína em metionina.",
      "Niacina é precursora de coenzimas de oxidorredução, não desse passo."
    ],
    "teaching": "Cistationina beta-sintase usa vitamina B6; metionina sintase usa vitamina B12 e folato."
  },
  {
    "id": "fructose-aldolase",
    "topic": "Bioquímica",
    "level": 1,
    "stem": "An infant develops vomiting, sweating, hypoglycemia, and liver injury after fruit juice is introduced. Which enzyme deficiency is most likely?",
    "options": [
      "Fructokinase",
      "Aldolase B",
      "Galactokinase",
      "Galactose-1-phosphate uridylyltransferase"
    ],
    "answer": 1,
    "explanations": [
      "Deficiência de frutoquinase causa frutosúria essencial, geralmente benigna.",
      "Deficiência de aldolase B causa intolerância hereditária à frutose, com acúmulo de frutose-1-fosfato.",
      "Deficiência de galactoquinase causa sobretudo catarata por acúmulo de galactitol.",
      "Deficiência de galactose-1-fosfato uridiltransferase causa galactosemia clássica, precipitada pelo leite."
    ],
    "teaching": "Frutose + sintomas graves após fruta = deficiência de aldolase B."
  },
  {
    "id": "fructose-phosphate",
    "topic": "Bioquímica",
    "level": 2,
    "stem": "In hereditary fructose intolerance, fructose-1-phosphate accumulation causes hypoglycemia primarily through which mechanism?",
    "options": [
      "Trapping inorganic phosphate and depleting adenosine triphosphate",
      "Excess insulin secretion from pancreatic beta cells",
      "Accelerated galactose oxidation",
      "Overactivation of glycogen phosphorylase"
    ],
    "answer": 0,
    "explanations": [
      "A retenção de fosfato reduz energia celular e prejudica glicogenólise e gliconeogênese.",
      "A hipoglicemia não depende primariamente de hiperinsulinemia.",
      "Metabolismo da galactose não explica a intolerância à frutose.",
      "Glicogenólise é inibida, não estimulada."
    ],
    "teaching": "Frutose-1-fosfato sequestra fosfato e prejudica a produção de glicose."
  },
  {
    "id": "galactose-classic",
    "topic": "Bioquímica",
    "level": 1,
    "stem": "A newborn fed milk develops jaundice, hepatomegaly, poor feeding, and cataracts. Which enzyme deficiency causes classic galactosemia?",
    "options": [
      "Galactokinase",
      "Galactose-1-phosphate uridylyltransferase",
      "Fructokinase",
      "Aldolase B"
    ],
    "answer": 1,
    "explanations": [
      "Galactoquinase causa catarata, geralmente sem a síndrome hepática grave clássica.",
      "A deficiência de galactose-1-fosfato uridiltransferase causa galactosemia clássica.",
      "Frutoquinase está relacionada à frutosúria essencial.",
      "Aldolase B está relacionada à intolerância hereditária à frutose."
    ],
    "teaching": "Leite + icterícia + catarata = pensar em galactosemia clássica."
  },
  {
    "id": "galactose-cataract",
    "topic": "Bioquímica",
    "level": 2,
    "stem": "A child has isolated early cataracts from galactose accumulation, without severe hepatic manifestations. Which enzyme deficiency is most consistent?",
    "options": [
      "Galactokinase",
      "Aldolase B",
      "Glucose-6-phosphatase",
      "Cystathionine beta-synthase"
    ],
    "answer": 0,
    "explanations": [
      "A deficiência de galactoquinase favorece formação de galactitol, que causa alterações osmóticas no cristalino.",
      "Aldolase B causa intolerância hereditária à frutose com toxicidade hepática e hipoglicemia.",
      "Glicose-6-fosfatase causa doença de armazenamento de glicogênio do tipo I.",
      "Cistationina beta-sintase deficiente produz homocistinúria clássica."
    ],
    "teaching": "Galactoquinase: catarata; galactose-1-fosfato uridiltransferase: catarata mais doença sistêmica."
  },
  {
    "id": "cgd-dhr",
    "topic": "Imunologia",
    "level": 1,
    "stem": "A child has recurrent infections with catalase-positive bacteria and fungi. A neutrophil dihydrorhodamine flow-cytometry test is abnormal. What is defective?",
    "options": [
      "Nicotinamide adenine dinucleotide phosphate oxidase",
      "Myeloperoxidase alone",
      "Leukocyte integrin subunit beta-2",
      "Complement component 3 (a central complement protein)"
    ],
    "answer": 0,
    "explanations": [
      "A deficiência da oxidase do fosfato de dinucleotídeo de nicotinamida e adenina reduz a explosão respiratória dos fagócitos.",
      "A deficiência isolada de mieloperoxidase costuma ser mais branda, podendo se associar a Candida.",
      "Defeito de integrina beta-2 caracteriza deficiência de adesão leucocitária.",
      "Deficiência do componente 3 do complemento compromete a opsonização, não a explosão respiratória."
    ],
    "teaching": "Doença granulomatosa crônica: defeito na explosão respiratória dos fagócitos."
  },
  {
    "id": "lad-no-pus",
    "topic": "Imunologia",
    "level": 1,
    "stem": "A newborn has delayed umbilical cord separation, recurrent bacterial infections, marked neutrophilia, and little pus. Which defect is most likely?",
    "options": [
      "Defective integrin-mediated leukocyte adhesion",
      "Defective oxidative burst in neutrophils",
      "Absent immunoglobulin A only",
      "Defective thymic development"
    ],
    "answer": 0,
    "explanations": [
      "A deficiência de adesão leucocitária prejudica a saída dos neutrófilos do sangue para os tecidos.",
      "Defeito de explosão respiratória causa doença granulomatosa crônica; os neutrófilos conseguem migrar.",
      "Deficiência isolada de imunoglobulina A não explica ausência de pus e atraso na queda do cordão.",
      "Defeito de desenvolvimento tímico afeta predominantemente linfócitos T."
    ],
    "teaching": "Ausência de pus + neutrofilia + atraso na queda do cordão = defeito de adesão leucocitária."
  },
  {
    "id": "xla-tonsils",
    "topic": "Imunologia",
    "level": 1,
    "stem": "A boy develops recurrent bacterial infections after maternal antibodies wane. He has almost no tonsillar tissue and very low levels of all immunoglobulin classes. What is the mechanism?",
    "options": [
      "Failure of B lymphocyte maturation",
      "Failure of T lymphocyte selection only",
      "Excess complement activation",
      "Deficiency of platelet adhesion receptors"
    ],
    "answer": 0,
    "explanations": [
      "Agamaglobulinemia ligada ao cromossomo X impede a maturação de linfócitos B, causando ausência de imunoglobulinas e tonsilas pouco desenvolvidas.",
      "Deficiência isolada de linfócitos T não explica especificamente ausência de linfócitos B maduros.",
      "Ativação excessiva do complemento não causa esse fenótipo.",
      "Defeitos plaquetários causam problemas hemorrágicos, não ausência de anticorpos."
    ],
    "teaching": "Agamaglobulinemia ligada ao cromossomo X: praticamente sem linfócitos B maduros e sem tonsilas."
  },
  {
    "id": "digeorge-pouch",
    "topic": "Imunologia",
    "level": 1,
    "stem": "An infant has congenital cardiac defects, hypocalcemia, and profound T lymphocyte deficiency due to thymic aplasia. Which embryologic structure is affected?",
    "options": [
      "First pharyngeal pouch",
      "Second pharyngeal pouch",
      "Third pharyngeal pouch",
      "Fourth pharyngeal cleft"
    ],
    "answer": 2,
    "explanations": [
      "A primeira bolsa faríngea origina estruturas da orelha média.",
      "A segunda bolsa faríngea contribui para o tecido das tonsilas palatinas.",
      "A terceira bolsa faríngea origina o timo e as paratireoides inferiores.",
      "A quarta fenda não é a origem do timo."
    ],
    "teaching": "Síndrome de DiGeorge: alteração da terceira e quarta bolsas faríngeas, com aplasia tímica."
  },
  {
    "id": "hyper-igm",
    "topic": "Imunologia",
    "level": 2,
    "stem": "A boy has recurrent bacterial and opportunistic infections. Immunoglobulin M is normal or high, but immunoglobulin G and A are markedly reduced. What process fails?",
    "options": [
      "Immunoglobulin class switching",
      "Antigen-independent T receptor rearrangement",
      "Neutrophil migration through endothelium",
      "Complement membrane attack complex formation"
    ],
    "answer": 0,
    "explanations": [
      "Há falha na troca de classe dos anticorpos, muitas vezes por defeito na interação entre a proteína CD40 (cluster de diferenciação 40) e seu ligante, presente nos linfócitos T.",
      "Rearranjo do receptor T não explica especificamente o padrão de imunoglobulinas.",
      "Migração neutrofílica é defeituosa na deficiência de adesão leucocitária.",
      "Complexo de ataque à membrana envolve a via terminal do complemento."
    ],
    "teaching": "Síndrome de hiperimunoglobulina M: falha da troca de classe."
  },
  {
    "id": "psc",
    "topic": "Gastroenterologia",
    "level": 1,
    "stem": "A man with ulcerative colitis develops progressive cholestasis. Imaging shows multiple alternating strictures and dilations of intrahepatic and extrahepatic bile ducts. What is the diagnosis?",
    "options": [
      "Primary biliary cholangitis",
      "Primary sclerosing cholangitis",
      "Acute calculous cholecystitis",
      "Gilbert syndrome"
    ],
    "answer": 1,
    "explanations": [
      "Colangite biliar primária acomete predominantemente pequenos ductos intra-hepáticos e costuma apresentar anticorpos antimitocôndria.",
      "Colangite esclerosante primária está associada à retocolite ulcerativa e provoca estenoses multifocais em vias biliares.",
      "Colecistite calculosa aguda não produz padrão difuso de estreitamentos e dilatações.",
      "Síndrome de Gilbert causa hiperbilirrubinemia indireta não conjugada."
    ],
    "teaching": "Retocolite ulcerativa + vias biliares em contas de rosário = colangite esclerosante primária."
  },
  {
    "id": "pbc",
    "topic": "Gastroenterologia",
    "level": 2,
    "stem": "A middle-aged woman has pruritus, cholestatic liver tests, and positive antimitochondrial antibodies. Which structure is primarily destroyed?",
    "options": [
      "Small intrahepatic bile ducts",
      "Large extrahepatic bile ducts",
      "Pancreatic islet beta cells",
      "Hepatic portal veins"
    ],
    "answer": 0,
    "explanations": [
      "Colangite biliar primária destrói pequenos ductos biliares intra-hepáticos.",
      "Grandes ductos são mais característicos da colangite esclerosante primária.",
      "Ilhotas pancreáticas são acometidas em diabetes autoimune.",
      "Veias portais não são o alvo clássico da colangite biliar primária."
    ],
    "teaching": "Colangite biliar primária: mulher, prurido, anticorpos antimitocôndria."
  },
  {
    "id": "sulfonylurea",
    "topic": "Farmacologia",
    "level": 1,
    "stem": "How do sulfonylureas trigger insulin secretion from pancreatic beta cells?",
    "options": [
      "Open adenosine triphosphate-sensitive potassium channels",
      "Close adenosine triphosphate-sensitive potassium channels",
      "Block voltage-gated calcium channels",
      "Destroy the insulin receptor"
    ],
    "answer": 1,
    "explanations": [
      "Abrir canais de potássio hiperpolariza a célula e reduz secreção de insulina.",
      "Fechar canais de potássio sensíveis ao trifosfato de adenosina despolariza a célula e abre canais de cálcio, liberando insulina.",
      "O influxo de cálcio é necessário à exocitose de insulina; bloqueá-lo diminui a secreção.",
      "Sulfonilureias não destroem receptores de insulina."
    ],
    "teaching": "Fechar potássio → despolarizar → abrir cálcio → liberar insulina."
  },
  {
    "id": "nms",
    "topic": "Farmacologia",
    "level": 2,
    "stem": "After initiation of a high-potency dopamine receptor antagonist, a patient develops fever, severe lead-pipe rigidity, autonomic instability, and elevated creatine kinase. What is most likely?",
    "options": [
      "Serotonin syndrome",
      "Neuroleptic malignant syndrome",
      "Malignant hyperthermia triggered by anesthetics",
      "Organophosphate poisoning"
    ],
    "answer": 1,
    "explanations": [
      "Síndrome serotoninérgica costuma ter hiperreflexia e clônus, além de alterações autonômicas.",
      "Síndrome neuroléptica maligna decorre de bloqueio dopaminérgico e apresenta rigidez intensa e hipertermia.",
      "Hipertermia maligna é relacionada sobretudo a anestésicos voláteis e succinilcolina.",
      "Intoxicação por organofosforados produz síndrome colinérgica com secreções, miose e fasciculações."
    ],
    "teaching": "Rigidez em cano de chumbo sugere síndrome neuroléptica maligna; clônus sugere síndrome serotoninérgica."
  },
  {
    "id": "serotonin",
    "topic": "Farmacologia",
    "level": 2,
    "stem": "A patient taking two serotonergic drugs develops agitation, fever, diarrhea, hyperreflexia, and inducible ankle clonus. Which syndrome is most likely?",
    "options": [
      "Neuroleptic malignant syndrome",
      "Serotonin syndrome",
      "Anticholinergic toxicity",
      "Opioid withdrawal"
    ],
    "answer": 1,
    "explanations": [
      "Síndrome neuroléptica maligna tende a causar rigidez intensa e reflexos não tipicamente hiperativos com clônus.",
      "Síndrome serotoninérgica combina hiperatividade autonômica, alteração mental, hiperreflexia e clônus.",
      "Toxicidade anticolinérgica provoca pele seca e redução de ruídos intestinais, não diarreia e clônus.",
      "Abstinência de opioides pode causar diarreia e agitação, mas o clônus com exposição serotoninérgica aponta outra causa."
    ],
    "teaching": "Clônus + hiperreflexia + fármacos serotoninérgicos = síndrome serotoninérgica."
  },
  {
    "id": "nnt",
    "topic": "Bioestatística",
    "level": 1,
    "stem": "In a randomized trial, an event occurs in 10% of untreated patients and 5% of treated patients. What is the number needed to treat to prevent one event?",
    "options": [
      "5",
      "10",
      "20",
      "50"
    ],
    "answer": 2,
    "explanations": [
      "Cinco corresponderia à redução absoluta de risco de 20%, não 5%.",
      "Dez corresponderia à redução absoluta de risco de 10%.",
      "Redução absoluta de risco = 10% − 5% = 5% = 0,05. Número necessário para tratar = 1 / 0,05 = 20.",
      "Cinquenta corresponderia à redução absoluta de risco de 2%."
    ],
    "teaching": "Número necessário para tratar = 1 ÷ redução absoluta do risco."
  },
  {
    "id": "alpha",
    "topic": "Bioestatística",
    "level": 1,
    "stem": "A researcher rejects a true null hypothesis. Which statistical error has occurred?",
    "options": [
      "Type I error (alpha)",
      "Type II error (beta)",
      "Reduced statistical power",
      "Selection bias"
    ],
    "answer": 0,
    "explanations": [
      "Erro do tipo I (alfa) é declarar um resultado positivo quando a hipótese nula é verdadeira: falso positivo.",
      "Erro do tipo II (beta) é deixar de rejeitar hipótese nula falsa: falso negativo.",
      "Poder estatístico é 1 menos beta, relacionado à detecção de efeitos reais.",
      "Viés de seleção é um problema de composição dos grupos, não a definição do erro estatístico descrito."
    ],
    "teaching": "Alfa = falso positivo; beta = falso negativo."
  },
  {
    "id": "power",
    "topic": "Bioestatística",
    "level": 2,
    "stem": "A trial has a 20% probability of failing to detect a true treatment effect. What is its statistical power?",
    "options": [
      "20%",
      "50%",
      "80%",
      "95%"
    ],
    "answer": 2,
    "explanations": [
      "Vinte por cento é beta: risco de erro do tipo II, ou falso negativo.",
      "Cinquenta por cento não corresponde a 1 menos 0,20.",
      "Poder estatístico é 1 menos beta: 1 − 0,20 = 0,80, ou 80%.",
      "Noventa e cinco por cento não é derivado do beta informado."
    ],
    "teaching": "Poder estatístico = 1 − beta (probabilidade de erro tipo II)."
  },
  {
    "id": "cml",
    "topic": "Hematologia",
    "level": 1,
    "stem": "A patient has marked granulocytosis with left shift, splenomegaly, and a reciprocal translocation between chromosomes 9 and 22. What is the pathogenic product?",
    "options": [
      "An anti-apoptotic B-cell lymphoma 2 protein",
      "A constitutively active BCR–ABL tyrosine kinase (breakpoint cluster region–Abelson fusion)",
      "A retinoic acid receptor fusion",
      "A rearrangement of the MYC (myelocytomatosis) oncogene"
    ],
    "answer": 1,
    "explanations": [
      "Proteína antiapoptótica B-cell lymphoma 2 é típica de linfoma folicular.",
      "A translocação dos cromossomos 9 e 22 gera a fusão BCR–ABL (região de agrupamento de pontos de quebra e quinase Abelson), com atividade contínua de tirosina quinase.",
      "Fusão envolvendo receptor de ácido retinoico é típica de leucemia promielocítica aguda.",
      "Rearranjos do fator de transcrição MYC são típicos de linfoma de Burkitt."
    ],
    "teaching": "Leucemia mieloide crônica: cromossomos 9 e 22, tirosina quinase BCR–ABL."
  },
  {
    "id": "follicular",
    "topic": "Hematologia",
    "level": 2,
    "stem": "A painless generalized lymphadenopathy biopsy reveals follicles with a translocation between chromosomes 14 and 18. Which cellular effect drives the disease?",
    "options": [
      "Increased apoptosis via p53",
      "Reduced apoptosis due to B-cell lymphoma 2 overexpression",
      "Increased DNA repair via mismatch-repair proteins",
      "Loss of retinoic acid receptor function"
    ],
    "answer": 1,
    "explanations": [
      "A doença é caracterizada por resistência à apoptose, não por excesso dela.",
      "A translocação entre os cromossomos 14 e 18 aumenta expressão de B-cell lymphoma 2, proteína antiapoptótica.",
      "Reparo de pareamento incorreto do ácido desoxirribonucleico não é o mecanismo típico.",
      "Receptor de ácido retinoico alterado caracteriza leucemia promielocítica aguda."
    ],
    "teaching": "Linfoma folicular: cromossomos 14 e 18 → B-cell lymphoma 2 → evita apoptose."
  },
  {
    "id": "apl",
    "topic": "Hematologia",
    "level": 2,
    "stem": "A patient has acute leukemia with abnormal promyelocytes, multiple Auer rods, and disseminated intravascular coagulation. Which targeted treatment promotes malignant-cell differentiation?",
    "options": [
      "All-trans retinoic acid",
      "Hydroxyurea",
      "Imatinib",
      "Rituximab"
    ],
    "answer": 0,
    "explanations": [
      "Ácido all-trans-retinoico age na proteína de fusão da leucemia promielocítica aguda e restaura diferenciação celular.",
      "Hidroxiureia aumenta hemoglobina fetal em anemia falciforme; não é o tratamento diferenciador principal desta leucemia.",
      "Imatinibe inibe tirosina quinase BCR–ABL.",
      "Rituximabe tem como alvo a proteína CD20 (cluster de diferenciação 20) dos linfócitos B."
    ],
    "teaching": "Leucemia promielocítica aguda: cromossomos 15 e 17, coagulopatia e ácido all-trans-retinoico."
  },
  {
    "id": "telomerase-stem",
    "topic": "Cell Biology",
    "level": 2,
    "stem": "Which enzyme extends TTAGGG repeats at chromosome ends in germline and stem cells?",
    "options": [
      "DNA polymerase delta",
      "Telomerase reverse transcriptase",
      "DNA ligase I",
      "Topoisomerase II"
    ],
    "answer": 1,
    "explanations": [
      "Incorrect: DNA polymerase delta. DNA polymerase requires a primer and does not solve the end-replication problem.",
      "Telomerase uses an internal RNA template to extend the 3′ chromosome end.",
      "Incorrect: DNA ligase I. DNA polymerase requires a primer and does not solve the end-replication problem.",
      "Incorrect: Topoisomerase II. DNA polymerase requires a primer and does not solve the end-replication problem."
    ],
    "teaching": "DNA polymerase requires a primer and does not solve the end-replication problem."
  },
  {
    "id": "telomerase-cancer",
    "topic": "Cell Biology",
    "level": 2,
    "stem": "A tumor acquires unlimited replicative potential. Which change most directly prevents progressive telomere shortening?",
    "options": [
      "Loss of p53 only",
      "Increased mismatch repair",
      "Telomerase reactivation",
      "Increased histone acetylation"
    ],
    "answer": 2,
    "explanations": [
      "Incorrect: Loss of p53 only. p53 loss impairs checkpoints but does not itself lengthen telomeres.",
      "Incorrect: Increased mismatch repair. p53 loss impairs checkpoints but does not itself lengthen telomeres.",
      "Telomerase reactivation maintains telomeres during repeated cell division.",
      "Incorrect: Increased histone acetylation. p53 loss impairs checkpoints but does not itself lengthen telomeres."
    ],
    "teaching": "p53 loss impairs checkpoints but does not itself lengthen telomeres."
  },
  {
    "id": "amylin",
    "topic": "Endocrinology",
    "level": 2,
    "stem": "Which pancreatic beta-cell hormone slows gastric emptying and suppresses postprandial glucagon?",
    "options": [
      "Somatostatin",
      "Amylin",
      "Ghrelin",
      "Glucagon-like peptide 2"
    ],
    "answer": 1,
    "explanations": [
      "Incorrect: Somatostatin. Ghrelin stimulates hunger; somatostatin inhibits many hormones but is secreted by delta cells.",
      "Amylin is co-secreted with insulin and promotes satiety.",
      "Incorrect: Ghrelin. Ghrelin stimulates hunger; somatostatin inhibits many hormones but is secreted by delta cells.",
      "Incorrect: Glucagon-like peptide 2. Ghrelin stimulates hunger; somatostatin inhibits many hormones but is secreted by delta cells."
    ],
    "teaching": "Ghrelin stimulates hunger; somatostatin inhibits many hormones but is secreted by delta cells."
  },
  {
    "id": "anesthetic-blood-gas",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "An inhaled anesthetic has a low blood:gas partition coefficient. What happens to induction?",
    "options": [
      "It is slower",
      "It is faster",
      "Potency must be lower",
      "Minimum alveolar concentration increases"
    ],
    "answer": 1,
    "explanations": [
      "Incorrect: It is slower. Blood:gas predicts speed; oil:gas solubility correlates with potency.",
      "Low blood solubility allows alveolar partial pressure to rise quickly, accelerating induction.",
      "Incorrect: Potency must be lower. Blood:gas predicts speed; oil:gas solubility correlates with potency.",
      "Incorrect: Minimum alveolar concentration increases. Blood:gas predicts speed; oil:gas solubility correlates with potency."
    ],
    "teaching": "Blood:gas predicts speed; oil:gas solubility correlates with potency."
  },
  {
    "id": "anesthetic-potency",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "An inhaled anesthetic has high oil:gas solubility. Which finding is expected?",
    "options": [
      "Higher minimum alveolar concentration",
      "Lower potency",
      "Lower minimum alveolar concentration",
      "Faster induction in every patient"
    ],
    "answer": 2,
    "explanations": [
      "Incorrect: Higher minimum alveolar concentration. Blood:gas solubility, not oil:gas solubility, primarily predicts induction speed.",
      "Incorrect: Lower potency. Blood:gas solubility, not oil:gas solubility, primarily predicts induction speed.",
      "Greater lipid solubility generally means higher potency and lower minimum alveolar concentration.",
      "Incorrect: Faster induction in every patient. Blood:gas solubility, not oil:gas solubility, primarily predicts induction speed."
    ],
    "teaching": "Blood:gas solubility, not oil:gas solubility, primarily predicts induction speed."
  },
  {
    "id": "williams-elastin",
    "topic": "Genetics",
    "level": 2,
    "stem": "A friendly child with hypercalcemia and supravalvular aortic stenosis has which genetic defect?",
    "options": [
      "Deletion of 7q11.23 including ELN",
      "Deletion of 22q11.2",
      "FBN1 missense mutation",
      "Trinucleotide CGG expansion"
    ],
    "answer": 0,
    "explanations": [
      "Williams syndrome involves a 7q11.23 microdeletion affecting elastin (ELN).",
      "Incorrect: Deletion of 22q11.2. 22q11.2 deletion causes DiGeorge syndrome with hypocalcemia and T-cell deficiency.",
      "Incorrect: FBN1 missense mutation. 22q11.2 deletion causes DiGeorge syndrome with hypocalcemia and T-cell deficiency.",
      "Incorrect: Trinucleotide CGG expansion. 22q11.2 deletion causes DiGeorge syndrome with hypocalcemia and T-cell deficiency."
    ],
    "teaching": "22q11.2 deletion causes DiGeorge syndrome with hypocalcemia and T-cell deficiency."
  },
  {
    "id": "syringomyelia",
    "topic": "Neurology",
    "level": 2,
    "stem": "A patient loses pain and temperature sensation across both shoulders but retains vibration sense. What is damaged?",
    "options": [
      "Dorsal columns",
      "Anterior white commissure",
      "Lateral corticospinal tracts alone",
      "Medial lemniscus"
    ],
    "answer": 1,
    "explanations": [
      "Incorrect: Dorsal columns. Dorsal columns carry vibration and proprioception, which are initially spared.",
      "A cervical syrinx injures crossing spinothalamic fibers in the anterior white commissure.",
      "Incorrect: Lateral corticospinal tracts alone. Dorsal columns carry vibration and proprioception, which are initially spared.",
      "Incorrect: Medial lemniscus. Dorsal columns carry vibration and proprioception, which are initially spared."
    ],
    "teaching": "Dorsal columns carry vibration and proprioception, which are initially spared."
  },
  {
    "id": "b12-metformin",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "Long-term metformin therapy can cause which nutrient deficiency through impaired ileal absorption?",
    "options": [
      "Vitamin B12",
      "Vitamin C",
      "Vitamin K",
      "Folate exclusively"
    ],
    "answer": 0,
    "explanations": [
      "Metformin can impair calcium-dependent absorption of the intrinsic factor–vitamin B12 complex.",
      "Incorrect: Vitamin C. B12 deficiency may cause neuropathy even without prominent macrocytosis.",
      "Incorrect: Vitamin K. B12 deficiency may cause neuropathy even without prominent macrocytosis.",
      "Incorrect: Folate exclusively. B12 deficiency may cause neuropathy even without prominent macrocytosis."
    ],
    "teaching": "B12 deficiency may cause neuropathy even without prominent macrocytosis."
  },
  {
    "id": "lac-operon-max",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "When is transcription of the bacterial lac operon maximal?",
    "options": [
      "Glucose high, lactose absent",
      "Glucose high, lactose present",
      "Glucose low, lactose absent",
      "Glucose low, lactose present"
    ],
    "answer": 3,
    "explanations": [
      "Incorrect: Glucose high, lactose absent. Lactose alone is insufficient for maximal transcription when glucose remains high.",
      "Incorrect: Glucose high, lactose present. Lactose alone is insufficient for maximal transcription when glucose remains high.",
      "Incorrect: Glucose low, lactose absent. Lactose alone is insufficient for maximal transcription when glucose remains high.",
      "Lactose relieves repression; low glucose raises cyclic AMP, activating CAP."
    ],
    "teaching": "Lactose alone is insufficient for maximal transcription when glucose remains high."
  },
  {
    "id": "11beta-cah",
    "topic": "Endocrinology",
    "level": 2,
    "stem": "A child has hypertension, hypokalemia, and virilization from congenital adrenal hyperplasia. Which enzyme is deficient?",
    "options": [
      "21-hydroxylase",
      "11-beta-hydroxylase",
      "17-alpha-hydroxylase",
      "Aromatase"
    ],
    "answer": 1,
    "explanations": [
      "Incorrect: 21-hydroxylase. 17-alpha-hydroxylase deficiency also raises deoxycorticosterone but reduces sex steroids.",
      "11-beta-hydroxylase deficiency raises deoxycorticosterone and adrenal androgens.",
      "Incorrect: 17-alpha-hydroxylase. 17-alpha-hydroxylase deficiency also raises deoxycorticosterone but reduces sex steroids.",
      "Incorrect: Aromatase. 17-alpha-hydroxylase deficiency also raises deoxycorticosterone but reduces sex steroids."
    ],
    "teaching": "17-alpha-hydroxylase deficiency also raises deoxycorticosterone but reduces sex steroids."
  },
  {
    "id": "17alpha-cah",
    "topic": "Endocrinology",
    "level": 2,
    "stem": "A phenotypic female adolescent has primary amenorrhea, hypertension, and low sex steroids. Which defect is likely?",
    "options": [
      "17-alpha-hydroxylase deficiency",
      "21-hydroxylase deficiency",
      "5-alpha-reductase excess",
      "Aldosterone synthase deficiency"
    ],
    "answer": 0,
    "explanations": [
      "17-alpha-hydroxylase deficiency diverts precursors toward deoxycorticosterone.",
      "Incorrect: 21-hydroxylase deficiency. 21-hydroxylase deficiency causes androgen excess and often salt wasting.",
      "Incorrect: 5-alpha-reductase excess. 21-hydroxylase deficiency causes androgen excess and often salt wasting.",
      "Incorrect: Aldosterone synthase deficiency. 21-hydroxylase deficiency causes androgen excess and often salt wasting."
    ],
    "teaching": "21-hydroxylase deficiency causes androgen excess and often salt wasting."
  },
  {
    "id": "bartter-calcium",
    "topic": "Renal",
    "level": 2,
    "stem": "Which urinary calcium finding distinguishes Bartter syndrome from Gitelman syndrome?",
    "options": [
      "Bartter: low calcium",
      "Bartter: high calcium",
      "Both: absent calcium excretion",
      "Both: high calcium"
    ],
    "answer": 1,
    "explanations": [
      "Incorrect: Bartter: low calcium. Gitelman mimics thiazides and typically causes hypocalciuria with hypomagnesemia.",
      "Bartter mimics loop diuretics and typically causes hypercalciuria.",
      "Incorrect: Both: absent calcium excretion. Gitelman mimics thiazides and typically causes hypocalciuria with hypomagnesemia.",
      "Incorrect: Both: high calcium. Gitelman mimics thiazides and typically causes hypocalciuria with hypomagnesemia."
    ],
    "teaching": "Gitelman mimics thiazides and typically causes hypocalciuria with hypomagnesemia."
  },
  {
    "id": "rta-distal",
    "topic": "Renal",
    "level": 2,
    "stem": "A patient has non-anion-gap metabolic acidosis, kidney stones, and urine pH persistently above 5.5. Which defect?",
    "options": [
      "Proximal bicarbonate reabsorption",
      "Distal hydrogen ion secretion",
      "Aldosterone excess",
      "Increased ammonium excretion"
    ],
    "answer": 1,
    "explanations": [
      "Incorrect: Proximal bicarbonate reabsorption. Proximal (type 2) acidosis can eventually produce acidic urine after bicarbonate depletion.",
      "Distal (type 1) renal tubular acidosis impairs urinary acidification and predisposes to stones.",
      "Incorrect: Aldosterone excess. Proximal (type 2) acidosis can eventually produce acidic urine after bicarbonate depletion.",
      "Incorrect: Increased ammonium excretion. Proximal (type 2) acidosis can eventually produce acidic urine after bicarbonate depletion."
    ],
    "teaching": "Proximal (type 2) acidosis can eventually produce acidic urine after bicarbonate depletion."
  },
  {
    "id": "bohr-haldane",
    "topic": "Physiology",
    "level": 2,
    "stem": "Why does deoxygenated hemoglobin transport more carbon dioxide from tissues?",
    "options": [
      "Bohr effect",
      "Haldane effect",
      "Chloride channel blockade",
      "Reduced bicarbonate formation"
    ],
    "answer": 1,
    "explanations": [
      "Incorrect: Bohr effect. The Bohr effect describes reduced hemoglobin oxygen affinity with increased CO2 or H+.",
      "The Haldane effect: deoxygenated hemoglobin binds more CO2 and buffers more hydrogen ions.",
      "Incorrect: Chloride channel blockade. The Bohr effect describes reduced hemoglobin oxygen affinity with increased CO2 or H+.",
      "Incorrect: Reduced bicarbonate formation. The Bohr effect describes reduced hemoglobin oxygen affinity with increased CO2 or H+."
    ],
    "teaching": "The Bohr effect describes reduced hemoglobin oxygen affinity with increased CO2 or H+."
  },
  {
    "id": "sarcoid-calcium",
    "topic": "Immunology",
    "level": 2,
    "stem": "Sarcoidosis causes hypercalcemia through increased activity of which enzyme in macrophages?",
    "options": [
      "24-hydroxylase",
      "1-alpha-hydroxylase",
      "Parathyroid hormone synthase",
      "Calcitonin receptor kinase"
    ],
    "answer": 1,
    "explanations": [
      "Incorrect: 24-hydroxylase. This extra-renal activation can occur despite suppressed parathyroid hormone.",
      "Granuloma macrophages convert 25-hydroxyvitamin D to active 1,25-dihydroxyvitamin D.",
      "Incorrect: Parathyroid hormone synthase. This extra-renal activation can occur despite suppressed parathyroid hormone.",
      "Incorrect: Calcitonin receptor kinase. This extra-renal activation can occur despite suppressed parathyroid hormone."
    ],
    "teaching": "This extra-renal activation can occur despite suppressed parathyroid hormone."
  },
  {
    "id": "mrna-poly-a",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "Which sequence signals cleavage and polyadenylation of eukaryotic pre-mRNA?",
    "options": [
      "AAUAAA",
      "AUG",
      "UAG",
      "GU at the 5′ splice site"
    ],
    "answer": 0,
    "explanations": [
      "AAUAAA is the canonical polyadenylation signal near the 3′ end.",
      "Incorrect: AUG. The splice-site GU dinucleotide directs intron removal, not poly-A tail addition.",
      "Incorrect: UAG. The splice-site GU dinucleotide directs intron removal, not poly-A tail addition.",
      "Incorrect: GU at the 5′ splice site. The splice-site GU dinucleotide directs intron removal, not poly-A tail addition."
    ],
    "teaching": "The splice-site GU dinucleotide directs intron removal, not poly-A tail addition."
  },
  {
    "id": "splice-branch",
    "topic": "Molecular Biology",
    "level": 2,
    "stem": "Which nucleotide initiates lariat formation during pre-mRNA splicing?",
    "options": [
      "A branch-point adenine",
      "The poly-A tail terminal adenine",
      "A cytosine in the start codon",
      "A guanine in the stop codon"
    ],
    "answer": 0,
    "explanations": [
      "The branch-point adenine 2′-OH attacks the 5′ splice site to form a lariat.",
      "Incorrect: The poly-A tail terminal adenine. AAUAAA marks polyadenylation, not the branch point.",
      "Incorrect: A cytosine in the start codon. AAUAAA marks polyadenylation, not the branch point.",
      "Incorrect: A guanine in the stop codon. AAUAAA marks polyadenylation, not the branch point."
    ],
    "teaching": "AAUAAA marks polyadenylation, not the branch point."
  },
  {
    "id": "nms-bromocriptine",
    "topic": "Pharmacology",
    "level": 2,
    "stem": "Why can bromocriptine improve neuroleptic malignant syndrome?",
    "options": [
      "Blocks serotonin 5-HT2A receptors",
      "Stimulates dopamine D2 receptors",
      "Inhibits acetylcholinesterase",
      "Blocks calcium release from skeletal muscle"
    ],
    "answer": 1,
    "explanations": [
      "Incorrect: Blocks serotonin 5-HT2A receptors. Dantrolene reduces skeletal muscle calcium release; cyproheptadine treats serotonin syndrome.",
      "Bromocriptine is a dopamine receptor agonist that counteracts dopamine blockade.",
      "Incorrect: Inhibits acetylcholinesterase. Dantrolene reduces skeletal muscle calcium release; cyproheptadine treats serotonin syndrome.",
      "Incorrect: Blocks calcium release from skeletal muscle. Dantrolene reduces skeletal muscle calcium release; cyproheptadine treats serotonin syndrome."
    ],
    "teaching": "Dantrolene reduces skeletal muscle calcium release; cyproheptadine treats serotonin syndrome."
  },
  {
    "id": "fructose-dhap",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which products result when hepatic aldolase B cleaves fructose-1-phosphate?",
    "options": [
      "Glucose and galactose",
      "Dihydroxyacetone phosphate and glyceraldehyde",
      "Pyruvate and lactate",
      "Glycerol and acetyl-CoA"
    ],
    "answer": 1,
    "explanations": [
      "Incorrect: Glucose and galactose. Aldolase A cleaves fructose-1,6-bisphosphate in glycolysis.",
      "Aldolase B generates dihydroxyacetone phosphate and glyceraldehyde for downstream metabolism.",
      "Incorrect: Pyruvate and lactate. Aldolase A cleaves fructose-1,6-bisphosphate in glycolysis.",
      "Incorrect: Glycerol and acetyl-CoA. Aldolase A cleaves fructose-1,6-bisphosphate in glycolysis."
    ],
    "teaching": "Aldolase A cleaves fructose-1,6-bisphosphate in glycolysis."
  },
  {
    "id": "galactitol-cataracts",
    "topic": "Biochemistry",
    "level": 2,
    "stem": "Which enzyme converts excess galactose into osmotically active galactitol in the lens?",
    "options": [
      "Aldose reductase",
      "Galactose-1-phosphate uridylyltransferase",
      "Aldolase B",
      "Galactokinase"
    ],
    "answer": 0,
    "explanations": [
      "Aldose reductase reduces galactose to galactitol, promoting lens swelling.",
      "Incorrect: Galactose-1-phosphate uridylyltransferase. Galactokinase deficiency causes galactose accumulation; aldose reductase produces the cataract-causing galactitol.",
      "Incorrect: Aldolase B. Galactokinase deficiency causes galactose accumulation; aldose reductase produces the cataract-causing galactitol.",
      "Incorrect: Galactokinase. Galactokinase deficiency causes galactose accumulation; aldose reductase produces the cataract-causing galactitol."
    ],
    "teaching": "Galactokinase deficiency causes galactose accumulation; aldose reductase produces the cataract-causing galactitol."
  }
];
