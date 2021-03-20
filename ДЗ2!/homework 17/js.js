let in1 = document.querySelector('#input1')
let in2 = document.querySelector("#input2")
let red = document.querySelector('#redblock')
let green = document.querySelector('#greenblock')

in1.onchange = function () {
  in2.value = in1.value
  good(in2)
}
in2.onchange = function () {
  in1.value = in2.value
  good(in1)
}

function good(i) {
  green.style.height = i.value + 'px'
  red.style.bottom = green.style.height
  if (i.value < 20 && i.value >= 0) {
   return red.style.height = i.value * 0.02 + 'px'
  }
  if (i.value >= 20 && i.value < 50) {
   return red.style.height = i.value * 0.04 + 'px'
  }
  if (i.value >= 50 && i.value < 75) {
   return red.style.height = i.value * 0.06 + 'px'
  }
  if (in1.value >= 75 && i.value <= 110) {
   return red.style.height = i.value * 0.08 + 'px'
  }

}