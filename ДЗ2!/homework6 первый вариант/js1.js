//============= 1 ============//

function inArray(text, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (text === arr[i]) {
      return true;
    }
  }

  return false;
}

console.log(inArray("hello", ["svnj", "hello", "cvpoq"]), "== 1 зад ==");
console.log(inArray("Hi", ["svnj", "hello", "cvpoq"]), "== 1 зад ==");

//================= 2 ==============//

var data1 = {
  name: "Nick",
  time: "08:00",
  lastname: "kelioglo",
  age: 14,
};
var data2 = {
  name: "Maria",
  time: "21:00",
  age: 23,
};

function assignObjects(obj1, obj2) {
  var close = {};
  Object.assign(close, obj1, obj2);
  return close;
}

console.log(assignObjects(data1, data2), "== 2 зад ==");

//================= 3 ==============//

var data3 = {
  name: "Nick",
  time: "22:00:45",
  age: 34,
};
var data4 = {
  name: "Nika",
  time: "21:00:00",
  lastname: "kelioglo",
};

function assignObjects1(obj1, obj2, flag) {
  var close = {};

  if (flag) {
    Object.assign(close, obj2, obj1);
  } else {
    Object.assign(close, obj1, obj2);
  }

  return close;
}

console.log(assignObjects1(data3, data4, true), "== 3 зад ==");
console.log(assignObjects1(data3, data4, false), "== 3 зад ==");

//============ 4 ==========//

var data5 = {
  name: "Artem",
  time: "02:00",
  age: 23,
};
var data6 = {
  name: "Ivan",
  time: "00:00",
  lastname: "kelioglo",
};

function assignObjects2(obj1, obj2, flag = false) {
  var close = {};

  if (flag) {
    Object.assign(close, obj2, obj1);
  } else {
    Object.assign(close, obj1, obj2);
  }

  return close;
}

console.log(assignObjects2(data5, data6, true), "== 4 зад ==");
console.log(assignObjects2(data5, data6), "== 4 зад ==");

//==================5============//

var data8 = {
  name: "Artem",
  time: "02:00",
  age: 23,
};
var data9 = {
  name: "Ivan",
  time: "00:00",
  lastname: "kelioglo",
};
var data10 = {
  name: "Nick",
  time: "22:00:45",
  age: 34,
};
var data11 = {
  name: "Maria",
};
var obj1 = {
  xOX: 7,
  yOy: 8,
};
var obj2 = {
  zOz: 9,
  yOy: 10,
};

function assignObjects3() {
  var close = {};

  for (var i = 0; i < arguments.length; i++) {
    close = Object.assign(close, arguments[i]);
  }

  return close;
}

console.log(
  assignObjects3(data8, data9, data10, data11, obj1, obj2),
  "== 5 зад =="
);
