var a = prompt('Укажите, пожалуйста, число');
var n = prompt ('Укажите, пожалуйста, степень для этого числа');

function pow (a, n) {
  if (a==0) {
    console.log('0')
  } else if (n==0) {
    console.log('1')
  } else if (a==0 && n==0) {
    console.log ('Неопределенность');
  } else {
  var b = a;
  for (i=1; i<n; i++) {
    if (n<0) {
      n=-n;
      a=1/a;
      b*=a;
    } else {
    b*=a;
  }
  }
  console.log(b);

}
}

pow (a, n);
