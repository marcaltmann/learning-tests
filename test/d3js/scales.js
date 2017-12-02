const d3 = require('d3');
const expect = require('chai').expect;

describe('d3 linear scales', function() {
  describe('general behaviour', function() {
    const scale = d3.scaleLinear();

    it('just returns the input if domain and range are not set', function() {
      expect(scale(1.5)).to.equal(1.5);
    });

    it('returns NaN if called without any arguments', function() {
      expect(scale()).to.be.NaN;
    });
  });

  describe('getters and setters', function() {
    const scale = d3.scaleLinear()
      .domain([100, 500])
      .range([10, 350]);

    it('domain getter returns the domain', function() {
      expect(scale.domain()).to.deep.equal([100, 500]);
    });

    it('range getter returns the domain', function() {
      expect(scale.range()).to.deep.equal([10, 350]);
    });
  });

  describe('mappings', function() {
    const scale = d3.scaleLinear()
      .domain([100, 500])
      .range([10, 350]);

    it('maps input values correctly to output values', function() {
      expect(scale(100)).to.equal(10);
      expect(scale(500)).to.equal(350);
      expect(scale(300)).to.equal(180);
    });

    it('does not cut of output values, but interpolates', function() {
      expect(scale(50)).to.equal(-32.5);
      expect(scale(700)).to.equal(520);
    });
  });

  describe('array functions min and max', function() {
    const values = [5, -4, 20];

    it('returns the minimum value', function() {
      expect(d3.min(values)).to.equal(-4);
    });

    it('returns the maximum value', function() {
      expect(d3.max(values)).to.equal(20);
    });
  });

  describe('array functions min and max with accessor', function() {
    const values = [
      [0, 5],
      [1, -4],
      [2, 20],
    ];
    const accessor = (d) => d[1];

    it('returns the minimum value', function() {
      expect(d3.min(values, accessor)).to.equal(-4);
    });

    it('returns the maximum value', function() {
      expect(d3.max(values, accessor)).to.equal(20);
    });
  });
});
