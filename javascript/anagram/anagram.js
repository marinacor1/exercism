var Anagram = function (focusWord){
  this.focusWord = focusWord;
};

Anagram.prototype.matches = function (list) {
  if (arguments[0].constructor === Array){
    result = checkArray(list, this.focusWord);
  }
  return result;
};

function checkArray(list, x_this){
  console.log(x_this);
  var results = [];
  for (m = 0; m < list.length; m++){
    var word = list[m].split('');
    var value = true;
    for (i = 0; i < word.length; i++){
      var keyWord = x_this.toLowerCase();
      var letter = word[i].toLowerCase();
      if (!keyWord.includes(letter)) {
        value = false;
      }
      if (keyWord === word.join('').toLowerCase()){
        value = false;
      }
    }
    if (x_this.length == word.length && value === true){
        results.push(word.join(''));
      }
    }
    return results;

}
module.exports = Anagram;
