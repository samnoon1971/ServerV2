$(document).ready(function () {
    console.log("Ready");

    $("#dbox").hide();

    $("#back").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        window.location.replace("/views/admin/student");
    })

    $("#searchbutton").click(() => {
        $(this).data('clicked', true);
        console.log("clicked");

        let searchbar = $("#searchbar").val();
        console.log(searchbar);
        // console.log(dob);
        if (searchbar === "") {
            alert("Please enter student ID");
        } else {
            function send() {
                let student = {
                    id: searchbar,
                }

                $.ajax({
                    url: "http://localhost:3000/student/delete",
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        $("#searchbar").val("");

                        $("#dbox").show();
                        $("html, body").animate({scrollTop: $("#dbox").offset().top}, "slow");
                        console.log("Shown");
                    },
                    data: JSON.stringify(student)
                });
            }

            send();
        }

    });


});