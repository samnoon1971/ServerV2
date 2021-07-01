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

app.post('/', (req, res) => {

            const teacher = new Teacher(req.body);
            teacher.save();
            res.send(teacher);

})

app.get('/verify', (req, res) => {
    Teacher.find()
        .sort({email: -1})
        .then(dept => {
            dept.forEach(element => {
                if(element.email === req.body.email){
                    res.status(500).send();
                }
            })
        })


    res.status(200);
})
app.get('/finddept', (req, res) => {
    Teacher.find()
        .sort({email: -1})
        .then(dept => {
            let faculty = [];
            dept.forEach(element => {
                if(element.dept === req.body.dept){
                    faculty.push(element);
                }
            });
            res.status(200).send(faculty);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error Occured",
            });
        });
});
module.exports = app;