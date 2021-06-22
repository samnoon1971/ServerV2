const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const Teacher = mongoose.model("teacher", TeacherSchema);
module.exports = Teacher;