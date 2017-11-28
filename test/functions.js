const expect = require('chai').expect;

describe('functions', function() {
  describe('basics', function() {
    it('should be of type "function"', function() {
      const f = function() {};

      expect(typeof f).to.equal('function');
    });

    it('should print the whole function when calling toString()', function() {
      const f = function f1() { return 'hello'; };

      expect(f.toString()).to.equal('function f1() { return \'hello\'; }');
    });

    it('should return undefined if the return statement is missing', function() {
      const f = function() {};

      expect(f()).to.be.undefined;
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
