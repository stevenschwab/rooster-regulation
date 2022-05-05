const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!';
      
      assert.strictEqual(Rooster.announceDawn(), expected);
    });
  });

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const expected = 23;

      assert.strictEqual(Rooster.timeAtDawn(expected), '23');
    });

    it('throws an error if passed a number less than 0', () => {
      const expected = RangeError;

      assert.throws(() => {
        Rooster.timeAtDawn(-1);
      }, expected);
    });

    it('throws an error if passed a number greater than 23', () => {
      const expected = RangeError;

      assert.throws(() => {
        Rooster.timeAtDawn(24);
      }, expected);
    });
  });
});