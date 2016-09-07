$(function(){
  $('.cross').click(function(){
    $('.main-menu-mobile').slideUp();
    $(this).css('display','none');
    $('.icon-menu').css('display','block');

  })

  $('.icon-menu').click(function(){
    $('.main-menu-mobile').slideDown();
    $(this).css('display','none');
    $('.cross').css('display','block');

  })
})
