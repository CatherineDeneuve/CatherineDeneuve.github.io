
var h = 0;
var m = 0;
var s = 0;
var ms = 0;

var timeShow;
var buttonSwitch;
var buttonClear;

var intervalMs;
var intervalS;
var intervalM;
var intervalH;

var span;


var wrapper = {
    timer: document.body,

    compareMs: function () {
      if(ms < 10) {
        span.innerHTML = '00' + ms;
      } else if (ms >= 10 && ms < 100) {
        span.innerHTML = '0' + ms;
      } else {
        span.innerHTML = ms;
      }
    },

    compareS: function() {
      if (s < 10) {
        s = "0" + s;
      }
      if (m < 10) {
        m = "0" + m;
      }
      if (h < 10) {
        h = "0" + h;
      }
    },

    colorButtonSwitch: function (){
      if (buttonSwitch.innerHTML == 'Pause'){
        buttonSwitch.style.background = 'linear-gradient(#FFF, #FA5858)';
      } else if (buttonSwitch.innerHTML == 'Continue') {
        buttonSwitch.style.background = 'linear-gradient(#FFF, #FFFF00)';
      } else if (buttonSwitch.innerHTML == 'Start'){
        buttonSwitch.style.background = 'linear-gradient(#FFF, #BFFF00)';
      }
    },

    styleMs: function () {
      span = document.getElementsByTagName('span')[0];
      span.classList.add('ms');
      wrapper.compareMs();
    },

    init: function(){

      timeShow = document.createElement('div');
      wrapper.compareS();
      timeShow.innerHTML = h + ':' + m + ':' + s + '<span>' + ms + '</span>';

      timeShow.classList.add('time');
      this.timer.appendChild(timeShow);
      wrapper.styleMs();

      buttonSwitch = document.createElement('button');
      buttonSwitch.innerHTML = 'Start';
      buttonSwitch.classList.add('button-start');
      buttonSwitch.classList.add('pure-button');

      wrapper.colorButtonSwitch();

      this.timer.appendChild(buttonSwitch);

      buttonClear = document.createElement('button');
      buttonClear.innerHTML = 'Clear';
      buttonClear.classList.add('pure-button');
      buttonClear.classList.add('button-clear');

      this.timer.appendChild(buttonClear);


      buttonSwitch.addEventListener('click', this.msGo);
      buttonClear.addEventListener('click', this.clearTimer);
    },

    msGo: function() {
      if (buttonSwitch.innerHTML == 'Pause'){
        buttonSwitch.innerHTML = 'Continue';
        clearInterval(intervalMs);
        wrapper.colorButtonSwitch();
      } else {
        buttonSwitch.innerHTML = 'Pause';
        wrapper.colorButtonSwitch();
        intervalMs = setInterval(wrapper.plusOneMs, 5);
      }
    },

    plusOneMs: function () {
      if(ms == 995){
        ms = 0;
        wrapper.plusOneS();
      } else {
        ms += 5;
      }
        wrapper.compareS();
      timeShow.innerHTML = h + ':' + m + ':' + s + '<span>' + ms + '</span>';

      s = Number(s);
      m = Number(m);
      h = Number(h);
      wrapper.styleMs();
    },

    plusOneS: function (){
      if(s == 59){
        s = 0;
        wrapper.plusOneM();
      } else {
        s++;
      }
    },

    plusOneM: function() {
      if(m == 59){
        m = 0;
        wrapper.plusOneH();
      } else {
        m++;
      }
    },

    plusOneH: function (){
      h++;
    },

    clearTimer: function () {
      if (buttonSwitch.innerHTML !== 'Start') {
        buttonSwitch.innerHTML = 'Start';
        clearInterval(intervalMs);
        wrapper.colorButtonSwitch();

        h = 0;
        m = 0;
        s = 0;
        ms = 0;
        wrapper.compareS();
        timeShow.innerHTML = h + ':' + m + ':' + s + '<span>' + ms + '</span>';
        wrapper.styleMs();
      }
    }
};

wrapper.init();
