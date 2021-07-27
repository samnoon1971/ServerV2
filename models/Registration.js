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
                const result = await Course.findOne({ id: value })
                if (result) throw new Error("Already Registered for current semester, id :" + value);
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    courses: [String],
}, {timestamps: true});
RegSchema.plugin(uniqueValidator);
const Course = mongoose.model("reg", RegSchema);
module.exports = Course;