$(function(){

  // hover on feedbacks
  $('#photo, #photo2, #photo3').hover(
  function() {
    $(this).parent().find('.quote, .name').css({'color': '#a70c5d'});
  }, function() {
    $(this).parent().find('.name, .quote').css({'color': ''});
  });

  // change feedback for video
  $('#photo, #photo2, #photo3').click(
  function() {
    $(this).parent().find('.text, .photo, .quote').hide();
    $(this).parent().find('.video, .play').show();

  });

  // change video for feedback
  $('#play, #play2, #play3').click(
  function() {
    $(this).parent().find('.video, .play').hide();
    $(this).parent().find('.text, .photo, .quote').show();

  });

  // show modal window
  // $('#optima').hover(
  // function() {
  //   $('#modal').css({'z-index': 1});
  //   $('#pink_arrow').css({'z-index': 2});
  // }, function() {
  //   $('#modal').css({'z-index': '-1'});
  //   $('#pink_arrow').css({'z-index': '-1'});
  // });

  $('#optima').click(function() {
    if ( $( "#modal" ).is(':hidden') ) {
      $('#modal, #pink-arrow').show();

    } else {
      $('#modal, #pink-arrow').hide();      
    }
  })

  // show list of interests
  $('#list-button').click(function() {
    if ( $( "#list" ).is(':visible') ) {
      $( "#list" ).slideUp( "slow", function(){
          $('#list-button').css({'transform': 'rotate(-90deg)'});
      });
    } else {

      $('#list').slideDown('slow', function(){
        $('#list-button').css({'transform': 'rotate(90deg)'});
      });
    }
  })


    // $('#list-button').click(
    //   function() {
    //     $('#list').slideDown('slow', function(){
    //       $('#list-button').css({'transform': 'rotate(90deg)'});
    //     });
    //
    //   })


})