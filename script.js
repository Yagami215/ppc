// ============================================================
// GACHA DATA — each rarity has a flat power multiplier (mult)
// ============================================================
const RELIC_MULT = 3.5;
const LEVEL_MILESTONES = [
  { level: 5,   mult: 1.1 },
  { level: 15,  mult: 1.1 },
  { level: 25,  mult: 1.15 },
  { level: 50,  mult: 1.15 },
  { level: 75,  mult: 1.2 },
  { level: 100, mult: 1.2 },
  { level: 125, mult: 1.25 },
];
const RELIC_IDS = [
  "relic-trial-hard",
  "relic-bizzare",
  "relic-leveling",
  "relic-ghoul",
  "relic-slime",
  "relic-grimoires",
];

const RARITY_COLORS = {
  none: "#9a9ab0",
  common: "#ffffff",
  uncommon: "#4caf50",
  rare: "#2196f3",
  epic: "#ff69b4",
  legendary: "#ffc107",
  mythical: "#d580ff",
  secret: "#ff4444",
  divine: "#b0c8e8"
};

const RARITY_NAMES = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythical", "Secret"];
const DEFAULT_GACHA_MULTS = [1.1, 1.25, 1.5, 2, 3.5, 5, 10];
const LOW_GACHA_MULTS = [1.05, 1.1, 1.15, 1.25, 1.5, 2, 4];
const RACE_GACHA_MULTS = [1.05, 1.1, 1.15, 1.25, 1.5, 2, 10];
const NONE_RARITY = { name: "None", mult: 1, isNone: true };
const DIVINE_RARITY = { name: "Divine", mult: 15 };

function buildGachaRarities(multTable, includeDivine, customDivineMult) {
  const rarities = [NONE_RARITY];
  RARITY_NAMES.forEach(function (name, index) {
    rarities.push({ name: name, mult: multTable[index] });
  });
  if (includeDivine) {
    rarities.push({ name: "Divine", mult: customDivineMult || DIVINE_RARITY.mult });
  }
  return rarities;
}

const GACHAS = [
  { name: "Star",             rarities: buildGachaRarities(DEFAULT_GACHA_MULTS, true) },
  { name: "Pirate Crew",      rarities: buildGachaRarities(DEFAULT_GACHA_MULTS) },
  { name: "Haki",             rarities: buildGachaRarities(DEFAULT_GACHA_MULTS, true) },
  { name: "Race",             rarities: buildGachaRarities(RACE_GACHA_MULTS, true) },
  { name: "Transformation",   rarities: buildGachaRarities(LOW_GACHA_MULTS) },
  { name: "Dragon Power",     rarities: buildGachaRarities(LOW_GACHA_MULTS, true, 8) },
  { name: "Slime Power",      rarities: buildGachaRarities(DEFAULT_GACHA_MULTS) },
  { name: "Cursed Technique", rarities: buildGachaRarities(DEFAULT_GACHA_MULTS) },
  { name: "Cursed Spirit",    rarities: buildGachaRarities(DEFAULT_GACHA_MULTS) },
  { name: "Hunter",           rarities: buildGachaRarities(DEFAULT_GACHA_MULTS) },
  { name: "Monarch",          rarities: buildGachaRarities(LOW_GACHA_MULTS) },
  { name: "Gotei",            rarities: buildGachaRarities(DEFAULT_GACHA_MULTS) },
  { name: "Espada",           rarities: buildGachaRarities(DEFAULT_GACHA_MULTS) },
  { name: "Hamon",            rarities: buildGachaRarities(DEFAULT_GACHA_MULTS) },
  { name: "CCG",              rarities: buildGachaRarities(DEFAULT_GACHA_MULTS) },
  { name: "Magic Career",     rarities: buildGachaRarities(DEFAULT_GACHA_MULTS) },
  { name: "PowerFull Class",             rarities: buildGachaRarities(DEFAULT_GACHA_MULTS) },
];

const STANDS = {
  none:        { passive: 1 },
  golden:      { passive: 3 },
  platinum:    { passive: 4 },
  "the-world": { passive: 6 },
};

const FORMS = {
  none: [1, 1, 1, 1, 1, 1, 1, 1],
  vyzard: [1, 1.25, 1.5, 1.75, 2, 2.25, 2.25, 2.25],
  zangetsu: [1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5],
};

const HUNTER_RANKS = [1, 2, 4, 8, 16, 32];

// ============================================================
// MAX VALUES CONFIG
// Edit these values to change what the MAX button fills in.
// ============================================================
const MAX_CONFIG = {
  // ── Awakening & Level ──────────────────────────────────────
  awakening:          68,
  playerLevel:        125,
  levelStatsMult:     4.13,

  // ── Index ──────────────────────────────────────────────────
  indexEnemies:       16,

  // ── Avatar & Title ─────────────────────────────────────────
  avatarMult:         101810,   // 101.81K
  titleMult:          4,

  // ── Swords ─────────────────────────────────────────────────
  sword1Mult:         45,
  sword2Mult:         45,

  // ── Accessories (Back, Body, Head, Mask, Waist) ────────────
  accessory1Mult:     6.56,
  accessory2Mult:     5.06,
  accessory3Mult:     7.5,
  accessory4Mult:     5.63,
  accessory5Mult:     6.56,

  // ── Fighters ───────────────────────────────────────────────
  fighter1Mult:       2.5,
  fighter2Mult:       2.5,

  // ── Stand & Form ───────────────────────────────────────────
  standSelect: "the-world",
  formSelect:  "zangetsu",
  formLevelSelect: "8",

  // ── Upgrades ───────────────────────────────────────────────────
  upgradeTrialMult:   4,
  upgradeDragonMult:  4,
  upgradeTempestMult: 4,
  upgradeHollowMult:  4,

  // ── Skill Tree ─────────────────────────────────────────────
  skillPirateMult:    2.4,
  skillMonarchMult:   3.5,

  // ── Progression (all use same value) ───────────────────────
  progressionMult:    7.25,

  // ── Kagune & Grimoire (set to value, or true = leave empty) ─
  kagunemult:         3,
  grimoireMult:       12,

  // ── Hunter Rank ────────────────────────────────────────────────────
  hunterRankMult:     32,

  // ── Servants ───────────────────────────────────────────────
  servant1Mult:       8.5,
  servant2Mult:       8.5,

  // ── Quests ─────────────────────────────────────────────────
  questsCompleted:    6,

  // ── Checkboxes ─────────────────────────────────────────────
  potion1:            true,
  potion2:            true,
  potion3:            true,
  vip:                true,
  powerPass:          true,
  followDevs:         true,
  relicsAll:          true,   // check all relics

  // ── Gachas (true = select max rarity on every gacha) ───────
  gachasMax:          true,

  // ── Feats (true = set every feat to its maximum level) ─────
  featsMax:           true,
};
// ============================================================

const FEAT_AMOUNT = [
  { id: "stars-open", name: "Stars Open" },
  { id: "clicks",     name: "Clicks" },
];

const FEAT_WAVE = [
  { id: "easy-trial",       name: "Easy Trial",       maxWave: 50 },
  { id: "medium-trial",     name: "Medium Trial",     maxWave: 100 },
  { id: "hard-trial",       name: "Hard Trial",       maxWave: 100 },
  { id: "dragon-defense",   name: "Dragon Defense",   maxWave: 100 },
  { id: "dragon-defense-hard", name: "Dragon Defense Hard", maxWave: 50 },
  { id: "tempest-invasion", name: "Tempest Invasion", maxWave: 100 },
  { id: "tower",            name: "Tower",            maxWave: 100 },
  { id: "hollow-defense",   name: "Hollow Defense",   maxWave: 100 },
  { id: "ghoul-arena",      name: "Ghoul Arena",      maxWave: 1000 },
  { id: "magic-tower",      name: "Magic Tower",      maxWave: 100 },
];

const FEAT_STANDARD_MILESTONES = [
  { level: 3, wave: 15, bonus: 10 },
  { level: 8, wave: 40, bonus: 15 },
  { level: 13, wave: 65, bonus: 20 },
  { level: 18, wave: 90, bonus: 25 },
];

const FEAT_GHOUL_MILESTONES = [
  { level: 3, wave: 45, bonus: 10 },
  { level: 8, wave: 120, bonus: 15 },
  { level: 13, wave: 195, bonus: 20 },
  { level: 18, wave: 270, bonus: 25 },
];

function getFeatMilestones(feat) {
  if (feat.id === "ghoul-arena") return FEAT_GHOUL_MILESTONES;
  return FEAT_STANDARD_MILESTONES;
}

const CLICKS_MILESTONES = [
  { clicks: 2500, bonus: 10 },
  { clicks: 12500, bonus: 10 },
  { clicks: 60000, bonus: 10 },
  { clicks: 250000, bonus: 10 },
  { clicks: 500000, bonus: 15 },
  { clicks: 1000000, bonus: 15 },
  { clicks: 2500000, bonus: 15 },
  { clicks: 5000000, bonus: 15 },
  { clicks: 7500000, bonus: 20 },
  { clicks: 10000000, bonus: 20 },
  { clicks: 12500000, bonus: 20 },
  { clicks: 15000000, bonus: 20 },
  { clicks: 17500000, bonus: 25 },
  { clicks: 20000000, bonus: 25 },
  { clicks: 22500000, bonus: 25 },
  { clicks: 25000000, bonus: 30 },
  { clicks: 27500000, bonus: 30 },
  { clicks: 30000000, bonus: 35 },
  { clicks: 32500000, bonus: 35 },
  { clicks: 35000000, bonus: 40 }
];

function getClicksFeatMultiplier() {
  const input = document.getElementById("feat-clicks-amount");
  if (!input) return 1;
  const clicks = parseNumber(input.value);
  let mult = 1;
  CLICKS_MILESTONES.forEach(function (milestone) {
    if (clicks >= milestone.clicks) {
      mult *= (1 + milestone.bonus / 100);
    }
  });
  return mult;
}

const STARS_OPEN_MILESTONES = [
  { stars: 1000, bonus: 10 },
  { stars: 5000, bonus: 10 },
  { stars: 25000, bonus: 10 },
  { stars: 100000, bonus: 10 },
  { clicks: 400000, stars: 400000, bonus: 10 }, 
  { stars: 1500000, bonus: 10 },
  { stars: 5000000, bonus: 15 },
  { stars: 10000000, bonus: 15 },
  { stars: 15000000, bonus: 15 },
  { stars: 20000000, bonus: 20 },
  { stars: 25000000, bonus: 25 },
  { stars: 30000000, bonus: 25 },
  { stars: 35000000, bonus: 30 },
  { stars: 45000000, bonus: 30 },
  { stars: 50000000, bonus: 35 }
];

function getStarsOpenFeatMultiplier() {
  const input = document.getElementById("feat-stars-open-amount");
  if (!input) return 1;
  const stars = parseNumber(input.value);
  let mult = 1;
  STARS_OPEN_MILESTONES.forEach(function (milestone) {
    const threshold = milestone.stars || milestone.clicks;
    if (stars >= threshold) {
      mult *= (1 + milestone.bonus / 100);
    }
  });
  return mult;
}

const PROGRESSION_IDS = [
  "progression-fighting-mult",
  "progression-ki-mult",
  "progression-demon-lord-mult",
  "progression-domain-mult",
  "progression-curse-mult",
  "progression-system-mult",
  "progression-hogyoku-mult",
  "progression-blood-mult",
  "progression-investigador-mult",
  "progression-spirit-mult",
  "progression-fate-mult",
];

function getUnitPowers() {
  const inputs = document.querySelectorAll(".unit-power-input");
  const powers = [];
  inputs.forEach(function (input) {
    powers.push(parseNumber(input.value));
  });
  return powers;
}

function getSavedUnitValues() {
  const inputs = document.querySelectorAll(".unit-power-input");
  const values = [];
  inputs.forEach(function (input) {
    values.push(input.value);
  });
  return values;
}

function getBasePower() {
  let sum = getUnitPowers().reduce(function (s, power) {
    return s + power;
  }, 0);
  return Math.max(1, sum);
}

function buildUnitInputs() {
  let count = Math.max(0, Math.floor(Number(document.getElementById("unit-count").value) || 0));
  if (count > 40) {
    count = 40;
    document.getElementById("unit-count").value = "40";
  }
  const container = document.getElementById("unit-inputs");
  const saved = getSavedUnitValues();

  container.innerHTML = "";

  if (count === 0) {
    container.classList.remove("has-units");
    updateDisplay();
    return;
  }

  container.classList.add("has-units");

  for (let i = 0; i < count; i++) {
    const row = document.createElement("label");
    row.className = "unit-row";

    const label = document.createElement("span");
    label.textContent = "Unit " + (i + 1) + " power";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "unit-power-input";
    input.placeholder = "e.g. 1.5M";
    input.value = saved[i] !== undefined ? saved[i] : "";
    input.inputMode = "decimal";
    input.maxLength = 20;

    input.addEventListener("input", updateDisplay);
    input.addEventListener("blur", function () {
      const trimmed = input.value.trim();
      if (trimmed === "") {
        input.value = "";
      } else {
        const parsed = parseNumber(input.value);
        input.value = formatNumber(parsed);
      }
      updateDisplay();
    });
    row.appendChild(label);
    row.appendChild(input);
    container.appendChild(row);
  }

  updateDisplay();
}

function parseMultiplier(str) {
  if (str === null || str === undefined) return 1;
  const cleaned = String(str).trim().replace(/x$/i, "");
  const val = parseNumber(cleaned);
  return val > 0 ? val : 1;
}

const AWAKENING_MULTS = [
  1,              // 1
  1.5,            // 2
  2,              // 3
  4,              // 4
  8,              // 5
  16,             // 6
  32,             // 7
  64,             // 8
  128,            // 9
  256,            // 10
  512,            // 11
  1024,           // 12
  2048,           // 13
  4096,           // 14
  8192,           // 15
  16384,          // 16
  32768,          // 17
  65536,          // 18
  131072,         // 19
  262144,         // 20
  524288,         // 21
  1.049e6,        // 22
  2.097e6,        // 23
  4.194e6,        // 24
  8.389e6,        // 25
  16.8e6,         // 26
  33.6e6,         // 27
  67.2e6,         // 28
  134.4e6,        // 29
  537.6e6,        // 30
  1.075e9,        // 31
  2.15e9,         // 32
  4.31e9,         // 33
  8.62e9,         // 34
  17.24e9,        // 35
  34.48e9,        // 36
  68.96e9,        // 37
  137.92e9,       // 38
  275.84e9,       // 39
  551.68e9,       // 40
  1.1e12,         // 41
  2.2e12,         // 42
  4.4e12,         // 43
  88.3e12,        // 44
  176.7e12,       // 45
  353.4e12,       // 46
  76.68e12,       // 47
  141.36e12,      // 48
  282.72e12,      // 49
  565.44e12,      // 50
  1.13e15,        // 51
  2.26e15,        // 52
  4.52e15,        // 53
  9.05e15,        // 54
  18.1e15,        // 55
  36.2e15,        // 56
  72.4e15,        // 57
  144.8e15,       // 58
  289.6e15,       // 59
  579.2e15,       // 60
  1.16e18,        // 61
  2.32e18,        // 62
  4.64e18,        // 63
  9.24e18,        // 64
  18.48e18,       // 65
  36.96e18,       // 66
  73.92e18,       // 67
  147.84e18,      // 68
];

function getAwakeningMultiplier() {
  let level = Math.floor(Number(document.getElementById("awakening").value) || 0);
  if (level < 1) return 1;
  if (level > AWAKENING_MULTS.length) {
    level = AWAKENING_MULTS.length;
    document.getElementById("awakening").value = String(level);
  }
  return AWAKENING_MULTS[level - 1];
}

function getQuestsMultiplier() {
  let count = Math.floor(Number(document.getElementById("quests-completed").value) || 0);
  if (count < 1) return 1;
  if (count > 50) {
    count = 50;
    document.getElementById("quests-completed").value = "50";
  }
  return Math.pow(2, count);
}

function getLevelMilestoneMultiplier() {
  let level = Math.floor(Number(document.getElementById("player-level").value) || 0);
  if (level < 1) return 1;
  if (level > 1000) {
    level = 1000;
    document.getElementById("player-level").value = "1000";
  }

  let mult = 1;
  LEVEL_MILESTONES.forEach(function (ms) {
    if (level >= ms.level) mult *= ms.mult;
  });
  return mult;
}

function getLevelPercentBonus() {
  let level = Math.floor(Number(document.getElementById("player-level").value) || 0);
  if (level < 1) return 0;
  if (level > 1000) {
    level = 1000;
    document.getElementById("player-level").value = "1000";
  }
  return (level - 1) * 5;
}

function getIndexEnemiesMultiplier() {
  let enemies = Math.max(0, Math.floor(Number(document.getElementById("index-enemies").value) || 0));
  if (enemies > 100000) {
    enemies = 100000;
    document.getElementById("index-enemies").value = "100000";
  }
  if (enemies === 0) return 1;
  return Math.pow(1.1, enemies);
}

function getFeatWaveValue(featId) {
  const input = document.getElementById("feat-" + featId + "-wave");
  if (!input) return 0;
  return Math.max(0, Math.floor(Number(input.value) || 0));
}

function getFeatLevelValue(featId) {
  const input = document.getElementById("feat-" + featId + "-level");
  if (!input) return 0;
  return Math.max(0, Math.floor(Number(input.value) || 0));
}

function getFeatWaveLevelMultiplier(wave, level, milestones) {
  let mult = 1;
  milestones.forEach(function (milestone) {
    if (wave >= milestone.wave && level >= milestone.level) {
      mult *= (1 + milestone.bonus / 100);
    }
  });
  return mult;
}

function getFeatMultiplier() {
  let mult = 1;
  FEAT_WAVE.forEach(function (feat) {
    const wave = getFeatWaveValue(feat.id);
    const level = getFeatLevelValue(feat.id);
    mult *= getFeatWaveLevelMultiplier(wave, level, getFeatMilestones(feat));
  });
  mult *= getClicksFeatMultiplier();
  mult *= getStarsOpenFeatMultiplier();
  return mult;
}

function getPercentMultiplier() {
  const levelPercent = getLevelPercentBonus();
  const levelPercentMult = 1 + (levelPercent > 0 ? levelPercent / 100 : 0);
  return levelPercentMult * getIndexEnemiesMultiplier() * getFeatMultiplier();
}

function clampFeatWaveInput(input, maxWave) {
  const val = Math.floor(Number(input.value) || 0);
  if (val > maxWave) input.value = String(maxWave);
  if (val < 0) input.value = "0";
}

function waveToFeatLevel(wave, milestones) {
  let level = 0;
  milestones.forEach(function (milestone) {
    if (wave >= milestone.wave) {
      level = milestone.level;
    }
  });
  return level;
}

function levelToFeatWave(level, milestones) {
  let wave = 0;
  milestones.forEach(function (milestone) {
    if (level >= milestone.level) {
      wave = milestone.wave;
    }
  });
  return wave;
}

function syncFeatFromWave(feat) {
  const waveInput = document.getElementById("feat-" + feat.id + "-wave");
  const levelInput = document.getElementById("feat-" + feat.id + "-level");
  if (!waveInput || !levelInput) return;

  const milestones = getFeatMilestones(feat);
  if (waveInput.value.trim() === "") {
    levelInput.value = "";
    return;
  }
  clampFeatWaveInput(waveInput, feat.maxWave);
  levelInput.value = String(waveToFeatLevel(Math.floor(Number(waveInput.value) || 0), milestones));
}

function syncFeatFromLevel(feat) {
  const waveInput = document.getElementById("feat-" + feat.id + "-wave");
  const levelInput = document.getElementById("feat-" + feat.id + "-level");
  if (!waveInput || !levelInput) return;

  const milestones = getFeatMilestones(feat);
  if (levelInput.value.trim() === "") {
    waveInput.value = "";
    return;
  }
  const level = Math.max(0, Math.floor(Number(levelInput.value) || 0));
  const wave = Math.min(levelToFeatWave(level, milestones), feat.maxWave);
  waveInput.value = String(wave);
  levelInput.value = String(waveToFeatLevel(wave, milestones));
}

function getStandData() {
  const key = document.getElementById("stand-select").value;
  return STANDS[key] || STANDS.none;
}

function getFormData() {
  const key = document.getElementById("form-select").value;
  const level = parseInt(document.getElementById("form-level-select").value) || 1;
  const arr = FORMS[key] || FORMS.none;
  return { active: arr[level - 1] || 1 };
}

function getBuffMultiplier() {
  let mult = 1;

  mult *= getAwakeningMultiplier();
  mult *= getLevelMilestoneMultiplier();
  mult *= parseMultiplier(document.getElementById("level-stats-mult").value);

  if (document.getElementById("potion-1").checked) mult *= 1.5;
  if (document.getElementById("potion-2").checked) mult *= 2;
  if (document.getElementById("potion-3").checked) mult *= 2.5;
  if (document.getElementById("vip").checked) mult *= 1.25;
  if (document.getElementById("power-pass").checked) mult *= 2;
  if (document.getElementById("follow-devs").checked) mult *= 1.52;

  mult *= parseMultiplier(document.getElementById("avatar-mult").value);
  mult *= parseMultiplier(document.getElementById("title-mult").value);
  mult *= parseMultiplier(document.getElementById("sword-1-mult").value);
  mult *= parseMultiplier(document.getElementById("sword-2-mult").value);

  for (let i = 1; i <= 5; i++) {
    mult *= parseMultiplier(document.getElementById("accessory-" + i + "-mult").value);
  }

  mult *= getStandData().passive;
  mult *= parseMultiplier(document.getElementById("fighter-1-mult").value);
  mult *= parseMultiplier(document.getElementById("fighter-2-mult").value);
  mult *= parseMultiplier(document.getElementById("upgrade-trial-mult").value);
  mult *= parseMultiplier(document.getElementById("upgrade-dragon-mult").value);
  mult *= parseMultiplier(document.getElementById("upgrade-tempest-mult").value);
  mult *= parseMultiplier(document.getElementById("upgrade-hollow-mult").value);
  mult *= parseMultiplier(document.getElementById("skill-pirate-mult").value);
  mult *= parseMultiplier(document.getElementById("skill-monarch-mult").value);

  PROGRESSION_IDS.forEach(function (id) {
    mult *= parseMultiplier(document.getElementById(id).value);
  });

  mult *= parseMultiplier(document.getElementById("kagune-mult").value);
  mult *= parseMultiplier(document.getElementById("grimoire-mult").value);
  mult *= parseMultiplier(document.getElementById("hunter-rank-mult").value);
  mult *= parseMultiplier(document.getElementById("servant-1-mult").value);
  mult *= parseMultiplier(document.getElementById("servant-2-mult").value);
  mult *= getQuestsMultiplier();

  RELIC_IDS.forEach(function (id) {
    if (document.getElementById(id).checked) mult *= RELIC_MULT;
  });

  return mult;
}

function formatMultiplier(mult) {
  if (mult >= 1000) return formatNumber(mult) + "x";
  return parseFloat(mult.toFixed(2)) + "x";
}

function getGachaMultiplier() {
  let mult = 1;
  GACHAS.forEach(function (gacha, index) {
    const select = document.getElementById("gacha-" + index);
    if (!select) return;
    const rarityIndex = Number(select.value);
    mult *= gacha.rarities[rarityIndex].mult;
  });
  return mult;
}

function calculate() {
  const base = getBasePower();
  const buffMult = getBuffMultiplier();
  const afterBuffs = base * buffMult;
  const percentMult = getPercentMultiplier();
  const afterPercent = afterBuffs * percentMult;
  const gachaMult = getGachaMultiplier();
  const passivePower = afterPercent * gachaMult;
  const formActive = getFormData().active;
  const activePower = passivePower * formActive;
  return {
    base, buffMult, afterBuffs, percentMult, afterPercent, gachaMult,
    passivePower, activePower, formActive,
  };
}

function syncClicksFromAmount() {
  const amountInput = document.getElementById("feat-clicks-amount");
  const levelInput = document.getElementById("feat-clicks-level");
  if (!amountInput || !levelInput) return;

  const clicks = parseNumber(amountInput.value);
  if (clicks === 0 && amountInput.value.trim() === "") {
    levelInput.value = "";
    return;
  }
  let level = 0;
  CLICKS_MILESTONES.forEach(function (milestone, idx) {
    if (clicks >= milestone.clicks) {
      level = idx + 1;
    }
  });
  levelInput.value = String(level);
}

function syncClicksFromLevel() {
  const amountInput = document.getElementById("feat-clicks-amount");
  const levelInput = document.getElementById("feat-clicks-level");
  if (!amountInput || !levelInput) return;

  let level = Math.floor(Number(levelInput.value) || 0);
  if (level < 0) level = 0;
  if (level > 20) level = 20;

  if (levelInput.value.trim() === "") {
    amountInput.value = "";
    levelInput.value = "";
    return;
  }

  levelInput.value = String(level);

  if (level === 0) {
    amountInput.value = "";
  } else {
    const clicks = CLICKS_MILESTONES[level - 1].clicks;
    amountInput.value = formatNumber(clicks);
  }
}

function syncStarsFromAmount() {
  const amountInput = document.getElementById("feat-stars-open-amount");
  const levelInput = document.getElementById("feat-stars-open-level");
  if (!amountInput || !levelInput) return;

  const stars = parseNumber(amountInput.value);
  if (stars === 0 && amountInput.value.trim() === "") {
    levelInput.value = "";
    return;
  }
  let level = 0;
  STARS_OPEN_MILESTONES.forEach(function (milestone, idx) {
    const threshold = milestone.stars || milestone.clicks;
    if (stars >= threshold) {
      level = idx + 1;
    }
  });
  levelInput.value = String(level);
}

function syncStarsFromLevel() {
  const amountInput = document.getElementById("feat-stars-open-amount");
  const levelInput = document.getElementById("feat-stars-open-level");
  if (!amountInput || !levelInput) return;

  let level = Math.floor(Number(levelInput.value) || 0);
  if (level < 0) level = 0;
  if (level > 15) level = 15;

  if (levelInput.value.trim() === "") {
    amountInput.value = "";
    levelInput.value = "";
    return;
  }

  levelInput.value = String(level);

  if (level === 0) {
    amountInput.value = "";
  } else {
    const milestone = STARS_OPEN_MILESTONES[level - 1];
    const threshold = milestone.stars || milestone.clicks;
    amountInput.value = formatNumber(threshold);
  }
}

function updateGachaColors() {
  GACHAS.forEach(function (gacha, index) {
    const select = document.getElementById("gacha-" + index);
    if (!select) return;
    const rarityIndex = Number(select.value);
    const rarity = gacha.rarities[rarityIndex];
    if (rarity) {
      const rName = rarity.name.toLowerCase();
      const color = RARITY_COLORS[rName] || "#ffffff";
      select.style.color = color;
      if (rName === "none" || rName === "common") {
        select.style.borderColor = "#333348";
      } else {
        select.style.borderColor = color;
      }
    }
  });
}

function buildLevelMilestoneDots() {
  const container = document.getElementById("level-milestone-dots");
  if (!container) return;
  container.innerHTML = "";
  LEVEL_MILESTONES.forEach(function (ms) {
    const dot = document.createElement("div");
    dot.className = "level-ms-dot";
    dot.id = "level-ms-" + ms.level;
    dot.title = "Lv " + ms.level + " → " + ms.mult + "x multiplier";
    const tick = document.createElement("span");
    tick.className = "level-ms-tick";
    tick.textContent = "✓";
    const label = document.createElement("span");
    label.className = "level-ms-label";
    label.textContent = ms.level;
    dot.appendChild(tick);
    dot.appendChild(label);
    container.appendChild(dot);
  });
}

function updateLevelMilestoneDots() {
  const level = Math.floor(Number(document.getElementById("player-level").value) || 0);
  LEVEL_MILESTONES.forEach(function (ms) {
    const dot = document.getElementById("level-ms-" + ms.level);
    if (!dot) return;
    if (level >= ms.level) {
      dot.classList.add("level-ms-reached");
    } else {
      dot.classList.remove("level-ms-reached");
    }
  });
}

function updateDisplay() {
  const result = calculate();

  document.getElementById("base-power").textContent = formatNumber(result.base);
  document.getElementById("buff-mult").textContent = formatMultiplier(result.buffMult);
  document.getElementById("percent-mult").textContent = formatMultiplier(result.percentMult);
  document.getElementById("gacha-mult").textContent = formatMultiplier(result.gachaMult);
  document.getElementById("passive-power").textContent = formatNumber(result.passivePower);
  document.getElementById("active-power").textContent = formatNumber(result.activePower);
  document.getElementById("breakdown-base").textContent = formatNumber(result.base);
  document.getElementById("breakdown-buffs").textContent = formatNumber(result.afterBuffs);
  document.getElementById("breakdown-percent").textContent = formatNumber(result.afterPercent);
  document.getElementById("breakdown-gacha").textContent = formatNumber(result.passivePower);
  document.getElementById("breakdown-passive").textContent = formatNumber(result.passivePower);
  document.getElementById("breakdown-active").textContent = formatNumber(result.activePower);

  updateGachaColors();
  updateLevelMilestoneDots();
}

function createFeatNumberInput(id, placeholder, autoUpdate) {
  const input = document.createElement("input");
  input.type = "number";
  input.id = id;
  input.className = "mult-input feat-input";
  input.value = "";
  input.min = "0";
  input.step = "1";
  input.placeholder = placeholder || "0";
  if (autoUpdate !== false) {
    input.addEventListener("input", updateDisplay);
  }
  return input;
}

function createFeatTextInput(id, placeholder, autoUpdate) {
  const input = document.createElement("input");
  input.type = "text";
  input.id = id;
  input.className = "mult-input feat-input";
  input.value = "";
  input.placeholder = placeholder || "0";
  input.maxLength = 20;
  if (autoUpdate !== false) {
    input.addEventListener("input", updateDisplay);
    input.addEventListener("blur", function () {
      const trimmed = input.value.trim();
      if (trimmed === "") {
        input.value = "";
      } else {
        const parsed = parseNumber(input.value);
        input.value = formatNumber(parsed);
      }
      updateDisplay();
    });
  }
  return input;
}

function buildFeatsGrid() {
  const amountGrid = document.getElementById("feats-amount-grid");
  const waveGrid = document.getElementById("feats-wave-grid");
  amountGrid.innerHTML = "";
  waveGrid.innerHTML = "";

  FEAT_AMOUNT.forEach(function (feat) {
    const row = document.createElement("tr");
    row.className = "feat-row";

    const nameCell = document.createElement("td");
    nameCell.className = "feat-name";
    nameCell.textContent = feat.name;
    nameCell.title = feat.name;

    const amountCell = document.createElement("td");
    const amountInput = createFeatTextInput("feat-" + feat.id + "-amount", "0", false);
    amountCell.appendChild(amountInput);

    const levelCell = document.createElement("td");

    if (feat.id === "clicks") {
      const levelInput = createFeatNumberInput("feat-" + feat.id + "-level", "0", false);
      levelInput.max = "20";

      amountInput.addEventListener("input", function () {
        syncClicksFromAmount();
        updateDisplay();
      });
      amountInput.addEventListener("blur", function () {
        const parsed = parseNumber(amountInput.value);
        amountInput.value = parsed === 0 && !amountInput.value.trim() ? "0" : formatNumber(parsed);
        syncClicksFromAmount();
        updateDisplay();
      });

      levelInput.addEventListener("input", function () {
        syncClicksFromLevel();
        updateDisplay();
      });

      const stepperWrap = document.createElement("div");
      stepperWrap.className = "feat-level-stepper";
      const btnUp = document.createElement("button");
      btnUp.className = "feat-step-btn feat-step-up";
      btnUp.type = "button";
      btnUp.textContent = "▲";
      btnUp.title = "Level up";
      btnUp.addEventListener("click", function () {
        let val = Math.floor(Number(levelInput.value) || 0);
        val = Math.min(val + 1, 20);
        levelInput.value = String(val);
        syncClicksFromLevel();
        updateDisplay();
      });
      const btnDown = document.createElement("button");
      btnDown.className = "feat-step-btn feat-step-down";
      btnDown.type = "button";
      btnDown.textContent = "▼";
      btnDown.title = "Level down";
      btnDown.addEventListener("click", function () {
        let val = Math.floor(Number(levelInput.value) || 0);
        val = Math.max(val - 1, 0);
        levelInput.value = String(val);
        syncClicksFromLevel();
        updateDisplay();
      });
      stepperWrap.appendChild(levelInput);
      stepperWrap.appendChild(btnUp);
      stepperWrap.appendChild(btnDown);
      levelCell.appendChild(stepperWrap);
    } else if (feat.id === "stars-open") {
      const levelInput = createFeatNumberInput("feat-" + feat.id + "-level", "0", false);
      levelInput.max = "15";

      amountInput.addEventListener("input", function () {
        syncStarsFromAmount();
        updateDisplay();
      });
      amountInput.addEventListener("blur", function () {
        const parsed = parseNumber(amountInput.value);
        amountInput.value = parsed === 0 && !amountInput.value.trim() ? "0" : formatNumber(parsed);
        syncStarsFromAmount();
        updateDisplay();
      });

      levelInput.addEventListener("input", function () {
        syncStarsFromLevel();
        updateDisplay();
      });

      const stepperWrap = document.createElement("div");
      stepperWrap.className = "feat-level-stepper";
      const btnUp = document.createElement("button");
      btnUp.className = "feat-step-btn feat-step-up";
      btnUp.type = "button";
      btnUp.textContent = "▲";
      btnUp.title = "Level up";
      btnUp.addEventListener("click", function () {
        let val = Math.floor(Number(levelInput.value) || 0);
        val = Math.min(val + 1, 15);
        levelInput.value = String(val);
        syncStarsFromLevel();
        updateDisplay();
      });
      const btnDown = document.createElement("button");
      btnDown.className = "feat-step-btn feat-step-down";
      btnDown.type = "button";
      btnDown.textContent = "▼";
      btnDown.title = "Level down";
      btnDown.addEventListener("click", function () {
        let val = Math.floor(Number(levelInput.value) || 0);
        val = Math.max(val - 1, 0);
        levelInput.value = String(val);
        syncStarsFromLevel();
        updateDisplay();
      });
      stepperWrap.appendChild(levelInput);
      stepperWrap.appendChild(btnUp);
      stepperWrap.appendChild(btnDown);
      levelCell.appendChild(stepperWrap);
    } else {
      levelCell.textContent = "—";
      levelCell.className = "feat-value-display feat-na";

      amountInput.addEventListener("input", updateDisplay);
      amountInput.addEventListener("blur", function () {
        const parsed = parseNumber(amountInput.value);
        amountInput.value = parsed === 0 && !amountInput.value.trim() ? "0" : formatNumber(parsed);
        updateDisplay();
      });
    }

    row.appendChild(nameCell);
    row.appendChild(amountCell);
    row.appendChild(levelCell);
    amountGrid.appendChild(row);
  });

  FEAT_WAVE.forEach(function (feat) {
    const row = document.createElement("tr");
    row.className = "feat-row";

    const nameCell = document.createElement("td");
    nameCell.className = "feat-name";
    nameCell.textContent = feat.name;
    nameCell.title = feat.name;

    const waveCell = document.createElement("td");
    const waveInput = createFeatNumberInput("feat-" + feat.id + "-wave", "0", false);
    waveInput.max = String(feat.maxWave);
    waveInput.addEventListener("input", function () {
      syncFeatFromWave(feat);
      updateDisplay();
    });
    waveCell.appendChild(waveInput);

    const levelCell = document.createElement("td");
    const levelInput = createFeatNumberInput("feat-" + feat.id + "-level", "0", false);
    levelInput.addEventListener("input", function () {
      syncFeatFromLevel(feat);
      updateDisplay();
    });

    const milestones = getFeatMilestones(feat);
    const maxFeatLevel = milestones[milestones.length - 1].level;

    const stepperWrap = document.createElement("div");
    stepperWrap.className = "feat-level-stepper";

    const btnUp = document.createElement("button");
    btnUp.className = "feat-step-btn feat-step-up";
    btnUp.type = "button";
    btnUp.textContent = "▲";
    btnUp.title = "Level up";
    btnUp.addEventListener("click", function () {
      const currentLevel = Math.floor(Number(levelInput.value) || 0);
      // Find the next milestone level above current
      let nextLevel = null;
      for (let i = 0; i < milestones.length; i++) {
        if (milestones[i].level > currentLevel) {
          nextLevel = milestones[i].level;
          break;
        }
      }
      if (nextLevel === null) nextLevel = maxFeatLevel;
      levelInput.value = String(nextLevel);
      syncFeatFromLevel(feat);
      updateDisplay();
    });

    const btnDown = document.createElement("button");
    btnDown.className = "feat-step-btn feat-step-down";
    btnDown.type = "button";
    btnDown.textContent = "▼";
    btnDown.title = "Level down";
    btnDown.addEventListener("click", function () {
      const currentLevel = Math.floor(Number(levelInput.value) || 0);
      // Find the previous milestone level below current
      let prevLevel = 0;
      for (let i = milestones.length - 1; i >= 0; i--) {
        if (milestones[i].level < currentLevel) {
          prevLevel = milestones[i].level;
          break;
        }
      }
      if (prevLevel === 0) {
        levelInput.value = "";
        waveInput.value = "";
      } else {
        levelInput.value = String(prevLevel);
      }
      syncFeatFromLevel(feat);
      updateDisplay();
    });

    stepperWrap.appendChild(levelInput);
    stepperWrap.appendChild(btnUp);
    stepperWrap.appendChild(btnDown);
    levelCell.appendChild(stepperWrap);

    row.appendChild(nameCell);
    row.appendChild(waveCell);
    row.appendChild(levelCell);
    waveGrid.appendChild(row);
  });
}

function buildGachaGrid() {
  const grid = document.getElementById("gacha-grid");
  grid.innerHTML = "";

  GACHAS.forEach(function (gacha, index) {
    const row = document.createElement("tr");
    row.className = "gacha-row";

    const nameCell = document.createElement("td");
    nameCell.className = "gacha-name";
    nameCell.textContent = gacha.name;
    nameCell.title = gacha.name;

    const selectCell = document.createElement("td");
    const select = document.createElement("select");
    select.id = "gacha-" + index;
    select.className = "gacha-select";

    gacha.rarities.forEach(function (rarity, rarityIndex) {
      const option = document.createElement("option");
      option.value = rarityIndex;
      option.textContent = rarity.isNone
        ? rarity.name
        : rarity.name + " " + formatMultiplier(rarity.mult);
      const rName = rarity.name.toLowerCase();
      const optionColor = RARITY_COLORS[rName] || "#ffffff";
      option.style.backgroundColor = "#0f0f14";
      select.appendChild(option);
    });

    select.value = "0";

    select.addEventListener("change", updateDisplay);
    selectCell.appendChild(select);
    row.appendChild(nameCell);
    row.appendChild(selectCell);
    grid.appendChild(row);
  });
}

// ============================================================
// APPLY MAX VALUES
// ============================================================
function applyMaxValues() {
  // Awakening & Level
  document.getElementById("awakening").value = MAX_CONFIG.awakening;
  document.getElementById("player-level").value = MAX_CONFIG.playerLevel;
  document.getElementById("level-stats-mult").value = formatMultiplier(MAX_CONFIG.levelStatsMult);

  // Index
  document.getElementById("index-enemies").value = MAX_CONFIG.indexEnemies;

  // Avatar & Title
  document.getElementById("avatar-mult").value = formatMultiplier(MAX_CONFIG.avatarMult);
  document.getElementById("title-mult").value = formatMultiplier(MAX_CONFIG.titleMult);

  // Swords
  document.getElementById("sword-1-mult").value = formatMultiplier(MAX_CONFIG.sword1Mult);
  document.getElementById("sword-2-mult").value = formatMultiplier(MAX_CONFIG.sword2Mult);

  // Accessories
  for (var i = 1; i <= 5; i++) {
    document.getElementById("accessory-" + i + "-mult").value = formatMultiplier(MAX_CONFIG["accessory" + i + "Mult"]);
  }

  // Fighters
  document.getElementById("fighter-1-mult").value = formatMultiplier(MAX_CONFIG.fighter1Mult);
  document.getElementById("fighter-2-mult").value = formatMultiplier(MAX_CONFIG.fighter2Mult);

  // Upgrades
  document.getElementById("upgrade-trial-mult").value = formatMultiplier(MAX_CONFIG.upgradeTrialMult);
  document.getElementById("upgrade-dragon-mult").value = formatMultiplier(MAX_CONFIG.upgradeDragonMult);
  document.getElementById("upgrade-tempest-mult").value = formatMultiplier(MAX_CONFIG.upgradeTempestMult);
  document.getElementById("upgrade-hollow-mult").value = formatMultiplier(MAX_CONFIG.upgradeHollowMult);

  // Skill Tree
  document.getElementById("skill-pirate-mult").value = formatMultiplier(MAX_CONFIG.skillPirateMult);
  document.getElementById("skill-monarch-mult").value = formatMultiplier(MAX_CONFIG.skillMonarchMult);

  // Progression
  PROGRESSION_IDS.forEach(function (id) {
    document.getElementById(id).value = formatMultiplier(MAX_CONFIG.progressionMult);
  });

  // Kagune
  document.getElementById("kagune-mult").value = (MAX_CONFIG.kagunemult && MAX_CONFIG.kagunemult !== true)
    ? formatMultiplier(MAX_CONFIG.kagunemult)
    : "";

  // Grimoire
  document.getElementById("grimoire-mult").value = formatMultiplier(MAX_CONFIG.grimoireMult);

  // Stand & Form
  document.getElementById("stand-select").value = MAX_CONFIG.standSelect;
  document.getElementById("form-select").value = MAX_CONFIG.formSelect;
  document.getElementById("form-level-select").value = MAX_CONFIG.formLevelSelect;

  // Hunter Rank
  document.getElementById("hunter-rank-mult").value = formatMultiplier(MAX_CONFIG.hunterRankMult);

  // Servants
  document.getElementById("servant-1-mult").value = formatMultiplier(MAX_CONFIG.servant1Mult);
  document.getElementById("servant-2-mult").value = formatMultiplier(MAX_CONFIG.servant2Mult);

  // Quests
  document.getElementById("quests-completed").value = MAX_CONFIG.questsCompleted;

  // Checkboxes
  document.getElementById("potion-1").checked = MAX_CONFIG.potion1;
  document.getElementById("potion-2").checked = MAX_CONFIG.potion2;
  document.getElementById("potion-3").checked = MAX_CONFIG.potion3;
  document.getElementById("vip").checked = MAX_CONFIG.vip;
  document.getElementById("power-pass").checked = MAX_CONFIG.powerPass;
  document.getElementById("follow-devs").checked = MAX_CONFIG.followDevs;

  // Relics
  RELIC_IDS.forEach(function (id) {
    document.getElementById(id).checked = MAX_CONFIG.relicsAll;
  });

  // Gachas — set each to the last (highest) rarity option
  if (MAX_CONFIG.gachasMax) {
    GACHAS.forEach(function (gacha, index) {
      var select = document.getElementById("gacha-" + index);
      if (select) select.value = String(gacha.rarities.length - 1);
    });
  }

  // Feats Wave/Level — set every wave/level feat to its max milestone
  if (MAX_CONFIG.featsMax) {
    FEAT_WAVE.forEach(function (feat) {
      var milestones = getFeatMilestones(feat);
      // Use 300 for ghoul arena, 100 for everything else, capped by feat's maxWave
      var targetWave = feat.id === "ghoul-arena" ? 300 : 100;
      var cappedWave = Math.min(targetWave, feat.maxWave);
      var actualLevel = waveToFeatLevel(cappedWave, milestones);
      var waveInput = document.getElementById("feat-" + feat.id + "-wave");
      var levelInput = document.getElementById("feat-" + feat.id + "-level");
      if (waveInput) waveInput.value = String(cappedWave);
      if (levelInput) levelInput.value = actualLevel > 0 ? String(actualLevel) : "";
    });

    // Feats Amount — Clicks
    var maxClicksMilestone = CLICKS_MILESTONES[CLICKS_MILESTONES.length - 1];
    var clicksAmountInput = document.getElementById("feat-clicks-amount");
    var clicksLevelInput  = document.getElementById("feat-clicks-level");
    if (clicksAmountInput) clicksAmountInput.value = formatNumber(maxClicksMilestone.clicks);
    if (clicksLevelInput)  clicksLevelInput.value  = String(CLICKS_MILESTONES.length);

    // Feats Amount — Stars Open
    var maxStarsMilestone = STARS_OPEN_MILESTONES[STARS_OPEN_MILESTONES.length - 1];
    var starsThreshold    = maxStarsMilestone.stars || maxStarsMilestone.clicks;
    var starsAmountInput  = document.getElementById("feat-stars-open-amount");
    var starsLevelInput   = document.getElementById("feat-stars-open-level");
    if (starsAmountInput) starsAmountInput.value = formatNumber(starsThreshold);
    if (starsLevelInput)  starsLevelInput.value  = String(STARS_OPEN_MILESTONES.length);
  }

  updateDisplay();
}

// ============================================================
// RESET ALL MULTIPLIER VALUES
// ============================================================
function resetMultipliers() {
  // Awakening & Level
  document.getElementById("awakening").value = "";
  document.getElementById("player-level").value = "";
  document.getElementById("level-stats-mult").value = "";

  // Index
  document.getElementById("index-enemies").value = "";

  // Potions & VIP checkboxes
  document.getElementById("potion-1").checked = false;
  document.getElementById("potion-2").checked = false;
  document.getElementById("potion-3").checked = false;
  document.getElementById("vip").checked = false;
  document.getElementById("power-pass").checked = false;
  document.getElementById("follow-devs").checked = false;

  // Avatar & Title
  document.getElementById("avatar-mult").value = "";
  document.getElementById("title-mult").value = "";

  // Swords
  document.getElementById("sword-1-mult").value = "";
  document.getElementById("sword-2-mult").value = "";

  // Accessories
  for (var i = 1; i <= 5; i++) {
    document.getElementById("accessory-" + i + "-mult").value = "";
  }

  // Stand & Form
  document.getElementById("stand-select").value = "none";
  document.getElementById("form-select").value = "none";
  document.getElementById("form-level-select").value = "1";

  // Fighters
  document.getElementById("fighter-1-mult").value = "";
  document.getElementById("fighter-2-mult").value = "";

  // Upgrades
  document.getElementById("upgrade-trial-mult").value = "";
  document.getElementById("upgrade-dragon-mult").value = "";
  document.getElementById("upgrade-tempest-mult").value = "";
  document.getElementById("upgrade-hollow-mult").value = "";

  // Skill Tree
  document.getElementById("skill-pirate-mult").value = "";
  document.getElementById("skill-monarch-mult").value = "";

  // Progression
  PROGRESSION_IDS.forEach(function (id) {
    document.getElementById(id).value = "";
  });

  // Kagune & Grimoire
  document.getElementById("kagune-mult").value = "";
  document.getElementById("grimoire-mult").value = "";

  // Hunter Rank
  document.getElementById("hunter-rank-mult").value = "";

  // Servants
  document.getElementById("servant-1-mult").value = "";
  document.getElementById("servant-2-mult").value = "";

  // Quests
  document.getElementById("quests-completed").value = "0";

  // Relics
  RELIC_IDS.forEach(function (id) {
    document.getElementById(id).checked = false;
  });

  // Gachas — reset all to None
  GACHAS.forEach(function (gacha, index) {
    var select = document.getElementById("gacha-" + index);
    if (select) select.value = "0";
  });

  // Feats Wave/Level — clear all
  FEAT_WAVE.forEach(function (feat) {
    var waveInput = document.getElementById("feat-" + feat.id + "-wave");
    var levelInput = document.getElementById("feat-" + feat.id + "-level");
    if (waveInput) waveInput.value = "";
    if (levelInput) levelInput.value = "";
  });

  // Feats Amount — Clicks & Stars
  var clicksAmountInput = document.getElementById("feat-clicks-amount");
  var clicksLevelInput  = document.getElementById("feat-clicks-level");
  if (clicksAmountInput) clicksAmountInput.value = "";
  if (clicksLevelInput)  clicksLevelInput.value  = "";

  var starsAmountInput = document.getElementById("feat-stars-open-amount");
  var starsLevelInput  = document.getElementById("feat-stars-open-level");
  if (starsAmountInput) starsAmountInput.value = "";
  if (starsLevelInput)  starsLevelInput.value  = "";

  updateDisplay();
}
// ============================================================

document.getElementById("unit-count").addEventListener("input", buildUnitInputs);
document.getElementById("max-btn").addEventListener("click", applyMaxValues);
document.getElementById("reset-btn").addEventListener("click", resetMultipliers);

["potion-1", "potion-2", "potion-3", "vip", "power-pass", "follow-devs"].concat(RELIC_IDS).forEach(function (id) {
  document.getElementById(id).addEventListener("change", updateDisplay);
});

document.getElementById("awakening").addEventListener("input", updateDisplay);
document.getElementById("player-level").addEventListener("input", updateDisplay);
document.getElementById("index-enemies").addEventListener("input", updateDisplay);
document.getElementById("quests-completed").addEventListener("input", updateDisplay);
document.getElementById("stand-select").addEventListener("change", updateDisplay);
document.getElementById("form-select").addEventListener("change", updateDisplay);
document.getElementById("form-level-select").addEventListener("change", updateDisplay);

["avatar-mult", "title-mult", "sword-1-mult", "sword-2-mult", "level-stats-mult",
  "accessory-1-mult", "accessory-2-mult", "accessory-3-mult", "accessory-4-mult", "accessory-5-mult",
  "fighter-1-mult", "fighter-2-mult",
  "upgrade-trial-mult", "upgrade-dragon-mult", "upgrade-tempest-mult", "upgrade-hollow-mult",
  "skill-pirate-mult", "skill-monarch-mult",
  "kagune-mult", "grimoire-mult",
  "hunter-rank-mult", "servant-1-mult", "servant-2-mult"
].concat(PROGRESSION_IDS).forEach(function (id) {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("input", updateDisplay);
    el.addEventListener("blur", function () {
      const trimmed = el.value.trim();
      if (trimmed === "") {
        el.value = "";
      } else {
        const val = parseMultiplier(el.value);
        el.value = formatMultiplier(val);
      }
      updateDisplay();
    });
  }
});

// Apply safety character limits to all static text fields and clamp unit count in HTML
document.querySelectorAll('input[type="text"]').forEach(function (el) {
  if (!el.classList.contains("build-code-input")) el.maxLength = 20;
});
const unitCountEl = document.getElementById("unit-count");
if (unitCountEl) {
  unitCountEl.max = "40";
}

buildUnitInputs();
buildGachaGrid();
buildFeatsGrid();
buildLevelMilestoneDots();
updateDisplay();

// Hunter Rank step buttons (+/−)
var HR_STEPS = ["", "2", "4", "8", "16", "32"];

function hrStep(e, dir) {
  e.preventDefault(); // Prevent label click behavior
  var input = document.getElementById("hunter-rank-mult");
  var cur = input.value.replace(/x$/i, "").trim();
  var idx = HR_STEPS.indexOf(cur);
  if (idx === -1) idx = 0; // unknown value → treat as none
  var next = idx + dir;
  if (next < 0) next = 0;
  if (next >= HR_STEPS.length) next = HR_STEPS.length - 1;
  input.value = HR_STEPS[next] ? HR_STEPS[next] + "x" : "";
  updateDisplay();
}

document.getElementById("hr-dec").addEventListener("click", function (e) { hrStep(e, -1); });
document.getElementById("hr-inc").addEventListener("click", function (e) { hrStep(e, 1); });

// ============================================================
// BUILD CODE — EXPORT / IMPORT (compact pipe-delimited format)
// ============================================================
function showToast(message, isError) {
  var toast = document.getElementById("build-toast");
  toast.textContent = message;
  toast.className = "build-code-toast" + (isError ? " error" : "");
  void toast.offsetWidth;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2200);
}

// Fixed-order field IDs for compact encoding
var _F = [
  "awakening", "player-level", "level-stats-mult", "index-enemies",
  "avatar-mult", "title-mult", "sword-1-mult", "sword-2-mult",
  "accessory-1-mult", "accessory-2-mult", "accessory-3-mult", "accessory-4-mult", "accessory-5-mult",
  "fighter-1-mult", "fighter-2-mult",
  "upgrade-trial-mult", "upgrade-dragon-mult", "upgrade-tempest-mult", "upgrade-hollow-mult",
  "skill-pirate-mult", "skill-monarch-mult",
  "kagune-mult", "grimoire-mult", "hunter-rank-mult",
  "servant-1-mult", "servant-2-mult", "quests-completed"
].concat(PROGRESSION_IDS);

var _C = ["potion-1", "potion-2", "potion-3", "vip", "power-pass", "follow-devs"].concat(RELIC_IDS);
var _SK = ["none", "golden", "platinum", "the-world"];
var _FK = ["none", "vyzard", "zangetsu"];

function _v(el) {
  if (!el) return "";
  return el.value.replace(/x$/i, "").trim();
}

function exportBuild() {
  var p = [];

  // [0] unit count
  p.push(document.getElementById("unit-count").value || "");

  // [1] unit powers (comma-sep)
  var ups = [];
  document.querySelectorAll(".unit-power-input").forEach(function (inp) {
    ups.push(_v(inp));
  });
  p.push(ups.join(","));

  // [2..2+_F.length-1] field values (strip trailing "x")
  _F.forEach(function (id) { p.push(_v(document.getElementById(id))); });

  // checkbox bitmask
  var mask = 0;
  _C.forEach(function (id, i) {
    if (document.getElementById(id).checked) mask |= (1 << i);
  });
  p.push(String(mask));

  // stand, form, hunter rank as index
  p.push(String(Math.max(0, _SK.indexOf(document.getElementById("stand-select").value))));
  p.push(String(Math.max(0, _FK.indexOf(document.getElementById("form-select").value))));

  // gachas (comma-sep indices)
  var gs = [];
  GACHAS.forEach(function (g, i) {
    var sel = document.getElementById("gacha-" + i);
    gs.push(sel ? sel.value : "0");
  });
  p.push(gs.join(","));

  // feat waves & levels (comma-sep, in FEAT_WAVE order)
  var fw = [], fl = [];
  FEAT_WAVE.forEach(function (feat) {
    var w = document.getElementById("feat-" + feat.id + "-wave");
    var l = document.getElementById("feat-" + feat.id + "-level");
    fw.push(w ? w.value.trim() : "");
    fl.push(l ? l.value.trim() : "");
  });
  p.push(fw.join(","));
  p.push(fl.join(","));

  // clicks & stars amount/level
  p.push(_v(document.getElementById("feat-clicks-amount")));
  p.push(_v(document.getElementById("feat-clicks-level")));
  p.push(_v(document.getElementById("feat-stars-open-amount")));
  p.push(_v(document.getElementById("feat-stars-open-level")));

  p.push(document.getElementById("form-level-select").value || "1");

  // Trim trailing empty segments
  while (p.length > 0 && p[p.length - 1] === "") p.pop();

  return btoa(p.join("|"));
}

function importBuild(code) {
  var raw;
  try {
    raw = atob(code.trim());
  } catch (e) {
    showToast("Invalid build code!", true);
    return;
  }

  var p = raw.split("|");
  function g(i) { return i < p.length ? p[i] : ""; }

  // [0] unit count
  document.getElementById("unit-count").value = g(0);
  buildUnitInputs();

  // [1] unit powers
  var upStr = g(1);
  if (upStr) {
    var ups = upStr.split(",");
    var unitInputs = document.querySelectorAll(".unit-power-input");
    ups.forEach(function (val, i) {
      if (unitInputs[i]) unitInputs[i].value = val;
    });
  }

  // [2..2+_F.length-1] field values
  _F.forEach(function (id, i) {
    var el = document.getElementById(id);
    if (el) el.value = g(2 + i);
  });

  var off = 2 + _F.length;

  // checkbox bitmask
  var mask = parseInt(g(off)) || 0;
  _C.forEach(function (id, i) {
    var el = document.getElementById(id);
    if (el) el.checked = !!(mask & (1 << i));
  });
  off++;

  // stand & form
  var si = parseInt(g(off)) || 0;
  document.getElementById("stand-select").value = _SK[si] || "none";
  off++;
  var fi = parseInt(g(off)) || 0;
  document.getElementById("form-select").value = _FK[fi] || "none";
  off++;

  // gachas
  var gsStr = g(off);
  if (gsStr) {
    gsStr.split(",").forEach(function (val, index) {
      var sel = document.getElementById("gacha-" + index);
      if (sel) sel.value = val;
    });
  }
  off++;

  // feat waves
  var fwStr = g(off);
  if (fwStr) {
    fwStr.split(",").forEach(function (val, i) {
      if (i < FEAT_WAVE.length) {
        var w = document.getElementById("feat-" + FEAT_WAVE[i].id + "-wave");
        if (w) w.value = val;
      }
    });
  }
  off++;

  // feat levels
  var flStr = g(off);
  if (flStr) {
    flStr.split(",").forEach(function (val, i) {
      if (i < FEAT_WAVE.length) {
        var l = document.getElementById("feat-" + FEAT_WAVE[i].id + "-level");
        if (l) l.value = val;
      }
    });
  }
  off++;

  // clicks & stars
  var ca = document.getElementById("feat-clicks-amount");
  var cl = document.getElementById("feat-clicks-level");
  var sa = document.getElementById("feat-stars-open-amount");
  var sl = document.getElementById("feat-stars-open-level");
  if (ca) ca.value = g(off);
  if (cl) cl.value = g(off + 1);
  if (sa) sa.value = g(off + 2);
  if (sl) sl.value = g(off + 3);
  
  if (g(off + 4)) {
    document.getElementById("form-level-select").value = g(off + 4);
  }

  updateDisplay();
  showToast("Build imported!");
}

document.getElementById("generate-code-btn").addEventListener("click", function () {
  var code = exportBuild();
  document.getElementById("build-code-output").value = code;
  showToast("Build code generated!");
});

document.getElementById("copy-code-btn").addEventListener("click", function () {
  var output = document.getElementById("build-code-output");
  if (!output.value) {
    showToast("Generate a code first!", true);
    return;
  }
  navigator.clipboard.writeText(output.value).then(function () {
    showToast("Copied to clipboard!");
  }, function () {
    output.select();
    document.execCommand("copy");
    showToast("Copied to clipboard!");
  });
});

document.getElementById("import-code-btn").addEventListener("click", function () {
  var input = document.getElementById("build-code-import");
  if (!input.value.trim()) {
    showToast("Paste a build code first!", true);
    return;
  }
  importBuild(input.value);
});

document.getElementById("build-code-import").addEventListener("paste", function () {
  var input = this;
  setTimeout(function () {
    if (input.value.trim()) importBuild(input.value);
  }, 50);
});
