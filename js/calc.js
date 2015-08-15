'use-strict';
$(function(){

  var calculator = new Calculator();

});

function Calculator() {

  $('#equals').click(function(){
  var operation = $('#operation').val()
  var number1 =   $('#number1').val()
  var number2 =   $('#number2').val()

    if ((parseInt(number1) * 0 ) != 0 || (parseInt(number2) * 0 ) != 0 ) {
      $('#result').text("Sorry, one of those is not a valid number!")
    } else if (operation == '-') {
      $('#result').text(parseInt(number1) - parseInt(number2))
    } else if (operation == '+') {
      $('#result').text(parseInt(number1) + parseInt(number2))
    } else if (operation == '*') {
      $('#result').text(parseInt(number1) * parseInt(number2))
    } else if (operation == '/') {
      $('#result').text(parseInt(number1) / parseInt(number2))
    } else
      $('#result').text("Sorry, not a valid operation!")

  });

}