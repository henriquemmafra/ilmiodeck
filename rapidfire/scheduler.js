(function () {
  "use strict";

  // RapidFire's Anki-inspired adaptive scheduler, NOT the Anki FSRS algorithm.
  // Answer latency is used only when there was a correct response. Ratings
  // remain editable, so a fast lucky guess never has to become an "Easy" card.
  var DAY = 86400000;
  var TEN_MINUTES = 10 * 60000;
  var MAX_DAYS = 365;
  var MIN_EASE = 1.4, MAX_EASE = 3.3;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function roundQuarter(days) {
    return Math.round(days * 4) / 4;
  }
  function secondsTarget(question) {
    // Reading / reasoning allowance scales with the amount of prompt + options.
    var text = (question && question.stem || "") + " " +
      ((question && question.options) || []).join(" ");
    return clamp(5 + text.length / 17, 8, 52);
  }
  function speedAdjustment(seconds, question, previous) {
    if (!Number.isFinite(seconds) || seconds < 0.5 || seconds > 600) return 1;
    var ratio = seconds / secondsTarget(question);
    var factor = ratio <= 0.65 ? 1.28 : ratio <= 0.95 ? 1.13 :
      ratio <= 1.5 ? 1 : ratio <= 2.4 ? 0.87 : 0.76;
    var historical = Number(previous && previous.averageSeconds);
    if (historical > 0 && Number(previous && previous.attempts) >= 2) {
      if (seconds <= historical * 0.75) factor *= 1.08;
      else if (seconds >= historical * 1.5) factor *= 0.94;
    }
    return clamp(factor, 0.75, 1.35);
  }
  function previousInterval(previous) {
    var direct = Number(previous && previous.intervalDays);
    if (Number.isFinite(direct) && direct > 0) return Math.min(direct, MAX_DAYS);
    var lastAt = Number(previous && previous.lastAt);
    var nextAt = Number(previous && previous.nextAt);
    // Migrate existing sessions: retain future due dates and infer the interval
    // at the next *actual* review. Never proactively reschedule historical cards.
    if (Number.isFinite(lastAt) && Number.isFinite(nextAt) && nextAt > lastAt) {
      return clamp((nextAt - lastAt) / DAY, 0, MAX_DAYS);
    }
    return 0;
  }
  function formatInterval(milliseconds) {
    if (milliseconds <= TEN_MINUTES * 1.01) return "10m";
    var hours = milliseconds / 3600000;
    if (hours < 24) return Math.round(hours) + "h";
    var days = hours / 24;
    if (days < 10) return (Math.round(days * 2) / 2) + "d";
    return Math.round(days) + "d";
  }
  function schedule(previous, rating, seconds, now, question) {
    var input = previous && typeof previous === "object" ? previous : {};
    var grade = ["again", "hard", "good", "easy"].includes(rating) ? rating : "good";
    var time = Number.isFinite(now) ? now : Date.now();
    var priorDays = previousInterval(input);
    var oldEase = clamp(Number(input.easeFactor) || 2.3, MIN_EASE, MAX_EASE);
    var ease = oldEase;
    var repetitions = Math.max(0, Number(input.repetitions) || Number(input.streak) || 0);
    var lapses = Math.max(0, Number(input.lapses) || 0);
    var factor = speedAdjustment(seconds, question, input);
    var days = 0, delayMs;

    if (grade === "again") {
      delayMs = TEN_MINUTES;
      ease = clamp(oldEase - 0.16, MIN_EASE, MAX_EASE);
      repetitions = 0;
      lapses += 1;
    } else {
      if (grade === "hard") ease = clamp(oldEase - 0.08, MIN_EASE, MAX_EASE);
      if (grade === "easy") ease = clamp(oldEase + 0.11, MIN_EASE, MAX_EASE);
      if (priorDays < 0.5 || repetitions === 0) {
        days = grade === "hard" ? 0.5 : grade === "easy" ? 4 * factor : 2 * factor;
      } else if (grade === "hard") {
        days = Math.max(priorDays + 0.25, priorDays * 1.22 * factor);
      } else if (grade === "good") {
        days = Math.max(priorDays + 0.5, priorDays * oldEase * factor);
      } else {
        days = Math.max(priorDays + 1, priorDays * oldEase * 1.38 * factor);
      }
      days = clamp(roundQuarter(days), 0.5, MAX_DAYS);
      delayMs = days * DAY;
      repetitions += 1;
    }

    var oldAvg = Number(input.averageSeconds) || 0;
    var validSeconds = Number.isFinite(seconds) && seconds >= 0.5 && seconds <= 600;
    var avg = validSeconds ? (oldAvg ? oldAvg * 0.7 + seconds * 0.3 : seconds) : oldAvg;
    var log = Array.isArray(input.reviewLog) ? input.reviewLog.slice(-49) : [];
    log.push({
      at: time,
      grade: grade,
      seconds: validSeconds ? Math.round(seconds * 10) / 10 : null,
      intervalDays: delayMs / DAY,
      dueAt: time + delayMs
    });
    return {
      nextAt: time + delayMs,
      lastAt: time,
      intervalDays: delayMs / DAY,
      easeFactor: ease,
      repetitions: repetitions,
      lapses: lapses,
      lastSeconds: validSeconds ? Math.round(seconds * 10) / 10 : null,
      averageSeconds: avg,
      lastRating: grade,
      reviewLog: log,
      speedFactor: Math.round(factor * 100) / 100
    };
  }

  window.RapidFireScheduler = {
    schedule: schedule,
    secondsTarget: secondsTarget,
    speedAdjustment: speedAdjustment,
    previousInterval: previousInterval,
    formatInterval: formatInterval,
    DAY: DAY
  };
})();