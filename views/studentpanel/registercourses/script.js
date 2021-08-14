$(document).ready(function () {
    console.log("Ready");

    let id = localStorage.getItem("id");
    let dept = localStorage.getItem("dept");
    let level = localStorage.getItem("level");
    let term = localStorage.getItem("term");
    // localStorage.clear();
    console.log(dept);
    console.log(level);
    console.log(term);

    function send() {
        let sendData = {
            dept: dept,
            level: level,
            term: term,
        }
        $.ajax({
            url: "http://localhost:3000/course/display/select",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                let rows = "";
                for (let index = 0; index < data.length; index++) {
                    let name = data[index].name;
                    let code = data[index].code
                    rows += "<option>" + name + " - " + code + "</option>";
                }
                console.log(rows);
                $("#courses").append(rows);
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


    function get() {
        let sendData = {
            id: id,
        }
        $.ajax({
            url: "http://localhost:3000/registration/search",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                alert("Message: " + " Already Registered");
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

    get();


    $("#add").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        let allCourse = $("#courses").val();
        console.log(allCourse);

        function send() {
            let sendData = {
                id: id,
                courses: allCourse,
            }
            $.ajax({
                url: "http://localhost:3000/registration/add",
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                success: function (data) {

                    console.log(data);

                },
                error: function (data) {
                    let err = jQuery.parseJSON(data.responseText);
                    alert("Message: " + err.message);
                },
                data: JSON.stringify(sendData),
            });
        }

        send();
    })

})

