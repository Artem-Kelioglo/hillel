function arrayNew() {
  var arr = [];

  for (i = 0; i < 5; i++) {
    arr[i] = Math.round(Math.random() * 15);
  }

  return arr;
}

console.log(arrayNew());