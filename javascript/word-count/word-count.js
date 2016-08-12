var Words = function (){};

Words.prototype.count = function (input){
  var eachWord = input.split(" ");
  var groupedWords = new Object();
  var counter = 0;
  for (var i = 0; i< eachWord.length; i ++){
    var word = eachWord[i];
    counter ++;
    groupedWords[word] = counter;
  }
  return groupedWords;
};

module.exports = Words;
