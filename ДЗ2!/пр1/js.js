//1//
var a = [1, 2, 3, 4, 5];
var t = a.join('_')
console.log(t)
//2//
var num = [6, 7, 2, 3, 5, 7];
html = '<ul>';
num.forEach(function (item, i, arr) {
  html += '<li>' + item + '</li>';
});
html += '</ul>'

document.write(html); //сделал ,но не до конца понял как работает
//3//
var d = [1, 2, 3, 4, 5, 6, 7, 8, 9];
if (d.length % 2 == 0) {
  d.splice((d.length - 1) / 2, 2)
  console.log(d)
} else {
  d.splice((d.length - 1) / 2, 1)
  console.log(d)
}


//4//
var n = [1, 2, 3];

while (y !== "&") {
  var y = prompt()
  n.push(y);
}
console.log(n)