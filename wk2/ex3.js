const formatString = (template, ...formatItems) => {
  let modified = template
  for (let i = 0; i < formatItems.length; i++) {
    if (modified.indexOf('{' + i +'}') !== -1) {
      modified = modified.replace('{' + i +'}', formatItems[i])
    }
  }
  return modified
}

console.log(formatString('i am {0} and my job is {1}', 'Andrei', 'programmer'))
// console.log(formatString('i am {name} and my job is {job}', { name: 'Andrei', job: 'programmer' }))