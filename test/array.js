import test from 'ava';

test('indexOf returns -1 when the value is not present', (t) => {
  const actual = [1, 2, 3].indexOf(4);
  const expected = -1;
  t.is(actual, expected);
});

test('splice should alter original array', (t) => {
  const original = [1, 2, 3, 4, 5];
  const actual = original.splice(2, 2);
  const expected = [1, 2, 5];
  t.is(actual, expected);
});

test('splice should return spliced portion', (t) => {
  const actual = [1, 2, 3, 4, 5].splice(2, 2);
  const expected = [3, 4];
  t.is(actual, expected);
});
