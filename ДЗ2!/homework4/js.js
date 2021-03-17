var mass = [];
var size = 5;
var minCol;
var maxCol;
var minColI;
var maxColI;
mass.length = size;

for (var i = 0; i < size; i++) {
    mass[i] = [];
    mass[i].length = size;
    for (var j = 0; j < mass[i].length; j++) {
        mass[i][j] = Math.round(Math.random() * 20);
    }
}
console.log(mass); //  хром отображаеться сразу изменённый вариант с заменёными мак и мин столбцами

for (j = 0; j < size; j++) {
    var sum = 0;

    for (i = 0; i < mass.length; i++) {
        sum += mass[i][j];
    }

    if (j === 0) {
        minCol = sum;
        maxCol = sum;
    }
    if (sum >= maxCol) {
        maxCol = sum;
        maxColI = j;
    }
    if (minCol >= sum) {
        minCol = sum;
        minColI = j;
    }

    console.log(sum + ' сумма ' + j + ' столбца');
}

console.log(minCol + " Значене  мин столбца,", maxCol + " Значене  мак столбца");
console.log(minColI + " Индекс  мин столбца ", maxColI + " Индекс  мак столбца");

for (i = 0; i < size; i++) {
    var g = mass[i][minColI];
    mass[i][minColI] = mass[i][maxColI];
    mass[i][maxColI] = g;

}

console.log(mass); // изменённый массив