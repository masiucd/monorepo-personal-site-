function linearSearch(array, target) {
    for (var i = 0; i < array.length; i += 1) {
        for (var j = 0; j < array.length; j += 1) {
            if (array[j] === target)
                return j;
        }
    }
    return -1;
}
var arr = [6, 4, 8, 3, -2, 1, 2, 3, 4];
console.log(linearSearch(arr, 8));
