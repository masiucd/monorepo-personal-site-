// @ts-nocheck
import { sumZero, sumZero2 } from '../challanges/sumZero';

test('to be 0', () => {
  const arr = [-3, -2, -1, 0, 1, 2, 3];
  expect(sumZero(arr)).toEqual([-3, 3]);
  expect(sumZero2(arr)).toEqual([-3, 3]);
});
