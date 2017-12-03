const d3 = require('d3');
const expect = require('chai').expect;

describe('d3 scales', function() {
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

  describe('linear scale mappings', function() {
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

  describe('clamping', function() {
    const scale = d3.scaleLinear()
      .domain([100, 500])
      .range([10, 350])
      .clamp(true);

    it('cuts off, does not extrapolate', function() {
      expect(scale(1000)).to.equal(350);
      expect(scale(-500)).to.equal(10);
    });
  });

  describe('rangeRound', function() {
    const scale = d3.scaleLinear()
      .domain([100, 500])
      .rangeRound([10, 350]);

    it('rounds range values to integers', function() {
      expect(scale(50)).to.equal(-32); // would be -32.5 without rangeRound
      expect(scale(45.323)).to.equal(-36); // would be -36.475 without rangeRound
    });
  });

  describe('nicing', function() {
    it('nices the domain to [0, 10] if it is very near', function() {
      const scale = d3.scaleLinear()
        .domain([0.42, 9.6])
        .nice();

      expect(scale.domain()).to.deep.equal([0, 10]);
    });

    it('nices the domain to [0, 10] if it is not so near', function() {
      const scale = d3.scaleLinear()
        .domain([0.999, 9.001])
        .nice();

      expect(scale.domain()).to.deep.equal([0, 10]);
    });

    it('does not nice the domain to [0, 10] at some point', function() {
      const scale = d3.scaleLinear()
        .domain([1, 9])
        .nice();

      expect(scale.domain()).to.deep.equal([1, 9]);
    });

    it('does strange things with the ticks count argument', function() {
      // TODO: Explore further, also d3-array's tickStep()
      const scale = d3.scaleLinear()
        .domain([0.4, 9.6])
        .nice(40);

      expect(scale.domain()).to.deep.equal([0, 10]);
    });
  });

  describe('sqrt scale mappings', function() {
    it('domain inputs are normalized before sqrt is applied', function() {
      const scale = d3.scaleSqrt()
        .domain([0, 1000])
        .range([0, 1000]);

      expect(scale(1000)).to.equal(1000);
      expect(scale(750)).to.be.closeTo(866, 0.5);
      expect(scale(500)).to.be.closeTo(707, 0.5);
      expect(scale(250)).to.equal(500);
      expect(scale(0)).to.equal(0);
    });

    it('and then scaled to the output range', function() {
      const scale = d3.scaleSqrt()
        .domain([0, 1000])
        .range([0, 100]);

      expect(scale(1000)).to.equal(100);
      expect(scale(750)).to.be.closeTo(87, 0.5);
      expect(scale(500)).to.be.closeTo(71, 0.5);
      expect(scale(250)).to.equal(50);
      expect(scale(0)).to.equal(0);
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
