const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan("dev"));
app.use( express.static( "public" ) );
app.use(express.static("docs"));

app.use("/views", require("./ViewEngines"));

app.use("/registration", require("./RegRoutes"));
app.use("/download", require("./DownloadRoutes"));
app.use("/upload", require("./UploadRoutes"));
app.use("/student", require("./StudentRoutes"));
app.use("/course", require("./CourseRoutes"));
app.use("/teacher", require("./TeacherRoutes"));
app.use("/stats", require("./StatisticsRoutes"));


module.exports = app;