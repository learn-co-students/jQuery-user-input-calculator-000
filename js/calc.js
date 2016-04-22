'use-strict';
$(function(){

  var calculator = new Calculator();

});

function Calculator(){
  this.setEquation();
  this.setEventListeners();
};

Calculator.prototype.setEquation = function(){
  this.num1 = $("input#number1").val();
  this.num2 = $("input#number2").val();
  this.operator = $("input#operation").val();
};

Calculator.prototype.setEventListeners = function(){
  var _this = this;
  $("button#equals").click(function(){ 
    _this.setEquation(); 
    _this.validateEvaluate();
    $("h2#result").html(_this.result)
  });
};

Calculator.prototype.validateEvaluate = function(){
  this.validOperators = [
    "+",
    "-",
    "/",
    "*"
  ];
  if (this.validOperators.indexOf(this.operator) < 0 || this.operator.length > 1) {
    this.result = "Sorry, not a valid operation!";
  } else if (isNaN(Number(this.num1)) || isNaN(Number(this.num2))) {
    this.result = "Sorry, one of those is not a valid number!";
  } else {
    this.result = eval(this.num1 + this.operator + this.num2)
  }
};