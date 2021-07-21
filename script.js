$( document ).ready(function() {
    console.log( "ready!" );
    $("#studentbutton").click(() => {
        $(this).data('clicked', true);
        console.log("clicked");
        function send() {
            let student = {
                id: $("#studentname").val().toString(),
            }
            $("#studentbutton").html("Submitting");

            $.ajax({
                url: "http://localhost:3000/student/find/student",
                type: "post",
                dataType: "json",

                contentType: "application/json",
                success: function (data) {
                    const newData = data.password.toString();
                    const pass = $("#studentpass").val().toString();
                    console.log(newData);
                    console.log(pass);
                    if(newData === pass){
                        localStorage.setItem("id", $("#id").val());
                        window.location.replace("./views/studentpanel/studentmenu/studentmenu.html");
                    }
                    else{
                        alert("Wrong Credentials");
                        $("#studentname").val("");
                        $("#studentpass").val("");
                    }
                },
                data: JSON.stringify(student)
            });
        }
        send();
    });


    $("#facultybutton").click(() => {
        $(this).data('clicked', true);
        console.log("clicked");
        function send() {
            let teacher = {
                email: $("#facultyname").val().toString(),
            }
            $("#facultybutton").html("Submitting");

            $.ajax({
                url: "http://localhost:3000/teacher/find/teacher",
                type: "post",
                dataType: "json",

                contentType: "application/json",
                success: function (data) {
                    const newData = data.password.toString();
                    const pass = $("#facultypass").val().toString();
                    console.log(newData);
                    console.log(pass);
                    if(newData === pass){
                        localStorage.setItem("email", $("#email").val());

                        window.location.replace("./views/teacherpanel/teacherdashboard/teacherdashboard.html");
                    }
                    else{
                        alert("Wrong Credentials");
                        $("#facultyname").val("");
                        $("#facultypass").val("");
                    }
                },
                data: JSON.stringify(teacher)
            });
        }
        send();
    });



    $("#adminbutton").click(() => {
        $(this).data('clicked', true);
        // window.location.replace("./studentdashboard.html");
        console.log("clicked");
        if($("#adminname").val() === "admin" && $("#adminpass").val() === "pass"){
            window.location.replace("./views/adminpanel/admincontrol/adminmenu.html");
            console.log("done");
        }
        else {
            $("#adminname").val("");
            $("#adminpass").val("");

            alert("Wrong Input");
        }
    });



});