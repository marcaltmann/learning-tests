const expect = require('chai').expect;

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });

  describe('#splice()', () => {
    it('should alter original array', () => {
      const original = [1, 2, 3, 4, 5];
      original.splice(2, 2);
      expect(original).to.eql([1, 2, 5]);
    });

    it('should return spliced portion', () => {
      const original = [1, 2, 3, 4, 5];
      expect(original.splice(2, 2)).to.eql([3, 4]);
    });
  });
});
