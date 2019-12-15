/**
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
const app = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const frequencyCounter = {};
  for (const char of str1.toLowerCase()) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!frequencyCounter[char]) return false;
    frequencyCounter[char] -= 1;
  }
  return true;
};

// console.log(app('aaz', 'zza'));
// console.log(app('masiiu', 'aisumi'));
// console.log(app('car', 'rat'));
// console.log(app('', ''));

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

const app2 = arr => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

console.log(app2([-4, -3, -2, -1, 0, 1, 2, 3, 4]));
