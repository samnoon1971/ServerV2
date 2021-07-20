const app = require("express").Router();
const fileFolder = "docs";
const path = require("path");
const fs = require("fs");
const glob = require("glob")
const express = require("express");
app.use(express.static('docs'))
function getDirectories(path, callback) {
    fs.readdir(path, function (err, content) {
        if (err) return callback(err)
        callback(null, content)
    })
}

app.get("/check", (req, res) => {
    fs.exists(fileFolder, function fileExists(exists) {
        console.log("Exists? = ", exists);
        if (exists) {

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            fs.createReadStream(fileFolder).pipe(res);

        } else {
            res.writeHead(404);
            res.end('Not Found\n');
        }
    });
})


app.post("/all", (req, res) => {

   res.setHeader('Content-Type', 'text/plain');
    getDirectories(fileFolder, (err, files) => {
        if(err !== null) {

            console.log(fileFolder);
            console.log("ERROR");
            res.status(500).send(fileFolder);
        }

        let ret = [];
        files.forEach( file => {
            console.log(file);
           // ret.push(`<a href=\"` + file + `\">` + file + `<br>`);
            ret.push(file);
        });

        console.log(ret);
        res.send(ret);
    });
})

module.exports = app;