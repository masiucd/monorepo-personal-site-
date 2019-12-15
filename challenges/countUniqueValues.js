/* eslint-disable prefer-const */
/**
 * @param {number[]} arr
 * @returns {number}
 */
const countUniqueValues = arr => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j += 1) {
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 1, 1, 1, 2]));
