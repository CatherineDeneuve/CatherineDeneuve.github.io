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
              text: 'Чтобы быть, как все',
              correct: false
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
              text: 'На нём может работать обычный пользователь',
              correct: false
            },
            {
              text: 'Очень легко и весело поддерживать',
              correct: false
            },
          ]
        }
      ];



localStorage.setItem('quiz', JSON.stringify(myObj));
var questionary = localStorage.getItem('quiz');
