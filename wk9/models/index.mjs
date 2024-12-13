import { Sequelize } from 'sequelize'
import createStudent from './student.mjs'
import createUniversity from './university.mjs'
import createCourse from './course.mjs'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my.db'
})

const University = createUniversity(sequelize, Sequelize)
const Student = createStudent(sequelize, Sequelize)
const Course = createCourse(sequelize, Sequelize)

University.hasMany(Student)
University.hasMany(Course)

Student.belongsToMany(Course, { through: 'enrollments' })
Course.belongsToMany(Student, { through: 'enrollments' })

try {
    await sequelize.sync()
} catch (error) {
    console.warn(error)
    process.exit(1)
}

export default {
    Student,
    University,
    Course
}