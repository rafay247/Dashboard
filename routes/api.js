const express = require('express')
const router = express.Router()
const { createStudent, getStudent, getStudents, updateStudent, deleteStudent } = require('../controllers/studentController')

router.post('/student', createStudent)
router.get('/students', getStudents)
router.get('/student/:id', getStudent)
router.put('/student/:id', updateStudent)
router.delete('/Student/:id', deleteStudent)

module.exports = router