$(document).ready(function () {
    console.log("ready!");
    $("#dbox").hide();

    $("#id").val(localStorage.getItem("id"));
    $("#back").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        window.location.replace("/views/admin/course/dashboard");
    })
    $("#reset").click(() => {
        $(this).data('clicked', true);
        console.log("clicked");
        $("#name").val("");
        $("#code").val("");
        $("#credit").val("");
        $("#level").val("");
        $("#dept").val("");
        $("#term").val("");
        $("#optional").val("");
    })


    $("#add").click(() => {
        $(this).data('clicked', true);
        console.log("clicked");
        let name = $("#name").val();
        let code = $("#code").val();
        let level = $("#level").val();
        let dept = $("#dept").val();
        let term = $("#term").val();
        let optional = $("#optional").val();
        let credit = $("#credit").val();

        // console.log(dob);
        if (name === "" || level === "" || term === "" || optional === ""
            || dept === "" || credit === "" || code == "") {
            alert("Please fill all the data fields");
        } else {
            function send() {
                let course = {
                    name: name,
                    code: code,
                    department: dept,
                    level: level,
                    term: term,
                    optional: optional,
                    credit: credit,
                }

                $.ajax({
                    url: "http://localhost:3000/course",
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        $("#name").val("");
                        $("#code").val("");
                        $("#credit").val("");
                        $("#level").val("");
                        $("#dept").val("");
                        $("#term").val("");
                        $("#optional").val("");

                        $("#dbox").show();
                        $("html, body").animate({scrollTop: $("#dbox").offset().top}, "slow");
                        console.log("Shown");


                    },
                    data: JSON.stringify(course)
                });
            }

            send();
        }

    });


});