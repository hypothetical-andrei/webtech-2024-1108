const sayHello = (name) => `Hello, ${name}`

// console.log(process.argv)
// console.log(sayHello('Jim'))
if (process.argv.length < 3) {
  console.log('Tell me a name')
} else {
  console.log(sayHello(process.argv[2]))
}