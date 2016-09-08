console.log('makeFakeMap');

// my original idea

var array = [];

function makeFakeMap(w, h) {
  for (var heightCounter = 1; heightCounter <= h; heightCounter++) {
    for (var widthCounter = 1; widthCounter <= w; widthCounter++) {
      array += 'X';
      return array;
    }
  }
}

// similar to jordans code

function map(x, y) {
  var map = [];
  for(i = 0; i <= size; i++) {
      if(i <= size) {
        return 'X';
      }
    }
}


// deans code

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makeFakeMapRegion(x, y, regionChar, regionSize, secretChar) {

var finalArray = [];

var normalChar = 'A';
var regionStartX = getRandomIntInclusive(0,y-(regionSize));
var regionEndX = regionStartX + regionSize-1;
var regionStartY = getRandomIntInclusive(0,y-(regionSize));
var regionEndY = regionStartY + regionSize-1;
var secretCharLocationX = getRandomIntInclusive(regionStartX,regionEndX);
var secretCharLocationY = getRandomIntInclusive(regionStartY,regionEndY);

console.log('regionStart,End X',regionStartX,regionEndX);
console.log('regionStart,End Y',regionStartY,regionEndY);
console.log('secretCharLocX,Y',secretCharLocationX, secretCharLocationY);

for (var i = 0;i < x;i++) {
  finalArray[i] = [];

  for (var j = 0;j < y;j++) {
      if ((i >= regionStartX && i <= regionEndX) &&
          (j >= regionStartY && j <= regionEndY)){

              if (i == secretCharLocationX && j == secretCharLocationY) {
                finalArray[i].push(secretChar);
              }
              else {
                finalArray[i].push(regionChar);
              }
      }
      else {
        finalArray[i].push(normalChar);
      }

  }
console.log(i+'-'+finalArray[i].toString());
}

return finalArray;
}

var object = makeFakeMapRegion(7, 7, 'F', 2, 'X');
