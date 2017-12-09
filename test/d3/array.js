const d3 = require('d3');
const expect = require('chai').expect;

describe('d3-array', function() {
  describe('range', function() {
    it('produces an array with numbers up to the exclusive stop value', function() {
      const range = d3.range(5);
      expect(range).to.deep.equal([0, 1, 2, 3, 4]);
    });

    it('produces an empty array', function() {
      const range = d3.range(0);
      expect(range).to.be.empty;
    });

    it('produces an array starting at a certain number', function() {
      const range = d3.range(9, 12);
      expect(range).to.deep.equal([9, 10, 11]);
    });

    it('produces an array using the given steps', function() {
      const range = d3.range(2, 9, 2);
      expect(range).to.deep.equal([2, 4, 6, 8]);
    });
  });
});
