$(document).ready(function () {
    console.log("Ready");
    let lb = localStorage.getItem("lb");
    let ub = localStorage.getItem("ub");
    localStorage.clear();

    function send() {
        let sendData = {
            "lb": lb,
            "ub": ub,
        }
        $.ajax({
            url: "http://localhost:3000/student/find/cgparange",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                let rows = "";
                for (let index = 0; index < data.length; index++) {
                    let id = data[index].id;
                    let name = data[index].name;
                    let dept = data[index].department;
                    let level = data[index].level;
                    let term = data[index].term;
                    let cgpa = data[index].cgpa;
                    rows += "<tr><td style=\"text-align:center\">" + id + "</td><td style=\"text-align:center\">" + name + "</td><td style=\"text-align:center\">" + dept + "</td><td style=\"text-align:center\">" + level + "</td><td style=\"text-align:center\">" + term + "</td><td style=\"text-align: center\">" + cgpa + "</td>";
                }
                console.log(rows);
                $("#tblStudents tbody").append(rows);
            },
            error: function (data) {
                let err = jQuery.parseJSON(data.responseText);
                alert("Message: " + err.message);
            },
            data: JSON.stringify(sendData),
        });
    }

    send();
    $("#back").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        window.location.replace("../findstudent/findstudent.html");
    })

})