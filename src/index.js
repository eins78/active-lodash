import f from 'lodash'
import overrides from './overrides'
import additions from './additions'

export default (function () {
  f.mixin(overrides(f))
  f.mixin(additions, {chain: false}) // returns value if chained
  return f
}())
