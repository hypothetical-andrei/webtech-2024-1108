export default function (sequelize, DataTypes) {
    return sequelize.define('student', {
        studentFullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        studentStatus: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['ACTIVE', 'INACTIVE', 'FREEZED']
        }
    })
}