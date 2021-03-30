data = {
  name: 'menu',
  items: [{
      title: 'title 1',
      handler: 'actionCopy'
    },
    {
      title: 'title 2',
      handler: 'actionSaveAs'
    },
    {
      title: 'title 3',
      handler: 'actionExit'
    }
  ]
}
actions = {
  actionCopy() {
    console.log('1')
  },
  actionSaveAs() {
    console.log('2')
  },
  actionExit() {
    console.log('3')
  }
}

//----------------1вариант-более правельный-------------//
window.addEventListener('contextmenu', function (event) {
  event.preventDefault();
  hideContextMenu(false)
});
window.addEventListener('click', function () {
  hideContextMenu(true)
})

class contextMenu {
  constructor(model = {}, actions = {}) {
    this.model = model;
    this.actions = actions;
  }

  makeContainer() {
    let ul = document.createElement('ul');
    ul.className = 'ul__contextmenu';
    return ul
  }

  makeItems() {
    let {
      items
    } = this.model;
    let fr = document.createDocumentFragment()
    for (let i = 0; i < items.length; i++) {
      let {
        handler,
        title
      } = items[i];
      let li = document.createElement('li');
      li.className = 'li__contextmenu';
      li.innerHTML = title;
      li.addEventListener('click', actions[handler]);
      fr.append(li);
    }

    return fr
  }

  makeMenu() {
    let cont = this.makeContainer();
    let li = this.makeItems()
    cont.append(li);
    cont.hidden = true
    document.body.append(cont)
    
  }
}

function hideContextMenu(bool) {
  let ul = document.querySelector('.ul__contextmenu')
  if (ul) {
    ul.hidden = bool
    ul.style.top = event.clientY + 'px';
    ul.style.left = event.clientX + 'px';
  }
}
let sad = new contextMenu(data, actions)
sad.makeMenu()

console.log(sad)



//----------------2 вариант-----------//



// window.addEventListener('contextmenu', function (event) {
//   event.preventDefault();
//   removeContextMenu(false);
// });

// window.addEventListener('click', function () {
//   removeContextMenu(true);
// })

// function createMenu(model) {
//   let ul = document.createElement('ul');
//   ul.className = 'ul__contextmenu';
//   let items = model.items;

//   for (let i = 0; i < items.length; i++) {
//     let {
//       handler
//     } = items[i];
//     let li = document.createElement('li');
//     li.className = 'li__contextmenu';
//     li.innerHTML = items[i].title
// ;
//     li.onclick = function () {
//       actions[handler]();
//     }

//     ul.append(li);
//   }
//   ul.hidden = true;
//   document.body.append(ul);
// }
// createMenu(data);

// function removeContextMenu(bool) {
//   let ul = document.querySelector('.ul__contextmenu');
//   ul.style.top = event.clientY + 'px';
//   ul.style.left = event.clientX + 'px';
//   document.querySelector('.ul__contextmenu').hidden = bool;
// }

//----------------3 вариант-----------//


// window.addEventListener('contextmenu', function (event) {
//   event.preventDefault()
//   removeContextMenu()
//   createMenu(data)

// });

// window.addEventListener('click', function () {
//   removeContextMenu()
// })

// function createMenu(model) {
//   let ul = document.createElement('ul')
//   ul.className = 'ul__contextmenu'
//   ul.style.top = event.clientY + 'px'
//   ul.style.left = event.clientX + 'px'
//   let items = model.items

//   for (let i = 0; i < items.length; i++) {
//     let {
//       handler
//     } = items[i]
//     let li = document.createElement('li')
//     li.className = 'li__contextmenu'
//     li.innerHTML = items[i].title

//     li.onclick = function () {
//       actions[handler]()
//     }

//     ul.append(li)
//   }

//   document.body.append(ul)
// }

// function removeContextMenu() {
//   if (document.querySelector('.ul__contextmenu')) {
//     document.querySelector('.ul__contextmenu').remove()
//   }

// }