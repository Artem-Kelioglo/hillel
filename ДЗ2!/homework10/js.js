console.log("--------- 1.1 ----------");

obj1 = {
  anonim: {
    say: 'Hello anonim'
  },
  user: {
    say: 'Hello user'
  },
  admin: {
    say: 'Hello admin'
  },


}

function greeting1(role) {
  console.log(this[role].say);
}

greeting1.call(obj1, 'admin');
greeting1.call(obj1, 'anonim');
greeting1.call(obj1, 'user');

console.log("--------- 2 ----------");

var user = {
  name: 'Алексей'
}

function func(surname, patronymic) {
  alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname);
}

func.apply(user, ['Петров', 'Алексеевич']);

console.log("--------- 3 ----------");

mass = [
  [1, 2, 3, [3.1]], 4, [5, 6, [7, 8, [9, 10, 15]]]
];

// 1 вариант
function as(arr) {
  var a = []

  function sd(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        sd(arr[i]);
        continue;
      }

      a.push(arr[i]);

    }
  }

  sd(arr);
  return a;
}

// 2 вариант
function tima(arr) {
  return arr.reduce((acm, val) => acm.concat(Array.isArray(val) ? tima(val) : val), [])
};

console.log(tima(mass));
console.log(as(mass));