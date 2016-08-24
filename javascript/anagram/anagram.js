var Anagram = function (focusWord){
  this.focusWord = focusWord;
};

Anagram.prototype.matches = function (list) {
  var results = [];
  for (m = 0; m < list.length; m++){
    var word = list[m].split('');
    var value = true;
    for (i = 0; i < word.length; i++){
      if (!this.focusWord.includes(word[i])){
        value = false;
      }
    }
    if (this.focusWord.length == word.length && value === true){
        results.push(word.join(''));
      }
    }
    console.log('results =' + results);
    return results;
};


module.exports = Anagram;