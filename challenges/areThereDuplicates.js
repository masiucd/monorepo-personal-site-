/* eslint-disable no-restricted-syntax */
const areThereDublicates = (...args) => {
  const map = {};
  for (const key of args) {
    map[key] ? (map[key] += 1) : (map[key] = 1);
  }

  for (const val in map) {
    if (map[val] > 1) return false;
  }
  return true;
};

const areThereDublicates2 = (...args) =>
  [...new Set(args)].length === args.length;

console.log(areThereDublicates2(1, 2, 3));
console.log(areThereDublicates2(1, 2, 2, 2, 3));
console.log(areThereDublicates2('a', 'b', 'c'));
console.log(areThereDublicates2('a', 'b', 'c', 'a'));
