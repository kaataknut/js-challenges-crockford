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
  return m(m1.value + m2.value, '(' + m1.source + '+' + m2.source + ')');
}

function liftm(binary, op) {
  return function(m1, m2) {
    if (typeof m1 === 'number') {
      m1 = m(m1, m1);
    }

    if (typeof m2 === 'number') {
      m2 = m(m2, m2);
    }

    return m(
      binary(m1.value, m2.value),
      '(' + m1.source + op + m2.source + ')'
    );
  };
}

exports.counter = counter;
exports.revocable = revocable;
exports.m = m;
exports.addm = addm;
exports.liftm = liftm;
