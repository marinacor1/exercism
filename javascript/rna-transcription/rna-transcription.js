var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function (input){
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
};


module.exports = DnaTranscriber;
