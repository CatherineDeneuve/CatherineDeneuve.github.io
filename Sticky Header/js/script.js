var browser;
(function browserDetectJS() {
  if (window.sidebar) {
    browser = "Firefox";
    return browser;
  }
}());

var headers = document.querySelectorAll('.header');
var texts = document.querySelectorAll('.text');

var headHeight = document.querySelector('.head').clientHeight;
var headerHeight = headers[0].clientHeight;
var delta = headerHeight + texts[0].clientHeight;

var normalPaddingTop = getComputedStyle(texts[0]).paddingTop;
console.log(normalPaddingTop);
// var firstHeader = document.querySelector('.header1');
// var coords = firstHeader.getBoundingClientRect();
// var coordsTop = coords.y;
// console.log(coordsTop);

if (browser == "Firefox"){
  setInterval (function scrollFirefoxScroll() {
    var firstHeader = document.querySelector('.header1');
    console.log(firstHeader);
    var coords = firstHeader.getBoundingClientRect();
    var coordsTop = coords.y;
    console.log(coordsTop);



    if ((coordsTop <= -40) && (coordsTop >= -465)) {
      firstHeader.style.position = 'fixed';
      firstHeader.style.top = '0px';
    }
  }, 4);
    // else if ((coordsTop > -40) || (coordsTop < -465)){
    //   firstHeader.style.position = 'static';
    //   firstHeader.style.top = '50px';
    // }
  // }
}


// })();

// if (browser !== "Firefox") {
window.onscroll = function(e) {
    var offset = window.pageYOffset;

    var stepOffset = headHeight;

    for (var i = 0; i < headers.length; i++){
      if ((offset >= stepOffset) && (offset < (stepOffset + delta))) {
        headers[i].style.position = 'fixed';
        headers[i].style.top = '0px';
        texts[i].style.paddingTop = parseInt(normalPaddingTop, 10) + headerHeight + 'px';
      } else {
        headers[i].style.position = 'static';
        texts[i].style.paddingTop = normalPaddingTop;
      }
      stepOffset += delta;

    }
  };
// }
