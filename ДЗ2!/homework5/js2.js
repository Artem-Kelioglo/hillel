var arr1 = [3, 45, , "sdf", "123", 500, 6];
var arr2 = [6, 222, true, ",", NaN, 4, 1300];

function arraySum(array1, array2) {
  var sumI = calcSum(array1);
  var sumII = calcSum(array2);

  if (sumI > sumII) {
    console.log(sumI);
    return array1;
  } else {
    console.log(sumII);
    return array2;
  }

}

function calcSum(mass) {
  var sum = 0;

  for (i = 0; i < mass.length; i++) {

    if (typeof mass[i] === "number" && !isNaN(mass[i])) {
      sum += mass[i];
    }

  }

  return sum;
}

arraySum(arr1, arr2);