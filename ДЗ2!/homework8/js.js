console.log('====================1=================');
var obj = {
  x: 10,
  y: 20,
  renderObject: renderObject,
};

function renderObject() {
  for (let key in this) {
    if (key !== "renderObject") {
      document.write(`${key}:${this[key]} `);
    }
  }
}

obj.renderObject();

console.log('====================2=================');
var obj = {
  counter: 1,
  m1() {
    this.counter++;
    return this;
  },
  m2() {
    this.counter--;
    return this;
  },
  m3() {
    this.counter += 2;
    return this;
  },
};
console.log(obj.m1().m2().m3());
console.log(obj.m2().m1().m3());
console.log(obj.m2().m1().m3().m1().m1());

console.log('====================3=================');
var data = {
  addRecord: function () {
    for (var i = 0; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        this[key] = arguments[i][key];
      }
    }

    return this;
  },

  p: 600,
  str: "hello",
  y: -50,
};

data.addRecord({ x: 11 }, { y: 20 }, { z: 30, x: 50 });
console.log(data.x, "-x");
console.log(data.y, "-y");
console.log(data.z, "-z");
console.log(data.p, "-p");
console.log(data.str, "-str");

console.log('====================4=================');
var data1 = {
  addRecord: function () {
    var z = arguments[arguments.length - 1];
    var bool = typeof z == "boolean";
    var flag = bool ? z : false;
    console.log(flag, "-flag-");

    for (var i = 0; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        if (this.hasOwnProperty(key)) {
          
          if (flag) {
            continue;
          } else {
            this[key] = arguments[i][key];
          }
        } else {
          this[key] = arguments[i][key];
        }
      }
    }

    return this;
  },
  p: 600,
  str: "hello",
  y: -50,
};
data1.addRecord({ x: 11 }, { y: 20 }, { z: 30, x: 50 }, true);
console.log(data1.x, "-x");
console.log(data1.y, "-y");
console.log(data1.z, "-z");
console.log(data1.p, "-p");
console.log(data1.str, "-str");
console.log("-------------------");
data1.addRecord({ x: 11 }, { y: 20 }, { z: 30, x: 50 }, false);
console.log(data1.x, "-x");
console.log(data1.y, "-y");
console.log(data1.z, "-z");
console.log(data1.p, "-p");
console.log(data1.str, "-str");
console.log("-------------------");
data1.addRecord({ x: 11 }, { y: 20 }, { z: 30, x: 50 });
console.log(data1.x, "-x");
console.log(data1.y, "-y");
console.log(data1.z, "-z");
console.log(data1.p, "-p");
console.log(data1.str, "-str");
