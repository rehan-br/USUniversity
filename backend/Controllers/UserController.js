const PersonalData = require('../Models/PersonalData.js');
const jwt = require('jsonwebtoken');


//Registration
exports.register = async (req, res) => {
    const { firstName, lastName, email, phone, password, isAdmin } = req.body;



    try {
        const allData = await PersonalData.find();

        const id = allData.length + 1;

        const personalData = await PersonalData.create({
            userId: id,
            firstName,
            lastName,
            email,
            phone,
            password,
            isAdmin
        });

        console.log("User Created!");
        res.status(201).json({ success: true, data: personalData });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    console.log("Body: " + email + " " + password);

        try {
            PersonalData.findOne({ email: email })
            .then((user, err) =>{
                if (err) {
                    console.log(err);
                    res.status(500).json({ success: false, error: err.message });
                }
                else if (!user) {
                    res.status(404).json({ success: false, error: "User not found" });
                }
                else {
                    if (user.password === password) {
                        console.log("User found!");
                        const token = jwt.sign({ id: user._id }, process.env.SECRET);
                        res.status(200).json({ success: true, data: user, token : token });
                    }
                    else {
                        res.status(404).json({ success: false, error: "Wrong password" });
                    }
                }
            });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
}

// CREATE
exports.createPersonalData = async (req, res) => {
  try {
    const newPersonalData = new PersonalData(req.body);
    const savedPersonalData = await newPersonalData.save();
    res.status(201).json(savedPersonalData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
    try {
        const personalData = await PersonalData.find();
        res.status(200).json(personalData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// READ
exports.getPersonalDataById = async (req, res) => {
  try {
    const personalData = await PersonalData.findOne({userId : req.params.id});
    if (!personalData) {
      return res.status(404).json({ error: 'Personal data not found' });
    }
    res.status(200).json(personalData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updatePersonalData = async (req, res) => {
  try {
    const personalData = await PersonalData.findByIdAndUpdate({userId : req.params.id}, req.body, {
      new: true,
    });
    if (!personalData) {
      return res.status(404).json({ error: 'Personal data not found' });
    }
    res.status(200).json(personalData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deletePersonalData = async (req, res) => {
  try {
    const personalData = await PersonalData.findByIdAndDelete({userId : req.params.id});
    if (!personalData) {
      return res.status(404).json({ error: 'Personal data not found' });
    }
    res.status(200).json({ message: 'Personal data deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};