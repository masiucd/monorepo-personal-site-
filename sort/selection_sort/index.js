/* eslint-disable prefer-const */
/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([7, 3, 5, 10, -2, -1, 1]));
