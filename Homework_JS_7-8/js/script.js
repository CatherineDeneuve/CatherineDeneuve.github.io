$(function(){
    $('.menu a').on('click', function(e) {
        e.preventDefault();
        $('.menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tabsContent').not(tab).css({'display':'none'});
        $(tab).fadeIn(4);
    });
});

$(function(){
    function highlight() {
      $('li:not(.highlighted)').hover(function(){
          $(this).css({
              borderColor: "#A02C00"
          });
      }, function(){
          $(this).css({
              borderColor: "transparent"
          });
      });
    }
    highlight();

    $('.menu li').click(function(){
        $('.menu li').removeClass('highlighted');
        $(this).addClass('highlighted');
        highlight();
        $(this).off( "mouseenter mouseleave" ).css("borderColor", "transparent");

    });
});

$(function(){
    $('input[type=text]').hover(function(){
        $(this).next('em').animate ({
            opacity: "show"
        }, "slow");
    }, function(){
        $(this).next('em').animate ({
            opacity: "hide"
        }, "slow");
    });
});

$(function(){
    $('input[type=button]').click(function(){
        $('em').animate ({
            opacity: "show"
        }, "slow");
    });
});
