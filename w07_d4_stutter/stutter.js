console.log('Stutter');

// accum('abcd') - - >> "A-Bb-Ccc-Dddd"

// split characters
// make one of 1st, 2 of 2nd, etc
// capitalize first
// lower subsequent
// join with '-'
// return the lot

// bonus: accept a second argument, 'step'

function accum(word) {
  if(word === word) {
    console.log(word);
  }

  var split = word.split('');

  for (var i = 0; i < length; i++) {
    word += ([split[i]]);
  }
  console.log(word);
  return accum;
}

// harrys solution

var accum = function(word, step) {
    step = step || 1;

    return word.toLowerCase().split('').map(function(e, i) {
        var stutt = e.repeat(i + step);
        return stutt.charAt(0).toUpperCase() + stutt.slice(1);
    }).join('-');
};

console.log(accum('cwAt'));
