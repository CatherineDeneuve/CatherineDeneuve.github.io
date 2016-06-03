
var headers = document.querySelectorAll('.header');
var texts = document.querySelectorAll('.text');

var headHeight = document.querySelector('.head').clientHeight;
var headerHeight = headers[0].clientHeight;
var delta = headerHeight + texts[0].clientHeight;

var normalPaddingTop = getComputedStyle(texts[0]).paddingTop;
function ready() {
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
}

document.addEventListener("DOMContentLoaded", ready);
