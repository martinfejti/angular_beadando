const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./model/user");
const Patient = require("./model/patient");
const url = "mongodb://localhost/angular_database";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.set('useFindAndModify', false);


app.post("/api/user/login", (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;
        console.log('username:: ', req.body.username, 'password:: ', req.body.password);
        User.find({
            username: req.body.username, password: req.body.password
        }, function(err, user){
            if (err) throw err;
            if (user.length === 1) {
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login failed'
                })
            }
        });
        console.log("Successful connection with username: ", req.body.username, ' password: ', req.body.password);
    });
})

app.post('/api/patient/getAllPatients', (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;
        Patient.find({}, function(err, doc){
            console.log('patientList backend: ', doc);
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    })
})

app.post('/api/patient/createPatient', (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;
        const patient = new Patient({
            name: req.body.name,
            birthDate: req.body.birthdate,
            tAJNumber: req.body.tAJNumber,
            caseHistory: req.body.caseHistory
        })
        patient.save((err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'status',
                data: doc
            })
        })
    })
})

app.post('/api/patient/editPatient', (req, res) => {
    console.log('henlo');
    mongoose.connect(url, function(err) {
        if (err) throw err;
        const disease = {
            diagnosis: req.body.diagnosis,
            prescribedMedicines: req.body.prescribedMedicines,
            treatmentList: req.body.treatmentList
        }
        console.log('backend: ', disease);
        console.log('backend name: ', req.body.patientName);
        Patient.findOneAndUpdate({name: req.body.patientName}, {$push: {caseHistory: disease}}, (err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'status',
                data: doc
            })
        })
    })
})

app.post('/api/patient/deletePatient', (req, res) => {
    console.log('delete api: ', req.body.tAJNumber);
    mongoose.connect(url, function(err) {
        if (err) throw err;
        Patient.findOneAndDelete({tAJNumber: req.body.tAJNumber}, (err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    })
})

app.get('/api/user/login', (req, res) => {
    res.send('Henlo World');
})

app.listen(4000, () => {
    console.log('Backend server is running on 4000');
})