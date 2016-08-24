var Anagram = function (focusWord){
  this.focusWord = focusWord;
};

Anagram.prototype.matches = function (list) {
  if (arguments[0].constructor === Array){
    result = checkArray(list, this.focusWord);
  }
  else {
    list = makeArray(arguments);
    result = checkArray(list, this.focusWord);
  }
  return result;
};

function checkArray(list, focusWord){
  var results = [];
  for (m = 0; m < list.length; m++){
    var word = list[m].split('');
    var value = true;
    for (i = 0; i < word.length; i++){
      var keyWord = focusWord.toLowerCase();
      var letter = word[i].toLowerCase();
      if (!keyWord.includes(letter)) {
        value = false;
      }
      if (keyWord === word.join('').toLowerCase()){
        value = false;
      }

    }
    if (focusWord.length == word.length && value === true){
        results.push(word.join(''));
      }
    }
    return results;
}

function makeArray(arguments){
  var list = [];
  for (i=0; i< arguments.length; i++){
    list.push(arguments[i]);
  }
  return list;
}
module.exports = Anagram;
