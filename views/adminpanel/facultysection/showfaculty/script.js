$(document).ready(function () {
    console.log("Ready");
    let dept = localStorage.getItem("dept");
    localStorage.clear();

    function send() {
        let sendData = {
            dept: dept,
        }
        $.ajax({
            url: "http://localhost:3000/teacher/finddept",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                let rows = "";
                for (let index = 0; index < data.length; index++) {
                    let name = data[index].name;
                    let email = data[index].email;
                    let mobile = data[index].mobile;
                    let designation = data[index].designation;
                    let department = data[index].department;
                    rows += "<tr><td style=\"text-align:center\">" + name + "</td><td style=\"text-align:center\">" + email + "</td><td style=\"text-align:center\">" + mobile + "</td><td style=\"text-align:center\">" + designation + "</td><td style=\"text-align:center\">" + department + "</td>";
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
        window.location.replace("../teacherspanel/teacherspanel.html");
    })

})