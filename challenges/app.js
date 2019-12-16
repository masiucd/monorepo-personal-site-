/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
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

// console.log(sameFrequency(182, 281)); //  true
// console.log(sameFrequency(34, 14)); // fasle
// console.log(sameFrequency(182, 8211)); // fasle

/**
 *
 * @param {number[] | string[]} args
 * @returns {boolean}
 */
function areThereDuplicates(...args) {
  const map = args.reduce((obj, val) => {
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      obj[val] += 1;
    }
    return obj;
  }, {});

  for (let key in map) {
    if (map[key] > 1) return true;
  }
  return false;
}

// console.log(areThereDuplicates(1, 2, 3)); // fasle
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'b')); // true

/**
 *
 * @param {number[]} arr
 * @param {number} num
 * @returns {number}
 */

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i += 1) {
    total += arr[i];
  }
  let acc = total;
  for (let i = num; i < arr.length; i += 1) {
    acc += arr[i] - arr[i - num];
    total = Math.max(total, acc);
  }
  return total;
}

console.log(maxSubarraySum([200, 300, 100, 500], 2));
console.log(maxSubarraySum([100, 200, 300, 400], 2));
