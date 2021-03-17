var min = 1;
var max = 15;
var a = [];

for (var i = 0; i < 10; i++) {
  var random = Math.round(Math.random() * (max - min) + min);

  if ((a.length) % 2 != 0) {
    random = 0;
  }

  a[a.length] = random;
}
alert(a);
console.log(a);