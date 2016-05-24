
// Выпадающее меню на jQuery
$(function () {
  var menu = $('.dropDownMenu');
  var portrait = $('.portrait');

  $('.withArrow').mouseenter(
    function () {
      menu.show().animate({
        height: '132px'
      }, 500, 'easeOutCubic');
    });
  $('.withArrow').mouseleave(
   function () {
      menu.animate({
        height: '0'
      }, 500).hide();
  });

  $('.dropDownMenu, .portrait').hover(
    function () {
      $(this).animate({
        backgroundColor: '#2A2A2A'
      }, 500);
    },
    function () {
      $(this).animate({
        backgroundColor: '#444444'
      }, 500);
    }
  );

  $('.dropDownList:eq(1)').mouseenter(
    function () {
      portrait.css('display', 'inline-block').animate({
        height: '66px'
      }, 500, 'easeOutCubic');
    }).mouseleave(
   function () {
      portrait.animate({
        height: '0'
      }).hide();

  });
});

// Карусель

$(function() {

// Инициализация слайдера

$('.jcarousel').jcarousel({
  // Базовые настройки скрипта пишутся здесь

});

// Прокрутка слайдера


// Кнопка PREV

$('.jcarousel-prev')

// Триггер класса inactive

.on('jcarouselcontrol:active', function() {
  $(this).removeClass('inactive');
})
.on('jcarouselcontrol:inactive', function() {
  $(this).addClass('inactive');
})

// Инициализация кнопки PREV

.jcarouselControl({
  target: '-=1'
});

// Кнопка NEXT

$('.jcarousel-next')

// Триггер класса inactive

.on('jcarouselcontrol:active', function() {
  $(this).removeClass('inactive');
})
.on('jcarouselcontrol:inactive', function() {
  $(this).addClass('inactive');
})

// Инициализация кнопки NEXT

.jcarouselControl({
  target: '+=1'
});

// Пагинация слайдера
$(window).load(function() {
  $('.jcarousel-pagination')

  // Триггер класса active

  .on('jcarouselpagination:active', 'a', function() {
    $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
    $(this).removeClass('active');
  })

  // Инициализация пагинации

  .jcarouselPagination({
    item: function(page) {
      return '<a href="#' + page + '">' + page + '</a>';
    }
  });
});


// Автопрокрутка слайдера

// $('.jcarousel').jcarouselAutoscroll({
//     interval: 3000,
//     target: '+=1',
//     autostart: true
// });

});

// Стилизируем селекты

$(document).ready(function() {
  $('select').niceSelect();
});

// Стилизируем чекбоксы
  $(function(){

      $(".niceCheck").each(
      /* при загрузке страницы меняем обычные на стильные checkbox */
      function() {
          changeCheckStart($(this));
      });

  function changeCheck(el)
  /*
  	функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, который отвечает за новый вид)
  	el - span контейнер для обычного чекбокса
  	input - чекбокс
  */
  {

  	var el = el;
  		input = el.find("input").eq(0);
  	    if(el.attr("class").indexOf("niceCheckDisabled")==-1){
         		if(!input.attr("checked")) {
      			el.addClass("niceChecked");
      			input.attr("checked", true);
  		} else {
  			el.removeClass("niceChecked");
  			input.attr("checked", false).focus();
  		}
  	}

      return true;
  }

  function changeVisualCheck(input){
  /*
  	меняем вид чекбокса при смене значения
  */
  var wrapInput = input.parent();
  	if(!input.attr("checked")) {
  		wrapInput.removeClass("niceChecked");
  	}
  	else
  	{
  		wrapInput.addClass("niceChecked");
  	}
  }

  function changeCheckStart(el){

    try {
  var el = el,
  	checkName = el.attr("name"),
  	checkId = el.attr("id"),
  	checkChecked = el.attr("checked"),
  	checkDisabled = el.attr("disabled"),
  	checkTab = el.attr("tabindex"),
    checkValue = el.attr("value");
  	if(checkChecked)
  		el.hide().after("<span class='niceCheck niceChecked'>"+
  			"<input type='checkbox'"+
  			"name='"+checkName+"'"+
  			"id='"+checkId+"'"+
  			"checked='"+checkChecked+"'"+
              "value='"+checkValue+"'"+
  			"tabindex='"+checkTab+"' /></span>");
  	else
  		el.hide().after("<span class='niceCheck'>"+
  			"<input type='checkbox'"+
  			"name='"+checkName+"'"+
  			"id='"+checkId+"'"+
               "value='"+checkValue+"'"+
  			"tabindex='"+checkTab+"' /></span>");


  	if(checkDisabled){
  		el.next().addClass("niceCheckDisabled");
  		el.next().find("input").eq(0).attr("disabled","disabled");
  	}


  	el.next().bind("mousedown", function(e) {
      changeCheck($(this));
    });
  	el.next().find("input").eq(0).bind("change", function(e) {
      changeVisualCheck($(this));
    });
  	if(jQuery.browser.msie)
  	{
  		el.next().find("input").eq(0).bind("click", function(e) {
        changeVisualCheck($(this));
      });
  	}
  	el.remove();
  }
  catch(e)
  {
  	// если ошибка, ничего не делаем
  }

      return true;
  }

});
