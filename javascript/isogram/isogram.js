var Isogram = function(){};

Isogram(input).prototype.isIsogram = function(input){
  inputArray = input.split('');
    for (var i = 0; i < inputArray.length; i++){
      if (inputArray.indexOf(inputArray[i]) > -1){
        return false;
      }
      else {
        return true;
    }
  }
};

module.exports = Isogram;
