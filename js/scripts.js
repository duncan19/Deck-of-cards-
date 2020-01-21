$(document).ready(function() {
let suits  = ["hearts", "diamonds", "spades", "clubs"]
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
suits.forEach(function(suit){
  numbers.forEach(function(number){
    var card = number + " of " + suit
    $("#cards ul").append("<li>" + card + "</li>")
  });
});
});
