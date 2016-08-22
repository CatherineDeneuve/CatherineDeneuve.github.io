$(function() {
    $('.small a').click(function(e){
      e.preventDefault();
      $('.small a').removeClass('active');
  		if($('.carousel img').attr('src') != $(this).attr('href')){
      	$(this).addClass('active');
      	$('.carousel img').attr('src', $(this).attr('href'));
  	   };
  	});



    $('.carousel-arrow-right').click(function() {
      if($('.carousel img').attr('src') == $('.small a:last').attr('href')) {
        $('.active').removeClass('active');
        $('.carousel img').attr('src', $('.small a:first').addClass('active').attr('href'));
      } else {
        $('.carousel img').attr('src', $('.active').removeClass('active').next().addClass('active').attr('href'));
      }
    })


    $('.carousel-arrow-left').click(function() {
      if($('.carousel img').attr('src') == $('.small a:first').attr('href')) {
        $('.active').removeClass('active');
        $('.carousel img').attr('src', $('.small a:last').addClass('active').attr('href'));
      } else {
        $('.carousel img').attr('src', $('.active').removeClass('active').prev().addClass('active').attr('href'));
      }
    })


    $('.low-navigation a').on('click', function(e) {
        e.preventDefault();
        $('.low-navigation .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tabsContent').not(tab).css({'display':'none'});
        $(tab).fadeIn(4);
    });

    $('.low-navigation li').click(function(){
        $('.low-navigation li').removeClass('highlighted');
        $(this).addClass('highlighted');
    });

    $('.menu a').on('click', function(e) {
        e.preventDefault();
        $('.menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.pageContent').not(tab).css({'display':'none'});
        $(tab).fadeIn(4);
    });

    $('.menu li').click(function(){
        $('.menu li').removeClass('highlighted');
        $(this).addClass('highlighted');
    });

    $('.pagination a').on('click', function(e) {
        e.preventDefault();
        $('.pagination .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.blogContent').not(tab).css({'display':'none'});
        $(tab).fadeIn(4);
    });

    $('.pagination li').click(function(){
        $('.pagination li').removeClass('highlighted');
        $(this).addClass('highlighted');
    });

    $('a.fancybox').fancybox({
      // overlayColor: 'rgba(255,100,255,0.7)'
    });




}); //End jQuery
