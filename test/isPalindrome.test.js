// const { isPalindrome } = require('../challanges/isPalindrome');

const { isPalindrome } = require('../challenges/isPalindrome');

test('is valid palindome', () => {
  expect(isPalindrome('apa')).toBe(true);
});
