$(document).ready(function () {
    console.log("ready!");
    $("#submit").click(() => {
        $(this).data('clicked', true);
        // window.location.replace("./studentdashboard.html");
        console.log("clicked");
        if ($("#id").val() === "admin" && $("#password").val() === "pass") {
            window.location.replace("./admincontrol/adminmenu.html");
            console.log("done");
        } else {
            $("#id").val("");
            $("#password").val("");

            alert("Wrong Input");
        }
    });

});