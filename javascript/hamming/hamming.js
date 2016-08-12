var Hamming = function(){};

Hamming.prototype.compute = function (input1, input2){
  if (input1=== input2){
    return 0;
  }
  else {
    var inputs1 = input1.split('');
    var inputs2 = input2.split('');
    var counter = 0;
    for (var i = 0; i< inputs1.length; i++){
      if (inputs1[i] != inputs2[i]){
        counter ++;
      }
    }
    return counter;
  }
};


module.exports = Hamming;
