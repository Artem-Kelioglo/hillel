let in1 = document.querySelector('#input1')
let in2 = document.querySelector("#input2")
let red = document.querySelector('#redblock')
let green = document.querySelector('#greenblock')
// let block = document.querySelector(".block")
in1.onchange = function () {
  in2.value = in1.value
  good()
  // green.style.height = in1.value + 'px'
  // red.style.height = cul(in1) + 'px'
  // red.style.bottom = green.style.height
}
in2.onchange = function () {
  in1.value = in2.value
  // green.style.height = in1.value + 'px'
  // red.style.height = cul(in1) + 'px'
  // red.style.bottom = green.style.height
  good()
}

function good() {
  green.style.height = in1.value + 'px'
  red.style.height = cul(in1) + 'px'
  red.style.bottom = green.style.height

  function cul(arg) {
    let res = 0
    if (arg.value < 20 && arg.value >= 0) {
      res = arg.value * 0.02
    }
    if (arg.value >= 20 && arg.value < 50) {
      res = arg.value * 0.04
    }
    if (arg.value >= 50 && arg.value < 75) {
      res = arg.value * 0.06
    }
    if (arg.value >= 75 && arg.value <= 110) {
      res = arg.value * 0.08
    }

    return res
  }
}