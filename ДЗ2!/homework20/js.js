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

window.addEventListener('contextmenu', function (event) {
  event.preventDefault()
  removeContextMenu()
  createMenu(data)

});


function createMenu(model) {
  let ul = document.createElement('ul')
  ul.className = 'ul__contextmenu'
  ul.style.top = event.clientY + 'px'
  ul.style.left = event.clientX + 'px'
  let items = model.items

  for (let i = 0; i < items.length; i++) {
    let {
      handler
    } = items[i]
    let li = document.createElement('li')
    li.className = 'li__contextmenu'
    li.innerHTML = items[i].title

    li.onclick = function () {
      actions[handler]()
    }

    ul.append(li)
  }

  document.body.append(ul)
}

function removeContextMenu() {
  if (document.querySelector('.ul__contextmenu')) {
    document.querySelector('.ul__contextmenu').remove()
  }

}

window.addEventListener('click', function () {
  removeContextMenu()
})