function from(start) {
  return function() {
    var next = start;
    start += 1;
    return next;
  };
}

function to(generator, to) {
  return function() {
    var next = generator();

    return next < to ? next : undefined;
  };
}

function fromTo(start, end) {
  return to(from(start), end);
}

function element(arr, gen = fromTo(0, arr.length)) {
  return function() {
    var next = gen();

    return next !== undefined ? arr[next] : undefined;
  };
}

function collect(gen, arr) {
  return function() {
    var next = gen();

    if (next !== undefined) {
      arr.push(next);
    }

    return next;
  };
}

function filter(gen, pred) {
  return function genNextValue() {
    var next = gen();

    return next === undefined || pred(next) ? next : genNextValue();
  };
}

function concat(genA, genB) {
  var gen = genA;
  return function() {
    var next = gen();

    if (next !== undefined) {
      return next;
    }

    gen = genB;

    return gen();
  };
}

function gensymf(char) {
  const gen = from(1);
  return function() {
    return char + gen();
  };
}

function fibonaccif(a, b) {
  return function() {
    var next = a;
    a = b;
    b += next;
    return next;
  };
}

exports.from = from;
exports.to = to;
exports.fromTo = fromTo;
exports.element = element;
exports.collect = collect;
exports.filter = filter;
exports.concat = concat;
exports.gensymf = gensymf;
exports.fibonaccif = fibonaccif;
