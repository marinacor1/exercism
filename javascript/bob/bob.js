//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.toUpperCase() === input && input !== "1, 2, 3"){
    return "Whoa, chill out!"
  }
  if (input.substr(-1) === "?"){
    return "Sure."
  }
  else {
    return "Whatever."
  }
};

module.exports = Bob;
