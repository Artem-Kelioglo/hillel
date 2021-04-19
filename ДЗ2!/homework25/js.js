window.onload = function () {
  function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const id = random(1, 100);
      console.log("call timeout", id);
      console.log(0);

      if (id % 2 === 0) {
        resolve(id);
      } else {
        reject(id);
      }
    }, 0);
  });

  promise
    .then(
      (id) => {
        console.log(1);
        return id;
      },
      (i) => {
        console.log(2);
        return id;
      }
    )
    .then(
      (id) => {
        console.log(3);
        throw Error(id);
      },
      () => {
        console.log(4);
      }
    )
    .then(
      () => {
        console.log(5);
      },
      (error) => {
        console.log(6);
        if (+error.message % 2 == 0) {
          return i;
        }
      }
    )
    .then(
      () => {
        console.log(7);
      },
      () => {
        console.log(8);
      }
    )
    .then(
      () => {
        console.log(9);
        throw Error("error");
      },
      () => {
        console.log(10);
      }
    )
    .then(
      () => {
        console.log(11);
      },
      () => {
        console.log(12);
      }
    );
};
// window.onload = () => {
//   function random(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
//   }

//   const promise = new Promise((resolve, reject) => {
//     const i = random(1, 2);
//     console.log('0');

//     if (i === 1) {
//       resolve(i);
//     } else {
//       reject(i);
//     }

//   });

//   promise
//     .then((i) => {
//         console.log('1');
//         return i;
//       },
//       (i) => {
//         console.log('2');
//         return i;
//       })
//     .then((i) => {
//       console.log('3');
//       throw Error(i);
//     })
//     .catch((error) => {
//       console.log('6');
//       if (+error.message == 1) {
//         return i;
//       }
//     })
//     .then(() => {
//         console.log('7');
//       },
//       () => {
//         console.log('8');
//       })
//     .then(() => {
//         console.log('9');
//         throw Error('error');
//       },
//       () => {
//         console.log('10');
//       })
//     .catch(() => {
//       console.log('12');
//     });
// };
