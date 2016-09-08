// today(w11_d3)
// 1. instead of a color, hardcode an img into paint brush box
// 2. change image url to get from omdb api

console.log('paintr');

var inputColor = 'black';
var poster;

var pickColor = function() {
  // chaining aka 'piping' functions together
  inputColor = $('#color-input').val();
  // in this exercise we comment below line out so we can use the poster instead
  // $('.color-box').css('background-color', inputColor); // find the color-box, change da color

  // call omdb api to get poster url
  $.ajax({
    url: 'http://www.omdbapi.com/?t=jaws'
  }).done(function(movie) {
    poster = movie.Poster;
    console.log(poster);
    // use jQuery to set .color-box css bkgnd img to poster url
    $('.color-box').css('background-image', 'url(' + movie.Poster + ')');
    // pixel background-color url(poster)
    // $('.pixel').css('background-image', poster);
  });
};

// var new_color = $('button').on('click', pickColor); // this changes the color on click

$('#color-input').on('keypress', function(event) {
  console.log(event.which); // this logs the keypress
  if(event.which == 13) { // this changes the color on pressing enter key
    pickColor(); // this is the function to run
  }
});

for(var i = 0; i < 250; i++) {
  // make a div object
  var $pixel = $('<div class="pixel">');
  $('.paper').append($pixel);
}

$('.pixel').on('mouseover', function() {
  console.log('pixel mouseover event!');
  // $(event.target).css('background-color', inputColor);
  if (poster) {
    $(event.target).css('background-image', 'url(' + poster + ')');
  }
});
