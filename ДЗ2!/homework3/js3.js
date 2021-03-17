var minTwo = 1;
var maxTwo = 40;
var arr = [];
var minPost = 0;
var maxPost = 0;
maxValue = arr[0];
minValue = arr[0];
var x;
var a = +prompt("Введите размерность массива");

for (var i = 0; i < a; i++) {
  var randomTwo = Math.round(Math.random() * (maxTwo - minTwo) + minTwo);
  arr[arr.length] = randomTwo;
}
console.log(arr);

for (var j = 0; j < arr.length; j++) {

  if (arr[j] > maxValue) {
    maxValue = arr[j];
    maxPost = j;
  }

  if (arr[j] < minValue) {
    minValue = arr[j];
    minPost = j;
  }
}
console.log(maxValue, "Максимальное значение");
console.log(minValue, "Минимальное значение");
console.log(maxPost, "Индек макс. знач.");
console.log(minPost, "Индек мин. знач.");

if (maxPost - minPost > 0) {
  x = arr.slice(minPost + 1, maxPost);
} else {
  x = arr.slice(maxPost + 1, minPost);
  x = x.reverse(); //в обрадном диапазоне если позиция мин. ниже чем макс.
}
console.log(x);