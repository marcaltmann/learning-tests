const jsdom = require('jsdom-global');
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
});
