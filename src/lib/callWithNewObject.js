export default (fun, ...args) => {
  return fun.bind(undefined, Object.create(null), ...args)
}
