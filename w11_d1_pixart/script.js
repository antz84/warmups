console.log('PixArt');

$('#set-color').click(function() {
 var new_color = $('input').val();
  $('.brush-color').css('background', new_color);
});

$(document).keypress(function(key) {
  if(key.which == 13) {
    var new_color = $('input').val();
    $('.brush-color').css('background', new_color);
  }
});

for(i = 0; i <3600; i++) {
  $(".container").append("<div class=\"square\"></div>");
}

$('.square').mouseover(function() {
  var new_color = $('input').val();
  var $target = $(event.target);
  $target.css('background', new_color);
});
