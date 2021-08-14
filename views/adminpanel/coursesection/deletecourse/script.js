$(document).ready(function () {
    console.log("Ready");

    $("#dbox").hide();

    $("#back").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        window.location.replace("/views/admin/course/dashboard");
    })

    $("#searchbutton").click(() => {
        $(this).data('clicked', true);
        console.log("clicked");

        let searchbar = $("#searchbar").val();
        console.log(searchbar);
        // console.log(dob);
        if (searchbar === "") {
            alert("Please enter course code");
        } else {
            function send() {
                let course = {
                    code: searchbar,
                }

                $.ajax({
                    url: "http://localhost:3000/course/delete",
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        $("#searchbar").val("");

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