console.log('romans');

function vidi(num) {
  var arr = [];
  var fill = arr << num;
  var split = arr.split('');

  switch(num) {
    case(num % 1000 === 0):
      for(i = 0; i < 3; i+= 1000) {
        console.log('M');
      }
      break;
    case(num % 500 === 0):
      for(i = 0; i < 9; i+= 500) {
        console.log('D');
      }
      break;
    case(num % 100 === 0):
      for(i = 0; i < 9; i+= 100) {
        console.log('C');
      }
      break;
    case(num % 50 === 0):
      for(i = 0; i < 3; i+= 50) {
        console.log('L');
      }
      break;
    case(num % 10 === 0):
      for(i = 0; i < 9; i+= 10) {
        console.log('X');
      }
      break;
    case(num % 5 === 0):
      for(i = 0; i < 9; i+= 5) {
        console.log('V');
      }
        break;
    case(num % 1 === 0):
      for(i = 0; i < 9; i++) {
        console.log('I');
      }
        break;
    }
}

function veni(num) {
  switch(num) {
    case 1:
      console.log('I');
      break;
    case 10:
      console.log('X');
      break;
    case 7:
      console.log('VII');
      break;
  default:
    break;
  }
}

function romans(num) {
  if(num === 1) {
    console.log('I');
  } else if (num === 10) {
    console.log('X');
  } else if (num === 7) {
    console.log('VII');
  }
}

function convert(num) {
  //chart that maps romans to numbers
var dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  var ans = '';

  for(var ind = 0; ind < dec.length; ind ++) {
    while (dec[ind] <= num) {
      ans += rom[ind];
      num -= dec[ind];
    }
}
  return ans;
}
convert(36);
