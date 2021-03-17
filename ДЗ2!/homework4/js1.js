arr = [1, 2, 3, 4, 5, 6,7];
for (j = 0; j < arr.length - 1; j += 2) {
  var k = j + 1;
  var g = arr[j];
  arr[j] = arr[k];
  arr[k] = g;
}
console.log(arr)