console.log('Get Squares');

// initial function that grabs a single number and tests as a perfect square
function get_squares(array) {
  if(Math.sqrt(array) % 1 === 0) {
    console.log("Number is a Perfect Square");
  } else {
      console.log("Number is NOT a Perfect Square");
    }
}

// now test a whole array of numbers as perfect squares
answer = [];

function get_squares2(input) {
  if(Math.sqrt(input) % 1 === 0) {
    answer.push(input);
  }
    console.log(answer);
    array2.forEach(get_squares2());
}
