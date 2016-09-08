console.log('clock');

var second = document.getElementById('second-hand');
var minute = document.getElementById('minute-hand');
var hour = document.getElementById('hour-hand');
var time = document.getElementById('time-now');
var degreeSec = 90;
var degreeMin = 90;
var degreeHour = 90;

function start () {
  setInterval(secondMove, 83.333333333);
  setInterval(minuteMove, 5000);
  setInterval(hourMove, 300000);
  minuteMove();
  hourMove();
}

function secondMove () {
  second.style.webkitTransform = 'rotate('+degreeSec+'deg)';
  second.style.mozTransform    = 'rotate('+degreeSec+'deg)';
  second.style.msTransform     = 'rotate('+degreeSec+'deg)';
  second.style.oTransform      = 'rotate('+degreeSec+'deg)';
  second.style.transform       = 'rotate('+degreeSec+'deg)';
  degreeSec +=0.5;
}

function minuteMove () {
  minute.style.webkitTransform = 'rotate('+degreeMin+'deg)';
  minute.style.mozTransform    = 'rotate('+degreeMin+'deg)';
  minute.style.msTransform     = 'rotate('+degreeMin+'deg)';
  minute.style.oTransform      = 'rotate('+degreeMin+'deg)';
  minute.style.transform       = 'rotate('+degreeMin+'deg)';
  degreeMin +=0.5;
}

function hourMove () {
  hour.style.webkitTransform = 'rotate('+degreeHour+'deg)';
  hour.style.mozTransform    = 'rotate('+degreeHour+'deg)';
  hour.style.msTransform     = 'rotate('+degreeHour+'deg)';
  hour.style.oTransform      = 'rotate('+degreeHour+'deg)';
  hour.style.transform       = 'rotate('+degreeHour+'deg)';
  degreeHour +=0.5;
}

start();

time.innerHTML = Date();
