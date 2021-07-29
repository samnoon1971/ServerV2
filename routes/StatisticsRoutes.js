const app = require("express").Router();
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Course = require("../models/Course");


app.get("/", (req, res) => {
    let cse = 0, eee = 0, ce = 0, bba = 0, english = 0, law = 0;
    let l1 = 0, l2 = 0, l3 = 0, l4 = 0;
    let totalStudents = 0, totalFaculty = 0, totalCourses = 0;
    let paid = 0, unpaid = 0, partialPaid = 0;

            Student.find()
                .sort({id: -1})
                .then(student => {
                    totalStudents = student.length;
                    console.log(totalStudents);
                    student.forEach(current => {
                        if(current.level === "4"){
                            l4++;
                        }
                        else if(current.level === "3"){
                            l3++;
                        }
                        else if(current.level === "2"){
                            l2++;
                        }
                        else{
                            l1++;
                        }

                        if(current.department === "CSE"){
                            cse++;
                        }
                        else if(current.department === "EEE"){
                            eee++;
                        }
                        else if(current.department === "CE"){
                            ce++;
                        }
                        else if(current.department === "BBA"){
                            bba++;
                        }
                        else if(current.department === "English"){
                            english++;
                        }
                        else{
                            law++;
                        }

                        if(current.payment === "Fully Paid") {
                            paid++;
                        }
                        else if(current.payment === "With Dues") {
                            partialPaid++;
                        }
                        else {
                            unpaid++;
                        }




                    })
                })
        .then( ()=> {
            let data = {
                cse: cse,
                eee: eee,
                ce: ce,
                bba: bba,
                english: english,
                law: law,
                l4: l4,
                l3: l3,
                l2: l2,
                l1: l1,

                totalStudents: totalStudents,
            }
            console.log(data);
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Error Occurred",
            });
        });

})




module.exports = app;