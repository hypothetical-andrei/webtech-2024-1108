import express from 'express'
import models from './models/index.mjs'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/universities', async (req, res, next) => {
    try {
        const universities = await models.University.findAll({})
        res.status(200).json(universities)
    } catch (err) {
        next(err)
    }
})

app.post('/universities', async (req, res, next) => {
    try {
        const university = await models.University.create(req.body)
        res.status(201).json(university)
    } catch (err) {
        next(err)
    }
})

app.get('/universities/:uid/students', async (req, res, next) => {
    try {
        const university = await models.University.findByPk(req.params.uid, {
            include: [ models.Student ]
        })
        if (university) {
            res.status(200).json(university.students)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

app.post('/universities/:uid/students', async (req, res, next) => {
    try {
        const university = await models.University.findByPk(req.params.uid)
        if (university) {
            const student = new models.Student(req.body)
            student.universityId = req.params.uid
            await student.save()
            res.status(201).json(student)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

app.get('/universities/:uid/courses', async (req, res, next) => {
    try {
        const university = await models.University.findByPk(req.params.uid, {
            include: [ models.Course ]
        })
        if (university) {
            res.status(200).json(university.courses)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

app.post('/universities/:uid/courses', async (req, res, next) => {
    try {
        const university = await models.University.findByPk(req.params.uid)
        if (university) {
            const course = new models.Course(req.body)
            course.universityId = req.params.uid
            await course.save()
            res.status(201).json(course)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

app.get('/courses/:cid/students', async (req, res, next) => {
    try {
        const course = await models.Course.findByPk(req.params.cid)
        if (course) {
            const students = await course.getStudents()
            res.status(200).json(students)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(er)
    }
})

app.post('/courses/:cid/students', async (req, res, next) => {
    try {
        const course = await models.Course.findByPk(req.params.cid)
        const student = await models.Student.findByPk(req.body.sid)
        if (course && student) {
            course.addStudent(student)
            res.status(200).json({ message: 'student enrolled' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(er)
    }
})

app.get('/students/:sid/courses', async (req, res, next) => {
    try {
        const student = await models.Student.findByPk(req.params.sid, {
            include: [ models.Course ]
        })
        if (student) {
            res.status(200).json(student.courses)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(er)
    }
})

app.post('/students/:sid/courses', async (req, res, next) => {
    try {
        const student = await models.Student.findByPk(req.params.sid)
        const course = await models.Course.findByPk(req.body.cid)
        if (course && student) {
            student.addCourse(course)
            res.status(200).json({ message: 'student enrolled' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(er)
    }
})


app.get('/universities/export', async (req, res, next) => {
    try {
        const fullData = await models.University.findAll({
            include: [{
                model: models.Course,
                include: [models.Student]
            }]
        })
        res.status(200).json(fullData)
    } catch (err) {
        next(err)
    }
})

app.get('/universities/:uid', async (req, res, next) => {
    try {
        const university = await models.University.findByPk(req.params.uid, {
            include: [ models.Course, models.Student ]
        })
        if (university) {
            res.status(200).json(university)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})


app.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).json({ message: 'some error' })
})

app.listen(8080)