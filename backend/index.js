const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv');
const app = express();
const payment = require("./Routes/PaymentRoutes.js")
env.config();

const uri = process.env.ATLAS_URI;
const port = process.env.PORT || 3001;

mongoose.connect(uri, {useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to DB!");
})

app.use(bodyParser.json())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const studentRouter = require('./Routes/StudentRoute');
const userRouter = require('./Routes/PersonalData');

app.use('/student', studentRouter);
app.use('/user', userRouter);
app.use('/payment', payment)
app.listen(port, () => {
    console.log('Listening on port ' + port);
    }
);