'use strict';

var ol;
var h3;
var li;
var label;
var elems;
var button;
var input;
var textnode;
var inputs = document.getElementsByTagName('input');

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
              elems = document.querySelectorAll('input:not([type=button])');
              for (var i = 0; i < elems.length; i++){
                elems[i].setAttribute('type', 'checkbox');
              }

          },

          createButton: function () {
              button = document.createElement('button');
              button.addEventListener('click', handler);
              button.addEventListener('click', showModal);
              button.innerHTML = 'Проверить мои результаты';
              button.classList.add('button');
              button.style.marginTop = '50px';
              button.style.paddingTop = '10px';
              button.style.paddingBottom = '10px';
              this.form.appendChild(button);
              this.getGrid(button);
          }

};


var questionary = localStorage.getItem('quiz');

var myObj = JSON.parse(questionary);


$(function () {
  var html = $('#questions').html();
  var content = tmpl(html, {
    data: myObj
  });
  $('body').append(content);
});






var z;
var a = 0;
var result = 0;
function handler() {


  for (var k = 0; k < myObj.length; k++) {
    z = 0;

    for (var b = 0; b < myObj[k].answers.length; b++) {

        if (inputs[a++].checked == myObj[k].answers[b].correct){
          z++;
        }
    }
    if(z < myObj[k].answers.length){
      console.log("Неправильно");

    } else {
      console.log("Правильно");
      result++;
    }
  }

  if (result < (myObj.length - 2)) {

    resume.innerHTML = '<p>Вы допустили несколько ошибок</p>';
  } else if (result == myObj.length) {

    resume.innerHTML = 'Вы прошли тест без единой ошибки!';
  } else {

    resume.innerHTML = 'Вы допустили всего одну ошибку!';
  }
}


    var modalWindow = document.querySelector('.overlay');
    var modal = document.querySelector('.modal');
    var resume = document.createElement('div');
    var paragraph = document.querySelector('.questionRepeat');
    modal.insertBefore(resume, paragraph);

    function showModal() {
      modalWindow.style.display = 'block';
    }




    function resetAnswers(){
      for (var c = 0; c < inputs.length; c++){
        inputs[c].checked = false;
        console.log(inputs[c]);
      }
      result = 0;
      z = 0;
      a = 0;
    }

    function hideModal(){
      modalWindow.style.display = 'none';
    }

    var ok = document.querySelector('.btn');
    ok.addEventListener('click', resetAnswers);
    ok.addEventListener('click', hideModal);
