console.log('connected');

function spiner(input) {
 //var split = input.split(' ');
 var input = input.toLowerCase();
 input = input.replace(/[' _,./{}<>!@#$%^&*]/g,'-');
 // var spaces = underscore.replace(' ','-');
 // var spacesb = spaces.replace(' ','-');
 return input;
}

//
// function spiner(input) {
//   //break up lowercase letter + uppercase letter combo with a space
//   var regex = /([a-z])([A-Z])/g;
//   str = str.replace(regex, "$1 $2");
//
//   //turn _ into spaces
//   regex = /\_/g;
//   str = str.replace(/\_/g, " ");
//
//   //turn spaces into dashes
//   regex = /\s/g;
//   str = str.replace(regex, "-");
//   str = str.toLowerCase();
//   return str;
// }
