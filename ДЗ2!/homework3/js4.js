var array = [1, 5, 6, 2, 4];
var b = array.length - 1;
console.log(array);

for (var i = 0; i < Math.floor(array.length / 2); i++) {
  var item = array[i];
  array[i] = array[b - i];
  array[b - i] = item;
}
console.log(array);