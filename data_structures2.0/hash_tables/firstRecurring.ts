const firstRecurring = (xs: number[]) => {
  const map = {};
  const res = [];
  for (const val of xs) {
    map[val] ? (map[val] += 1) : (map[val] = 1);
  }
  for (let i = 0; i < xs.length; i++) {
    // console.log(map[xs[i]]);
    if (map[xs[i]] > 1) {
      res.push(xs[i]);
    }
  }
  return res[0];
};
const firstRecurring2 = (xs: number[]) => {
  const res = [];
  const map = xs.reduce((obj, val) => {
    if (obj[val]) {
      obj[val] += 1;
    } else {
      obj[val] = 1;
    }
    return obj;
  }, {});

  for (let i = 0; i < xs.length; i++) {
    if (map[xs[i]] === 2) {
      res.push(xs[i]);
    }
  }
  return res.length > 0 ? res[0] : undefined;
};

// console.log(firstRecurring2([1, 2, 3, 4, 5, 6, 7, 8, 9, 2]));
console.log(firstRecurring2([1, 2, 1, 3]));
console.log(firstRecurring2([1, 2, 3]));
// console.log(firstRecurring([3, 1, 2, 6, 4, 3, 2, 3, 1]));
