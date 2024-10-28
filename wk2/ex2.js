let sampleArray = [1, 2, 4, 7, 2, 3]

let totalArea = arr => {
  return arr.map(el => el * el).reduce((acc, el) => acc + el, 0)
}

console.log(totalArea(sampleArray))