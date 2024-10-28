function reduceLeft (arr, expr, initialAccValue = 0) {
  let acc = initialAccValue
  for (const el of arr) {
    acc = expr(acc, el)
  }
  return acc
}

console.log(reduceLeft([1,2,3], (a, e) => a + e, 0))