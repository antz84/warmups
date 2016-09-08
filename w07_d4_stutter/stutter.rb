# jordans solution

def accum(string, step=1)
  string_splited = string.downcase.split('')
  final_arr = []

  # FIRST LOOP TO LOOP THROUGH EACH LETTER
  string_splited.each_with_index do |letter, index|
    i = 0
    temp_arr = []
    # SECOND LOOP TO LOOP AND MULTIPLY EACH LETTER
    while i <= index + step do
      # IF FIRST LETTER ACCORDING TO INDEX, UPCASE
      if i == 0
        temp_arr << letter.upcase
      else
        temp_arr << letter
      end
      i += 1
    end
    final_arr << temp_arr.join('')
  end
  puts final_arr.join('-')
end

accum("abcd")
    # --> "A-Bb-Ccc-Dddd"
accum("RqaEzty")
    # --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt")
    # --> "C-Ww-Aaa-Tttt"






# deans solution

// accum("abcd") --> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") --> "C-Ww-Aaa-Tttt"

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function capitalize(substring) {
    return substring.charAt(0).toUpperCase() + substring.slice(1);
}

function accum(inputString, step) {
  splitString = inputString.split("");
  finalString = "";

  splitString.forEach( function(l) {
    // console.log(l);
    if (finalString != "") {
        finalString += '-';
    }
    rand = getRandomArbitrary(1,8);

    subString = ""
    for (var i = 1;i < rand;i++) {
      subString += l.toLowerCase();
    }
    finalString += capitalize(subString);
  })
return finalString;
}
console.log(accum("abcd", 2));
console.log(accum("RqaEzty", 2));
console.log(accum("cwAt", 2));
