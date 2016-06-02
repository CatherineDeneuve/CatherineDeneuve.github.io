var myObj = [
        {
          text: 'Что такое Javascript?',
          answers: [
            {
              text: 'Библиотека',
              correct: false
            },
            {
              text: 'Фреймворк',
              correct: false
            },
            {
              text: 'Язык программирования',
              correct: true
            },
          ]
        },
        {
          text: 'Зачем разработчику знать верстку?',
          answers: [
            {
              text: 'Чтобы лучше разрабатывать',
              correct: true
            },
            {
              text: 'Чтобы понимать работу JS',
              correct: true
            },
            {
              text: 'Чтобы выучить PHP',
              correct: false
            },
          ]
        },
        {
          text: 'Чем удобен Bootstrap?',
          answers: [
            {
              text: 'Можно быстро сделать красивый сайт',
              correct: true
            },
            {
              text: 'Своей адаптивностью',
              correct: true
            },
            {
              text: 'Очень легко и весело поддерживать',
              correct: false
            },
          ]
        }
      ];

// var myObj = {
// header: 'Тест по программированию',
//
// question1: 'Что такое Javascript?',
//
// answer11: 'Библиотека',
// answer12: 'Фреймворк',
// answer13: 'Язык программирования',
//
// question2: 'Зачем разработчику знать верстку?',
//
// answer21: 'Чтобы лучше разрабатывать',
// answer22: 'Чтобы понимать работу JS',
// answer23: 'Чтобы выучить PHP',
//
// question3: 'Чем удобен Bootstrap?',
//
// answer31: 'Можно быстро сделать красивый сайт',
// answer32: 'Своей адаптивностью',
// answer33: 'Очень легко и весело поддерживать'
// };

localStorage.setItem('quiz', JSON.stringify(myObj));
var questionary = localStorage.getItem('quiz');
console.log(questionary);
