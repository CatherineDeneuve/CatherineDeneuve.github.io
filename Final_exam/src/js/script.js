$(function () {

// AJAX-запросы
    $('.search').on('click', search);
    $(window).on('load', search);

    function search(e) {
        e.preventDefault();
        $('#container img').remove();
        var $searchKey = $('.text').val();

        $.ajax({
            url: 'https://pixabay.com/api/?key=2716174-89a9b125a63640e63bc918f65&q=' + $searchKey + '&image_type=photo' + '&per_page=10',
            dataType: 'jsonp',

            success: function (data) {
                var $results = data.hits;
                for (var i = 0; i < data.hits.length; i++) {
                  var tags = $results[i].tags;
                  var arr = tags.split(', ');
                  var word = arr[0];
                  var name = '<p>' + word + '</p>';
                  var img = '<img src="' + $results[i].previewURL + '">' + name;
                  var div = '<div>' + img + '</div>';
                  $container.append(div);
                  $('.container div').addClass('item');
                  initializeMasonry();
                }

            },
            error: function () {
                alert('Error!');
                initializeMasonry();
            }
        });

        $('.text').val('');
    }


var $container = $('.container');

function initializeMasonry(){
        $container.imagesLoaded( function() {
            $container.masonry({
                itemSelector: '.item',
                columnWidth: 300
                });
        });


}

});
