obj = {
  x: 12,
  y: 4,
  znak: "/",
};
function check(obj) {
  var flag = confirm(
    `Хотите ли вы произвести операцию "${obj.znak}" co значениями  ${obj.x}  и ${obj.y}`
  );

  if (flag) {
    switch (obj.znak) {
      case "+":
        console.log(obj.x + obj.y);
        break;
      case "-":
        console.log(obj.x - obj.y);
        break;
      case "/":
        console.log(obj.x / obj.y);
        break;
      case "*":
        console.log(obj.x * obj.y);
        break;
      case "%":
        console.log(obj.x % obj.y);
        break;
    }
  } else {
    this.input();
    this.check(this.obj);
  }
}
class SuperMath {
  input() {
    this.obj = {};
    this.obj.x = +prompt("Введите новое значение х:");
    this.obj.y = +prompt("Введите новое значение y:");

    this.signs = ["+", "-", "/", "*", "%"];

    do {
      this.obj.znak = prompt("Введите новое значение znak:");
    } while (this.signs.indexOf(this.obj.znak) == -1);
  }
}

p = new SuperMath();
p.check = check;
p.check(obj);
