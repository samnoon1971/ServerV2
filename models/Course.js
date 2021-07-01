const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const CourseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
        validate: async (value) => {
            try {
                const result = await Course.findOne({ code: value })
                if (result) throw new Error("duplicity detected: id :" + value);
            } catch (error) {
                throw new Error(error);
            }
        }
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
CourseSchema.plugin(uniqueValidator);
const Course = mongoose.model("course", CourseSchema);
module.exports = Course;