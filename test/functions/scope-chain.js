/* eslint no-unused-vars: "off" */
const expect = require('chai').expect;

describe('scope chain', function() {
  it('should work from inner to outer', function() {
    function outer() {
      const message = 'Hello';

      function inner() {
        return message;
      }

      return inner();
    }

    expect(outer()).to.equal('Hello');
  });

  it('inner should take preference', function() {
    function outer() {
      const message = 'Hello';

      function inner() {
        const message = 'World!';
        return message;
      }

      return inner();
    }

    expect(outer()).to.equal('World!');
  });
});
