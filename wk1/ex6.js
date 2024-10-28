function counts (str) {
  const result = {}
  for (const char of str) {
    if (char in result) {
      result[char]++
    } else {
      result[char] = 1
    }
  }
  for (const letter in result) {
    result[letter] /= str.length
  }

  return result
}

console.log(counts('the quick brown fox jumps over the lazy dog'))