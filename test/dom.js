require('jsdom-global')();
const d3 = require('d3');
const expect = require('chai').expect;

describe('dom', function() {
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
    it('works', function() {
      d3.select('body').append('p').text('New paragraph!');
      const p = document.getElementsByTagName('p');
      expect(p.length).to.equal(1);
      expect(p[0].textContent).to.equal('New paragraph!');
    });
  });
});
