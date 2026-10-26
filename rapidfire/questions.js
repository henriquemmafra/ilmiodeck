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
      "Complement component C3"
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
      "Há falha na troca de classe de anticorpos, frequentemente por defeito na interação entre ligante de CD40 e CD40 em linfócitos T e B.",
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
      "A constitutively active BCR–ABL tyrosine kinase",
      "A retinoic acid receptor fusion",
      "A MYC transcription factor rearrangement"
    ],
    "answer": 1,
    "explanations": [
      "Proteína antiapoptótica B-cell lymphoma 2 é típica de linfoma folicular.",
      "A translocação entre cromossomos 9 e 22 gera proteína de fusão BCR–ABL com atividade de tirosina quinase constitutiva.",
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
      "Rituximabe tem como alvo a proteína de superfície CD20 dos linfócitos B."
    ],
    "teaching": "Leucemia promielocítica aguda: cromossomos 15 e 17, coagulopatia e ácido all-trans-retinoico."
  }
];
