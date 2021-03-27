table = document.querySelector('table');

table.addEventListener('click', function () {
  let yach = event.target;
  let zn = yach.innerText;
  if (yach.tagName == "TD") {
    yach.innerHTML = '';
    let textar = document.createElement('textarea');
    textar.value = zn;
    let button = document.createElement('button');
    button.innerHTML = 'сохранить';
    let cales = document.createElement('button');
    cales.innerHTML = 'отмена';
    yach.append(textar);
    yach.append(button);
    yach.append(cales);
    button.onclick = function () {
      yach.innerHTML = textar.value;
    }
    cales.onclick = function () {
      yach.innerHTML = zn;
    }
  }
});