var Year = require('./leap');

describe('Leap year', function() {

  it('is not very common', function() {
    var year = new Year(2015);
    expect(year.isLeap()).toBe(false);
  });

});
