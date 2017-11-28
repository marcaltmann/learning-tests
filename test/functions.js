const expect = require('chai').expect;

describe('functions', function() {
  describe('basics', function() {
    it('should be of type "function"', function() {
      const f = function() {};

      expect(typeof f).to.equal('function');
    });

    it('should be an object', function() {
      const f = function() {};
      f.someProperty = 'hello';

      expect(f).to.have.property('someProperty');
      expect(f.someProperty).to.equal('hello');
    });
  });

  describe('arrow functions', function() {
    it('should also be of type "function"', function() {
      const f = () => {};

      expect(typeof f).to.equal('function');
    });
  });
});
