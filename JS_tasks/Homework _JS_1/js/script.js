"use strict";
var a = prompt('Укажите, пожалуйста, число', '');
var n = prompt('Укажите, пожалуйста, степень для этого числа', '');
myPow(a, n);

function myPow(a, n) {
  if (a == 0 && n == -1 ) {
    console.log('Бесконечность');
    return;
  } else if (a != 0 && n == 0) {
    console.log ('1');
    return;
  } else if (a == 0 && n != 0) {
    console.log ('0');
    return;
  } else if (a == 0 && n == 0) {
    console.log('Неопределенность');
    return;

  } else {
      if (n < 0) {
      n = -n;
      a = 1/a;
    }

    var b = a;
    for (var i = 1; i < n; i++) {
        b *= a;
    }
}

  console.log(b);
}
