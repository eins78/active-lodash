import test from 'tape-catch'
import f from '../'

test('activeLodash', (t) => {
  t.test('assign', (t) => {
    t.plan(3)

    t.looseEqual(
      f.assign({a: 1, b: 0}, {b: 2}, {c: undefined}),
      {a: 1, b: 2, c: undefined},
      'it assigns')

    let ding = {x: 8}
    f.assign(ding, {y: 9})
    t.deepEqual(ding, {x: 8}, 'does not mutate the first argument')

    t.equal(f.assign, f.extend, 'it is aliased as `extend`')
  })

  t.test('defaults', (t) => {
    t.plan(2)

    t.looseEqual(
      f.defaults({a: 1}, {a: 3, b: 2}),
      {a: 1, b: 2},
      'it defaults')

    let ding = {k: 6}
    f.defaults(ding, {b: 2})
    t.deepEqual(ding, {k: 6}, 'does not mutate the first argument')
  })

  t.test('defaultsDeep', (t) => {
    t.plan(2)

    t.looseEqual(
      f.defaultsDeep({a: 1, b: {c: 2}}, {a: 4, b: {d: 3}}),
      {a: 1, b: {c: 2, d: 3}},
      'it defaults deep')

    let ding = {r: 5}
    f.defaultsDeep(ding, {b: 2})
    t.deepEqual(ding, {r: 5}, 'does not mutate the first argument')
  })

  t.test('merge', (t) => {
    t.plan(3)

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

    let o = {s: 3}
    f.merge(o, {b: 2})
    t.deepEqual(o, {s: 3}, 'does not mutate the arguments')

    // test for stupidity – makes sure it works more than 1 time 😕
    t.deepEqual(f.merge({b: 2}, {c: 3}), {b: 2, c: 3}, 'does bind correctly')
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
  t.test('(lib)', (t) => {
    t.plan(1)

    t.test('callWithNewObject', (t)=> {
      t.plan(5)

      const factory = require('../dist/lib/callWithNewObject')

      const fake = (arg1, arg2, arg3, arg4) => {
        t.deepEqual(arg1, {}, 'calls with new object')
        t.equal(arg2, 1, 'calls with 1. arg as 2.')
        t.equal(arg3, 2, 'calls with 2. arg as 3.')
        t.equal(arg4, 3, 'calls with 3. arg as 4.')
      }

      // do it
      factory(fake)(1, 2, 3)

      // just for "coverage" of generated code :/
      t.ok(factory((() => { return true }), null)(),
        'call with 2 args')
    })
  })
})
