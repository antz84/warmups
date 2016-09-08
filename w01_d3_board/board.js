console.log("The Board");

for(i = 0; i < 3; i++) {
  if (i % 2 === 0)
    console.log("aaa");
  else
    console.log("bbb");
}

var maxHeight = 8;
var maxWidth = 12;
var symbol = '[]';
var board = '';

for (var heightCounter = 1; heightCounter <= maxHeight; heightCounter++) {
  for (var widthCounter = 1; widthCounter <= maxWidth; widthCounter++) {
    if ((heightCounter + widthCounter) % 2 !== 0)
      board += ' ';
    else
      board += symbol;
  }
  board += '\n';
}

console.log(board);
