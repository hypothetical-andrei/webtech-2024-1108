function generateGreeting (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}

const goodEvening = generateGreeting('Good evening')
const goodMorning = generateGreeting('Good morning')

goodEvening('Jim')
goodMorning('Tim')