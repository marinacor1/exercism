//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.toUpperCase() === input && AllNumbers(input) === false){
    return "Whoa, chill out!";
  }
  if (input.substr(-1) === "?"){
    return "Sure.";
  }
  else {
    return "Whatever.";
  }
};

function AllNumbers(input){
  var array = input.split(" ");
  array.map(function(character){
    var counter = 0;
    if (character === [/0-9/]){
      counter + 1;
    }
      if (counter === array.length){
    return true;
  }
  else {
    return false;
  }
})
};
module.exports = Bob;
