console.log("--------- 1 ----------");

function row(m) {
  if (m == 0) {
    return;
  }

  console.log(m);
  row(--m);
}

row(5);

console.log("--------- 2 ----------");

function sumTo(b) {
  if (b == 1) {
    return 1;
  }
  return b + sumTo(b - 1);
}

console.log(sumTo(7));

console.log("--------- 3 ----------");

function factarial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factarial(n - 1);
}

console.log(factarial(5));

console.log("--------- 4 ----------");

var mass = new Array(
  new Array(4),
  new Array(3),
  new Array(new Array(6), new Array(4))
);

function dead(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (var j = 0; j < arr[i].length; j++) {
        if (Array.isArray(arr[i][j])) {
          for (var k = 0; k < arr[i][j].length; k++) {
            if (Array.isArray(arr[i][j][k])) {
              continue;
            }
            arr[i][j][k] = Math.ceil(Math.random() * 100);
          }

          continue;
        }
        arr[i][j] = Math.round(Math.random() * 100);
      }

      continue;
    }
    arr[i] = Math.ceil(Math.random() * 100);
  }
}
dead(mass);
console.log(mass);
