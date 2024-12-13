export default function (sequelize, DataTypes) {
    return sequelize.define('course', {
        courseName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 20]
            }
        }    
    })
}