/* eslint-disable prefer-const */
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const map = {};

  for (let i = 0; i < str1.length; i += 1) {
    let letter = str1[i];
    if (map[letter]) {
      map[letter] += 1;
    } else {
      map[letter] = 1;
    }
  }
  for (let i = 0; i < str2.length; i += 1) {
    let letter = str2[i];
    if (!map[letter]) {
      return false;
    }
    map[letter] -= 1;
  }
  return true;
};

console.log(isAnagram('apa', 'paa'));
console.log(isAnagram('apa', 'pam'));
console.log(isAnagram('apa', 'pams'));
console.log(isAnagram('apa', 'aps'));
