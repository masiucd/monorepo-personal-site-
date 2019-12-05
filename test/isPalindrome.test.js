// const { isPalindrome } = require('../challanges/isPalindrome');

import { isPalindrome } from '../challanges/isPalindrome';

test('is valid palindome', () => {
  expect(isPalindrome('apa')).toBe(true);
});
