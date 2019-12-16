/**
 *
 * @param {number} s1
 * @param {number} s2
 * @returns {boolean}
 */
function sameFrequency(s1, s2) {
  const numStr1 = s1.toString();
  const numStr2 = s2.toString();
  if (numStr1.length !== numStr2.length) return false;
  const map = {};
  for (const val of numStr1) {
    map[val] = (map[val] || 0) + 1;
  }
  for (const val of numStr2) {
    if (!map[val]) return false;
    map[val] -= 1;
  }
  return true;
}

console.log(sameFrequency(182, 281)); //  true
console.log(sameFrequency(34, 14)); // fasle
console.log(sameFrequency(182, 8211)); // fasle
