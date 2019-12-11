/* eslint-disable prefer-const */
/**
 *
 * @param {(number | number[] | number[][] | number[][][] )[]} arr
 * @returns {number[]}
 */

const flatten = arr => {
  let resArr = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      resArr = resArr.concat(flatten(val));
    } else {
      resArr.push(val);
    }
  }
  return resArr;
};

let res = flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]

let res2 = flatten([[1], [2], [3]]); // [1,2,3]

console.log(res);
console.log(res2);
