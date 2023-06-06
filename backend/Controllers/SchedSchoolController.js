const FSchoolModel = require('../Models/FormsScheduleSchool.js');
const PersonalData = require('../Models/PersonalData.js');


exports.createScheduleSchool = async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const dob = req.body.dob;
    const nationality = req.body.nationality;
    const gender = req.body.gender;
    const school = req.body.school;
    const englishSkill = req.body.englishSkill;
    const consultationPackage = req.body.consultationPackage;

    try{
        const personalData = await PersonalData.findOne({email : email});
        const allData = await PersonalData.find();

        if(personalData){
            const id = personalData.userId;
            
            const FSchool = await FSchoolModel.create({
                id,
                name,
                email,
                dob,
                nationality,
                gender,
                school,
                englishSkill,
                consultationPackage
            })

            console.log("Form Schedule: School Created (Pre-existing User");
            res.status(201).json({success: true, data: FSchool, message: "Schedule School Form Created"});
        }
        else{
            const id = allData.length + 1;

            const FSchool = await FSchoolModel.create({
                id,
                name,
                email,
                dob,
                nationality,
                gender,
                school,
                englishSkill,
                consultationPackage
            })

            console.log("Form Schedule: School Created");
            res.status(201).json({success: true, data: FSchool, message: "Schedule School Form Created"});
        }
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

exports.deleteScheduleSchool = async (req, res) =>{

    const id = req.params;

    try{
        const FSchool = await FSchoolModel.findByIdAndDelete({userId : id});

        if (FSchool){
            console.log("Form School Schedule Deleted");
            res.status(200).json({message: "Form Deleted"});
        }
        else{
            res.status(404).json({message: "Form School SChedule Not Found"});
        }
    }
    catch(err){
        res.status(500).json({error : error.message});
    }
}

exports.updateScheduleSchool = async (req, res) => {

    const id = req.params;

    try{

        const FSchool = await FSchoolModel.findByIdAndUpdate({userId : id}, req.body, {new : true});

        if (FSchool){
            console.log("Form School Schedule Updated");
            res.status(200).json({message: "Form Updated"});
        }
        else{
            res.status(404).json({message: "Form School Schedule Not Found"});
        }
    }
    catch(err){
        res.status(500).json({error : error.message});
    }
}

exports.getScheduleSchool = async (req, res) => {

    const id = req.params;

    try{
        const FSchool = await FSchoolModel.findById({userId : id});

        if (FSchool){
            console.log("Form School Schedule Found");
            res.status(200).json({data: FSchool});
        }
        else{
            res.status(404).json({message: "Form School Schedule Not Found"});
        }
    }
    catch(err){
        res.status(500).json({error : error.message});
    }
}

exports.getAllScheduleSchool = async (req, res) => {
    
        try{
            const FSchool = await FSchoolModel.find();
    
            if (FSchool){
                console.log("Form School Schedule Found");
                res.status(200).json({data: FSchool});
            }
            else{
                res.status(404).json({message: "Form School Schedule Not Found"});
            }
        }
        catch(err){
            res.status(500).json({error : error.message});
        }
    }