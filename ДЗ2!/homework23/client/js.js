window.onload = function () {
  const form = document.querySelector(".form")
  form.addEventListener('submit', event => {
    event.preventDefault();
    const paylod = serializeForm(form)

    sendAjax({
      method: 'POST',
      url: "http://localhost:3000/form",
      success: function (response) {
        console.log(response)
        if (response == "Not Found") {
          let d = document.createElement("div");
          d.innerHTML = "Пользователь не найден"
          form.append(d)
          setTimeout(() => {
            d.innerHTML = ''
          }, 1000)
        } else {
          window.location.href = `http://localhost:3000/goods/${response}`;
        }

      },
      // error: function (status, message) {
      //   if (status == 401) {
      //     let d = document.createElement("div");
      //     d.innerHTML = "Ощибка"
      //     form.append(d)
      //   }
      // },
      body: paylod
    })
  })
};