$(function () {
  var $container = $('.container');

  function initializeMasonry(){
          $container.imagesLoaded( function() {
              $container.masonry({
                  // Настройки
                  columnWidth: '.item',
                  itemSelector: '.item'
              });
          });
  }
// AJAX-запросы

    $('.search').on('click', search);
    $(window).on('load', search);


    function search(e) {
        e.preventDefault();
        $container.masonry('destroy');
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




// var container = document.querySelector('.container');
// var msnry;
// // Инициализация Масонри, после загрузки изображений
// function initializeMasonry(){
//   imagesLoaded( container, function() {
//     msnry = new Masonry( container, {
//     // Настройки
//     columnWidth: 200,
//     itemSelector: '.item'
//     });
//   });
// }

// function initializeMasonry(){
//         $container.imagesLoaded( function() {
//             $container.masonry({
//                 columnWidth: function( containerWidth ) {
//                     return containerWidth / 3
//                 }
//             });
//         });
//     }


});
