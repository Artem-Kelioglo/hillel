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

//==============1 зд 2 вариант=========//

function inArray1(text, arr) {
  var a = arr.indexOf(text, 0);

  if (a > -1) {
    return true;
  }

  return false;
}

console.log(inArray1("hello", ["svnj", "hello", "cvpoq"]), "== 1 зад ==");
console.log(inArray1("Hi", ["svnj", "hello", "cvpoq"]), "== 1 зад ==");

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
  age: 10,
  date: "08.02.2021",
};

function copyObj(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
}

function assignObjects(obj1, obj2) {
  var objclone = {};
  copyObj(objclone, obj1);
  copyObj(objclone, obj2);
  return objclone;
}

console.log(assignObjects(data1, data2), "== 2 зад ==");

//==============3-4=================///

function assignObjects2(obj1, obj2, flag = false) {
  var objclone = {};

  if (flag) {
    copyObj(objclone, obj2);
    copyObj(objclone, obj1);
  } else {
    copyObj(objclone, obj1);
    copyObj(objclone, obj2);
  }

  return objclone;
}

console.log(assignObjects2(data1, data2), "== 3,4 зад ==");
console.log(assignObjects2(data1, data2, true), "== 3,4 зад ==");
console.log("----------------------------------------");
//================= 2-3-4 одой функ, ==============////==========

function assignObjects1(obj1, obj2) {
  var objclone = {};
  var elementLast = arguments[arguments.length - 1];
  var bool = typeof elementLast == "boolean";
  flag = bool ? elementLast : false;
  for (var key in obj1) {
    objclone[key] = obj1[key];
  }
  for (var key in obj2) {
    if (flag && obj1[key]) {
      continue;
    }
    objclone[key] = obj2[key];
  }
  return objclone;
}

console.log(assignObjects1(data1, data2), "== 2,4 зад ==");
console.log(assignObjects1(data1, data2, true), "== 3 зад ==");
console.log(assignObjects1(data1, data2, false), "== 3 зад ==");
console.log("----------------------------------------");

//==================5===============//

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
  var objclone = {};

  for (var i = 0; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      objclone[key] = arguments[i][key];
    }
  }

  return objclone;
}

console.log(
  assignObjects3(data8, data9, data10, obj1, obj2, data11),
  "== 5 зад =="
);