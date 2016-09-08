console.log('flattnr');

function flattnr(arr) {
  console.log(arr);
  if(arr.isArray) {
    console.log('its an array');
  } else {
    console.log('not an array');
  }
  // var nuArr = [].concat.apply([], arr);
  // console.log(nuArr);

  // for(i = 0; i < arr.length; i++) {
  //   var nArr = [];
  //   var n = arr[i];
  //   nArr.push(arr);
}

// flattnr([1, [2], [3, [[4]]]])
// -> [1, 2, 3, 4]

// flattnr([1, {}, [3, [[4]]]])
// -> [1, {}, 3, 4]
