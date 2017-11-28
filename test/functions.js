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

  describe('definitions', function() {
    it('can be defined as a declaration', function() {
      function declaredFunction() {
        return 'hello';
      }

      expect(declaredFunction()).to.equal('hello');
    });

    it('can be declared after being called', function() {
      expect(declaredFunction()).to.equal('hello');

      function declaredFunction() {
        return 'hello';
      }
    });

    it('can be defined as an expression', function() {
      var assignedFunction = function() { return 'hello'; };

      expect(assignedFunction()).to.equal('hello');
    });

    it('cannot be defined as an expression after being called', function() {
      expect(assignedFunction).to.be.undefined;

      var assignedFunction = function() { return 'hello'; };
    });

    it('simulate module style', function() {
      const f1 = function() {
        return f2();
      };

      const f2 = function() {
        return 'hello';
      };

      const actual = f1();
      const expected = 'hello';

      expect(actual).to.equal(expected);
    });
  });

  describe('arrow functions', function() {
    it('should also be of type "function"', function() {
      const f = () => {};

      expect(typeof f).to.equal('function');
    });
  });
});
