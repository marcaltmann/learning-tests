import { scaleBand } from 'd3-scale';
import test from 'ava';

function basicScale() {
  return scaleBand()
    .domain([0, 1, 2, 3, 4])
    .range([0, 100]);
}

test('mapping', (t) => {
  const actual = basicScale()(2);
  const expected = 40;
  t.is(actual, expected, 'domain value maps to start of the band within output range');
});

test('bandwidth', (t) => {
  const actual = basicScale().bandwidth();
  const expected = 20;
  t.is(actual, expected);
});

test('step', (t) => {
  const actual = basicScale().step();
  const expected = 20;
  t.is(actual, expected);
});

test('outer padding', (t) => {
  // Read 12.5/15 as: two times 12.5 for the padding and 5 times 15 equals 100.
  const scale = basicScale().paddingOuter(12.5/15);
  const actual = [scale(0), scale(1), scale(2), scale(3), scale(4)];
  const expected = [12.5, 27.5, 42.5, 57.5, 72.5];
  t.deepEqual(actual, expected, 'paddingOuter is measured as a ratio of the bandwidth');
});

test('inner padding', (t) => {
  // Read 5/6 as: 25 equally-sized parts:
  // 1 band, 5 padding, 1 band, 5 padding, 1 band, 5 padding, 1 band, 5 padding, 1 band.
  const scale = basicScale().paddingInner(5/6);
  const actual = [scale(0), scale(1), scale(2), scale(3), scale(4)];
  const expected = [0, 24, 48, 72, 96];
  t.deepEqual(actual, expected, 'paddingInner is measured as a ratio of the bandwidth plus padding?');
});
