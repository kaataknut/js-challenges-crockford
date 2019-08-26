var test = require('tape');
var { add, mul, sub, square } = require('./challenge1.js');
var { arrayg, addg, liftg, continuize } = require('./challenge5.js');

test('addg', function(t) {
  t.plan(5);

  t.equal(addg(), undefined);
  t.equal(addg(2)(), 2);
  t.equal(addg(2)(7)(), 9);
  t.equal(addg(3)(0)(4)(), 7);
  t.equal(addg(1)(2)(4)(8)(), 15);
});

test('liftg', function(t) {
  t.plan(7);

  var liftgAdd = liftg(add);
  t.equal(liftgAdd(), undefined);
  t.equal(liftgAdd(1)(2)(4)(8)(), 15);

  var liftgSub = liftg(sub);
  t.equal(liftgSub(), undefined);
  t.equal(liftgSub(1)(2)(4)(8)(), -13);

  var liftgMul = liftg(mul);
  t.equal(liftgMul(), undefined);
  t.equal(liftgMul(1)(2)(4)(3)(), 24);
  t.equal(liftgMul(1)(2)(4)(0)(4)(), 0);
});

test('arrayg', function(t) {
  t.plan(3);
  t.deepEqual(arrayg(), []);
  t.deepEqual(arrayg(1)(), [1]);
  t.deepEqual(arrayg(1)(2)(3)(), [1, 2, 3]);
});

test('continuize', function(t) {
  t.plan(2);

  var sqr = continuize(Math.sqrt);
  sqr(function(value) {
    t.equal(value, 9);
  }, 81);

  var squaren = continuize(square);
  squaren(function(value) {
    t.equal(value, 49);
  }, 7);
});
