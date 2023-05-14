//const StudentModel = require('../Models/StudentModel');
const StudentModel = require('../Models/StudentTest');

//Schema (Test)
//Name - Email - DOB - Nationality - Gender

//Create Student Profile
exports.createStudentProfile = async (req, res) => {
    console.log("Saving..");
    const name = req.body.name;
    const email = req.body.email;
    const dob = req.body.dob;
    const nationality = req.body.nationality;
    const gender = req.body.gender;

    console.log(name + " " + email + " " + dob + " " + nationality + " " + gender);

    try { 
        const newStudent = await StudentModel.create(
            {
                name: name,
                email: email,
                dob: dob,
                nationality: nationality,
                gender: gender
            }
        )

        res.status(201).json({
            status: 'success',
            data: {
                student: newStudent
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

//Get Student Profile
exports.getStudentProfile((req, res) => {
    
})