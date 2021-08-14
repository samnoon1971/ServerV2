$(document).ready(function () {
    console.log("ready!");
    $("#submit").click(() => {
        $(this).data('clicked', true);
        console.log("clicked");

        function send() {
            let student = {
                id: $("#id").val().toString(),
            }
            $("#submit").html("Submitting");

            $.ajax({
                url: "http://localhost:3000/student/find/student",
                type: "post",
                dataType: "json",

                contentType: "application/json",
                success: function (data) {
                    const newData = data.password.toString();
                    const pass = $("#password").val().toString();
                    console.log(newData);
                    console.log(pass);
                    if (newData === pass) {
                        localStorage.setItem("id", $("#id").val());
                        window.location.replace("./studentmenu/studentmenu.html");
                    } else {
                        alert("Wrong Credentials");
                        $("#id").val("");
                        $("#password").val("");
                    }
                },
                data: JSON.stringify(student)
            });
        }

        send();
    });

});