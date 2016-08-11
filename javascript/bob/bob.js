var Bob = function() {};

Bob.prototype.hey = function(input) {
  var lastIndex = input.length - 1
  if (input.charAt(lastIndex) == '!' && input.toUpperCase() == input){
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
});
}
module.exports = Bob;
