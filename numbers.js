const STANDARD_SUFFIXES = ["", "K", "M", "B", "T", "qd", "qn", "sx", "sp", "oc", "no", "de"];

const SUFFIX_PARSE_MAP = {
  k: 1, m: 2, b: 3, t: 4,
  qd: 5, qn: 6, sx: 7, sp: 8, oc: 9, no: 10, de: 11,
};

function getSuffixByIndex(index) {
  if (index < STANDARD_SUFFIXES.length) {
    return STANDARD_SUFFIXES[index];
  }

  const offset = index - 12;
  const first = String.fromCharCode(66 + Math.floor(offset / 26));
  const second = String.fromCharCode(65 + (offset % 26));
  return first + second;
}

function parseSuffix(suffix) {
  if (!suffix) return 0;

  const lower = suffix.toLowerCase();
  if (SUFFIX_PARSE_MAP[lower] !== undefined) {
    return SUFFIX_PARSE_MAP[lower];
  }

  if (suffix.length === 2 && /^[a-zA-Z]{2}$/.test(suffix)) {
    const upper = suffix.toUpperCase();
    const first = upper.charCodeAt(0) - 66;
    const second = upper.charCodeAt(1) - 65;
    if (first >= 0 && first < 26 && second >= 0 && second < 26) {
      return 12 + first * 26 + second;
    }
  }

  return -1;
}

function parseNumber(str) {
  if (str === null || str === undefined) return 0;

  const cleaned = String(str).trim().replace(/,/g, "").replace(/\s+/g, "");
  if (!cleaned || cleaned === "-") return 0;

  const match = cleaned.match(/^([+-]?\d*\.?\d+)([a-zA-Z]{1,2}|qd|qn|sx|sp|oc|no|de)?$/i);
  if (!match) return 0;

  const value = parseFloat(match[1]);
  if (isNaN(value)) return 0;

  const suffixIndex = parseSuffix(match[2] || "");
  if (suffixIndex < 0) return 0;

  return value * Math.pow(1000, suffixIndex);
}

function formatNumber(num) {
  if (!isFinite(num) || num === 0) return "0";

  const sign = num < 0 ? "-" : "";
  const abs = Math.abs(num);

  if (abs < 1000) {
    if (Number.isInteger(abs)) return sign + abs.toString();
    return sign + parseFloat(abs.toFixed(2)).toString();
  }

  const index = Math.min(
    Math.floor(Math.log10(abs) / Math.log10(1000)),
    12 + 26 * 26 - 1
  );

  const scaled = abs / Math.pow(1000, index);
  let formatted;

  if (scaled >= 100) {
    formatted = scaled.toFixed(2);
  } else if (scaled >= 10) {
    formatted = scaled.toFixed(3);
  } else {
    formatted = scaled.toFixed(4);
  }

  formatted = formatted.replace(/\.?0+$/, "");
  return sign + formatted + getSuffixByIndex(index);
}
