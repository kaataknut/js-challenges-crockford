var { add, addf, liftf } = require('./challenge1.js');

exports.curry = function(fn, a) {
  return function(b) {
    return fn(a, b);
  };
};

exports.twice = function(fn) {
  return function(number) {
    return fn(number, number);
  };
};

exports.reverse = function(fn) {
  return function(a, b) {
    return fn(b, a);
  };
};

exports.composeu = function(fn1, fn2) {
  return function(val) {
    return fn2(fn1(val));
  };
};

exports.composeb = function(fn1, fn2) {
  return function(a, b, c) {
    return fn2(fn1(a, b), c);
  };
};

exports.limit = function(fn, count) {
  return function(a, b) {
    if (count > 0) {
      count -= 1;
      return fn(a, b);
    }

    return undefined;
  };
};
