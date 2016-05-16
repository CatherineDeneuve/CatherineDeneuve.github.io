$(function(){
    $('.menu a').on('click', function(e) {
        e.preventDefault();
        $('.menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tabsContent').not(tab).css({'display':'none'});
        $(tab).fadeIn(100);
    });

});

$(function(){

          $(".menu li a").on("click", function(){
            $(".menu li a").removeClass("highlighted"); //удаляем класс во всех вкладках
            $(this).addClass("highlighted"); //добавляем класс текущей (нажатой)

          });



          $('.menu li').hover(function(){
            $(this).css({
              borderColor: "#A02C00"
            });
          }, function(){
              $(this).css({
                borderColor: "transparent"
              });
            });

});



// $(function(){
//   $(".menu li a").on("click", function(){
//     $(".menu li a").removeClass("highlighted"); //удаляем класс во всех вкладках
//     $(this).addClass("highlighted"); //добавляем класс текущей (нажатой)
//
//   });
// });

$(function(){
    $('input[type=text]').hover(function(){
      $(this).next('em').animate ({
          opacity: "show"
      }, "slow");
    }, function(){
      $(this).next('em').animate ({
          opacity: "hide"
      }, "slow");
    }
  );
}
);

$(function(){
    $('input[type=button]').click(function(){
      $('em').animate ({
          opacity: "show"
      }, "slow");

    });
});
