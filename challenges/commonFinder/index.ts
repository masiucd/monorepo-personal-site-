// GIVEN 2 arrays create a function that let's a user know (true/false )
// if the array contains any common values
// arr1 = ['a','b','c','d']
// arr1 = ['p','k','u','t']
// false

// arr1 = ['a','b','c','d']
// arr1 = ['k','u','d']
// true

const commonFinder1 = (arr1: string[], arr2: string[]): boolean => {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        count++;
      }
    }
  }

  return count > 0;
};

console.log(commonFinder1(['a', 'b', 'c'], ['g', 'h', 'o']));
console.log(commonFinder1(['a', 'b', 'c'], ['g', 'h', 'a']));
