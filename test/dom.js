require('jsdom-global')();
const expect = require('chai').expect;

describe('dom', function() {
  describe('basics', function() {
    it('has window', function() {
      expect(document).not.to.be.undefined;
    });
  });
});
