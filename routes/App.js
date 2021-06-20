const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan("dev"));
app.use( express.static( "public" ) );
app.use("/student", require("./StudentRoutes"));
app.use("/course", require("./CourseRoutes"));
app.get("/", (req, res) => {
    res.render('./index');
})
app.get("/public/Baiust.jpg", (req, res) => {
    res.render('./index');
})

app.get("/admindashboard", (req, res) => {
    res.render('./admin/adminDashboard');
})
app.get("/studentdashboard", (req, res) => {
    res.render('./student/studentDashboard');
})
app.get("/departmentdashboard", (req, res) => {
    res.render('./department/departmentDashboard');
})
module.exports = app;