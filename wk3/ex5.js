function f (arr, obj, str) {
    if (!Array.isArray(arr)) {
        throw new Error('not an array')
    }
    if (typeof obj !== 'object' || !('type' in obj)) {
        throw new Error('not the right object')
    }
    if (!(typeof str === 'string' || str instanceof String)) {
        throw new Error('can i have a string')
    }
    console.log('function ran')
}

try {
    f([], { type: 'sometype' }, 5)
    // f([], {}, 'etc')
    // f({}, { type: 'sometype' }, 'etc')
    f([], { type: 'sometype' }, 'etc')
} catch (error) {
    console.log(error)
}