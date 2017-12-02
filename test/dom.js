const jsdom = require('jsdom-global');
const d3 = require('d3');
const expect = require('chai').expect;

describe('dom', function() {
  beforeEach(function() {
    jsdom();
  });

  describe('basics', function() {
    it('has window', function() {
      expect(document).not.to.be.undefined;
    });

    it('treats window not like global', function() {
      global.niceNewVariable = 'hello';
      expect(window.niceNewVariable).not.to.equal('hello');
    });

    it('treats global like window', function() {
      window.niceNewVariable = 'hello';
      expect(global.niceNewVariable).to.equal('hello');
    });
  });

  describe('d3', function() {
    it('should work', function() {
      d3.select('body')
        .append('p')
        .text('New paragraph!');

      const p = document.getElementsByTagName('p');
      expect(p.length).to.equal(1);
      expect(p[0].textContent).to.equal('New paragraph!');
    });

    it('nodes without bound data have should no __data__ key', function() {
      d3.select('body')
        .append('p')
        .text('New paragraph!');

      const selection = d3.selectAll('p');
      expect(selection._groups[0][0]).not.to.have.key('__data__');
    });

    it('should render data', function() {
      var dataset = [5, 10, 15, 20, 25];

      d3.select('body').selectAll('p')
        .data(dataset)
        .enter()
        .append('p')
        .text(d => d);

      const pCollection = document.getElementsByTagName('p');
      expect(pCollection.length).to.equal(5);
      expect(Array.from(pCollection).map(p => p.textContent)).to.deep.equal(
        ['5', '10', '15', '20', '25']
      );
    });

    it('nodes with bound data should have a __data__ key', function() {
      var dataset = [5, 10, 15, 20, 25];

      d3.select('body').selectAll('p')
        .data(dataset)
        .enter()
        .append('p')
        .text('New paragraph!');

      const selection = d3.selectAll('p');
      const node = selection._groups[0][0];
      expect(node).to.have.key('__data__');
      expect(node.__data__).to.equal(5);
    });
  });
});
