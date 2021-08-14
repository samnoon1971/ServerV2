$(document).ready(function () {
    console.log("Ready");

    function send() {

        $.ajax({
            url: "http://localhost:3000/course/display",
            type: "get",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                let rows = "";
                for (let index = 0; index < data.length; index++) {
                    let name = data[index].name;
                    let code = data[index].code;
                    let credit = data[index].credit;
                    let level = data[index].level;
                    let term = data[index].term;
                    rows += "<tr><td style=\"text-align:center\">" + name + "</td><td style=\"text-align:center\">" + code + "</td><td style=\"text-align:center\">" + credit + "</td><td style=\"text-align:center\">" + level + "</td><td style=\"text-align:center\">" + term + "</td>";
                }
                console.log(rows);
                $("#tblStudents tbody").append(rows);
            },
            error: function (data) {
                let err = jQuery.parseJSON(data.responseText);
                alert("Message: " + err.message);
            }
        });
    }

    send();
    $("#back").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        window.location.replace("../studentdashboard/studentdashboard.html");
    })

})