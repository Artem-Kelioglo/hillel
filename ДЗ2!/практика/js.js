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

var foo = 10;
function s() {
  if (foo) {
    var foo = 10;
  }
  console.log(foo);
}
s()