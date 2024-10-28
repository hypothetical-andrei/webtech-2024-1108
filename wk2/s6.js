const sampleArray = [{
  brand: 'a',
  processor: 'i5',
  ram: 16
}, {
  brand: 'a',
  processor: 'i7',
  ram: 8
}, {
  brand: 'd',
  processor: 'm2',
  ram: 32
}, {
  brand: 'd',
  processor: 'i5',
  ram: 16
}]

const sortArray = (arr, key) => {
  if (!arr.every(el => el[key])) {
    return arr
  }
  return arr.sort(function (a, b) {
    if (a[key] > b[key]) {
      return 1
    } else {
      if (a[key] === b[key]) {
        return 0
      } else {
        return -1
      }
    }
  })
}

console.log(sortArray(sampleArray, 'ram'))