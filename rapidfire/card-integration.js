(function () {
  "use strict";
  var starter = [{"id":"starter-cardio-1","topic":"Cardiology","front":"Which murmur increases during the strain phase of Valsalva?","choices":["Aortic stenosis","Hypertrophic obstructive cardiomyopathy","Mitral regurgitation"],"correct":"Hypertrophic obstructive cardiomyopathy","back":"Reduced preload worsens dynamic left ventricular outflow obstruction.","rationales":["Aortic stenosis generally becomes quieter with Valsalva strain because reduced preload lowers flow across the fixed obstruction.","Correct: less ventricular filling narrows the dynamic outflow tract and intensifies the hypertrophic cardiomyopathy murmur.","Mitral regurgitation usually softens when preload falls; handgrip, by increasing afterload, tends to accentuate its murmur."]},{"id":"starter-cardio-2","topic":"Cardiology","front":"What is the hemodynamic benefit of squatting during a tetralogy of Fallot spell?","choices":["Decreased systemic vascular resistance","Increased systemic vascular resistance","Decreased pulmonary venous return"],"correct":"Increased systemic vascular resistance","back":"Increasing systemic vascular resistance reduces right-to-left shunting.","rationales":["Lower systemic resistance favors right-to-left flow across the ventricular septal defect, potentially worsening cyanosis.","Correct: higher systemic vascular resistance reduces right-to-left shunting, improving pulmonary blood flow and oxygenation.","Reduced pulmonary venous return is not the therapeutic goal; squatting improves the systemic-to-pulmonary resistance balance."]},{"id":"starter-pulm-1","topic":"Pulmonology","front":"Which condition typically increases DLCO?","choices":["Emphysema","Pulmonary fibrosis","Alveolar hemorrhage"],"correct":"Alveolar hemorrhage","back":"Intra-alveolar hemoglobin binds carbon monoxide, raising measured diffusing capacity.","rationales":["Emphysema destroys alveolar-capillary surface area and therefore typically decreases diffusing capacity for carbon monoxide.","Pulmonary fibrosis thickens the alveolar-capillary barrier and typically lowers diffusing capacity.","Correct: hemoglobin within alveoli binds inhaled carbon monoxide, increasing the measured diffusing capacity."]},{"id":"starter-pulm-2","topic":"Pulmonology","front":"Which channel is dysfunctional in classic cystic fibrosis?","choices":["CFTR chloride channel","ENaC sodium channel","Aquaporin-2 water channel"],"correct":"CFTR chloride channel","back":"CFTR dysfunction impairs epithelial chloride and bicarbonate transport.","rationales":["Correct: cystic fibrosis transmembrane conductance regulator (CFTR) is an epithelial chloride/bicarbonate channel.","Epithelial sodium channel (ENaC) activity can be secondarily increased in cystic fibrosis, but ENaC is not the primary defective channel.","Aquaporin-2 is an antidiuretic hormone-regulated water channel in collecting ducts, not the primary defect of cystic fibrosis."]},{"id":"starter-renal-1","topic":"Nephrology","front":"Type 4 renal tubular acidosis most often causes which electrolyte pattern?","choices":["Hypokalemia","Hyperkalemia","Hypercalcemia"],"correct":"Hyperkalemia","back":"Reduced aldosterone activity impairs distal potassium and hydrogen excretion.","rationales":["Hypokalemia is more typical of distal (type 1) and proximal (type 2) renal tubular acidosis, not type 4.","Correct: hypoaldosteronism or aldosterone resistance impairs renal potassium excretion, causing hyperkalemia.","Hypercalcemia is not the defining electrolyte feature of type 4 renal tubular acidosis."]},{"id":"starter-renal-2","topic":"Nephrology","front":"Which lesion underlies minimal change nephrotic syndrome?","choices":["Podocyte foot-process effacement","Mesangial IgA deposits","Crescentic glomerulonephritis"],"correct":"Podocyte foot-process effacement","back":"Electron microscopy reveals diffuse foot-process effacement.","rationales":["Correct: minimal change disease causes diffuse podocyte foot-process effacement on electron microscopy.","Mesangial immunoglobulin A (IgA) deposits indicate IgA nephropathy, usually a nephritic rather than pure nephrotic pattern.","Crescents imply severe glomerular capillary injury, as in rapidly progressive glomerulonephritis, not typical minimal change disease."]},{"id":"starter-neuro-1","topic":"Neurology","front":"Loss of vibration and proprioception below a cord lesion suggests damage to which pathway?","choices":["Spinothalamic tract","Dorsal columns","Corticospinal tract"],"correct":"Dorsal columns","back":"The dorsal columns carry vibration and conscious proprioception.","rationales":["The spinothalamic tract carries pain and temperature; injury does not primarily abolish vibration sense.","Correct: the dorsal columns carry vibration, discriminative touch, and conscious proprioception.","The corticospinal tract controls voluntary movement; damage produces upper motor neuron findings."]},{"id":"starter-neuro-2","topic":"Neurology","front":"Oligoclonal IgG bands in cerebrospinal fluid are classically associated with?","choices":["Multiple sclerosis","Myasthenia gravis","Guillain-Barré syndrome"],"correct":"Multiple sclerosis","back":"They indicate intrathecal immunoglobulin synthesis, not a disease-specific diagnosis.","rationales":["Correct: multiple sclerosis commonly features cerebrospinal fluid-restricted oligoclonal IgG bands from intrathecal B-cell activity.","Myasthenia gravis is a neuromuscular junction antibody disorder, not typically defined by cerebrospinal oligoclonal bands.","Guillain-Barré syndrome typically shows albuminocytologic dissociation (high cerebrospinal fluid protein with few cells)."]},{"id":"starter-immuno-1","topic":"Immunology","front":"Hyper-IgM syndrome without opportunistic infection can result from loss of which B-cell enzyme?","choices":["AID","CD40 ligand","NADPH oxidase"],"correct":"AID","back":"AID deficiency impairs class switching while CD40-mediated T-cell signaling can remain intact.","rationales":["Correct: activation-induced cytidine deaminase (AID) is required for B-cell class switching; T-cell/macrophage signaling can remain intact.","CD40 ligand deficiency disrupts class switching AND macrophage activation, raising Pneumocystis and other opportunistic infection risk.","NADPH oxidase deficiency causes chronic granulomatous disease with impaired oxidative burst, not a primary hyper-IgM phenotype."]},{"id":"starter-immuno-2","topic":"Immunology","front":"Chronic granulomatous disease primarily disrupts which process?","choices":["Oxidative burst","Class-switch recombination","Complement C3 cleavage"],"correct":"Oxidative burst","back":"NADPH oxidase deficiency prevents an effective phagocyte respiratory burst.","rationales":["Correct: NADPH oxidase generates reactive oxygen species needed for the phagocyte respiratory burst.","Class-switch recombination depends on AID and CD40 signaling; it is not the primary defect in chronic granulomatous disease.","Complement C3 activation depends on complement convertases rather than NADPH oxidase."]},{"id":"starter-micro-1","topic":"Microbiology","front":"Haemophilus influenzae requires which growth factors?","choices":["Factor X and V","Factor II and VII","Factor VIII and IX"],"correct":"Factor X and V","back":"X is hemin; V is nicotinamide adenine dinucleotide (NAD).","rationales":["Correct: Haemophilus influenzae requires factor X (hemin) and factor V (nicotinamide adenine dinucleotide) for growth.","Factors II and VII are coagulation proteins; they are not bacterial growth-factor requirements.","Factors VIII and IX belong to the coagulation cascade, not Haemophilus culture requirements."]},{"id":"starter-micro-2","topic":"Microbiology","front":"Which enzyme differentiates Staphylococcus aureus from most other staphylococci?","choices":["Urease","Coagulase","Oxidase"],"correct":"Coagulase","back":"Staphylococcus aureus is classically coagulase positive.","rationales":["Urease is useful for organisms such as Proteus and Helicobacter; it does not distinguish Staphylococcus aureus reliably.","Correct: Staphylococcus aureus is classically coagulase positive, unlike most coagulase-negative staphylococci.","Oxidase differentiates groups such as Pseudomonas and Neisseria; staphylococci are oxidase negative."]},{"id":"starter-bio-1","topic":"Biochemistry","front":"GALT produces which pair of metabolites?","choices":["Glucose-1-phosphate and UDP-galactose","Galactitol and free uridine","Pyruvate and lactate"],"correct":"Glucose-1-phosphate and UDP-galactose","back":"GALT transfers UDP from UDP-glucose to galactose-1-phosphate.","rationales":["Correct: galactose-1-phosphate uridyltransferase (GALT) yields glucose-1-phosphate and UDP-galactose.","Galactitol forms via aldose reductase, especially when galactose accumulates; free uridine is not the paired product of GALT.","Pyruvate-to-lactate conversion is catalyzed by lactate dehydrogenase, not GALT."]},{"id":"starter-bio-2","topic":"Biochemistry","front":"Which electron transport chain complex does not pump protons?","choices":["Complex I","Complex II","Complex IV"],"correct":"Complex II","back":"Succinate dehydrogenase transfers electrons to ubiquinone without translocating protons.","rationales":["Complex I transfers electrons from NADH to ubiquinone and pumps protons across the inner mitochondrial membrane.","Correct: complex II (succinate dehydrogenase) transfers electrons from succinate/FADH2 to ubiquinone without pumping protons.","Complex IV reduces oxygen to water and contributes to proton pumping."]},{"id":"starter-genetics-1","topic":"Genetics","front":"A single activating point mutation causing continuous growth signaling most likely affects?","choices":["KRAS","RB1","APC"],"correct":"KRAS","back":"Oncogenes are typically activated by gain-of-function mutations.","rationales":["Correct: activating KRAS point mutations lock a growth-signaling protein in an active state.","RB1 is a tumor suppressor; cancer usually involves loss of RB function rather than an activating RB1 mutation.","APC is a tumor suppressor in the Wnt/beta-catenin pathway; inactivation is the key oncogenic event."]},{"id":"starter-genetics-2","topic":"Genetics","front":"The classic two-hit model mainly describes which gene class?","choices":["Proto-oncogenes","Tumor suppressor genes","Mitochondrial ribosomal genes"],"correct":"Tumor suppressor genes","back":"Both functional copies commonly must be inactivated to eliminate tumor-suppressor activity.","rationales":["Proto-oncogenes often become oncogenic after a single gain-of-function allele; the classical two-hit model is not their hallmark.","Correct: many tumor suppressors require loss of both functional alleles, as illustrated by RB1.","Mitochondrial ribosomal genes are not the defining class in Knudson's classic two-hit model."]},{"id":"starter-pharm-1","topic":"Pharmacology","front":"Which medication irreversibly inhibits platelet cyclooxygenase?","choices":["Ibuprofen","Aspirin","Acetaminophen"],"correct":"Aspirin","back":"Aspirin acetylates COX irreversibly; platelets cannot synthesize new enzyme.","rationales":["Ibuprofen inhibits cyclooxygenase reversibly; its platelet effect disappears as the drug clears.","Correct: aspirin irreversibly acetylates platelet cyclooxygenase; the effect lasts for the platelet lifespan.","Acetaminophen is analgesic/antipyretic but does not produce aspirin-like irreversible platelet cyclooxygenase inhibition."]},{"id":"starter-pharm-2","topic":"Pharmacology","front":"Acetazolamide primarily causes urinary loss of which ion?","choices":["Bicarbonate","Potassium alone","Chloride alone"],"correct":"Bicarbonate","back":"Proximal tubular carbonic anhydrase inhibition causes bicarbonaturia.","rationales":["Correct: carbonic anhydrase inhibition reduces proximal bicarbonate reabsorption, causing bicarbonaturia and non-anion-gap acidosis.","Potassium may also be lost, but isolated potassium loss is not the primary mechanism of acetazolamide.","Chloride alone is not the primary urinary loss produced by proximal carbonic anhydrase inhibition."]},{"id":"starter-path-1","topic":"Pathology","front":"Which activating mutation is characteristic of classic hairy cell leukemia?","choices":["BRAF V600E","JAK2 V617F","BCR-ABL1"],"correct":"BRAF V600E","back":"Hairy cell leukemia typically has BRAF V600E and can cause marrow fibrosis and dry tap.","rationales":["Correct: BRAF V600E is highly characteristic of classic hairy cell leukemia, which can cause marrow fibrosis and dry tap.","JAK2 V617F is classically seen in myeloproliferative neoplasms such as polycythemia vera, essential thrombocythemia, and primary myelofibrosis.","BCR-ABL1 defines chronic myeloid leukemia and occurs in some acute lymphoblastic leukemias, not classic hairy cell leukemia."]},{"id":"starter-path-2","topic":"Pathology","front":"Which autoantibody strongly supports primary biliary cholangitis?","choices":["Antimitochondrial antibody","Anti-dsDNA","Anti-centromere only"],"correct":"Antimitochondrial antibody","back":"Primary biliary cholangitis targets small intrahepatic bile ducts.","rationales":["Correct: antimitochondrial antibodies, especially anti-M2, are strongly associated with primary biliary cholangitis.","Anti-double-stranded DNA antibodies are associated with systemic lupus erythematosus, particularly lupus nephritis.","Anticentromere antibodies favor limited cutaneous systemic sclerosis; they can coexist with PBC but are not its principal diagnostic marker."]},{"id":"starter-endo-1","topic":"Endocrinology","front":"Primary adrenal insufficiency commonly causes which potassium change?","choices":["Hypokalemia","Hyperkalemia","No possible potassium change"],"correct":"Hyperkalemia","back":"Mineralocorticoid deficiency reduces distal potassium secretion.","rationales":["Hypokalemia is associated with mineralocorticoid excess, not the aldosterone deficiency of primary adrenal insufficiency.","Correct: aldosterone deficiency reduces distal potassium excretion, leading to hyperkalemia.","Potassium can change substantially in primary adrenal insufficiency; the assertion that it cannot change is false."]},{"id":"starter-endo-2","topic":"Endocrinology","front":"Classic 21-hydroxylase deficiency generally causes?","choices":["Low androgens","Excess adrenal androgens","Isolated increased aldosterone"],"correct":"Excess adrenal androgens","back":"Impaired cortisol synthesis diverts precursors toward androgen production.","rationales":["Low androgen production points more toward defects such as 17-alpha-hydroxylase deficiency, not classic 21-hydroxylase deficiency.","Correct: reduced cortisol synthesis raises ACTH and diverts precursors toward adrenal androgen synthesis.","Severe 21-hydroxylase deficiency impairs aldosterone synthesis and can cause salt wasting; isolated aldosterone excess is incorrect."]},{"id":"starter-stats-1","topic":"Biostatistics","front":"Rejecting a true null hypothesis is which error?","choices":["Type I (alpha)","Type II (beta)","Sampling without replacement"],"correct":"Type I (alpha)","back":"Type I error is a false-positive statistical conclusion.","rationales":["Correct: type I (alpha) error means rejecting a true null hypothesis, a false positive.","Type II (beta) error means failing to reject a false null hypothesis, a false negative.","Sampling without replacement is a study sampling method, not a type of hypothesis-testing error."]},{"id":"starter-stats-2","topic":"Biostatistics","front":"Which expression is the negative likelihood ratio?","choices":["Sensitivity / (1 - specificity)","(1 - sensitivity) / specificity","Sensitivity × specificity"],"correct":"(1 - sensitivity) / specificity","back":"A smaller negative likelihood ratio makes a negative test more useful for ruling out disease.","rationales":["Sensitivity / (1 - specificity) is the positive likelihood ratio (LR+), not the negative likelihood ratio.","Correct: negative likelihood ratio (LR−) = (1 - sensitivity) / specificity.","Sensitivity multiplied by specificity is not the formula for a positive or negative likelihood ratio."]},{"id":"starter-heme-1","topic":"Hematology","front":"Which marker commonly rises in vitamin B12 deficiency but not isolated folate deficiency?","choices":["Methylmalonic acid","Serum ferritin","Haptoglobin"],"correct":"Methylmalonic acid","back":"B12 is required for methylmalonyl-CoA mutase activity.","rationales":["Correct: vitamin B12 deficiency impairs methylmalonyl-CoA mutase, raising methylmalonic acid; isolated folate deficiency does not.","Ferritin reflects iron stores and inflammatory signaling, not a specific distinction between vitamin B12 and folate deficiency.","Haptoglobin may fall in hemolysis, including some severe B12 deficiency, but it is not the key biochemical discriminator."]},{"id":"starter-heme-2","topic":"Hematology","front":"Hemophilia A is caused by deficiency of which clotting factor?","choices":["Factor VII","Factor VIII","Factor IX"],"correct":"Factor VIII","back":"Hemophilia A is an X-linked factor VIII deficiency; hemophilia B involves factor IX.","rationales":["Factor VII is in the extrinsic coagulation pathway; its deficiency affects prothrombin time and does not define hemophilia A.","Correct: hemophilia A is inherited factor VIII deficiency, typically X-linked recessive.","Factor IX deficiency causes hemophilia B (Christmas disease), not hemophilia A."]}];
  var PERSONAL_KEY = "rf-personal-flashcards-v1";
  var OLD_PROGRESS_KEY = "rf-personal-flashcard-history-v1";
  var MAIN_PROGRESS_KEY = "step1-rapidfire-progress-v1";
  var loadedCustom = [];
  function getJson(key, fallback) {
    try {
      var data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (error) { return fallback; }
  }
  function norm(value) { return String(value == null ? "" : value).trim().toLocaleLowerCase(); }
  function splitChoices(raw) {
    if (Array.isArray(raw)) return raw.map(function (v) { return String(v).trim(); }).filter(Boolean).slice(0, 6);
    if (!raw) return [];
    return String(raw).split(/\s*(?:\/|\||;)\s*/).map(function (v) { return v.trim(); }).filter(Boolean).slice(0, 6);
  }
  function parseRationales(raw, choices) {
    if (!choices || !choices.length) return [];
    if (raw && typeof raw === "object" && !Array.isArray(raw)) {
      return choices.map(function (choice, i) {
        return String(raw[choice] || raw[String.fromCharCode(i + 65)] || raw[String(i)] || "").slice(0, 1800);
      });
    }
    var list = Array.isArray(raw) ? raw : String(raw || "").split(/\s*\|\|\s*|\r?\n/);
    return choices.map(function (_, i) { return String(list[i] || "").trim().slice(0, 1800); });
  }
  function normalizePersonal(record) {
    if (!record || typeof record !== "object" || Array.isArray(record)) return null;
    var front = String(record.front || record.question || record.pergunta || "").trim().slice(0, 2500);
    var back = String(record.back || record.explanation || record.resposta || record.verso || "").trim().slice(0, 3000);
    var topic = String(record.topic || record.subject || record.assunto || "General").trim().slice(0, 80) || "General";
    var choices = splitChoices(record.choices || record.options || record.alternativas);
    var match = !choices.length && front.match(/(?:^|\n)\s*(?:Options|Choices|Alternativas)\s*:\s*([^\n]+)\s*$/i);
    if (match) { choices = splitChoices(match[1]); front = front.slice(0, match.index).trim(); }
    var correct = String(record.correct || record.answer || record.correta || "").trim();
    if (/^[A-F]$/i.test(correct) && choices.length > correct.toUpperCase().charCodeAt(0)-65) {
      correct = choices[correct.toUpperCase().charCodeAt(0)-65];
    }
    if (!correct && choices.some(function (option) { return norm(option) === norm(back); })) correct = back;
    if (!front || !back && !correct) return null;
    if (choices.length > 1 && !choices.some(function (choice) { return norm(choice) === norm(correct); })) {
      // No validated key: keep an answer-reveal card instead of inventing a correct choice.
      choices = [];
    }
    if (choices.length < 2) choices = [];
    return {
      id: typeof record.id === "string" && /^mine-[a-z0-9-]+$/i.test(record.id) ? record.id :
        "mine-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 12),
      topic: topic, front: front, back: back || correct, choices: choices,
      correct: correct, rationales: parseRationales(
        record.choiceExplanations || record.option_explanations || record.explanations || record.rationales, choices)
    };
  }
  function toQuestion(card, personal) {
    var opts = Array.isArray(card.choices) ? card.choices : [];
    var key = opts.findIndex(function (option) { return norm(option) === norm(card.correct); });
    var explanations = opts.map(function (option, i) {
      var provided = (card.rationales || [])[i];
      if (provided) return provided;
      if (i === key) return card.back || "This is the correct answer.";
      return "No individual explanation has been provided for this option.";
    });
    return {
      id: card.id,
      topic: card.topic,
      level: 2,
      stem: card.front,
      options: key >= 0 ? opts : [],
      answer: Math.max(0, key),
      recallAnswer: key < 0 ? (card.correct || card.back) : null,
      explanations: key >= 0 ? explanations : [],
      teaching: card.back || card.correct || "",
      personalCard: !!personal
    };
  }
  function load() {
    loadedCustom = getJson(PERSONAL_KEY, []);
    if (!Array.isArray(loadedCustom)) loadedCustom = [];
    var seen = Object.create(null);
    var normalized = starter.map(function (card) { return toQuestion(card, false); });
    normalized.forEach(function (card) { seen[card.id] = true; });
    loadedCustom.map(normalizePersonal).filter(Boolean).forEach(function (card) {
      if (!seen[card.id]) { normalized.push(toQuestion(card, true)); seen[card.id] = true; }
    });
    return normalized;
  }
  function migrateReviewHistory() {
    var old = getJson(OLD_PROGRESS_KEY, {});
    var base = getJson(MAIN_PROGRESS_KEY, {});
    if (!old || !base || typeof old !== "object" || typeof base !== "object" ||
        Array.isArray(old) || Array.isArray(base)) return;
    var changed = false;
    load().forEach(function (card) {
      if (base[card.id] || !old[card.id] || typeof old[card.id] !== "object") return;
      var p = old[card.id];
      base[card.id] = {
        attempts: Number(p.attempts) || 0, hits: Number(p.hits) || 0,
        misses: Number(p.misses) || 0, streak: Number(p.streak) || 0,
        lastWrong: Boolean(p.lastWrong), lastAt: Number(p.lastAt) || 0,
        nextAt: Number(p.nextAt) || 0
      };
      changed = true;
    });
    if (changed) try { localStorage.setItem(MAIN_PROGRESS_KEY, JSON.stringify(base)); } catch (_) {}
  }
  function csvRows(text, delim) {
    var rows=[], row=[], current="", quoted=false;
    for (var i=0;i<text.length;i++) {
      var c=text[i];
      if (c==='"') {
        if (quoted && text[i+1]==='"') { current+='"'; i++; } else quoted=!quoted;
      } else if (c===delim && !quoted) { row.push(current); current=""; }
      else if ((c==="\n" || c==="\r") && !quoted) {
        if (c==="\r" && text[i+1]==="\n") i++;
        row.push(current); current="";
        if (row.some(function (v) { return v.trim(); })) rows.push(row);
        row=[];
      } else current+=c;
    }
    row.push(current);
    if (row.some(function (v) { return v.trim(); })) rows.push(row);
    if (!rows.length) return [];
    var cols=rows.shift().map(function (c) { return c.replace(/^\uFEFF/,"").trim().toLowerCase(); });
    return rows.map(function (values) {
      var record={};
      cols.forEach(function (col,i) { record[col]=values[i]||""; });
      return record;
    });
  }
  function handleRows(rows) {
    if (!Array.isArray(rows) || rows.length > 5000) throw new Error("Expected 1–5,000 cards.");
    var stored = getJson(PERSONAL_KEY, []);
    if (!Array.isArray(stored)) stored=[];
    var keys = new Set(stored.map(function (c) { return norm(c.front)+"||"+norm(c.back); }));
    var added=0;
    rows.forEach(function (raw) {
      var card=normalizePersonal(raw);
      if (!card) return;
      var signature=norm(card.front)+"||"+norm(card.back);
      if (keys.has(signature)) return;
      stored.push(card);
      keys.add(signature);
      added++;
    });
    try { localStorage.setItem(PERSONAL_KEY,JSON.stringify(stored)); }
    catch (error) { throw new Error("Device storage is full. Export a backup before retrying."); }
    return added;
  }
  function setup() {
    var status=document.getElementById("cards-status");
    function message(text,error){ status.textContent=text;status.classList.toggle("error",!!error); }
    var upload=document.getElementById("cards-import-file");
    if (!upload) return;
    upload.addEventListener("change",function () {
      var file=upload.files[0]; upload.value="";
      if (!file) return;
      if (file.size>3*1024*1024) { message("Maximum file size is 3 MB.",true); return; }
      var reader=new FileReader();
      reader.onload=function () {
        try {
          var txt=String(reader.result||"").replace(/^\uFEFF/,""),rows;
          if (/\.json$/i.test(file.name)) {
            var doc=JSON.parse(txt);
            rows=Array.isArray(doc)?doc:doc.cards;
          } else {
            var first=txt.split(/\r?\n/)[0];
            var tab=(first.match(/\t/g)||[]).length,semi=(first.match(/;/g)||[]).length,comma=(first.match(/,/g)||[]).length;
            rows=csvRows(txt,tab>semi&&tab>comma?"\t":semi>comma?";":",");
          }
          var count=handleRows(rows);
          message(count+" cards imported. Reloading your unified deck.",false);
          window.location.reload();
        } catch(e){ message(e.message,true); }
      };
      reader.onerror=function () { message("Unable to read this file.",true); };
      reader.readAsText(file);
    });
    document.getElementById("cards-form").addEventListener("submit",function (event) {
      event.preventDefault();
      try{
        var count=handleRows([{
          front:document.getElementById("cards-front").value,
          back:document.getElementById("cards-back").value,
          topic:document.getElementById("cards-topic").value,
          choices:document.getElementById("cards-options").value,
          correct:document.getElementById("cards-correct").value,
          explanations:document.getElementById("cards-rationales").value
        }]);
        if (!count) { message("This card already exists or is incomplete.",true); return; }
        window.location.reload();
      }catch(e){ message(e.message,true); }
    });
    document.getElementById("cards-export").addEventListener("click",function () {
      var data=JSON.stringify({format:"rapidfire-personal-cards-v1",cards:getJson(PERSONAL_KEY,[])},null,2);
      var blob=new Blob([data],{type:"application/json"});
      var url=URL.createObjectURL(blob);
      var a=document.createElement("a");
      a.href=url;a.download="rapidfire-personal-cards.json";
      document.body.appendChild(a);a.click();a.remove();
      setTimeout(function(){URL.revokeObjectURL(url);},1000);
    });
  }
  window.RapidFireCards={load:load,migrateReviewHistory:migrateReviewHistory,setup:setup};
})();