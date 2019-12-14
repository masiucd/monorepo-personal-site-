/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/**
 *
 * @param {string} str
 * @returns {string}
 */
function maxChar(str) {
  if (str.length === 0) return '';
  const strLower = str.toLowerCase().trim();
  const map = {};
  let max = 0;
  let word = '';

  for (const char of strLower) {
    map[char] ? (map[char] += 1) : (map[char] = 1);
  }

  for (let key in map) {
    if (map[key] > max) {
      max = map[key];
      word = key;
    }
  }
  return word;
}

// console.log(maxChar('apa'))
console.log(maxChar('marcell'));
