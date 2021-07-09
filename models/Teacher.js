const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const TeacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: async (value) => {
            try {
                const result = await Teacher.findOne({ email: value })
                if (result) throw new Error("duplicity detected: id :" + value);
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    mobile: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true});
TeacherSchema.plugin(uniqueValidator);
const Teacher = mongoose.model("teacher", TeacherSchema);
module.exports = Teacher;
