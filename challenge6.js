$(document).ready(function(){
  $('#b1').on('click', function(){
      $('h1').css('color', '#FFFFFF');
      $('body').css('background-color', '#000000');
    });
    $('#b2').on('click', function(){
        $('h1').css('color', '#000000');
        $('body').css('background-color', '#FFFFFF');
      });
});
