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

        try {
            await teacher.save();
            res.send(teacher);
        } catch (error) {
            res.status(500).send(error);
        }

})


app.get('/finddept', (req, res) => {
    Teacher.find()
        .sort({code: -1})
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