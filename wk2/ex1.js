const arr = [{
  name: 'Jim',
  yob: 1996
}, {
  name: 'Ann',
  yob: 2017
}, {
  name: 'Jane',
  yob: 2004
}]

const filterByAge = (arr, currentYear) => {
  return arr.filter(e => {
    if ((currentYear - e.yob) >= 18) {
      return true
    }
    return false
  })
}

console.log(filterByAge(arr, 2024))