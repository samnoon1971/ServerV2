const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    term: {
        type: String,
        required: true,
    },
    cgpa: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
    guardian_name: {
        type: String,
        required: true,
    },
    guardian_mobile: {
        type: String,
        required: true,
    },
    father_name: {
        type: String,
        required: true,
    },
    father_prof: {
        type: String,
        required: true,
    },
    mother_name: {
        type: String,
        required: true,
    },
    mother_prof: {
        type: String,
        required: true,
    },
    enrolled_semester: {
        type: String,
        required: true,
    },
    religion: {
        type: String,
        required: true,
    },
    blood_group: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    present_address: {
        type: String,
        required: true,
    },
    permanent_address: {
        type: String,
        required: true,
    },
    current: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const Student = mongoose.model("student", StudentSchema);
module.exports = Student;