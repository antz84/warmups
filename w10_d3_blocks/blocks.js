console.log('blocks');

// rule: if a letter in a block is used when forming a word, the other letter in the block becomes unavailable

var blocks =
[['B','O'],['X','K'],['D','Q'],['C','P'],['N','A'],
['G','T'],['R','E'],['T','G'],['Q','D'],['F','S'],
['J','W'],['H','U'],['V','I'],['A','N'],['E','R'],
['F','S'],['L','Y'],['P','C'],['Z','M'],];

function check(blocks) {
  for(i = 0; i < blocks.length; i++) {
    return(blocks[i]);
  }
}

function canMakeWord(char) {
  blocks.find(check);
}
