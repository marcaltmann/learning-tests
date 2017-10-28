var loopLength = 100000;
var array = [];

for (var i = 0; i < loopLength; i++) {
  array[i] = `item${i}`;
}

benchmark('Loop performance', {
  'for-loop': () => {
    for (var i = 0; i < array.length; i++) {
      array[i];
    }
  },

  'for-loop, cached length': () => {
    for (var i = 0, l = array.length; i < l; i++) {
      array[i];
    }
  },

  'for-loop, direct array access': () => {
    for (var i = 0, item; (item = array[i]); i++) {
    }
  },

  'while-loop': () => {
    var i = 0;

    while (i < array.length) {
      array[i];
      i++;
    }
  },

  'while-loop, cached length': () => {
    var i = 0, l = array.length;

    while (i < l) {
      array[i];
      i++;
    }
  },

  'reversed while-loop': () => {
    var l = array.length;

    while (l--) {
      array[l];
    }
  },

  'forEach function': () => {
    array.forEach((item) => {
      item;
    });
  },
});
