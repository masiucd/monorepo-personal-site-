const { fizzBuzz } = require('../challenges/fizzBuzz');

describe('FizzBuzz should be fizzBuzz Fizz ore Buzz', () => {
  test('Fizzbuzz', () => {
    fizzBuzz(10).toBe(
      'FizzBuzz',
      1,
      2,
      'Buzz',
      4,
      'Fizz',
      'Buzz',
      7,
      8,
      'Buzz'
    );
  });
});
