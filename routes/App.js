const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan("dev"));
app.use("/student", require("./StudentRoutes"));
app.use("/course", require("./CourseRoutes"));
app.get("/", (req, res) => {
    res.render('./index');
})
app.get("/admin", (req, res) => {
    res.render('./admin/adminDashboard');
})
module.exports = app;