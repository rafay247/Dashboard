const studentModel = require('../models/studentModel')

const createStudent = async (req, res) => {
    try {
        const payload = req.body
        //validate
        const response = await studentModel.create(payload)
        res.status(200).send({
            status: true,
            message: response.toJSON(),
        })

    } catch (error) {
        res.status(400).send({
            status: false,
            message: error
        })
    }
}
const getStudent = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) throw new Error('id is missing from the request')
        const response = await studentModel.findOne({ where: { id: id } })
        if (!response) throw new Error(`Not found Student with the id of ${id}`)
        res.status(200).send({
            status: true,
            data: response
        })

    } catch (error) {
        res.status(404).send({
            status: false,
            message: error
        })

    }
}
const getStudents = async (req, res) => {
    try {
        const response = await studentModel.findAll()
        if (!response) throw new Error("Error Occurred while retriving Student information")
        res.status(200).send({
            status: true,
            data: response
        })
    } catch (error) {
        res.status(404).send({
            status: false,
            message: error
        })
    }
}

const updateStudent = async (req, res) => {
    try {
        const id = req.params.id
        const payload = req.body

        if (!id) throw new Error("id is missing from the request")
        if (!payload) throw new Error("Data to update can not be empty")

        const response = await studentModel.update(
            payload
            , { where: { id: id } }
        )
        if (!response) throw new Error(`Cannot Update Student with ${id}. Maybe Student not found!`)
        return res.status(200).send({
            status: true,
            message: 'record is updated'
        })
    } catch (error) {
        return res.status(400).send({
            status: false,
            message: error
        })
    }
}

const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) throw new Error("id is missing from the request")

        const response = await studentModel.destroy({
            where: { id: id }
        })
        if (!response) throw new Error(`Cannot Delete Student with id ${id}. Maybe id is wrong`)

        return res.status(200).send({
            status: true,
            message: "Student was deleted successfully!"
        })
    } catch (error) {
        return res.status(400).send({
            status: false,
            message: error
        })

    }
}



module.exports = { createStudent, getStudent, getStudents, updateStudent, deleteStudent }


