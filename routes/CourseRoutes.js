const app = require("express").Router();
const Course = require("../models/Course");


/*
    Course Schema info starts here...
 */

app.get('/', async (req, res) => {
    const course = await Course.find({});
    try {
        res.send(course);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.post('/', async (req, res) => {
    const course = new Course(req.body);

    try {
        await course.save();
        res.send(course);
    } catch (error) {
        res.status(500).send(error);
    }
})
/*
Displays all Courses
 */
app.get('/display/all', (req, res) => {
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
/*
Displays courses department-wise
 */



app.post("/display/select",(req, res) => {

    let curDept = req.body.dept;
    let level = req.body.level;
    let term = req.body.term;
    if(curDept === "All") {
        Course.find()
            .sort({code: -1})
            .then((course) => {
                let sendData = [];
                course.forEach(element => {
                    if(level === "All"){
                        sendData.push(element);
                    }
                    else if(element.level === level && element.term === term){
                        sendData.push(element);
                    }
                })
                res.status(200).send(sendData);
            })
            .catch(error => {
                res.status(500).send({
                    message: error.message || "Error Occurred",
                });
            });
    }
    else {
        Course.find()
            .sort({code: -1})
            .then(course => {
                let sendData = [];
                course.forEach(element => {
                    if (element.department === curDept && element.level === level && element.term === term) {
                        sendData.push(element);
                    }
                    else if(element.department === curDept && level === "All"){
                        sendData.push(element);
                    }
                })
                console.log(sendData);
                res.status(200).send(sendData);

            })
            .catch(error => {
                res.status(500).send({
                    message: error.message || "Error Occured",
                });
            });
    }
});






/*
app.post('/display/select', (req, res) => {
    let curDept = req.body.dept;
    console.log(curDept);
    if (curDept === "All") {
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
    } else {
        Course.find()
            .sort({code: -1})
            .then(course => {
                let sendData = [];
                course.forEach(element => {
                    if (element.department === curDept) {
                        sendData.push(element);
                    }
                })
                console.log(sendData);
                res.status(200).send(sendData);

            })
            .catch(error => {
                res.status(500).send({
                    message: error.message || "Error Occured",
                });
            });
    }
})
*/


app.post("/display/current", (req, res) => {
    Course.find()
        .sort({code: -1})
        .then(course => {
            let sendData = [];
            course.forEach(element => {
                if (element.department === req.body.dept && element.level === req.body.level && element.term === req.body.term) {
                    sendData.push(element);
                }
            })
            console.log(sendData);
            res.status(200).send(sendData);

        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error Occured",
            });
        });
})


app.post("/display/previous", (req, res) => {
    Course.find()
        .sort({code: -1})
        .then(course => {
            let sendData = [];
            course.forEach(element => {
                if (element.department === req.body.dept && element.level < req.body.level && element.term < req.body.term) {
                    sendData.push(element);
                }
            })
            console.log(sendData);
            res.status(200).send(sendData);

        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error Occured",
            });
        });
})

app.get('/find/levelterm', (req, res) => {
    Course.find()
        .sort({code: -1})
        .then((course) => {
            let courses = [];
            course.forEach(element => {
                if (element.level === req.body.level && element.term === req.body.term) {
                    courses.push(element);
                }
            });
            res.status(200).send(courses);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error Occured",
            });
        });
});
app.post("/delete", (req, res) => {
    let curCode = req.body.code;

    Course.findOneAndDelete({code: curCode}, (err, docs) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log("Deleted course: ", docs);
            res.send("Deleted");
        }
    });

});


module.exports = app;