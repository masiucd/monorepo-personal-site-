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
    }
  }
};

const print = fizzBuzz(10);
console.log(print);

module.exports = {
  fizzBuzz,
};
