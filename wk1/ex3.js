function countChar (str, char) {
  let count = 0
  for (const c of str) {
    if (c === char) {
      count++
    }
  }
  return count
}

console.log(countChar('ana are mere', 'a'))