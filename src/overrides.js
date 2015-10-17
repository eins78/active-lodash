import callWithNewObject from './lib/callWithNewObject'

export default (f) => {
  const _merge = f.merge
  const _extend = f.extend
  const _defaults = f.defaults
  const _defaultsDeep = f.defaultsDeep

  // define here because it is aliased
  const extend = callWithNewObject(_extend)

  return {
    assign: extend,
    extend: extend,
    defaults: callWithNewObject(_defaults),
    defaultsDeep: callWithNewObject(_defaultsDeep),
    merge: callWithNewObject(_merge)
  }
}
