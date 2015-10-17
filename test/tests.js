import test from 'tape-catch'
import f from '../'

test('activeLodash', (t) => {
  t.test('assign', (t) => {
    t.plan(3)

    t.looseEqual(
      f.assign({a: 1, b: 0}, {b: 2}, {c: undefined}),
      {a: 1, b: 2, c: undefined},
      'it assigns')

    let ding = {a: 1}
    f.merge(ding, {b: 2})
    t.deepEqual(ding, {a: 1}, 'does not mutate the first argument')

    t.equal(f.assign, f.extend, 'it is aliased as `extend`')
  })

  t.test('merge', (t) => {
    t.plan(2)

    t.looseEqual(
      f.merge(
        {a: 1, b: 0},
        {b: 2},
        {c: {d: 3, e: 5, q: {u: 1}}},
        {c: {d: 4, q: {u: 6}}},
        {f: [7]},
        {g: undefined},
        {b: undefined},
        {a: null}),

      {a: null, b: 2, c: {d: 4, e: 5, q: {u: 6}}, f: [7]},

      'it merges')

    let o = {a: 1}
    f.merge(o, {b: 2})
    t.deepEqual(o, {a: 1}, 'does not mutate the arguments')
  })

  t.test('presence', (assert) => {
    assert.plan(4)

    assert.equal((f(23).presence() || 42), 23)
    assert.equal((f(null).presence() || 42), 42)

    const firstNumber = (val) => {
      return f.chain(val)
        .filter(f.isNumber)
        .first()
    }

    assert.equal(
      (firstNumber(['A',23,'Z'])
        .presence()
        .run() || 42),
      23)

    assert.equal(
      (firstNumber(['A','B','C'])
        .presence()
        .run() || 42),
      42)
  })

  t.test('present', (assert) => {
    assert.plan(9)

    assert.equal(f.present({a: 1}), true)
    assert.equal(f.present([1]), true)
    assert.equal(f.present(true), true)
    assert.equal(f.present(false), true)
    assert.equal(f.present(function () {}), true)

    assert.equal(f.present({}), false)
    assert.equal(f.present([]), false)
    assert.equal(f.present(undefined), false)
    assert.equal(f.present(null), false)
  })
})
