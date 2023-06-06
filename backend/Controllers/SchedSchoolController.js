const FSchoolModel = require('../Models/FormsScheduleSchool.js');
const PersonalData = require('../Models/PersonalData.js');

exports.createScheduleSchool = async (req, res) => {
    console.log("Saving..");
   const {name,email,dob,nationality,gender,school,englishSkill,consultationPackage} = req.body;
   console.log(name,email,dob,nationality,gender,school,englishSkill,consultationPackage)


   const allData = await FSchoolModel.find();

   const id = allData.length + 1;
       
        const Fdata = await FSchoolModel.create({
            userId: id,
            name,email,dob,nationality,gender,school,englishSkill,consultationPackage
        });

        
       
        if (Fdata) {
            console.log("User Created!");
            res.status(200).json({ success: true, data: Fdata });
        } else {
            res.status(404).json({ success: false, error: "User not found!" });
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