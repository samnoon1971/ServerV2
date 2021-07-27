$(document).ready(function () {
    console.log("Ready");
    $("#show").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        let enteredID = $("#searchbar").val();
        localStorage.setItem("id", enteredID);
        window.location.replace("../showstudent/showstudent.html");
        console.log(enteredID);
    })
    $("#delete").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        let enteredID = $("#searchbar").val();
        localStorage.setItem("id", enteredID);
        window.location.replace("../deletestudent/deletestudent.html");
        console.log(enteredID);
    })
    $("#add").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        let enteredID = $("#searchbar").val();
        localStorage.setItem("id", enteredID);
        window.location.replace("../addstudent/addstudent.html");
        console.log(enteredID);
    })
    $("#update").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        let enteredID = $("#searchbar").val();
        localStorage.setItem("id", enteredID);
        window.location.replace("../updatestudent/updatestudent.html");
        console.log(enteredID);
    })

    $("#reg").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        let enteredID = $("#searchbar").val();
        localStorage.setItem("id", enteredID);
        window.location.replace("../registrationsection/viewreg.html");
        console.log(enteredID);
    })

})