/**
 * @param {number} n
 * @returns {number}
 */
const fizzBuzz = n => {
  for (let i = 0; i < n; i += 1) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Fizz');
    } else if (i % 3 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
      return i;
    }
  }
};
const fizzBuzz2 = n => {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};

const print = fizzBuzz2(10);
console.log(print);

module.exports = {
  fizzBuzz,
};
