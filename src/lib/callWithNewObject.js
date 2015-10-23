export default (func) => {
  return function () {
    return func.bind(undefined, Object.create(null)).apply(undefined, arguments)
  }
}
