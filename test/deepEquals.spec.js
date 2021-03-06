import expect from 'expect';
import deepEquals from '../src/deepEquals';

const tripleEquals = deepEquals((a, b) => a === b);

describe('deepEquals', () => {
  it('should return true if argument fields are equal', () => {
    expect(
      tripleEquals(3, 3)
    ).toBe(true);

    expect(
      tripleEquals('dog', 'dog')
    ).toBe(true);

    expect(
      tripleEquals(
        {a: 1, b: 2, c: undefined},
        {a: 1, b: 2, c: undefined}
      )
    ).toBe(true);

    expect(
      tripleEquals(
        {a: 1, b: 2, c: 3},
        {a: 1, b: 2, c: 3}
      )
    ).toBe(true);

    const o = {};
    expect(
      tripleEquals(
        {a: 1, b: 2, c: o},
        {a: 1, b: 2, c: o}
      )
    ).toBe(true);
  });

  it('should return false if arguments are number and string', () => {
    expect(
      tripleEquals(2, '2')
    ).toBe(false);
  });

  it('should return false if arguments are string and number', () => {
    expect(
      tripleEquals('2', 2)
    ).toBe(false);
  });

  it('should return false if arguments are number and object', () => {
    expect(
      tripleEquals(4, {})
    ).toBe(false);

  });

  it('should return false if arguments are object and number', () => {
    expect(
      tripleEquals({}, 4)
    ).toBe(false);

  });

  it('should return false if arguments are number and array', () => {
    expect(
      tripleEquals(4, [])
    ).toBe(false);

  });

  it('should return false if arguments are array and number', () => {
    expect(
      tripleEquals([], 4)
    ).toBe(false);

  });

  it('should return false if arguments are string and object', () => {
    expect(
      tripleEquals('cat', {})
    ).toBe(false);

  });

  it('should return false if arguments are object and string', () => {
    expect(
      tripleEquals({}, 'cat')
    ).toBe(false);

  });

  it('should return false if arguments are string and array', () => {
    expect(
      tripleEquals('cat', ['c', 'a', 't'])
    ).toBe(false);

  });

  it('should return false if arguments are array and string', () => {
    expect(
      tripleEquals(['c', 'a', 't'], 'cat')
    ).toBe(false);

  });

  it('should return false if arguments are array and object', () => {
    expect(
      tripleEquals([], {})
    ).toBe(false);

  });

  it('should return false if arguments are object and array', () => {
    expect(
      tripleEquals({}, [])
    ).toBe(false);
  });

  it('should return false if first argument has too many keys', () => {
    expect(
      tripleEquals(
        {a: 1, b: 2, c: 3},
        {a: 1, b: 2}
      )
    ).toBe(false);
  });

  it('should return false if second argument has too many keys', () => {
    expect(
      tripleEquals(
        {a: 1, b: 2},
        {a: 1, b: 2, c: 3}
      )
    ).toBe(false);
  });

  it('should return false if arguments have different keys', () => {
    expect(
      tripleEquals(
        {a: 1, b: 2, c: undefined},
        {a: 1, bb: 2, c: undefined}
      )
    ).toBe(false);
  });

  it('should return false if first array argument has too many items', () => {
    expect(
      tripleEquals(
        [1, 2, 3, 4],
        [1, 2, 3]
      )
    ).toBe(false);
  });

  it('should return false if second array argument has too many items', () => {
    expect(
      tripleEquals(
        [1, 2, 3],
        [1, 2, 3, 4]
      )
    ).toBe(false);
  });

})
;
