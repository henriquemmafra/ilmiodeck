(function () {
  "use strict";

  var starter = [];
  function add(id, topic, front, choices, correct, back) {
    starter.push({ id: "starter-" + id, topic: topic, front: front, choices: choices, correct: correct, back: back, source: "starter" });
  }

  // Independently written review examples; no text or images taken from question banks.
  add("cardio-1", "Cardiology", "Which murmur increases during the strain phase of Valsalva?", ["Aortic stenosis", "Hypertrophic obstructive cardiomyopathy", "Mitral regurgitation"], "Hypertrophic obstructive cardiomyopathy", "Reduced preload worsens dynamic left ventricular outflow obstruction.");
  add("cardio-2", "Cardiology", "What is the hemodynamic benefit of squatting during a tetralogy of Fallot spell?", ["Decreased systemic vascular resistance", "Increased systemic vascular resistance", "Decreased pulmonary venous return"], "Increased systemic vascular resistance", "Increasing systemic vascular resistance reduces right-to-left shunting.");
  add("pulm-1", "Pulmonology", "Which condition typically increases DLCO?", ["Emphysema", "Pulmonary fibrosis", "Alveolar hemorrhage"], "Alveolar hemorrhage", "Intra-alveolar hemoglobin binds carbon monoxide, raising measured diffusing capacity.");
  add("pulm-2", "Pulmonology", "Which channel is dysfunctional in classic cystic fibrosis?", ["CFTR chloride channel", "ENaC sodium channel", "Aquaporin-2 water channel"], "CFTR chloride channel", "CFTR dysfunction impairs epithelial chloride and bicarbonate transport.");
  add("renal-1", "Nephrology", "Type 4 renal tubular acidosis most often causes which electrolyte pattern?", ["Hypokalemia", "Hyperkalemia", "Hypercalcemia"], "Hyperkalemia", "Reduced aldosterone activity impairs distal potassium and hydrogen excretion.");
  add("renal-2", "Nephrology", "Which lesion underlies minimal change nephrotic syndrome?", ["Podocyte foot-process effacement", "Mesangial IgA deposits", "Crescentic glomerulonephritis"], "Podocyte foot-process effacement", "Electron microscopy reveals diffuse foot-process effacement.");
  add("neuro-1", "Neurology", "Loss of vibration and proprioception below a cord lesion suggests damage to which pathway?", ["Spinothalamic tract", "Dorsal columns", "Corticospinal tract"], "Dorsal columns", "The dorsal columns carry vibration and conscious proprioception.");
  add("neuro-2", "Neurology", "Oligoclonal IgG bands in cerebrospinal fluid are classically associated with?", ["Multiple sclerosis", "Myasthenia gravis", "Guillain-Barré syndrome"], "Multiple sclerosis", "They indicate intrathecal immunoglobulin synthesis, not a disease-specific diagnosis.");
  add("immuno-1", "Immunology", "Hyper-IgM syndrome without opportunistic infection can result from loss of which B-cell enzyme?", ["AID", "CD40 ligand", "NADPH oxidase"], "AID", "AID deficiency impairs class switching while CD40-mediated T-cell signaling can remain intact.");
  add("immuno-2", "Immunology", "Chronic granulomatous disease primarily disrupts which process?", ["Oxidative burst", "Class-switch recombination", "Complement C3 cleavage"], "Oxidative burst", "NADPH oxidase deficiency prevents an effective phagocyte respiratory burst.");
  add("micro-1", "Microbiology", "Haemophilus influenzae requires which growth factors?", ["Factor X and V", "Factor II and VII", "Factor VIII and IX"], "Factor X and V", "X is hemin; V is nicotinamide adenine dinucleotide (NAD).");
  add("micro-2", "Microbiology", "Which enzyme differentiates Staphylococcus aureus from most other staphylococci?", ["Urease", "Coagulase", "Oxidase"], "Coagulase", "Staphylococcus aureus is classically coagulase positive.");
  add("bio-1", "Biochemistry", "GALT produces which pair of metabolites?", ["Glucose-1-phosphate and UDP-galactose", "Galactitol and free uridine", "Pyruvate and lactate"], "Glucose-1-phosphate and UDP-galactose", "GALT transfers UDP from UDP-glucose to galactose-1-phosphate.");
  add("bio-2", "Biochemistry", "Which electron transport chain complex does not pump protons?", ["Complex I", "Complex II", "Complex IV"], "Complex II", "Succinate dehydrogenase transfers electrons to ubiquinone without translocating protons.");
  add("genetics-1", "Genetics", "A single activating point mutation causing continuous growth signaling most likely affects?", ["KRAS", "RB1", "APC"], "KRAS", "Oncogenes are typically activated by gain-of-function mutations.");
  add("genetics-2", "Genetics", "The classic two-hit model mainly describes which gene class?", ["Proto-oncogenes", "Tumor suppressor genes", "Mitochondrial ribosomal genes"], "Tumor suppressor genes", "Both functional copies commonly must be inactivated to eliminate tumor-suppressor activity.");
  add("pharm-1", "Pharmacology", "Which medication irreversibly inhibits platelet cyclooxygenase?", ["Ibuprofen", "Aspirin", "Acetaminophen"], "Aspirin", "Aspirin acetylates COX irreversibly; platelets cannot synthesize new enzyme.");
  add("pharm-2", "Pharmacology", "Acetazolamide primarily causes urinary loss of which ion?", ["Bicarbonate", "Potassium alone", "Chloride alone"], "Bicarbonate", "Proximal tubular carbonic anhydrase inhibition causes bicarbonaturia.");
  add("path-1", "Pathology", "Which activating mutation is characteristic of classic hairy cell leukemia?", ["BRAF V600E", "JAK2 V617F", "BCR-ABL1"], "BRAF V600E", "Hairy cell leukemia typically has BRAF V600E and can cause marrow fibrosis and dry tap.");
  add("path-2", "Pathology", "Which autoantibody strongly supports primary biliary cholangitis?", ["Antimitochondrial antibody", "Anti-dsDNA", "Anti-centromere only"], "Antimitochondrial antibody", "Primary biliary cholangitis targets small intrahepatic bile ducts.");
  add("endo-1", "Endocrinology", "Primary adrenal insufficiency commonly causes which potassium change?", ["Hypokalemia", "Hyperkalemia", "No possible potassium change"], "Hyperkalemia", "Mineralocorticoid deficiency reduces distal potassium secretion.");
  add("endo-2", "Endocrinology", "Classic 21-hydroxylase deficiency generally causes?", ["Low androgens", "Excess adrenal androgens", "Isolated increased aldosterone"], "Excess adrenal androgens", "Impaired cortisol synthesis diverts precursors toward androgen production.");
  add("stats-1", "Biostatistics", "Rejecting a true null hypothesis is which error?", ["Type I (alpha)", "Type II (beta)", "Sampling without replacement"], "Type I (alpha)", "Type I error is a false-positive statistical conclusion.");
  add("stats-2", "Biostatistics", "Which expression is the negative likelihood ratio?", ["Sensitivity / (1 - specificity)", "(1 - sensitivity) / specificity", "Sensitivity × specificity"], "(1 - sensitivity) / specificity", "A smaller negative likelihood ratio makes a negative test more useful for ruling out disease.");
  add("heme-1", "Hematology", "Which marker commonly rises in vitamin B12 deficiency but not isolated folate deficiency?", ["Methylmalonic acid", "Serum ferritin", "Haptoglobin"], "Methylmalonic acid", "B12 is required for methylmalonyl-CoA mutase activity.");
  add("heme-2", "Hematology", "Hemophilia A is caused by deficiency of which clotting factor?", ["Factor VII", "Factor VIII", "Factor IX"], "Factor VIII", "Hemophilia A is an X-linked factor VIII deficiency; hemophilia B involves factor IX.");

  var KEY_CARDS = "rf-personal-flashcards-v1";
  var KEY_PROGRESS = "rf-personal-flashcard-history-v1";
  var el = function (id) { return document.getElementById(id); };
  var custom = read(KEY_CARDS, []);
  var history = read(KEY_PROGRESS, {});
  if (!Array.isArray(custom)) custom = [];
  if (!history || Array.isArray(history) || typeof history !== "object") history = {};
  var queue = [];
  var position = 0;
  var activity = Object.create(null);
  var current = null;

  function read(key, fallback) {
    try {
      var item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      status("Não foi possível salvar neste navegador. Exporte um backup ou libere espaço.", true);
      return false;
    }
  }
  function node(tag, className, text) {
    var result = document.createElement(tag);
    if (className) result.className = className;
    if (text !== undefined) result.textContent = text;
    return result;
  }
  function status(text, error) {
    var target = el("import-status");
    target.textContent = text;
    target.classList.toggle("error", !!error);
  }
  function makeId() {
    return "mine-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 12);
  }
  function norm(value) {
    return String(value || "").trim().toLocaleLowerCase();
  }
  function parseChoices(raw) {
    if (Array.isArray(raw)) return raw.map(function (x) { return String(x).trim(); }).filter(Boolean).slice(0, 6);
    if (!raw) return [];
    return String(raw).split(/\s*(?:\/|\||;)\s*/).map(function (x) { return x.trim(); }).filter(Boolean).slice(0, 6);
  }
  function normalizedRow(row) {
    if (!row || typeof row !== "object" || Array.isArray(row)) return null;
    var front = String(row.front || row.question || row.pergunta || "").trim().slice(0, 2500);
    var back = String(row.back || row.explanation || row.resposta || row.verso || "").trim().slice(0, 3000);
    var topic = String(row.topic || row.subject || row.assunto || "General").trim().slice(0, 80) || "General";
    var choices = parseChoices(row.choices || row.options || row.alternativas);
    var match = !choices.length && front.match(/(?:^|\n)\s*(?:Options|Choices|Alternativas)\s*:\s*([^\n]+)\s*$/i);
    if (match) {
      choices = parseChoices(match[1]);
      front = front.slice(0, match.index).trim();
    }
    var correct = String(row.correct || row.answer || row.correta || "").trim().slice(0, 500);
    if (/^[A-F]$/i.test(correct) && choices.length > correct.toUpperCase().charCodeAt(0) - 65) {
      correct = choices[correct.toUpperCase().charCodeAt(0) - 65];
    }
    if (choices.length && !correct && choices.some(function (x) { return norm(x) === norm(back); })) correct = back;
    if (!front || (!back && !correct)) return null;
    if (choices.length < 2) choices = [];
    return { id: makeId(), front: front, back: back || correct, topic: topic, choices: choices, correct: correct, source: "personal" };
  }
  function allCards() {
    return starter.concat(custom.filter(function (card) { return card && card.id && card.front; }));
  }
  function shuffle(arr) {
    var result = arr.slice();
    for (var i = result.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = result[i]; result[i] = result[j]; result[j] = tmp;
    }
    return result;
  }
  function mixedOrder(cards) {
    var byTopic = Object.create(null);
    cards.forEach(function (card) {
      var topic = card.topic || "General";
      if (!byTopic[topic]) byTopic[topic] = [];
      byTopic[topic].push(card);
    });
    Object.keys(byTopic).forEach(function (key) { byTopic[key] = shuffle(byTopic[key]); });
    var result = [];
    var last = "";
    while (result.length < cards.length) {
      var topics = Object.keys(byTopic).filter(function (key) { return byTopic[key].length && key !== last; });
      if (!topics.length) topics = Object.keys(byTopic).filter(function (key) { return byTopic[key].length; });
      var total = topics.reduce(function (sum, key) { return sum + byTopic[key].length; }, 0);
      var target = Math.random() * total;
      var chosen = topics[topics.length - 1];
      for (var i = 0; i < topics.length; i++) {
        target -= byTopic[topics[i]].length;
        if (target < 0) { chosen = topics[i]; break; }
      }
      result.push(byTopic[chosen].pop());
      last = chosen;
    }
    return result;
  }
  function filteredCards() {
    var subject = el("subject-filter").value;
    var source = el("source-filter").value;
    var mode = el("study-filter").value;
    var now = Date.now();
    return allCards().filter(function (card) {
      var p = history[card.id];
      if (subject !== "all" && card.topic !== subject) return false;
      if (source !== "all" && card.source !== source) return false;
      if (mode === "unseen" && p && p.attempts) return false;
      if (mode === "missed" && (!p || !p.lastWrong)) return false;
      if (mode === "due" && p && p.nextAt > now) return false;
      return true;
    });
  }
  function refreshSubjects() {
    var select = el("subject-filter");
    var selected = select.value;
    select.replaceChildren();
    var all = node("option", "", "All subjects");
    all.value = "all";
    select.appendChild(all);
    var names = Array.from(new Set(allCards().map(function (c) { return c.topic; }))).sort();
    names.forEach(function (subject) {
      var option = node("option", "", subject);
      option.value = subject;
      select.appendChild(option);
    });
    select.value = names.indexOf(selected) >= 0 ? selected : "all";
  }
  function buildSession() {
    queue = mixedOrder(filteredCards());
    position = 0;
    activity = Object.create(null);
    show();
  }
  function progressText(card) {
    var record = history[card.id];
    if (!record) return "New";
    return record.lastWrong ? "Review needed" : "Previously reviewed";
  }
  function grade(card, rating, selected) {
    if (activity[card.id] && activity[card.id].graded) return;
    var p = history[card.id] || { attempts: 0, hits: 0, misses: 0 };
    p.attempts = (Number(p.attempts) || 0) + 1;
    p.hits = (Number(p.hits) || 0) + (rating !== "again" ? 1 : 0);
    p.misses = (Number(p.misses) || 0) + (rating === "again" ? 1 : 0);
    p.lastWrong = rating === "again";
    p.lastAt = Date.now();
    p.nextAt = Date.now() + (rating === "easy" ? 7 : rating === "good" ? 2 : 0) * 86400000;
    history[card.id] = p;
    activity[card.id] = { graded: true, revealed: true, selected: selected === undefined ? null : selected, rating: rating };
    save(KEY_PROGRESS, history);
    show();
  }
  function reveal(card, selected) {
    activity[card.id] = { graded: false, revealed: true, selected: selected === undefined ? null : selected };
    show();
  }
  function show() {
    current = queue[position] || null;
    el("previous-card").disabled = position <= 0;
    el("next-card").disabled = !queue.length || position >= queue.length;
    el("next-card").textContent = position + 1 < queue.length ? "Next →" : "Finish";
    el("current-count").textContent = queue.length ? Math.min(position + 1, queue.length) + " / " + queue.length : "0 / 0";
    el("deck-count").textContent = String(allCards().length);
    el("my-count").textContent = String(custom.length);
    el("reviewed-count").textContent = String(allCards().filter(function (c) { return history[c.id] && history[c.id].attempts; }).length);
    var area = el("flashcard-stage");
    area.replaceChildren();
    if (!current) {
      var empty = node("div", "empty");
      empty.appendChild(node("h2", "", queue.length ? "Session complete" : "No cards for these filters"));
      empty.appendChild(node("p", "", queue.length ? "Restart for a fresh mix of subjects." : "Change the filters or add your own flashcards below."));
      var restart = node("button", "primary", "Shuffle again");
      restart.type = "button";
      restart.addEventListener("click", buildSession);
      empty.appendChild(restart);
      area.appendChild(empty);
      return;
    }
    var card = current;
    var a = activity[card.id] || {};
    var meta = node("div", "card-meta");
    meta.appendChild(node("span", "tag", card.topic));
    meta.appendChild(node("span", "tag subtle", card.source === "personal" ? "My cards" : "Original review"));
    meta.appendChild(node("span", "tag subtle", progressText(card)));
    area.appendChild(meta);
    area.appendChild(node("p", "front", card.front));

    if (card.choices && card.choices.length > 1) {
      var options = node("div", "choice-list");
      card.choices.forEach(function (choice, index) {
        var btn = node("button", "choice", "");
        btn.type = "button";
        var letter = node("span", "choice-letter", String.fromCharCode(65 + index));
        btn.appendChild(letter);
        btn.appendChild(node("span", "", choice));
        btn.disabled = !!a.revealed;
        if (a.revealed) {
          if (card.correct && norm(choice) === norm(card.correct)) btn.classList.add("correct");
          if (a.selected === index && card.correct && norm(choice) !== norm(card.correct)) btn.classList.add("incorrect");
          if (a.selected === index && !card.correct) btn.classList.add("selected");
        }
        btn.addEventListener("click", function () {
          if (a.revealed) return;
          if (!card.correct) {
            reveal(card, index);
          } else {
            grade(card, norm(choice) === norm(card.correct) ? "good" : "again", index);
          }
        });
        options.appendChild(btn);
      });
      area.appendChild(options);
    } else if (!a.revealed) {
      var revealButton = node("button", "primary reveal-button", "Show answer");
      revealButton.type = "button";
      revealButton.addEventListener("click", function () { reveal(card); });
      area.appendChild(revealButton);
    }
    if (a.revealed) {
      var answerBox = node("section", "answer-box");
      answerBox.appendChild(node("p", "answer-label", "Answer / explanation"));
      if (card.correct) answerBox.appendChild(node("p", "answer-title", card.correct));
      answerBox.appendChild(node("p", "answer-text", card.back));
      area.appendChild(answerBox);
      if (!a.graded) {
        var assess = node("div", "grade-row");
        [["again", "Again"], ["good", "Good"], ["easy", "Easy"]].forEach(function (entry) {
          var btn = node("button", "grade-button", entry[1]);
          btn.type = "button";
          btn.addEventListener("click", function () { grade(card, entry[0], a.selected); });
          assess.appendChild(btn);
        });
        area.appendChild(assess);
      } else {
        area.appendChild(node("p", "graded-note", a.rating === "again" ? "Marked for review." : "Review progress saved."));
      }
    }
  }
  function parseCSV(text, delimiter) {
    var rows = [], row = [], cell = "", quoted = false;
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (ch === '"') {
        if (quoted && text[i + 1] === '"') { cell += '"'; i++; }
        else quoted = !quoted;
      } else if (ch === delimiter && !quoted) {
        row.push(cell); cell = "";
      } else if ((ch === "\n" || ch === "\r") && !quoted) {
        if (ch === "\r" && text[i + 1] === "\n") i++;
        row.push(cell); cell = "";
        if (row.some(function (x) { return x.trim(); })) rows.push(row);
        row = [];
      } else cell += ch;
    }
    row.push(cell);
    if (row.some(function (x) { return x.trim(); })) rows.push(row);
    if (!rows.length) return [];
    var fields = rows.shift().map(function (s) { return s.trim().replace(/^\uFEFF/, "").toLowerCase(); });
    return rows.map(function (values) {
      var result = {};
      fields.forEach(function (f, index) { result[f] = values[index] || ""; });
      return result;
    });
  }
  function importRows(rows) {
    if (!Array.isArray(rows)) throw new Error("Expected a list of cards.");
    if (rows.length > 5000) throw new Error("Maximum 5,000 cards per file.");
    var known = new Set(custom.map(function (c) { return norm(c.front) + "||" + norm(c.back); }));
    var added = 0, ignored = 0;
    rows.forEach(function (row) {
      var card = normalizedRow(row);
      if (!card) { ignored++; return; }
      var signature = norm(card.front) + "||" + norm(card.back);
      if (known.has(signature)) { ignored++; return; }
      known.add(signature);
      custom.push(card);
      added++;
    });
    if (!save(KEY_CARDS, custom)) {
      custom.splice(custom.length - added, added);
      throw new Error("Browser storage is full. Export a backup and try a smaller file.");
    }
    refreshSubjects();
    buildSession();
    return { added: added, ignored: ignored };
  }
  function handleImport(file) {
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) { status("Arquivo muito grande (máximo 3 MB).", true); return; }
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var data = String(reader.result || "").replace(/^\uFEFF/, "");
        var rows;
        if (/\.json$/i.test(file.name)) {
          var parsed = JSON.parse(data);
          rows = Array.isArray(parsed) ? parsed : parsed.cards;
        } else {
          var first = data.split(/\r?\n/, 1)[0];
          var tab = (first.match(/\t/g) || []).length;
          var semicolon = (first.match(/;/g) || []).length;
          var comma = (first.match(/,/g) || []).length;
          rows = parseCSV(data, tab > semicolon && tab > comma ? "\t" : semicolon > comma ? ";" : ",");
        }
        var result = importRows(rows);
        status("Importados: " + result.added + ". Ignorados (duplicados/incompletos): " + result.ignored + ".", false);
      } catch (e) { status("Falha na importação: " + e.message, true); }
    };
    reader.onerror = function () { status("Não foi possível ler o arquivo.", true); };
    reader.readAsText(file);
  }
  function downloadJson() {
    var data = JSON.stringify({ format: "rapidfire-flashcards-v1", cards: custom }, null, 2);
    var blob = new Blob([data], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = node("a");
    a.href = url;
    a.download = "meus-flashcards-rapidfire.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }
  el("import-file").addEventListener("change", function () {
    handleImport(this.files[0]);
    this.value = "";
  });
  el("add-card").addEventListener("submit", function (event) {
    event.preventDefault();
    var item = normalizedRow({
      front: el("new-front").value,
      back: el("new-back").value,
      topic: el("new-topic").value,
      choices: el("new-choices").value,
      correct: el("new-correct").value
    });
    if (!item) { status("Preencha pelo menos pergunta e resposta.", true); return; }
    var result = importRows([item]);
    if (result.added) {
      this.reset();
      status("Cartão criado. Ele já aparece na revisão.", false);
    } else status("Este cartão já existe.", true);
  });
  el("export-cards").addEventListener("click", downloadJson);
  el("clear-cards").addEventListener("click", function () {
    if (!custom.length) return;
    if (!confirm("Excluir todos os seus cartões salvos neste navegador? Seus cartões originais de exemplo não serão afetados.")) return;
    custom = [];
    save(KEY_CARDS, custom);
    refreshSubjects();
    buildSession();
    status("Cartões pessoais excluídos deste navegador.", false);
  });
  ["subject-filter", "source-filter", "study-filter"].forEach(function (id) {
    el(id).addEventListener("change", buildSession);
  });
  el("shuffle").addEventListener("click", buildSession);
  el("previous-card").addEventListener("click", function () { if (position > 0) { position--; show(); } });
  el("next-card").addEventListener("click", function () { if (position < queue.length) { position++; show(); } });
  document.addEventListener("keydown", function (event) {
    var active = document.activeElement;
    if (active && (active.isContentEditable || /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(active.tagName))) return;
    if (event.altKey || event.ctrlKey || event.metaKey || event.repeat) return;
    if (event.key === "ArrowRight") { event.preventDefault(); if (position < queue.length) { position++; show(); } }
    if (event.key === "ArrowLeft") { event.preventDefault(); if (position > 0) { position--; show(); } }
    if (event.key === " " && current && !(activity[current.id] && activity[current.id].revealed)) {
      event.preventDefault();
      if (!current.choices || !current.choices.length) reveal(current);
    }
    if (current && (!activity[current.id] || !activity[current.id].revealed)) {
      var num = Number(event.key);
      if (/^[1-6]$/.test(event.key) && current.choices && num <= current.choices.length) {
        event.preventDefault();
        var choice = current.choices[num - 1];
        if (current.correct) grade(current, norm(choice) === norm(current.correct) ? "good" : "again", num - 1);
        else reveal(current, num - 1);
      }
    }
  });
  refreshSubjects();
  buildSession();
})();