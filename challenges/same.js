/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {boolean}
 */

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i += 1) {
    const correctIdx = arr2.indexOf(arr1[i] ** 2);
    if (correctIdx === -1) {
      return false;
    }
    arr2.splice(correctIdx, 1);
  }
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
