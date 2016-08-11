var Bob = function() {};

Bob.prototype.hey = function(input) {
  var lastIndex = input.length - 1;
  if (input.charAt(lastIndex) === '?'){
    if (input.toUpperCase() == input){
      return "Whoa, chill out!";
    }
    else {
      return "Sure.";
    }
  }
  else if (input.charAt(lastIndex) === '!'){
    if (input.toUpperCase() == input){
      return "Whoa, chill out!";
    }
    else {
      return "Whatever.";
    }
  }
   else {
    return "Whatever.";
   }
};

function AllNums(input) {
  if (input.includes('0')){
    AllNumbers(input);
  }
  else if (input.includes('1') || input.includes('2')){
    AllNumbers(input);
  }
  else if (input.includes('3') || input.includes('4')){
    AllNumbers(input);
  }
  else if (input.includes('5') || input.includes('6')){
    AllNumbers(input);
  }
  else if (input.includes('7') || input.includes('8')){
    AllNumbers(input);
  }
  else if (input.includes('9')){
    AllNumbers(input);
  }
}

function AllNumbers(input){
  var array = input.split(" ");
  array.map(function(character){
    var counter = 0;
    if (character.includes('0' || character.includes('1'))){
      return counter + 1;
    }
    else if (character.includes('2') || character.includes('3')){
      return counter + 1;
    }
    else if (character.includes('4') || character.includes('5')){
      return counter + 1;
    }
    else if (character.includes('6') || character.includes('7')){
      return counter + 1;
    }
    else if (character.includes('8') || character.includes('9')){
      return counter + 1;
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
