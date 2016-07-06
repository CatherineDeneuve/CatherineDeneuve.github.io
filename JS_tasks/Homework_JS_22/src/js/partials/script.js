'use strict';

let ol,
    h3,
    li,
    label,
    elems,
    button,
    input,
    count,
    array,
    question,
    answer,
    textResult,
    wrongRight,
    a = 0,
    result = 0;

const inputs = document.getElementsByTagName('input');
const labels = document.getElementsByTagName('label');
const modalWindow = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const resume = document.createElement('div');
const paragraph = document.querySelector('.questionRepeat');
const textWithResults = document.querySelector('.results');
const ok = document.querySelector('.btn');

let test = {
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
              button.addEventListener('click', check);
              button.addEventListener('click', showModal);
              button.innerHTML = 'Проверить мои результаты';
              button.classList.add('button');
              this.form.appendChild(button);
              this.getGrid(button);
          }

};


const questionary = localStorage.getItem('quiz');
const myObj = JSON.parse(questionary);


$(function () {
  let html = $('#questions').html();
  let content = tmpl(html, {
    data: myObj
  });
  $('body').append(content);
});


function check() {

  for (let i = 0; i < myObj.length; i++) {
    count = 0;
    textResult = '';
    for (let j = 0; j < myObj[i].answers.length; j++) {

        if (inputs[a].checked == myObj[i].answers[j].correct){
          count++;
              if (inputs[a].checked === true) {
                textResult += myObj[i].answers[j].text + "<br/>";
              }
        } else {
          if (myObj[i].answers[j].correct === false)
          textResult += myObj[i].answers[j].text + "<br/>";
        }
        a++;
    }
    wrongRight = document.createElement('ol');
    question = document.createElement('li');
    answer = document.createElement('li');
    question.innerHTML = myObj[i].text;
    answer.innerHTML = 'Ваш ответ:' + "<br/>" + textResult;
    textWithResults.appendChild(wrongRight);
    wrongRight.appendChild(question);
    wrongRight.appendChild(answer);

    if(count < myObj[i].answers.length){
      answer.classList.add('wrong');
    } else {
      answer.classList.add('right');
      result++;
    }
  }

  if (result <= (myObj.length - 2)) {
      resume.innerHTML = '<p>Человечеству свойственно ошибаться</p>';
  } else if (result == myObj.length) {
      resume.innerHTML = '<p>Вы прошли тест более, чем успешно!</p>';
  } else {
    resume.innerHTML = '<p>Вы можете лучше :)</p>';
  }
}

    modal.insertBefore(resume, textWithResults);
    resume.classList.add('resume');


    function showModal() {
      modalWindow.style.display = 'block';
    }


    function resetAnswers(){
      for (let i = 0; i < inputs.length; i++){
        inputs[i].checked = false;
      }

      result = 0;
      count = 0;
      a = 0;
    }

    function resetText() {
      array = textWithResults.getElementsByTagName('ol');
      for (let i = 0; i < array.length; i = 0) {
          array[i].remove();
      }
    }

    function hideModal(){
      modalWindow.style.display = 'none';
    }

ok.addEventListener('click', resetText);
ok.addEventListener('click', resetAnswers);
ok.addEventListener('click', hideModal);
