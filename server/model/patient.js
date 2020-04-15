const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: {type: String, required: true},
    birthDate: {type: Date, required: true},
    tAJNumber: {type: Number, required: true, unique: true},
    caseHistory: [{
        diagnosis: String,
        prescribedMedicines: [String],
        treatmentList: [String]
    }]
}, { collection: 'patient'});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;