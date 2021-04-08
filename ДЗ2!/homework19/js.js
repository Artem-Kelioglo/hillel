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

// const table = document.querySelector('#table');
// const actions = {
//   save(target) {
//     let textArea = target.querySelector('textarea');
//     target.innerHTML = textArea.value;
//   },
//   cancel(target) {
//     let textArea = target.querySelector('textarea');
//     target.innerHTML = textArea.dataset.oldval;
//   }
// }
// table.addEventListener('click', createInput);

// function createInput() {
//   const target = event.target;
//   if (target.tagName != 'TD' || (target.tagName == 'TD' && target.children.length != 0)) return;
//   let fragment = createFragment(target);
//   target.innerHTML = null;
//   target.append(fragment);
// }

// function click(target) {
//   const action = this.dataset.action;
//   actions[action] && actions[action](target);
// }

// function createFragment(target) {
//   let fragment = document.createDocumentFragment();
//   let textArea = createTextArea(target.innerHTML);
//   var btns = Object.keys(actions).map(key => createBtn(key, target));
//   fragment.append(textArea);
//   btns.forEach(btn => fragment.append(btn));
//   return fragment;
// }

// function createTextArea(value) {
//   let textArea =document.createElement('textarea');
//     textArea.setAttribute(`data-oldval`, value);
//   textArea.value = value;
//   return textArea;
// }

// function createBtn(action, target) {
//   let btn = document.createElement('button');
//   btn.setAttribute(`data-action`, action);
//   btn.innerHTML = action;
//   btn.onclick = click.bind(btn, target);
//   return btn;
// }


let table = document.querySelector('#table');
let actions = {
  save(target) {
    let td = target.parentElement
    let texarea = td.querySelector('textarea')
    td.innerHTML = texarea.value
  },
  cancel(target, zn) {
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
    let action = target.dataset.action
    actions[action](target);
  }
}

function createWindown(target) {
  let fragment = document.createDocumentFragment();
  let textarea = document.createElement('textarea');
  let button = document.createElement('button');
  let cales = document.createElement('button');
  textarea.dataset.remove = target.innerHTML
  textarea.value = target.innerHTML
  button.innerHTML = 'сохранить';
  button.dataset.action = "save"
  cales.innerHTML = 'отмена';
  cales.dataset.action = "cancel"
  fragment.append(textarea);
  fragment.append(button);
  fragment.append(cales);
  return fragment
}
table.addEventListener('click', searchClick);