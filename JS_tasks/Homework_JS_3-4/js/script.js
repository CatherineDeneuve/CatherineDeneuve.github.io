var ol;
var h3;
var li;
var label;
var elems;
var button;
var input;
var textnode;

var test = {
        form: document.body,

        createHeader: function (textHeader) {
          h3 = document.createElement('h3');
          h3.innerHTML = textHeader;
          this.form.appendChild(h3);
          this.getGrid(h3);
        },

        createOl: function () {
          ol = document.createElement('ol');
          this.form.appendChild(ol);
      },


        getGrid: function (myVar) {
          if (myVar == h3 || myVar == button) {
            myVar.classList.add('col-xs-8');
            myVar.classList.add('col-xs-offset-2');
            myVar.classList.add('col-sm-4');
            myVar.classList.add('col-sm-offset-2');
            myVar.classList.add('col-md-3');
            myVar.classList.add('col-md-offset-2');
            myVar.classList.add('col-lg-3');
            myVar.classList.add('col-lg-offset-1');
          } else {
          myVar.classList.add('col-xs-12');
          myVar.classList.add('col-sm-12');
          myVar.classList.add('col-md-12');
          myVar.classList.add('col-lg-12');
        }
      },


          createLi: function  (textLi) {
            li = document.createElement('li');
            li.innerHTML = textLi;
            li.style.marginTop = "10px";
            li.style.marginBottom = "10px";
            ol.appendChild(li);
            this.getGrid(li);
          },


          createInput: function (textLabel) {
            label = document.createElement('label');
            input = document.createElement('input');
            label.innerHTML = '<input>' + textLabel;
            ol.appendChild(label);
            this.getGrid(label);
          },

          changeTypeForInput: function () {
              elems = document.querySelectorAll('input');
              for (var i = 0; i < elems.length; i++){
                elems[i].setAttribute('type', 'checkbox');
              }
          },

          createButton: function () {
              button = document.createElement('button');
              button.innerHTML = 'Проверить мои результаты';
              button.classList.add('button');
              button.style.marginTop = '50px';
              button.style.paddingTop = '10px';
              button.style.paddingBottom = '10px';
              this.form.appendChild(button);
              this.getGrid(button);
          }


      };


test.createHeader('Тест по программированию');
test.createOl();
test.createLi('Вопрос №1');

test.createInput('Вариант ответа №1');
test.createInput('Вариант ответа №2');
test.createInput('Вариант ответа №3');

test.createLi('Вопрос №2');

test.createInput('Вариант ответа №1', 2);
test.createInput('Вариант ответа №2', 2);
test.createInput('Вариант ответа №3', 2);

test.createLi('Вопрос №3');

test.createInput('Вариант ответа №1', 3);
test.createInput('Вариант ответа №2', 3);
test.createInput('Вариант ответа №3', 3);

test.changeTypeForInput();

test.createButton();





// var answers1 = [label, label, label];
// var answers2 = [label21, label22, label23];
// var answers3 = [label31, label32, label33];


// Часть кода с массивами answers
// function myFunction2(myAnswers, myLi) {
//   for (var i = 0; i < myAnswers.length; i++) {
//     myLi.appendChild(myAnswers[i]);
//   }
// }
