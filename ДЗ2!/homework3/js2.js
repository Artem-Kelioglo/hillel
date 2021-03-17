var min = -220;
var max = 435;
var arr = [];
var arrTwo = [];
var a = +prompt("Введите размерность массива");

for (var i = 0; i < a; i++) {
  var random = Math.round(Math.random() * (max - min) + min);

  if ((random < 100 && random >= 10) ||
    (random > -100 && random <= -10)) {
    console.log(random); // вывод элементов в консоль
    arrTwo[arrTwo.length] = random; //второй вариант объединение элементов в массив
  }

  arr[arr.length] = random;
}
console.log(arr);
console.log(arrTwo);