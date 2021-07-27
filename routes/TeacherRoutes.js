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

app.post("/delete", (req, res) => {
    const Email = req.body.email;
    console.log(Email);
    Teacher.findOneAndDelete({email: Email}, (err, docs) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log("Deleted Teacher: ", docs);
            res.send("Deleted");
        }
    });
});


app.post('/finddept', (req, res) => {
    Teacher.find()
        .sort({email: -1})
        .then(dept => {
            let faculty = [];
            dept.forEach(element => {
                if(element.department === req.body.dept){
                    faculty.push(element);
                }
                else if("All" === req.body.dept){
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

app.post("/find/teacher",(req, res) => {
    Teacher.find()
        .sort({email: -1})
        .then((teacher) => {
            for(let current=0; current<teacher.length; current++){
                if(teacher[current].email === req.body.email){
                    res.status(200).send(teacher[current]);
                    return;
                }
            }
            res.status(500).send({message: "No teacher Found"});
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error Occurred",
            });
        });
});
module.exports = app;