export default (f) => {
  const _merge = f.merge
  const _extend = f.extend

  const merge = (...args) => {
    return _merge(Object.create(null), ...args)
  }

  const extend = (...args) => {
    return _extend(Object.create(null), ...args)
  }

  return {
    merge: merge,
    extend: extend,
    assign: extend
  }
}
