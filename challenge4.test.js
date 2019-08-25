var test = require('tape');
var { add } = require('./challenge1.js');
var { counter, revocable, m, addm } = require('./challenge4.js');

test('from', function(t) {
  t.plan(4);
  var obj = counter(5);

  t.equal(obj.up(), 6);
  t.equal(obj.up(), 7);
  t.equal(obj.down(), 6);
  t.equal(obj.down(), 5);
});

test('revocable', function(t) {
  t.plan(2);

  var rev = revocable(add),
    rev_add = rev.invoke;

  t.equal(rev_add(2, 2), 4);
  rev.revoke();
  t.equal(rev_add(2, 2), undefined);
});

test('m', function(t) {
  t.plan(2);

  var obj1 = m(1),
    obj2 = m(2, 'Two');

  t.deepEqual(obj1, {
    value: 1,
    source: '1',
  });
  t.deepEqual(obj2, {
    value: 2,
    source: 'Two',
  });
});

test('addm', function(t) {
  t.plan(2);

  var obj1 = addm(m(3), m(4));
  var obj2 = addm(m(3), m(4, 'four'));

  t.deepEqual(obj1, {
    value: 7,
    source: '(3+4)',
  });
  t.deepEqual(obj2, {
    value: 7,
    source: '(3+four)',
  });
});
