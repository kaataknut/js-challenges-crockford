function counter(counter) {
  return {
    up: function() {
      counter += 1;
      return counter;
    },
    down: function() {
      counter -= 1;
      return counter;
    },
  };
}

function revocable(fn) {
  return {
    invoke: function(a, b) {
      return fn !== undefined ? fn(a, b) : undefined;
    },
    revoke: function() {
      fn = undefined;
    },
  };
}

function m(value, source) {
  return {
    value,
    source: typeof source === 'string' ? source : String(value),
  };
}

function addm(m1, m2) {
  return {
    value: m1.value + m2.value,
    source: '(' + m1.source + '+' + m2.source + ')',
  };
}

exports.counter = counter;
exports.revocable = revocable;
exports.m = m;
exports.addm = addm;
