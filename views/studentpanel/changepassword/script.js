$( document ).ready(function() {
    console.log( "ready!" );
    $("#dbox").hide();
    let id = localStorage.getItem("id");
    console.log(id);
    $("#confirm").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        let pass1 = $("#newpass1").val();
        let pass2 = $("#newpass2").val();
        if(pass1 !== pass2){
            alert("Password does not match! try again");
            $("#newpass1").val("");
            $("#newpass2").val("");
            $("#curpass").val("");
        }
        else{
            function send() {
                let student = {
                    id: id,
                    password: pass1,

                }
                $.ajax({
                    url: "http://localhost:3000/student/find/student/update",
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        console.log("DONE");
                        console.log(data);
                        $("#newpass1").val("");
                        $("#newpass2").val("");
                        $("#curpass").val("");
                        alert("Updated Successfully");


                    },
                    data: JSON.stringify(student)
                });
            }
            send();
        }
    });





});