let sum = 0;
let sumChet = 0;

for (let i = 1; i <= 150; i++) {
  sum += i;

  if (i % 2 == 0) {
    sumChet += i;
  }

}
alert('Сумма всех чисел : ' + sum);
alert('Сумма чётных чисел :' + sumChet);