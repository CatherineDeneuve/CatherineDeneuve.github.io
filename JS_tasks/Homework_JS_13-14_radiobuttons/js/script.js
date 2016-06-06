'use strict';

var ol;
var h3;
var li;
var label;
var elems;
var button;
var input;
var y = 0;
var textnode;
var inputs = document.getElementsByTagName('input');
var labels = document.getElementsByTagName('label');

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
            // input = document.createElement('input');
            label.innerHTML = '<input>' + textLabel;
            ol.appendChild(label);
            this.getGrid(label);

          },

          changeTypeForInput: function () {
              elems = document.querySelectorAll('input:not([type=button])');
              for (var i = 0; i < elems.length; i++){
                elems[i].setAttribute('type', 'radio');
                // for ( var g = 0; g < myObj[0].answers[0].length; g++)
                // elems[i].setAttribute('name', y);
                // console.log(myObj[0].answers[0].length);
              }
          },

          // setNameToRadio: function (input, nameInput) {
          //     input.setAttribute('name', nameInput);
          //
          // },

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
var answerCorrect;
var answerWrong;
var question;
var answer;

function handler() {


  for (var k = 0; k < myObj.length; k++) {
    z = 0;

    for (var b = 0; b < myObj[k].answers.length; b++) {

        if (inputs[a].checked == myObj[k].answers[b].correct){
          z++;
              if (inputs[a].checked === true) {
                textResult = myObj[k].answers[b].text + 'правильный!';
              }
        } else {
          if (myObj[k].answers[b].correct === true)
          textResult = 'неправильный';
        }
        a++;
    }
    if(z < myObj[k].answers.length){

      wrong = document.createElement('ol');
      question = document.createElement('li');
      answer = document.createElement('li');
      answer.classList.add('wrong');
      question.innerHTML = myObj[k].text;
      answer.innerHTML = "Ваш ответ: " + textResult;
      textBam.appendChild(wrong);
      wrong.appendChild(question);
      wrong.appendChild(answer);


      // wrong = document.createElement('li');
      // wrong.classList.add('wrong');
      // wrong.innerHTML = myObj[k].text + '\n' + "Ваш ответ: " + textResult;
      // textBam.appendChild(wrong);
    } else {

      right = document.createElement('ol');
      question = document.createElement('li');
      answer = document.createElement('li');
      answer.classList.add('right');
      question.innerHTML = myObj[k].text;
      answer.innerHTML = "Ваш ответ: " + textResult;
      textBam.appendChild(right);
      right.appendChild(question);
      right.appendChild(answer);

      // right = document.createElement('li');
      // right.classList.add('right');
      // right.innerHTML = myObj[k].text + '\n' + "Ваш ответ: " + textResult;
      // textBam.appendChild(right);

      result++;
    }
  }

  if (result <= (myObj.length - 2)) {
      resume.innerHTML = '<p>Вы допустили несколько ошибок, к сожалению</p>';
  } else if (result == myObj.length) {
      resume.innerHTML = 'Вы прошли тест без единой ошибки!';
  } else {
    resume.innerHTML = 'Вы допустили всего одну ошибку!';
  }
}


    var modalWindow = document.querySelector('.overlay');
    var modal = document.querySelector('.modal');
    var resume = document.createElement('div');
    resume.classList.add('resume');
    var paragraph = document.querySelector('.questionRepeat');
    var textBam = document.querySelector('.results');
    var textResult;
    var wrong;
    var right;

    modal.insertBefore(resume, textBam);


    function showModal() {
      modalWindow.style.display = 'block';
    }




    function resetAnswers(){
      for (var c = 0; c < inputs.length; c++){
        inputs[c].checked = false;

      }

      result = 0;
      z = 0;
      a = 0;

    }

    var array;
    var arrayLength;


    function resetText() {
      array = textBam.getElementsByTagName('*');
      arrayLength = array.length;
      for (var e = 0; e <= arrayLength; e = 0) {
          textBam.removeChild(array[e]);
      }
    }

    function hideModal(){
      modalWindow.style.display = 'none';
    }

    var ok = document.querySelector('.btn');

    ok.addEventListener('click', resetText);
    ok.addEventListener('click', resetAnswers);
    ok.addEventListener('click', hideModal);
