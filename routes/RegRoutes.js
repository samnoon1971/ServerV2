const app = require("express").Router();
const Registration = require("../models/Registration");
const Student = require("../models/Student");


app.post("/add", async (req, res) => {
    const reg = new Registration(req.body);


    try{
        await reg.save();
        res.send(reg);
    }catch(error){
        res.status(500).send(error);
    }
});

app.post("/search",(req, res) => {
    Registration.find()
        .sort({id: -1})
        .then((reg) => {
            for(let current=0; current<reg.length; current++){
                if(reg[current].id === req.body.id){
                    res.status(200).send(reg[current]);
                    return;
                }
            }
            res.status(500).send({message: "No Student Found"});
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error Occurred",
            });
        });
});



app.post("/student",(req, res) => {
    Registration.find()
        .sort({id: -1})
        .then((student) => {
            for(let current=0; current<student.length; current++){
                if(student[current].id === req.body.id){
                    console.log(student[current]);
                    res.status(200).send(student[current]);
                    return;
                }
            }
            res.status(500).send({message: "No Student Found"});
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error Occurred",
            });
        });
});


module.exports = app;