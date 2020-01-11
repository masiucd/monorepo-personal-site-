/**
 *
 * @param {number} num
 * @returns {number}
 */
function SimpleAdding(num) {
  const nums = [];
  for (let i = 1; i <= num; i += 1) {
    nums.push(i);
  }

  return nums.reduce((a, b) => a + b, 0);
}

console.log(SimpleAdding(4)); // 1 + 2 + 3 + 4 = 10.
console.log(SimpleAdding(12)); // 78
