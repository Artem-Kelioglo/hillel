window.onload = function () {
  const data = {
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
  const actions = {
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
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    sad.hideContextMenu(false)
  });
  document.addEventListener('click', function () {
    sad.hideContextMenu(true)
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
    hideContextMenu(bool) {
      let ul = document.querySelector('.ul__contextmenu')
      if (bool) {
        ul.hidden = bool
        return
      } else {
        let widthWin = document.documentElement.clientWidth;
        let heightWin = document.documentElement.clientHeight;
        let widrhElem = ul.offsetWidth
        let heightElem = ul.offsetHeight
        // if (ul) {
        ul.hidden = bool
        let ulY = event.clientY + heightElem
        let ulX = event.clientX + widrhElem
        if (ulX > widthWin && ulY > heightWin) {
          ul.style.top = event.clientY + (heightWin - (ulY)) + 'px';
          ul.style.left = event.clientX + (widthWin - (ulX)) + 'px';
        } else if (ulY > heightWin) {
          ul.style.top = event.clientY + (heightWin - (ulY)) + 'px';
          ul.style.left = event.clientX + 'px';

        } else if (ulX > widthWin) {
          ul.style.top = event.clientY + 'px';
          ul.style.left = event.clientX + (widthWin - (ulX)) + 'px';

        } else {
          ul.style.top = event.clientY + 'px';
          ul.style.left = event.clientX + 'px';
        }
        // }
      }




    }

    // function


  }
  let sad = new contextMenu(data, actions)
  sad.makeMenu()

}







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