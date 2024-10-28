function map(arr, t) {
  const results = []
  for (const element of arr) {
    results.push(t(element))
  }
  return results
}

const sampleArray = [1, 2, 3]
console.log(map(sampleArray, el => el ** 3))