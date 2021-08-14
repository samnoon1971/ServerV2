$(document).ready(function () {
    console.log("ready!");

    $("#dbox").hide();
    $("#id").val(localStorage.getItem("id"));
    $("#back").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        window.location.replace("/views/admin/faculty/dashboard");
    })
    $("#reset").click(() => {
        $(this).data('clicked', true);
        console.log("clicked");
        $("#name").val("");
        $("#mobile").val("");
        $("#email").val("");
        $("#pass").val("");
        $("#dept").val("");
        $("#designation").val("");
    })


    $("#add").click(() => {
        $(this).data('clicked', true);
        console.log("clicked");
        let name = $("#name").val();

        let mobile = $("#mobile").val();
        let email = $("#email").val();
        let pass = $("#pass").val();
        let dept = $("#dept").val();
        let designation = $("#designation").val();

        // console.log(dob);
        if (name === "" || mobile === "" || email === "" || pass === ""
            || dept === "" || designation === "") {
            alert("Please fill all the data fields");
        } else {
            function send() {
                let teacher = {
                    name: name,
                    password: pass,
                    department: dept,
                    email: email,
                    mobile: mobile,
                    designation: designation,
                }


                $.ajax({
                    url: "http://localhost:3000/teacher",
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",

                    success: function (data) {
                        $("#name").val("");
                        $("#mobile").val("");
                        $("#email").val("");
                        $("#pass").val("");
                        $("#dept").val("");
                        $("#designation").val("");
                        console.log(data);


                        $("#dbox").show();
                        $("html, body").animate({scrollTop: $("#dbox").offset().top}, "slow");
                        console.log("Shown");


                    },


                    data: JSON.stringify(teacher),

                });
            }

            send();
        }

    });


});