/* eslint-disable prefer-const */
/**
 *
 * @param {string} sentence
 * @return {boolean}
 */
const smoothSentence = sentence => {
  let wordList = sentence.split(' ');
  // console.log(wordList);
  let firsttWordList = [];
  let lastWordList = [];
  for (let i = 0; i < wordList.length; i++) {
    firsttWordList.push(wordList[i][0]);
    lastWordList.push(wordList[i][wordList[i].length - 1]);
  }

  // firsttWordList.pop();
  firsttWordList.shift();
  lastWordList.pop();
  let c = 0;
  for (let i = 0; i < firsttWordList.length; i++) {
    if (firsttWordList[i] === lastWordList[i]) {
      c += 1;
    }
  }
  return c === firsttWordList.length;
};

console.log(smoothSentence('Someone is outside the doorway')); // false
console.log(smoothSentence('She eats super righteously')); // true

/**
 * isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true

isSmooth("Someone is outside the doorway") ➞ false

isSmooth("She eats super righteously") ➞ true
 */
