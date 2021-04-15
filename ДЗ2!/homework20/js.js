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

  class contextMenu {
    constructor(model = {}, actions = {}) {
      this.model = model;
      this.actions = actions;
      this.menu = {}
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
        // li.addEventListener('click',this.serchClick.bind(li, handler));------не уверен что правельно

        fr.append(li);
      }


      return fr
    }

    // serchClick(handler) { 
    //   let target = event.target
    //   if (target.tagName == 'LI') {
    //     actions[handler]()
    //   }
    // }

    makeMenu() {
      let cont = this.makeContainer();
      let li = this.makeItems()
      cont.append(li);
      cont.hidden = true
      document.body.append(cont)
      this.menu = document.querySelector('.ul__contextmenu')
    }

    hideContextMenu(bool) {
      let ul = this.menu
      let widthWin = document.documentElement.clientWidth;
      let heightWin = document.documentElement.clientHeight;
      let widrhElem = ul.offsetWidth
      let heightElem = ul.offsetHeight

      if (bool) {
        ul.hidden = bool
      } else {
        ul.hidden = bool
        let ulY = event.clientY + heightElem
        let ulX = event.clientX + widrhElem

        if (ulX > widthWin && ulY > heightWin) {
          ul.style.top = heightWin - heightElem + 'px';
          ul.style.left = widthWin - widrhElem + 'px';
        } else if (ulY > heightWin) {
          ul.style.top = heightWin - heightElem + 'px';
          ul.style.left = event.clientX + 'px';

        } else if (ulX > widthWin) {
          ul.style.top = event.clientY + 'px';
          ul.style.left = widthWin - widrhElem + 'px';

        } else {
          ul.style.top = event.clientY + 'px';
          ul.style.left = event.clientX + 'px';
        }

      }
    }
  }

  let sad = new contextMenu(data, actions)
  sad.makeMenu()
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    sad.hideContextMenu(false)
    document.addEventListener('click', function () {
      sad.hideContextMenu(true)
    })
  });
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