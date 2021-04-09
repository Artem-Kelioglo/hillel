// table = document.querySelector('table');

// table.addEventListener('click', function () {
//   let yach = event.target;
//   let zn = yach.innerText;
//   if (yach.tagName == "TD") {
//     yach.innerHTML = '';
//     let textar = document.createElement('textarea');
//     textar.value = zn;
//     let button = document.createElement('button');
//     button.innerHTML = 'сохранить';
//     let cales = document.createElement('button');
//     cales.innerHTML = 'отмена';
//     yach.append(textar);
//     yach.append(button);
//     yach.append(cales);
//     button.onclick = function () {
//       yach.innerHTML = textar.value;
//     }
//     cales.onclick = function () {
//       yach.innerHTML = zn;
//     }
//   }
// });



let table = document.querySelector('#table');
let actions = {
  save(target) {
    let td = target.parentElement
    let texarea = td.querySelector('textarea')
    td.innerHTML = texarea.value
  },
  cancel(target) {
    let td = target.parentElement
    let texarea = td.querySelector('textarea')
    td.innerHTML = texarea.dataset.remove
  },
};

function searchClick() {
  let target = event.target;
  if (target.tagName == 'TD') {
    let fragment = createWindown(target)
    target.innerHTML = '';
    target.append(fragment)
  } else if (target.tagName == 'BUTTON') {
    clickBtn(target)
  }
}

function clickBtn(target) {
  let action = target.dataset.action
  actions[action](target);
}



function createWindown(target) {
  let fragment = document.createDocumentFragment();
  let textarea = document.createElement('textarea');
  textarea.dataset.remove = target.innerHTML
  textarea.value = target.innerHTML
  let btns = createBtn()
  fragment.append(textarea);
  for (let i = 0; i < btns.length; i++) {
    fragment.append(btns[i])
  }
  return fragment
}

function createBtn() {
  let btns = []
  let button = document.createElement('button');
  let cales = document.createElement('button');
  button.innerHTML = 'сохранить';
  button.dataset.action = "save"
  cales.innerHTML = 'отмена';
  cales.dataset.action = "cancel"
  btns.push(button)
  btns.push(cales)
  return btns
}
table.addEventListener('click', searchClick);