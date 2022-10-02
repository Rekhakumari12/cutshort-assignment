const debounce = function (fn, d) {
  let timer
  return function () {
    let context = this, agr = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, agr)
    }, d)
  }
}
export default debounce