const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan("dev"));
app.use( express.static( "public" ) );
/*
app.use("/", require("./ViewEngines"));
*/
app.use("/student", require("./StudentRoutes"));
app.use("/course", require("./CourseRoutes"));



module.exports = app;