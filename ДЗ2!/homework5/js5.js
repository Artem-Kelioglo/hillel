let input = [1, 2, 3, 4, 5, 6];

function filter(arr, func) {
  var s = [];

  for (i = 0; i < arr.length; i++) {

    if (func(arr[i])) {
      s.push(arr[i]);
    }

  }

  return s;
}

function isEven(x) {
  return x % 2 == 0;
}

console.log(filter(input, isEven));