const expect = require('chai').expect;

describe('Object', function() {
  describe('property', function() {
    it('should not exist if not set', function() {
      const object = { world: 'world' };
      expect(object.hello).to.be.undefined;
    });

    it('should exist if set', function() {
      const object = { world: 'world' };
      expect(object.world).not.to.be.undefined;
    });

    it('can be deleted using delete', function() {
      const object = { world: 'world' };
      delete object.world;
      expect(object).to.be.empty;
    });

    it('can be deleted using delete with another notation', function() {
      const object = { world: 'world' };
      delete object['world'];
      expect(object).to.be.empty;
    });
  });
});
