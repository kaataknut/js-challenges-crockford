var test = require('tape');
var { add, mul, sub } = require('./challenge1.js');

var {
  curry,
  twice,
  reverse,
  composeu,
  composeb,
  limit,
} = require('./challenge2.js');

test('curry', function(t) {
  t.plan(2);
  var add3 = curry(add, 3);
  var multiply7 = curry(mul, 7);

  t.equal(add3(4), 7);
  t.equal(multiply7(3), 21);
});

test('twice', function(t) {
  t.plan(2);

  const double = twice(add);
  t.equal(double(4), 8);

  const square = twice(mul);
  t.equal(square(4), 16);
});

test('reverse', function(t) {
  t.plan(2);

  var subrev = reverse(sub);

  t.equal(subrev(3, 7), 4);
  t.equal(subrev(-1, 3), 4);
});

test('compuseu', function(t) {
  t.plan(1);

  var double = twice(add);
  var square = twice(mul);

  t.equal(composeu(double, square)(5), 100);
});

test('compuseb', function(t) {
  t.plan(1);

  t.equal(composeb(add, mul)(2, 3, 7), 35);
});

test('limit', function(t) {
  t.plan(2);

  var add_limit_1 = limit(add, 1);
  t.equal(add_limit_1(1, 2), 3, 'should return result');
  t.equal(add_limit_1(1, 2), undefined, 'should return undefined');
});
