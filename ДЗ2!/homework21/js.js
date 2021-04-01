window.onload = function () {
  function makeBlock(quantity) {
    let itemClear = document.createElement('button');
    let setCounter = document.createElement('button');
    itemClear.innerHTML = 'clear';
    setCounter.innerHTML = 'set';
    for (let i = 1; i <= quantity; i++) {
      let itemBlock = document.createElement('div');
      let itemButton = document.createElement('button');
      let itemSpan = document.createElement('span');
      itemButton.innerHTML = 'Clik';
      itemSpan.innerHTML = "0";
      itemSpan.id = `counter_${i}`;

      itemButton.addEventListener('click', function () {
        itemSpan.innerHTML = +itemSpan.innerHTML + 1;
        localStorage.setItem(`counter_${i}`, `${itemSpan.innerHTML}`);
      })

      if (localStorage.getItem(`counter_${i}`)) {
        itemSpan.innerHTML = localStorage.getItem(`counter_${i}`);
      }

      itemBlock.append(itemSpan);
      itemBlock.append(itemButton);
      itemBlock.append(itemButton);
      document.body.append(itemBlock);
    }

    itemClear.addEventListener('click', function () {
      localStorage.clear();
      let spanList = document.querySelectorAll('span');
      for (let f of spanList) {
        f.innerHTML = '0';
      }
    })

    setCounter.addEventListener('click', function () {
      let zn = '';
      do {
        zn = prompt('Введите номер блока');
      } while (((+zn) > 0 && (+zn) > quantity) || (!isFinite(zn)));
      let znach = '';
      do {
        znach = prompt('Введите значение счётчика');
      } while (!isFinite(znach));
      couner = document.querySelector(`#counter_${zn}`);
      localStorage.setItem(`counter_${zn}`, znach);
      couner.innerHTML = znach;
    })

    document.body.append(itemClear);
    document.body.append(setCounter);
  }
  makeBlock(10);
}