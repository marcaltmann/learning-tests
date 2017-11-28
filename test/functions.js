const expect = require('chai').expect;

describe('functions', function() {
  describe('basics', function() {
    it('it should be of type "function"', function() {
      const f = function() {};

      expect(typeof f).to.equal('function');
    });
  });

  describe('arrow functions', function() {
    it('should also be of type "function"', function() {
      const f = () => {};

      expect(typeof f).to.equal('function');
    });
  });
});
