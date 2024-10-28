function addToArray(arr, ...args) {
  if (!arr || !Array.isArray(arr)) {
    return null
  }
  // for (const arg of args) {
  //   arr.push(arg)
  // }
  // return arr
  return [...arr, ...args]
}

let a = [1]

console.log(addToArray(a, 2, 3, 4))