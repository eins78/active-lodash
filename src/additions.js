export default (f) => {
  const present = (val) => {
    return (
      // do what the coffeescript `?` operator compiles to
      (typeof val !== 'undefined' && val !== null) && (
        // AND (not "isEmpty" OR a primitive type)
        (!f.isEmpty(val) ||
          f.isNumber(val) ||
          f.isBoolean(val) ||
          f.isFunction(val)
        )
      )
    )
  }

  const presence = (val) => { if (present(val)) return f(val).value() }

  return {
    present: present,
    presence: presence
  }
}
