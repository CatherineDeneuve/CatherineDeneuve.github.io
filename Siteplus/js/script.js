$(document).ready(function() {

  // SLIDER
    var left = $('.carousel-arrow-left');
    var right = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
    var smallHider = $('.carousel-hider-small');
    var listWidth = $('.carousel-list').width();
    var img = $('.carousel-element:first').width();

    var currentLeftValue = 0;
    var currentRightValue = img;
    var minimumOffset = -(listWidth - img);
    var maximumOffset = 0;
    var page = $('.pagination span');


  function checkArrow () {
        if (currentLeftValue == maximumOffset) {
            left.addClass('inactive');
        } else {
            left.removeClass('inactive');
        }
        if (currentLeftValue == minimumOffset) {
            right.addClass('inactive');
        } else {
            right.removeClass('inactive');
        }
    };
    checkArrow ();

    function goRight() {
      if (currentLeftValue != minimumOffset) {
          currentLeftValue -= img;
          elementsList.animate({left: currentLeftValue + "px"}, 500);
          checkArrow();
      }
    }

    function goLeft() {
      if (currentLeftValue != maximumOffset) {
          currentLeftValue += img;
          elementsList.animate({left: currentLeftValue + "px"}, 500);
          checkArrow();
      }
    }

    page.click(function scrollSlider() {
          var pageNumber = $(this).text();
          page.css({color: '#949494'});
          $(this).css({color: '#2c2e37'});
          console.log('img', img);
          currentLeftValue = -((pageNumber - 1) * img);
          elementsList.animate({left: currentLeftValue + "px"}, 500);
          checkArrow ();
    });

    left.on('click', goLeft);
    right.on('click', goRight);
    smallHider.on('click', goRight);

    // OVERLAY

    var cross = $('.cross');
    var overlay = $('menu');
    var menu = $('.icon-menu');

    cross.click(function(){
      overlay.fadeOut();
    });

    menu.click(function(){
      overlay.fadeIn();
    });

}); //jQuery
