console.log("------------------1----------------");
var input = document.querySelector('input[id="name"]');
var greetingMassage = "What's up ";

function greeting(massage) {
  alert(massage + this.value);
}
setInterval(greeting.bind(input, greetingMassage), 5000);

console.log("------------------2----------------");

var list = [1, 2, 3];

function myPush(zn) {
  if (zn !== undefined) {
    this[this.length] = zn;
  }

  return this.length;
}

list.myPush = myPush;
console.log(list.myPush(33));
console.log(list);

console.log("------------------2.1------------");

var list1 = [1, 2, 3];

function myJoin(zn) {
  var a = "";

  for (var i = 0; i < this.length; i++) {
    i == this.length - 1 ? (a = a + `${this[i]}`) : (a = a + `${this[i]}${zn}`);
  }

  return a;
}

list1.myJoin = myJoin;
as = list1.myJoin(":");
console.log(as);

console.log("------------------2.2------------");
var a = [1, 2, 3, 4, 5];

function myReverse() {
  var b = this.length - 1;
  for (var i = 0; i < this.length / 2; i++) {
    var d = this[i];
    this[i] = this[b - i];
    this[b - i] = d;
  }
  return this;
}

a.myReverse = myReverse;
var gh = a.myReverse();
console.log(gh);
