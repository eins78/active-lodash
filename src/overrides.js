import callWithNewObject from './lib/callWithNewObject'

export default (f) => {
  const _merge = f.merge
  const _extend = f.extend

  // define here because it is aliased
  const extend = callWithNewObject(_extend)

  return {
    assign: extend,
    extend: extend,
    merge: callWithNewObject(_merge)
  }
}
