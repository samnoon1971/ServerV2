const app = require("express").Router();
const Course = require("../models/Course");


/*
    Course Schema info starts here...
 */

app.get('/', async (req, res) => {
    const course = await Course.find({});
    try{
        res.send(course);
    }catch(error){
        res.status(500).send(error);
    }
})

app.post('/', async (req, res) => {
    const course = new Course(req.body);

    try{
        await course.save();
        res.send(course);
    }catch(error){
        res.status(500).send(error);
    }
})

app.get('/display', (req, res) => {
    Course.find()
        .sort({code: -1})
        .then((course) => {
            res.status(200).send(course);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error Occured",
            });
        });
})

app.get('/')

module.exports = app;