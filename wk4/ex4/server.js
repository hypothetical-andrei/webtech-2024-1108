import express from 'express'

const app = express()
app.use(express.static('public'))
app.use(express.json())

const cats  = []
let currentCatId = 1

app.get('/cats', (req, res) => {
    res.status(200).json(cats)
})

app.post('/cats', (req, res) => {
    let newCat = req.body
    newCat.id = currentCatId++
    cats.push(newCat)
    res.status(201).json(newCat)
})

app.get('/cats/:id', (req, res) => {})
app.put('/cats/:id', (req, res) => {})
app.delete('/cats/:id', (req, res) => {})

app.listen(8080)
