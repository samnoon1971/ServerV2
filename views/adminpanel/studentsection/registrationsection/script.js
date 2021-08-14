$(document).ready(function () {
    console.log("Ready");

    let id = localStorage.getItem("id");

    console.log(id);

    function send() {
        let sendData = {
            id: id,

        }
        $.ajax({
            url: "http://localhost:3000/registration/student",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                let rows = "";
                for (let index = 0; index < data.courses.length; index++) {
                    let name = data.courses[index];
                    rows += "<tr><td style=\"text-align:center\">" + name + "</td>";
                }
                console.log(rows);
                $("#id").append("Student ID: " + id);
                $("#tblStudents tbody").append(rows);
            },
            /*
            error: function (data) {
                let err = jQuery.parseJSON(data.responseText);
                alert("Message: " + err.message);
            },
             */
            data: JSON.stringify(sendData)
        });
    }

    send();
})


/*
$(document).ready(function () {
    console.log("Ready");
    let dept = localStorage.getItem("dept");

    function send() {
        let data = {
            department: dept,
        }
        $.ajax({
            url: "http://localhost:3000/course/display",
            type: "get",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                let rows = "";
                for(let index=0; index<data.length; index++) {
                    let name = data[index].name;
                    let code = data[index].code;
                    let dept = data[index].department;
                    let level = data[index].level;
                    let term = data[index].term;
                    rows += "<tr><td style=\"text-align:center\">" + name + "</td><td style=\"text-align:center\">" + code + "</td><td style=\"text-align:center\">" + dept + "</td><td style=\"text-align:center\">" + level + "</td><td style=\"text-align:center\">" + term + "</td>";
                }
                console.log(rows);
                $("#tblStudents tbody").append(rows);
            },
            error: function(data) {
                let err = jQuery.parseJSON(data.responseText);
                alert("Message: " + err.message);
            },
            data: JSON.stringify(data),
        });
    }
    send();
    $("#back").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        window.location.replace("../coursecontrol/coursesmenu.html");
    })

})


*/