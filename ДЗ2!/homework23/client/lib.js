function sendAjax({
  method,
  url,
  success,
  body = {}
}) {
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    success(xhr.responseText);
  };

  xhr.onerror = function () {
    console.log('error');
  };

  xhr.open(method, url); // open(method, url) -> method ->> get, post, url -> http://localhost:300

  xhr.send(body)
}


function serializeModel() {
  const checkAllowElementForm = (item) => {
    return item.tagName.toLowerCase() != 'button' && item.type != 'button';
  }

  function serializeForm(form) {
    const payload = {};

    for (let i = 0; i < form.length; i++) {
      const item = form[i];

      if (checkAllowElementForm(item)) {
        item.id && (payload[item.id] = item.value);
      }
    }

    return JSON.stringify(payload);
  }
  return {
    serializeForm
  }
}
const {
  serializeForm
} = serializeModel()