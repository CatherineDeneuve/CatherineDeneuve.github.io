var wrapper = document.body;

var h = 0;
var m = 0;
var s = 0;
var ms = 0;

var intervalMs;

var li;


var timeShow = document.createElement('div');
compareS();
timeShow.innerHTML = h + ':' + m + ':' + s + '.' + ms;
timeShow.classList.add('time');
wrapper.appendChild(timeShow);

var buttonStart = document.createElement('button');
buttonStart.innerHTML = 'Start';
wrapper.appendChild(buttonStart);
buttonStart.classList.add('button-start');
buttonStart.classList.add('pure-button');


var buttonSplit = document.createElement('button');
buttonSplit.innerHTML = 'Split';
buttonSplit.classList.add('button-split');
buttonSplit.classList.add('pure-button');
wrapper.appendChild(buttonSplit);

var buttonReset = document.createElement('button');
buttonReset.innerHTML = 'Reset';
buttonReset.classList.add('button-clear');
buttonReset.classList.add('pure-button');
wrapper.appendChild(buttonReset);


function msGo() {

  if (buttonStart.innerHTML == 'Start'){
    buttonStart.innerHTML = 'Stop';
    intervalMs = setInterval(plusOneMs, 5);
    buttonSplit.disabled = false;

  } else {
    buttonStart.innerHTML = 'Start';
    clearInterval(intervalMs);
    buttonSplit.disabled = true;
    li = document.createElement('li');
    compareS();
    li.classList.add('liStyle');
    li.innerHTML = 'Stop: ' + '&nbsp;' + h + ':' + m + ':' + s + '.' + ms;

    ol.appendChild(li);
  }
  colorButtonSwitch();
}


function showSplit() {
    if (buttonStart.innerHTML == 'Stop')
      li = document.createElement('li');
      li.classList.add('liStyle');
      compareS();
      li.innerHTML = 'Split: ' + h + ':' + m + ':' + s + '.' + ms;
      ol.appendChild(li);
}

var ol = document.createElement('ol');
ol.classList.add('olStyle');
wrapper.appendChild(ol);

function colorButtonSwitch(){
  if (buttonStart.innerHTML == 'Start'){
    buttonStart.style.background = 'linear-gradient(#FFF, #BFFF00)';
  } else {
    buttonStart.style.background = 'linear-gradient(#FFF, yellow)';
  }
}

function compareS() {
  if (s < 10) {
    s = "0" + s;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (h < 10) {
    h = "0" + h;
  }
  if(ms < 10) {
    ms = '00' + ms;
  } else if (ms >= 10 && ms < 100) {
    ms = '0' + ms;
  } else {
    ms = ms;
  }
}

function plusOneMs() {
  if(ms == 995){
    ms = 0;
    plusOneS();
  } else {
    ms += 5;
  }
    compareS();
  timeShow.innerHTML = h + ':' + m + ':' + s + '.' + ms;

  ms = Number(ms);
  s = Number(s);
  m = Number(m);
  h = Number(h);

}

function plusOneS(){
  if(s == 59){
    s = 0;
    plusOneM();
  } else {
    s++;
  }
}

function plusOneM() {
  if(m == 59){
    m = 0;
    plusOneH();
  } else {
    m++;
  }
}

function plusOneH(){
  h++;
}



function clearTimer() {
  if (buttonStart.innerHTML !== 'Start') {
    buttonStart.innerHTML = 'Start';
    buttonStart.style.background = 'linear-gradient(#FFF, #BFFF00)';
  }
    clearInterval(intervalMs);

    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    compareS();
    timeShow.innerHTML = h + ':' + m + ':' + s + '.' + ms;
    deleteOl();
    colorButtonSwitch();
}

function deleteOl() {
  var array = ol.getElementsByTagName('*');
  var arrayLength = array.length;
  for (var i = 0; i <= arrayLength; i=0) {
      ol.removeChild(array[i]);
  }
}

buttonStart.addEventListener('click', msGo);
buttonSplit.addEventListener('click', showSplit);
buttonReset.addEventListener('click', clearTimer);
