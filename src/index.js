import f from '../lodash.custom'
import overrides from './overrides'
import additions from './additions'

export default (function () {
  f.mixin(overrides(f))
  f.mixin(additions(f), {chain: false}) // returns value if chained
  return f
}())
