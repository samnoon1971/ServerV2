
const app = require("express").Router();

app.get("/login", (req, res) => {
    res.render("login");
})


app.get("/admin/dashboard", (req, res) => {
    res.render("adminpanel/admincontrol/adminmenu");
})

app.get("/admin/student", (req, res) => {
    res.render("adminpanel/studentsection/findstudent/findstudent");
})

app.get("/admin/student/show", (req, res) => {
    res.render("adminpanel/studentsection/showstudent/showstudent");
})



app.get("/admin/student/remove", (req, res) => {
    res.render("adminpanel/studentsection/deletestudent/deletestudent");
})


app.get("/admin/student/add", (req, res) => {
    res.render("adminpanel/studentsection/addstudent/addstudent");
})



app.get("/admin/student/update", (req, res) => {
    res.render("adminpanel/studentsection/updatestudent/updatestudent");
})




app.get("/admin/student/registration", (req, res) => {
    res.render("adminpanel/studentsection/registrationsection/viewreg");
})







app.get("/admin/department", (req, res) => {
    res.render("adminpanel/studentsection/showall/ChooseDeptView");
});

app.get("/admin/department/all", (req, res) => {
    res.render("adminpanel/studentsection/showall/showallstudents")
})

app.get("/admin/cgpa", (req, res) => {
    res.render("adminpanel/studentsection/showcgpa/ChooseCGPA");
});

app.get("/admin/cgpa/all", (req, res) => {
    res.render("adminpanel/studentsection/showcgpa/showcgpa");
});


app.get("/admin/faculty", (req, res) => {
    res.render("adminpanel/facultysection/facultymenu");
})

app.get("/admin/faculty/dashboard", (req, res) => {
    res.render("adminpanel/facultysection/teacherspanel/teacherspanel");
})




app.get("/admin/faculty/show", (req, res) => {
    res.render("adminpanel/facultysection/showfaculty/ChooseDeptView");
})


app.get("/admin/faculty/all", (req, res) => {
    res.render("adminpanel/facultysection/showfaculty/showfaculty");
})



app.get("/admin/faculty/remove", (req, res) => {
    res.render("adminpanel/facultysection/deletefaculty/deletefaculty");
})



app.get("/admin/faculty/add", (req, res) => {
    res.render("adminpanel/facultysection/addfaculty/addfaculty");
})



app.get("/admin/course/dashboard", (req, res) => {
    res.render("adminpanel/coursesection/coursecontrol/coursesmenu");
})


app.get("/admin/course/show", (req, res) => {
    res.render("adminpanel/coursesection/viewcourses/ChooseDeptView");
})


app.get("/admin/course/all", (req, res) => {
    res.render("adminpanel/coursesection/viewcourses/viewcourse");
})



app.get("/admin/course/add", (req, res) => {
    res.render("adminpanel/coursesection/addcourse/addcourse");
})



app.get("/admin/course/remove", (req, res) => {
    res.render("adminpanel/coursesection/deletecourse/deletecourse");
})


app.get("/admin/stats", (req, res) => {
    res.render("adminpanel/facultysection/statistics/statistics");
})
















app.get("/student", (req, res) => {
    res.render("./studentpanel/studentmenu/studentmenu");
})

app.get("/student/dashboard", (req, res) => {
    res.render("./studentpanel/studentdashboard/studentdashboard");
})


app.get("/student/courses", (req, res) => {
    res.render("./studentpanel/viewcurcourses/curcourses");
})


app.get("/student/register", (req, res) => {
    res.render("./studentpanel/registercourses/regcourses");
})

app.get("/teacher", (req, res) => {
    res.render("./teacherpanel/teacherdashboard/teacherdashboard");
})


app.get("/teacher/classtest", (req, res) => {
    res.render("teacherpanel/addct/addct");
})


app.get("/teacher/assessment", (req, res) => {
    res.render("teacherpanel/addassessment/addassessment");
})


module.exports = app;