let in1 = document.querySelector('#input1')
let in2 = document.querySelector("#input2")
let red = document.querySelector('#redblock')
let green = document.querySelector('#greenblock')

in1.addEventListener('input', function () {
  in2.value = in1.value
  good()
})


in2.addEventListener('input', function () {
  in1.value = in2.value
  good()
})

function good() {
  green.style.height = in1.value + 'px'
  red.style.bottom = green.style.height

  if (in1.value < 20 && in1.value >= 0) {
    return calcCommission(0.02)
  }
  if (in1.value >= 20 && in1.value < 50) {
    return calcCommission(0.04)
  }
  if (in1.value >= 50 && in1.value < 75) {
    return calcCommission(0.06)
  }
  if (in1.value >= 75 && in1.value <= 110) {
    return calcCommission(0.08)
  }

}

function calcCommission(prosent) {
  red.style.height = in1.value * prosent + 'px'
}