const FUniModel = require('../Models/FormsScheduleUni.js');
const PersonalData = require('../Models/PersonalData.js');


exports.createScheduleUni = async (req, res) => {
   const {name,email,dob,nationality,lastEducation,studyField,englishSkill,gender,
    university,major,degree,consultationPackage} = req.body;
    console.log(name,email,dob,nationality,lastEducation,studyField,englishSkill,gender,
        university,consultationPackage)
      console.log("Major and degree",major,degree)

    const allData = await FUniModel.find();

   const id = allData.length + 1;
       
        const FUdata = await FUniModel.create({
            userId: id,
            
            name,email,dob,nationality,lastEducation,studyField,englishSkill,gender,
    university,major,degree,consultationPackage
        });

        
       
        if (FUdata) {
            console.log("User Created!");
            res.status(200).json({ success: true, data: FUdata });
        } else {
            res.status(404).json({ success: false, error: "User not found!" });
        }
}

exports.deleteScheduleUni = async (req, res) =>{

    const id = req.params;

    try{
        const FUni = await FUniModel.findByIdAndDelete({userId : id});

        if (FUni){
            console.log("Form Uni Schedule Deleted");
            res.status(200).json({message: "Form Deleted"});
        }
        else{
            res.status(404).json({message: "Form Uni SChedule Not Found"});
        }
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}

exports.updateScheduleUni = async (req, res) => {

    const id = req.params;

    try{

        const FUni = await FUniModel.findByIdAndUpdate({userId : id}, req.body, {new : true});

        if (FUni){
            console.log("Form Uni Schedule Updated");
            res.status(200).json({message: "Form Updated"});
        }
        else{
            res.status(404).json({message: "Form Uni Schedule Not Found"});
        }
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}

exports.getScheduleUni = async (req, res) => {

    const id = req.params;

    try{
        const FUni = await FUniModel.findById({userId : id});

        if (FUni){
            console.log("Form Uni Schedule Found");
            res.status(200).json({data: FUni});
        }
        else{
            res.status(404).json({message: "Form Uni Schedule Not Found"});
        }
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}

exports.getAllScheduleUni = async (req, res) => {
    
        try{
            const FUni = await FUniModel.find();
    
            if (FUni){
                console.log("Form Uni Schedule Found");
                res.status(200).json({data: FUni});
            }
            else{
                res.status(404).json({message: "Form Uni Schedule Not Found"});
            }
        }
        catch(err){
            res.status(500).json({error : err.message});
        }
    }