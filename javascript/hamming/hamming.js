var Hamming = function(){};

Hamming.prototype.compute = function (input1, input2){
  if (input1=== input2){
    return 0;
  }
  else {
    return 1;
  }
};


module.exports = Hamming;
