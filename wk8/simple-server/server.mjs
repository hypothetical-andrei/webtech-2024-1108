import express from 'express'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'simple.sqlite'
})

const Employee = sequelize.define('employee', {
    firstName: Sequelize.STRING,
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [3, 20]
        }
    },
    salary: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0
        }
    }
})

try {
    await sequelize.sync({ alter: true })
} catch (error) {
    console.warn(error)
    process.exit(1)
}

const app = express()
app.use(express.json())

// get /employees?simplified=true&filter=im
app.get('/employees', async (req, res, next) => {
    try {
        const query = {}
        if (req.query.simplified === 'true') {
            query.attributes = ['firstName', 'lastName']
        }
        if (req.query.filter) {
            query.where = {
                firstName: req.query.filter
            }
        }
        console.log(query)
        const results = await Employee.findAll(query)
        res.status(200).json(results)
    } catch (error) {
        next(error)
    }
})

app.post('/employees', async (req, res, next) => {
    try {
        const result = await Employee.create(req.body)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
})

app.get('/employees/:eid', async (req, res, next) => {
    try {
        const result = await Employee.findByPk(req.params.eid)
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (error) {
        next(error)
    }
})

app.put('/employees/:eid', async (req, res, next) => {
    /*
    try {
        const result = await Employee.findByPk(req.params.eid)
        if (result) {
            await result.update(req.body, {
                fields: ['firstName', 'lastName', 'salary']
            })
            res.status(202).json({ message: 'accepted' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (error) {
        next(error)
    } 
    */
    try {
        const result = await Employee.update(req.body, {
            where: {
                id: req.params.eid
            }, 
            fields: ['firstName', 'lastName', 'salary']
        })
        console.log(result)
        if (result.shift() !== 0) {
            res.status(202).json({ message: 'accepted' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (error) {
        next(error)
    } 
})

app.delete('/employees/:eid', async (req, res, next) => {
    try {
        const result = await Employee.findByPk(req.params.eid)
        if (result) {
            await result.destroy()
            res.status(204).json({})
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (error) {
        next(error)
    } 
})

app.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).json({ message: 'server error' })
})

app.listen(8080)