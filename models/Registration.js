const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const RegSchema = new Schema({
    id: {
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
    level: {
        type: String,
        required: true,
    },
    term: {
        type: String,
        required: true,
    },
    courses: [String],
}, {timestamps: true});
RegSchema.plugin(uniqueValidator);
const Course = mongoose.model("reg", RegSchema);
module.exports = Course;