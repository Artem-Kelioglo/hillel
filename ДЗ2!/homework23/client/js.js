window.onload = function () {
  console.log(sendAjax)
  const form = document.querySelector(".form")
  console.log(form)
  form.addEventListener('submit', event => {
    event.preventDefault();
    const paylod = serializeForm(form)
    console.log(paylod)
    sendAjax({
      method: 'POST',
      url: "http://localhost:3000/foo",
      success: function (response) {
        console.log(response)
      },
      body:paylod
    })
  })
};