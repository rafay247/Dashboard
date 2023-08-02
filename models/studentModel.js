const Sequelize = require('sequelize')
const connection = require('../config/connection')

const studentModel = connection.define(
    'student',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        father_name: {
            type: Sequelize.STRING
        },
        father_cnic: {
            type: Sequelize.INTEGER
        },
        dob: {
            type: Sequelize.DATEONLY
        },
        pic: {
            type: Sequelize.BLOB
        },
        class: {
            type: Sequelize.INTEGER
        },
        age: {
            type: Sequelize.INTEGER
        },
        gr_no: {
            type: Sequelize.INTEGER
        },
        mobile_number: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        session: {
            type: Sequelize.STRING
        },
        monthly_fees: {
            type: Sequelize.INTEGER,
        },
        annual_fees: {
            type: Sequelize.INTEGER,
        },
        admission_fees: {
            type: Sequelize.INTEGER,
        },
    },
    {
        timestamps: false
    }
)
module.exports = studentModel