const express = require("express");
const mongoose = require("mongoose");
const uri = "mongodb+srv://samnoon:admin123@server0.wdwol.mongodb.net/server0?retryWrites=true&w=majority";
const app = express();
const api = require('./routes/App');
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = 3000;
app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    next();
});
app.use(api);
mongoose.connect("mongodb+srv://samnoon:admin123@server0.wdwol.mongodb.net/server0?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false})
    .then((result) =>{

        app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));