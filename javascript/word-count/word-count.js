var Words = function (){};

Words.prototype.count = function (input){
  var input = input.replace(/\n/, ' ');
  var input = input.replace(/\t/, ' ');
  var eachWord = input.split(" ");
  var groupedWords = new Object();
  var counter = 0;
  for (var i = 0; i < eachWord.length; i ++){
    var word = eachWord[i].toLowerCase();
    var counter = counter || 0;
    if (Object.keys(groupedWords).indexOf(word) > -1){
      groupedWords[word] = groupedWords[word] + 1;
    }
    else {
      groupedWords[word] = 1;
    }
  }
  return groupedWords;
};

module.exports = Words;
