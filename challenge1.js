function identityf(val) {
  return function() {
    return val;
  };
}

function identity(x) {
  return x;
}

function add(a, b) {
  return a + b;
}

function addf(a) {
  return function(b) {
    return a + b;
  };
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function liftf(fn) {
  return function(a) {
    return function(b) {
      return fn(a, b);
    };
  };
}

function square(a) {
  return a * a;
}

exports.liftf = liftf;
exports.identity = identity;
exports.add = add;
exports.addf = addf;
exports.sub = sub;
exports.mul = mul;
exports.identityf = identityf;
exports.square = square;
