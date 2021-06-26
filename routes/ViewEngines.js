
const app = require("express").Router();

app.get("/studentlogin", (req, res) => {
    res.render("./studentsection/index");
})

app.get("/studentdashboard/studentdashboard", (req, res) => {
    res.render("./studentsection/studentdashboard/studentdashboard");
})






app.get("/adminlogin", (req, res) => {
    res.render("./adminpanel/index");
})

module.exports = app;