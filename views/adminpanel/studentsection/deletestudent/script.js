$(document).ready(function () {
    console.log("Ready");
    $("#yes").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        let id = localStorage.getItem("id");

        function send() {
            let student = {

                id: id,

            }
            $.ajax({
                url: "http://localhost:3000/student/deleteid",
                type: "post",
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log("DONE");
                    console.log(data);
                    alert("Done");
                },
                data: JSON.stringify(student)
            });
        }

        send();

        window.location.replace("../findstudent/findstudent.html");
    });
    $("#no").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        window.location.replace("../findstudent/findstudent.html");
    });

})