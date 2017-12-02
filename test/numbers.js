const expect = require('chai').expect;

describe('numbers', function() {
  describe('mathematical operators', function() {
    it('multiplication returns NaN if one operand is undefined', function() {
      const a = 500;
      const b = undefined;
      expect(a * b).to.be.NaN;
    });
  });
});
