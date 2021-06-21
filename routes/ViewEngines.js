
const app = require("express").Router();

app.get("/studentlogin", (req, res) => {
    res.render("./studentpanel/index");
})

app.get("/studentdashboard/studentdashboard", (req, res) => {
    res.render("./studentpanel/studentdashboard/studentdashboard");
})






app.get("/adminlogin", (req, res) => {
    res.render("./adminpanel/index");
})

module.exports = app;