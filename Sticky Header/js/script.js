
var headers = document.querySelectorAll('.header')[0];
var headers1 = document.querySelectorAll('.header')[1];
var headers2 = document.querySelectorAll('.header')[2];


// var stuck = false;
// var stickPoint = getDistance();

// function getDistance() {
//   var topDist = headers.offsetTop;
//   return topDist;
// }
//
// function getDistance1() {
//   var topDist = headers1.offsetTop;
//   return topDist;
// }
//
// function getDistance2() {
//   var topDist = headers2.offsetTop;
//   return topDist;
// }

window.onscroll = function(e) {
  var offset = window.pageYOffset;
  // var distance = getDistance() - offset;
  // var distance1 = getDistance1() - offset;
  // var distance2 = getDistance2() - offset;


  if ((offset >= 100) && (offset < 400)) {
    headers.style.position = 'fixed';
    headers.style.top = '0px';
  } else {
    headers.style.position = 'static';
    headers.style.top = '100px';
  }

  if ((offset >= 400) && (offset < 755)) {
    headers1.style.position = 'fixed';
    headers1.style.top = '0px';
  } else {
    headers1.style.position = 'static';
  }

  if (offset >= 755) {
    headers2.style.position = 'fixed';
    headers2.style.top = '0px';

  } else {
    headers2.style.position = 'static';
  }

}
