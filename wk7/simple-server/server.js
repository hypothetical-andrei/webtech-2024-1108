import express from 'express'
import apiRouter from './api-router.js'

const app = express()

app.locals.books = []
app.locals.currentId = 1

app.use((req, res, next) => {
    console.log('i am a little middleware')
    next()
})

app.use(express.json({ limit: '1MB' }))

app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' })
})

app.use('/api', apiRouter)

app.use((err, req, res, next) => {
    console.log(err)
    res.status(400).json({ message: 'something went wrong with the request' })
})

app.listen(8080)