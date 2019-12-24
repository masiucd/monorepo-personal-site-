/* eslint-disable prefer-const */

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
const merge = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) return [];
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i += 1;
    } else {
      result.push(arr2[j]);
      j += 1;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i += 1;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j += 1;
  }
  return result;
};

// console.log(merge([1, 3, 6], [9, 3, 2]));

/**
 *
 * @param {number[]} arr
 * @return {number[]}
 */

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let start = mergeSort(arr.slice(0, middle));
  let end = mergeSort(arr.slice(middle));
  return merge(start, end);
};

// console.log(mergeSort([8, 4, 6, 8, 4, 2, 9, 7, 4, -2, 3, -1]  ));
// console.log(
//   mergeSort(
//     Array.from('apasdasdaskdasldnasndajksndjkasndsa').fill(
//       Math.floor(Math.random() * 1000) + 1
//     )
//   )
// );
