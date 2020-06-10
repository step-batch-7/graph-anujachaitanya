const { assert } = require('chai');
const { parsePairs } = require('../src/graph');

describe('parsePairs', () => {
  it('should return the graph object', () => {
    const pairs = [
      ['a', 'b'],
      ['b', 'a'],
      ['b', 'c'],
    ];
    const expected = {
      a: ['b'],
      b: ['a', 'c'],
    };
    assert.deepStrictEqual(parsePairs(pairs), expected);
  });

  it('should add itself if the both elements in the pair are identical', () => {
    const pairs = [
      ['a', 'b'],
      ['b', 'a'],
      ['b', 'c'],
      ['a', 'a'],
    ];
    const expected = {
      a: ['b', 'a'],
      b: ['a', 'c'],
    };
    assert.deepStrictEqual(parsePairs(pairs), expected);
  });
});
