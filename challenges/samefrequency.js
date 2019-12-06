// @ts-nocheck
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
const sameFrequency = (n1, n2) => {
  const n1Str = n1.toString();
  const n2Str = n2.toString();
  if (n1Str.length !== n2Str.length) return false;

  let strCount1 = {};
  let strCount2 = {};

  for (let i = 0; i < n1Str.length; i += 1) {
    strCount1[n1Str[i]] = (strCount1[n1Str[i]] || 0) + 1;
    //   strCount1[n1Str[i]]
    //     ? (strCount1[n1Str[i]] += 1)
    //     : (strCount1[n1Str[i]] = 1);
  }

  for (let key of n2Str) {
    strCount2[key] = (strCount2[key] || 0) + 1;
  }

  for (let val in strCount1) {
    if (strCount1[val] !== strCount2[val]) return false;
  }
  return true;
};

const sameFrequency2 = (n1, n2) => {
  const strMap1 = n1
    .toString()
    .split('')
    .reduce((obj, val) => {
      if (!obj[val]) {
        obj[val] = 1;
      } else {
        obj[val] += 1;
      }
      return obj;
    }, {});

  const strMap2 = n2
    .toString()
    .split('')
    .reduce((obj, val) => {
      if (!obj[val]) {
        obj[val] = 1;
      } else {
        obj[val] += 1;
      }
      return obj;
    }, {});

  for (let key in strMap1) {
    if (strMap1[key] !== strMap2[key]) return false;
  }
  return true;
};

console.log(sameFrequency2(1223, 3221));
console.log(sameFrequency2(123, 391));
