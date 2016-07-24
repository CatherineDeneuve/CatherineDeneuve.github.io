//= jquery.min.js
//= masonry.js
//= imagesloaded.js
//= jcarousel.plugin.js

var flag = false;
$(function () {
  var $container = $('.container');

  function initializeMasonry(){
          $container.imagesLoaded( function() {
              $container.masonry({
                  // Настройки
                  columnWidth: function( containerWidth ) {
                    return containerWidth / 3
                  }
              });
          });
  }
// AJAX-запросы

    $('.search').on('click', search);
    $(window).on('load', search);


    function search(e) {
        e.preventDefault();
        if (flag) {
          $container.masonry('destroy');
        } else {
          flag = true;
        }
        $('.container .item').remove();
        var $searchKey = $('.text').val();
        // initializeMasonry();

        $.ajax({
            url: 'https://pixabay.com/api/?key=2716174-89a9b125a63640e63bc918f65&q=' + $searchKey + '&per_page=10',
            dataType: 'jsonp',

            success: function (data) {
                var $results = data.hits;
                for (var i = 0; i < data.hits.length; i++) {
                  var tags = $results[i].tags;
                  var arr = tags.split(', ');
                  var word = arr[0];
                  var name = '<p>' + word + '</p>';
                  var img = '<img src="' + $results[i].webformatURL + '">' + name;
                  var div = '<div>' + img + '</div>';
                  $container.append(div);
                  $('.container div').addClass('item');
                }
                initializeMasonry();
            },
            error: function () {
                alert('Error!');
            }
        });


        $('.text').val('');
    }

// CAROUSEL



});

$(function() {
  // Инициализация слайдера
    $('.jcarousel').jcarousel();
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

  });
