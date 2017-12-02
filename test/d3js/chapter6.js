const jsdom = require('jsdom-global');
const d3 = require('d3');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('d3 basics', function() {
  const dataset = [5, 10, 15, 20, 25];

  beforeEach(function() {
    jsdom();
  });

  describe('append(\'svg\')', function() {
    it('creates an SVG', function() {
      d3.select('body').append('svg');
      expect(document.getElementsByTagName('svg')).to.have.length(1);
    });

    it('returns a selection', function() {
      const svg = d3.select('body').append('svg');
      expect(svg.constructor.name).to.equal('Selection');
    });
  });

  describe('selection', function() {
    let selection;
    beforeEach(function() {
      const body = d3.select('body');
      body.append('svg');
      body.append('svg');
      body.append('svg');
      selection = d3.selectAll('svg');
    });

    it('returns the size/length', function() {
      expect(selection.size()).to.equal(3);
    });

    it('returns if it is empty', function() {
      expect(selection.empty()).to.be.false;
    });

    it('returns one node', function() {
      expect(selection.node().constructor.name).to.equal('SVGSVGElement');
    });

    it('returns multiple nodes', function() {
      expect(selection.nodes()).to.have.length(3);
    });

    it('can iterate over itself', function() {
      const callback = sinon.spy();
      selection.each(callback);
      expect(callback.calledThrice).to.be.true;
    });
  });
});
