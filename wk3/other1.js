function* f(n) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

for (const element of f(15)) {
    console.warn(element)
}