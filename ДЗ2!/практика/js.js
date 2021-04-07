// // var user = {};
// // user.name = "john";
// // user.sername = "Smith";
// // user.name = "pete";
// // delete user.name;
// // function isEmpty(obj) {
// //   for (let key in obj) {
// //     return false;
// //   }
// //   return true;
// // }

// // let schedule = {};

// // alert(isEmpty(schedule)); // true

// // schedule["8:30"] = "get up";

// // alert(isEmpty(schedule));

// // let salaries = {
// //   John: 100,
// //   Ann: 160,
// //   Pete: 130,
// // };
// // sum = 0;
// // for (let key in salaries) {
// //   sum += salaries[key];
// // }
// // console.log(sum)
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
//   console.log(obj);
// }
// multiplyNumeric(menu);

// var foo = 10;
// function s() {
//   if (foo) {
//     var foo = 10;
//   }
//   console.log(foo);
// }
// s()
// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
// console.log(set)
// // set хранит только 3 уникальных значения
// alert(set.size); // 3

// for (let user of set) {
// console.log(user.name); // John (потом Pete и Mary)
// }


function unique(arr) {
  console.log(new Set(arr))
  return Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O