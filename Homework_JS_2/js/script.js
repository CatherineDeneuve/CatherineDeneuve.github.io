"use strict";
var arr = [];
for(var i = 1; i<= 5; i++) {
  var a = prompt ('Напишите любое имя, пожалуйста', '');
  arr.push(a);
  console.log(arr);
}

var userName = prompt ('Как Вас зовут?', '');

for (var i = 0; i < arr.length && userName != arr[i]; i++) {}
if (i < arr.length) {
  alert (userName + ', Вы успешно вошли');
} else {
  alert ('Произошла ошибка');
}
