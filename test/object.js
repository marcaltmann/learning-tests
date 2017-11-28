const should = require('should');

describe('Object', function() {
  describe('property', function() {
    it('should not exist if not set', function() {
      const object = {
        world: 'world',
      };
      should.not.exist(object.hello);
    });

    it('should exist if set', function() {
      const object = {
        world: 'world',
      };
      should.exist(object.world);
    });
  });
});
