var test = require('tape');
var {
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  gensymf,
  fibonaccif,
} = require('./challenge3.js');

test('from', function(t) {
  t.plan(2);
  var from5 = from(5);

  t.equal(from5(), 5);
  t.equal(from5(), 6);
});

test('to', function(t) {
  t.plan(3);

  var from5to7 = to(from(5), 7);

  t.equal(from5to7(), 5);
  t.equal(from5to7(), 6);
  t.equal(from5to7(), undefined);
});

test('fromTo', function(t) {
  t.plan(3);

  var from5to7 = fromTo(5, 7);

  t.equal(from5to7(), 5);
  t.equal(from5to7(), 6);
  t.equal(from5to7(), undefined);
});

test('element provided both arguments', function(t) {
  t.plan(3);

  var ele = element(['a', 'b', 'c', 'd'], fromTo(1, 3));

  t.equal(ele(), 'b');
  t.equal(ele(), 'c');
  t.equal(ele(), undefined);
});

test('element provided only array', function(t) {
  t.plan(3);

  var ele = element(['a', 'b']);

  t.equal(ele(), 'a');
  t.equal(ele(), 'b');
  t.equal(ele(), undefined);
});

test('collect', function(t) {
  t.plan(4);

  var array = [],
    col = collect(fromTo(0, 2), array);

  t.equal(col(), 0);
  t.equal(col(), 1);
  t.equal(col(), undefined);
  t.deepEquals(array, [0, 1]);
});

test('filter', function(t) {
  t.plan(3);

  var fil = filter(fromTo(0, 5), function divisbleByThree(n) {
    return n % 3 === 0;
  });

  t.equal(fil(), 0);
  t.equal(fil(), 3);
  t.equal(fil(), undefined);
});

test('concat', function(t) {
  t.plan(6);

  var con = concat(fromTo(0, 3), fromTo(0, 2));

  t.equal(con(), 0);
  t.equal(con(), 1);
  t.equal(con(), 2);
  t.equal(con(), 0);
  t.equal(con(), 1);
  t.equal(con(), undefined);
});

test('gensymf', function(t) {
  t.plan(4);

  var g = gensymf('G'),
    b = gensymf('B');

  t.equal(g(), 'G1');
  t.equal(g(), 'G2');
  t.equal(b(), 'B1');
  t.equal(b(), 'B2');
});

test('fibonaccif', function(t) {
  t.plan(6);
  var fib = fibonaccif(0, 1);

  t.equal(fib(), 0);
  t.equal(fib(), 1);
  t.equal(fib(), 1);
  t.equal(fib(), 2);
  t.equal(fib(), 3);
  fib();
  fib();
  t.equal(fib(), 13);
});
