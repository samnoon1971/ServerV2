const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    credit: {
        type: String,
        required: true,
    },
    optional: {
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
    }
}, {timestamps: true});

const Course = mongoose.model("course", CourseSchema);
module.exports = Course;