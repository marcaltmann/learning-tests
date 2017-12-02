const expect = require('chai').expect;

describe('this in functions', function() {
  describe('behaviour in methods', function() {
    const circle = {
      radius: 6,
      diameter: function() {
        return this.radius * 2;
      },
    };

    it('binds implicitely to containing object', function() {
      expect(circle.diameter()).to.equal(12);
    });

    it('does not bind to containing object called as a function', function() {
      const diameter = circle.diameter;
      expect(diameter()).to.be.NaN;
    });

    it('does bind to global object if called as a function', function() {
      const diameter = circle.diameter;
      global.radius = 2;
      expect(diameter()).to.equal(4);
      delete global.radius;
    });
  });

  describe('Function.prototype.call', function() {
    const circle = {
      radius: 6,
      diameter: function() {
        return this.radius * 2;
      },
    };

    it('sets this to the first arg', function() {
      const diameter = circle.diameter;
      const newCircle = {
        radius: 40,
      };
      expect(diameter.call(newCircle)).to.equal(80);
    });
  });

  describe('Function.prototype.apply', function() {
    const circle = {
      radius: 6,
      diameter: function() {
        expect(this.testVariable).to.equal('hello');
        return this.radius * 2;
      },
    };
    const diameter = circle.diameter;

    before(function() {
      global.testVariable = 'hello';
    });

    after(function() {
      delete global.testVariable;
    });

    it('sets this to global object if first arg is null', function() {
      diameter.apply(null, []);
    });

    it('sets this to global object if first arg is undefined', function() {
      diameter.apply(undefined, []);
    });

    it('applies the values in the second argument as arguments to the function', function() {
      const args = [1, 2, 3, 4, 5];
      const result = Math.max.apply(undefined, args);
      expect(result).to.equal(5);
    });
  });
});
