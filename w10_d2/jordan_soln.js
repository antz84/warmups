function romanNumeralConverter (number) {
 var numberArray = number.toString().split("");
 var numberLength = numberArray.length;

 if ( numberLength === 4 ) {

   var thousandsNo = numberArray[0]
   var hundredsNo = numberArray[1]
   var tensNo = numberArray[2]
   var unitNo = numberArray[3]

   var result = singleNumberConverter(thousandsNo, "thousands") + singleNumberConverter(hundredsNo, "hundreds") + singleNumberConverter(tensNo, "tens") + singleNumberConverter(unitNo, "unit");
   return result

 } else if ( numberLength === 3 ) {

   var hundredsNo = numberArray[0]
   var tensNo = numberArray[1]
   var unitNo = numberArray[2]

   var result = singleNumberConverter(hundredsNo, "hundreds") + singleNumberConverter(tensNo, "tens") + singleNumberConverter(unitNo, "unit");
   return result

 } else if ( numberLength === 2 ) {

   var tensNo = numberArray[0]
   var unitNo = numberArray[1]

   var result = singleNumberConverter(tensNo, "tens") + singleNumberConverter(unitNo, "unit");
   return result

 } else if ( numberLength === 1 ) {

   var unitNo = numberArray[0]
   return singleNumberConverter(unitNo, "unit");

 }

}

function singleNumberConverter (number, position) {

 key = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XX", "XXX",     "XL", "L", "LX", "LXX", "LXXX", "XC", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M", "MM", "MMM"];

 var numberNo = parseInt(number)

 if (numberNo == 0) {
   return "";
 } else if (position == "unit") {
   return key[numberNo];
 } else if (position == "tens") {
   return key[ (9 + numberNo) ];
 } else if (position == "hundreds") {
   return key[ (18 + numberNo) ];
 } else if (position == "thousands") {
   return key[ (27 + numberNo) ]
 }

}
