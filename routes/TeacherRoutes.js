const app = require("express").Router();
const Teacher = require("../models/Teacher");


/*
    Course Schema info starts here...
 */

app.get('/', async (req, res) => {
    const teacher = await Teacher.find({});
    try{
        res.send(teacher);
    }catch(error){
        res.status(500).send(error);
    }
})

app.post('/', async (req, res) => {
    const teacher = new Teacher(req.body);

    try{
        await teacher.save();
        res.send(teacher);
    }catch(error){
        res.status(500).send(error);
    }
})
module.exports = app;