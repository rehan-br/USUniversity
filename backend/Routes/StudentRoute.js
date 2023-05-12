const express = require('express');
const studentController = require('../Controllers/StudentController');

const router = express.Router();

//Create Student Profile

router.post('/createStudent', studentController.createStudentProfile);
router.get('/getStudent', studentController.getStudentProfile);

module.exports = router;