$(document).ready(function() {

    // // SLIDER vertical
    // var left = $('.icon-left-open-big');
    // var right = $('.icon-right-open-big');
    // var elementsList = $('.slider-list');
    //
    // var listHeight = $('.slider-list').height();
    // var slide = $('.carousel-hider').height();
    //
    // var currentTopValue = 0;
    // var minimumOffset = -(listHeight - slide);
    // var maximumOffset = 0;
    //
    //
    //
    // function checkArrow() {
    //     if (currentTopValue == maximumOffset) {
    //         left.addClass('inactive');
    //     } else {
    //         left.removeClass('inactive');
    //     }
    //     if (currentTopValue == minimumOffset) {
    //         right.addClass('inactive');
    //     } else {
    //         right.removeClass('inactive');
    //     }
    // };
    // checkArrow();
    //
    // function goRight() {
    //     if (currentTopValue != minimumOffset) {
    //         currentTopValue -= slide;
    //         console.log(currentTopValue);
    //         elementsList.animate({
    //             top: currentTopValue + "px"
    //         }, 'fast');
    //         checkArrow();
    //         checkSlide();
    //     }
    // }
    //
    // function goLeft() {
    //     if (currentTopValue != maximumOffset) {
    //         currentTopValue += slide;
    //         elementsList.animate({
    //             top: currentTopValue + "px"
    //         }, 'fast');
    //         checkArrow();
    //         checkSlide();
    //
    //     }
    // }
    //
    // function checkSlide() {
    //     if (currentTopValue === 0) {
    //         $('.inputs input:nth-of-type(1)').prop("checked", true);
    //     } else {
    //         var number = (-currentTopValue / slide);
    //         $($('.inputs input')[number]).prop("checked", true);
    //     }
    // }
    // checkSlide();
    //
    //
    // function switchRadiobutton() {
    //     var inputs = $('.inputs input');
    //
    //     var checkedRadiobutton = inputs.index($('.inputs input:checked'));
    //     if (checkedRadiobutton === 0) {
    //         currentTopValue = 0;
    //
    //         elementsList.animate({
    //             top: currentTopValue + "px"
    //         }, 'fast');
    //         checkArrow();
    //     } else {
    //         console.log('checkedRadiobutton', checkedRadiobutton);
    //         var number = checkedRadiobutton;
    //         currentTopValue = -(number * slide);
    //         console.log('currentTopValue', currentTopValue);
    //         elementsList.animate({
    //             top: currentTopValue + "px"
    //         }, 'fast');
    //         checkArrow();
    //     }
    //
    // }
    // switchRadiobutton();
    //
    //
    // $('.inputs').on('click', switchRadiobutton);
    // left.on('click', goLeft);
    // right.on('click', goRight);


    // SLIDER horizontal
    var left = $('.icon-left-open-big');
    var right = $('.icon-right-open-big');
    var elementsList = $('.slider-list');


    var listWidth = $('.slider-list').width();
    var slide = $('.carousel-hider').width();

    console.log(listWidth);

    var currentLeftValue = 0;
    var minimumOffset = -(listWidth - slide);
    var maximumOffset = 0;



    function checkArrow() {
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
    checkArrow();

    function goRight() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= slide;
            console.log(currentLeftValue);
            elementsList.animate({
                left: currentLeftValue + "px"
            }, 'slow');
            checkArrow();
            checkSlide();
        }
    }

    function goLeft() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += slide;
            elementsList.animate({
                left: currentLeftValue + "px"
            }, 'slow');
            checkArrow();
            checkSlide();

        }
    }

    function checkSlide() {
        if (currentLeftValue === 0) {
            $('.inputs input:nth-of-type(1)').prop("checked", true);
        } else {
            var number = (-currentLeftValue / slide);
            $($('.inputs input')[number]).prop("checked", true);
        }
    }
    checkSlide();


    function switchRadiobutton() {
        var inputs = $('.inputs input');

        var checkedRadiobutton = inputs.index($('.inputs input:checked'));
        if (checkedRadiobutton === 0) {
            currentLeftValue = 0;

            elementsList.animate({
                left: currentLeftValue + "px"
            }, 'fast');
            checkArrow();
        } else {
            console.log('checkedRadiobutton', checkedRadiobutton);
            var number = checkedRadiobutton;
            currentLeftValue = -(number * slide);
            console.log('currentLeftValue', currentLeftValue);
            elementsList.animate({
                left: currentLeftValue + "px"
            }, 'fast');
            checkArrow();
        }

    }
    switchRadiobutton();


    $('.inputs').on('click', switchRadiobutton);
    left.on('click', goLeft);
    right.on('click', goRight);


    // OVERLAY (MENU FOR MOBILE)

    var cross = $('.icon-cancel-1');
    var overlay = $('.menu');
    var menu = $('.icon-menu');

    cross.click(function() {
        overlay.slideUp();
    });

    menu.click(function() {
        overlay.slideDown();
    });



}); //jQuery
