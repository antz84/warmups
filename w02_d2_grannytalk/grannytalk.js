console.log('Granny Talk');

var question = ('BYE');

var randomYear = (Math.floor*(Math.random(1950-1930)+1));

function grannytalk (question) {
  if (question === 'BYE') {
    return 'What\'s that honey, I didn\'t hear you..';
  } else if (question === question.toUpperCase()) {
      return 'NO, NOT SINCE ' + (randomYear);
      }
    else {
      return 'SPEAK UP SONNY JIM';
      }
}
