// sample maps to test on

var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"]
];

var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];

var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];

var holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

console.log('Welcome Dr Jones...');

// Mine.. v1 and v2

function treasureFinder(array) {
  var columns = array.length;
  for(i = 0; i < columns; i++) {
    console.log(i + ' columns: ' + columns);
    if(i == 'x' || i == 'X') {
      console.log('found treasure');
    } else {
      console.log('no treasure');
    }
  }
}

function dimensions(array) {
  var rows = [];
  var columns = array.length;
  for(var i = 0; i < columns; i++) {
    rows.push(array[i].length);
    var x = Math.min.apply(null, rows);
    var y = columns;
    return [x, y];
  }
}

// Harry's soln ..using 'reduce'

function findTreasure(treasureMap, key) {
	return treasureMap.reduce(function(a, row, index) {
		if (a.length > 2) {
			a = 'That doesn\'t belong in a museum';
			return a;
		}
		if (row.indexOf(key) !== -1) {
			a.push(index);
			a.push(row.indexOf(key));
		}
		return a;
	}, []);
}

console.log(findTreasure(holyGrailMap, 'G'));

// Andrew's soln

function treasureFinder(map, char) {
 var coordinates = [];
 map.forEach(function (element, index) {
   if (coordinates.length > 2) {
     coordinates = "that doesnt belong in a museum";
     return;
   }
   if (element.indexOf(char) !== -1) {
     coordinates.push(element.indexOf(char));
     coordinates.push(index);
     return;
   }
 });
 return coordinates;
}
