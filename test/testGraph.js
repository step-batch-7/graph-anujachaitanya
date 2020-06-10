const { assert } = require('chai');
const { parsePairs, bfs } = require('../src/graph');

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

describe('bfs', () => {
  const pairs = [
    ['a', 'b'],
    ['b', 'd'],
    ['c', 'c'],
    ['c', 'f'],
  ];

  it('should invalidate node is not connected to itself', () => {
    assert.isFalse(bfs(pairs, 'a', 'a'));
  });

  it('should validate if node is connected to itself', () => {
    assert.isTrue(bfs(pairs, 'c', 'c'));
  });

  it('should validate if connected to each other', () => {
    assert.isTrue(bfs(pairs, 'a', 'd'), true);
  });

  it('should validate if not connected to each other', () => {
    assert.isFalse(bfs(pairs, 'a', 'f'));
  });
});
