console.log('Paddy');

var shamrock = document.getElementsByTagName('img')[0];
var AskPaddy = document.getElementsByTagName('button')[0];
var input = document.getElementsByTagName('input')[0];
var answer = document.getElementById('answer');

function conversation() {
  console.log('test');
  console.log(AskPaddy.value);
  if(input.value === 'Happy St Patrick') {
   answer.innerHTML = 'tildlely, de potatoes';
  } else if(input.value === 'Do you want a pint of Guinness?') {
    answer.innerHTML = 'Just the luck of the Irish';
  } else if(input.value === 'Paddy, its your round') {
    answer.innerHTML = 'Look, Leprechaun!';
  } else {
    answer.innerHTML = "dunno"
  }
}

AskPaddy.addEventListener('click', conversation);
