var x = +prompt("Введите первое число:");
var znak = prompt("Введите знак один из знаков(+, -, *, /, %, ^)");
var y = +prompt("Введите второе число:");

function doMath(x, znak, y) {
  var result;

  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      if (y) {
        result = x / y;
      } else {
        result = Infinity;
      }
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = Math.pow(x, y)
      break;

    default:
      result = 'выберите знак операции';
  }

  return result;
}

var f = doMath(x,znak,y);
console.log(f);