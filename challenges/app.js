/* eslint-disable prefer-const */
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

const app3 = arr => {
  const sortedArray = arr.sort();
  let left = 0;
  let right = sortedArray.length - 1;
  while (left < right) {
    let sum = sortedArray[left] + sortedArray[right];
    if (sum === 0) {
      return [sortedArray[left], sortedArray[right]];
    }
    if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }
};
