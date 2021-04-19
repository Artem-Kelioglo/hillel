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
      (id) => {
        console.log(2);
        return id;
      }
    )
    .then((id) => {
      console.log(3);
      throw Error(id);
    })
    .catch((error) => {
      console.log(6);
      if (+error.message % 2 == 0) {
        throw Error("error");
      }
    })
    .then(
      () => {
        console.log(7);
      },
      () => {
        console.log(8);
      }
    )
    .then(() => {
      console.log(9);
      throw Error("error");
    })
    .catch(() => {
      console.log(12);
    });
};
