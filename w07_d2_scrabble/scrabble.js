// Write a program that, given a word, computes the scrabble score for that word.

// 1. split word into individual characters
// 2. run each character against the value table
// 3. add to final score
// 4. output final score

var scrabbleTable = {
  "A":1, "E":1, "I":1, "O":1, "U":1, "L":1, "N":1, "R":1, "S":1, "T":1,
  "D":2, "G":2,
  "B":3, "C":3, "M":3, "P":3,
  "F":4, "H":4, "V":4, "W":4, "Y":4,
  "K":5,
  "J":8, "X":8,
  "Q":10, "Z":10
};

console.log('Scrabble Score');

function ScrabbleScore(word) {
  var cleaned_word = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toUpperCase();
  var length = cleaned_word.length;
  var split = cleaned_word.split('');
  var score = 0;

  for (var i = 0; i < length; i++) {
    score += (scrabbleTable[split[i]]);
  }
  return score;
}
