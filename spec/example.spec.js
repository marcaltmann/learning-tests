import runBenchmark from './support/run-benchmark';

describe('array splice', () => {
  it('should not modify array', () => {
    var arr = [1, 2, 3, 4, 5];
    var result = arr.splice(2, 3);

    expect(arr).toEqual([1, 2]);
  });

  it('should return modified array', () => {
    var arr = [1, 2, 3, 4, 5];
    var result = arr.splice(2, 3);

    expect(result).toEqual([3, 4, 5]);
  });

  it('should perform a performance test', () => {
    const loopLength = 10000000;

    const array = [];

    for (let i = 0; i < loopLength; i++) {
      array[i] = `item ${i}`;
    }

    function forLoop() {
      for (let i = 0, item; i < array.length; i++) {
        item = array[i];
      }
    }

    function forLoopCachedLength() {
      for (let i = 0, l = array.length, item; i < l; i++) {
        item = array[i];
      }
    }

    function whileLoop() {
      let i = 0, item;

      while (i < array.length) {
        item = array[i];
        i++
      }
    }

    function whileLoopCachedLength() {
      let i = 0, l = array.length, item;

      while (i < l) {
        item = array[i];
        i++
      }
    }

    function reversedWhileLoop() {
      let l = array.length, item;

      while (l--) {
        item = array[l];
      }
    }

    function doubleReversedWhileLoop() {
      let l = array.length, i = l, item;

      while (i--) {
        item = array[l - i - 1];
      }
    }

    runBenchmark('for-loop', forLoop);
    runBenchmark('for-loop, cached length', forLoopCachedLength);
    runBenchmark('while-loop', whileLoop);
    runBenchmark('while-loop, cached length', whileLoopCachedLength);
    runBenchmark('reversed while-loop', reversedWhileLoop);
    runBenchmark('double reversed while-loop', doubleReversedWhileLoop);
  });
});
