var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function (input){
  if (input.length === 1){
    if (input === 'G'){
      return 'C';
    }
    else if (input === 'C'){
      return 'G';
    }
    else if (input === 'T'){
      return 'A';
    }
    else {
      return 'U';
    }
  }
  else {
    var inputs = input.split('');
    var finalRna = [];
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i] === 'G'){
        finalRna[i] = 'C';
      }
      else if (inputs[i] === 'C'){
        finalRna[i] = 'G';
      }
      else if (inputs[i] === 'T'){
        finalRna[i] =  'A';
      }
      else if (inputs[i] === 'A'){
        finalRna[i] = 'U';
      }
     var joinedRna = finalRna.join();
    }
  }
  return joinedRna.replace(/\,/g, '');
};


module.exports = DnaTranscriber;
