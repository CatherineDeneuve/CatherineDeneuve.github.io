
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
              borderColor: "rgba(0,0,0,0.25)",
              boxShadow: "inset 0 0 5px rgba(0,0,0, 0.4), rgba(255,255,255,0.1) 0 1px 0",
              textShadow: "rgba(0, 0, 0, 0.796875) 0 -1px 0, rgba(255, 255, 255, 0.296875) 0 0 10px"
          });
      }, function(){
          $(this).css({
              boxShadow: "none",
              textShadow: "none",
              borderColor: "transparent"
          });
      });
    }
    highlight();



    $('.menu li').click(function(){
        $('.menu li').removeClass('highlighted');
        $(this).addClass('highlighted');
        highlight();
        $(this).off( "mouseenter mouseleave" ).css({
            borderColor: "transparent",
            boxShadow: "none"
        });
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
