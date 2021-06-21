const app = require("express").Router();

const Student = require("../models/Student");

app.get('/', async (req, res) => {
    const student = await Student.find({});
    try{
        res.send(student);
    }catch (error){
        res.status(500).send(error);
    }
});


app.get("/studentdashboard", (req, res) => {
    res.render('./student/studentdashboard');
})
app.post("/", async (req, res) => {
    const student = new Student(req.body);


    try{
        await student.save();
        res.send(student);
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/display",(req, res) => {
    Student.find()
        .sort({id: -1})
        .then((student) => {
            res.status(200).send(student);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error Occurred",
            });
        });
});

/*
 student find: returns a single student info with his/her id
 */
app.post("/find/student",(req, res) => {
    Student.find()
        .sort({id: -1})
        .then((student) => {
            for(let current=0; current<student.length; current++){
                if(student[current].id === req.body.id){
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

/*
  dept find: returns all students info in a particular department.
 */

app.post("/find/dept",(req, res) => {
    Student.find()
        .sort({id: -1})
        .then((student) => {
            let deptentry = [];
            for(let current=0; current<student.length; current++){
                if(student[current].department === req.body.department){
                    deptentry.push(student[current]);
                }
            }
            res.status(200).send(deptentry);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error Occurred",
            });
        });
});

/*
 cgparange find: returns all student info within a particular cgpa range (lb to ub).
 */

app.post("/find/cgparange",(req, res) => {
    Student.find()
        .sort({id: -1})
        .then((student) => {
            let cgpaentry = [];
            for(let current=0; current<student.length; current++){
                if(student[current].cgpa >= req.body.lb && student[current].cgpa <= req.body.ub){
                    cgpaentry.push(student[current]);
                }
            }
            res.status(200).send(cgpaentry);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error Occurred",
            });
        });
});


/*
 Student login: returns password matching id
 */
/*
app.post("/student/login", (req, res) => {
    let curID = req.body.id;
    Student.findOne({id: curID}, (err, student) => {
        if(student === null){
            console.log(err);
            res.send("ERROR");
        }
        else{
            let data = student.password;
            res.send(data);
        }
    });
})
 */


/*
 Delete student by ID
 */
app.post("/deleteid", (req, res) => {
    let curID = req.body.id;

    Student.findOneAndDelete({id: curID}, (err, docs) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log("Deleted student: ", docs);
            res.send("Deleted");
        }
    });

})

module.exports = app;