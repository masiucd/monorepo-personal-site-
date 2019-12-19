function linearSearch(array: number[], target: number): number {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] === target) return j;
    }
  }
  return -1;
}

const arr: number[] = [6, 4, 8, 3, -2, 1, 2, 3, 4];

console.log(linearSearch(arr, 8));
