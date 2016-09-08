console.log('paintr');

var inputColor = 'black';

var pickColor = function() {
  inputColor = $('#color-input').val(); // chaining or 'piping' functions together
  $('.color-box').css('background-color', inputColor); // find the color-box, change da color
};

var new_color = $('button').on('click', pickColor); // this changes the color on click

$('#color-input').on('keypress', function(event) {
  console.log(event.which); // this logs the keypress
  if(event.which == 13) { // this changes the color on pressing enter key
    pickColor(); // this is the function to run
  }
});

for(var i = 0; i < 250; i++) {
  var $pixel = $('<div class="pixel">').appendTo('.paper');
}

$('.pixel').mouseover(function() {
  console.log('clicked');
  $(event.target).css('background-color', inputColor);
});
