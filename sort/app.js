/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i += 1;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j += 1;
  }

  return res;
};

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length) / 2;
  const start = mergeSort(arr.slice(0, middle));
  const end = mergeSort(arr.slice(middle));

  return merge(start, end);
};

console.log(mergeSort([9, 6, 4, 1, 2, 99, 21, 2, -5, -3, 2]));
