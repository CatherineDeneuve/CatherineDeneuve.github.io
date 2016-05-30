$(function () {
    $('.wrapper').slider({
      fontColor: '#2A2A2A'
    });
});


$(function () {
  var html = $('#test').html();

  var articles = [
    {
      title: 'Алещенко Екатерина Сергеевна',
      content: 'Студент курса GoIT',
      whyFrontend: 'Хочу учить frontend, потому что:',
      items: ["Это созидательно", "Это стремиться к красоте", "Это должно быть умно устроено"],
      myPhone: 'Мой контактный телефон тоже:',
      number: '+3802222222',
      myFB: 'Мой профиль на FB:',
      profile: 'katarina.serg',
      myFeedback: 'Мой фидбек:',
      feedback: 'если нужно будет построить забор, я не останусь в стороне'
    },
    {
      title: 'Иванов Иван Иванович',
      content: 'Студент КПИ'
    },
    {
      title: 'Петров Петр Петрович',
      content: 'Студент КНУ'
    }
  ];


var content = tmpl(html, {
  data: articles
});
$('body').append(content);




});
