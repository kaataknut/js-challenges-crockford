var test = require('tape');
var {
  identity,
  identityf,
  add,
  addf,
  mul,
  sub,
  liftf,
} = require('./challenge1.js');

test('identity', function(t) {
  t.plan(3);

  t.deepEqual(identity(1), 1, 'Number identity');
  t.deepEqual(
    identity({
      name: 'Hello',
    }),
    {
      name: 'Hello',
    },
    'Object identity'
  );
  t.deepEqual(identity('world'), 'world', 'String identity');
});

test('identityf', function(t) {
  t.plan(3);

  t.deepEqual(identityf(1)(), 1, 'Number identity');
  t.deepEqual(
    identityf({
      name: 'Hello',
    })(),
    {
      name: 'Hello',
    },
    'Object identity'
  );
  t.deepEqual(identityf('world')(), 'world', 'String identity');
});

test('add', function(t) {
  t.plan(2);

  t.equal(add(2, 2), 4, '2 + 2 = 4');
  t.equal(add(-4, 2), -2, '-4 + 2 = -2');
});

test('addf', function(t) {
  t.plan(2);

  t.equal(addf(2)(2), 4, '2 + 2 = 4');
  t.equal(addf(-4)(2), -2, '-4 + 2 = -2');
});

test('liftf', function(t) {
  t.plan(2);

  var addf = liftf(add);

  t.equal(addf(2)(2), 4, '2 + 2 = 4');
  t.equal(addf(-4)(2), -2, '-4 + 2 = -2');
});

test('mul', function(t) {
  t.plan(2);

  t.equal(mul(0, 2), 0, '0 * 2 = 0');
  t.equal(mul(1, 32), 32, '1 * 32 = 32');
});

test('sub', function(t) {
  t.plan(2);

  t.equal(sub(2, 2), 0, '2 - 2 = 0');
  t.equal(sub(2, -2), 4, '2 - (-2) = 4');
});
