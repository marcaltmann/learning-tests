import { expect } from 'chai';

describe('function', function() {
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

    it('should return number of formal arguments with length', function() {
      const a = function(a, b) { return a + b; };
      const b = function(a) { return a; };

      expect(a.length).to.equal(2);
      expect(b.length).to.equal(1);
    });

    it('should have an arguments object', function() {
      function f() {
        expect(arguments).to.be.arguments;
        expect(arguments.length).to.equal(2);
      }

      f(21, 42);
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

    it('can be defined dynamically', function() {
      const sum = new Function('a', 'b', 'return a + b;');

      expect(sum).to.be.a('function');
      expect(sum(3, 4)).to.equal(7);
    });

    it('simulate module style', function() {
      // Test if f1 knows about f2, does not really belong here.
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

  describe('names (used in stack traces)', function() {
    it('has a name', function() {
      function f() {
      }

      expect(f.name).to.equal('f');
    });

    it('has a name when anonymous but assigned', function() {
      const ahh = function() {
      };

      expect(ahh.name).to.equal('ahh');
    });

    it('has no name (or empty name) when completely anonymous', function() {
      expect((function() {}).name).to.equal('');
    });
  });

  describe('arrow functions', function() {
    it('should also be of type "function"', function() {
      const f = () => {};

      expect(typeof f).to.equal('function');
    });
  });

  describe('the global object', function() {
    it('exists', function() {
      expect(global.String).to.be.a('function');
    });
  });
});
