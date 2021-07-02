const app = require("express").Router();
const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'docs')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "__" + file.originalname)
    }
})
const upload = multer({storage: fileStorageEngine});

app.post("/single", upload.single('doc'), (req, res) => {
    console.log(req.file);
    res.send("Single file upload complete");
})

app.post("/multiple", upload.array("docs", 5), (req, res) => {
    console.log(req.files);
    res.send("Multiple files upload complete");
})
module.exports = app;