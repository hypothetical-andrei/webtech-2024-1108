import express from 'express'

const router = express.Router()

// get /books?format=json
router.get('/books', (req, res, next) => {
    const books = res.app.locals.books
    if (req.query.sortField && req.query.sortOrder) {
        const order = parseInt(req.query.sortOrder)
        const field = req.query.sortField
        const sortedBooks = books.sort((a, b) => {
            if (a[field] > b[field]) {
                return 1 * order
            } else {
                if (a[field] === b[field]) {
                    return 0
                } else {
                    return -1 * order
                }
            }
        })
        res.status(200).json(sortedBooks)
    } else {
        res.status(200).json(books)

    }

    res.status(200).json(books)
})

router.post('/books', (req, res, next) => {
    try {
        const book = req.body
        if (book.title && book.content) {
            book.id = res.app.locals.currentId++
            res.app.locals.books.push(book)
            res.status(201).json(book)
        } else {
            throw new Error('some error')
        }
    } catch (error) {
        next(error)
    }
})

router.get('/books/:bid', (req, res, next) => {
    const id = parseInt(req.params.bid)
    const bookIndex = res.app.locals.books.findIndex(e => e.id === id)
    if (bookIndex !== -1) {
        res.status(200).json(res.app.locals.books[bookIndex])
    } else {
        res.status(404).json({ message: 'sorry, but the book is in another castle' })
    }
})

router.put('/books/:bid', (req, res, next) => {
    const id = parseInt(req.params.bid)
    const bookIndex = res.app.locals.books.findIndex(e => e.id === id)
    if (bookIndex !== -1) {
        res.app.locals.books[bookIndex].title = req.body.title
        res.app.locals.books[bookIndex].content = req.body.content
        res.status(202).json(res.app.locals.books[bookIndex])
    } else {
        res.status(404).json({ message: 'sorry, but the book is in another castle' })
    }
})

router.delete('/books/:bid', (req, res, next) => {
    const id = parseInt(req.params.bid)
    const bookIndex = res.app.locals.books.findIndex(e => e.id === id)
    if (bookIndex !== -1) {
        res.app.locals.books.splice(bookIndex, 1)
        res.status(204).json({})
    } else {
        res.status(404).json({ message: 'sorry, but the book is in another castle' })
    }
})

export default router