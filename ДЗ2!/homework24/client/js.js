window.onload = function () {
  const form = document.querySelector(".form")
  form.addEventListener('submit', event => {
    event.preventDefault();
    const paylod = serializeForm(form)

    sendAjax({
      method: 'POST',
      url: "http://localhost:3000/form",
      success: function (response) {
        if (response == "Not Found") {
          let warning = document.createElement("div");
          warning.innerHTML = "Пользователь не найден"
          form.append(warning)
          setTimeout(() => {
            warning.innerHTML = ''
          }, 1000)
        } else {
          window.location.href = `http://localhost:3000/goods/${response}`;
        }

      },
      body: paylod
    })
  })
};