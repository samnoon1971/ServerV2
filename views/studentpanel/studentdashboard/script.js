$(document).ready(function () {
    console.log("Ready");

    let id = localStorage.getItem("id");

    function send() {
        let student = {
            id: id,
        }
        $("#submit").html("Submitting");

        $.ajax({
            url: "http://localhost:3000/student/find/student",
            type: "post",
            dataType: "json",

            contentType: "application/json",
            success: function (data) {
                console.log(data);
                $("#payment_header").html(data.payment);
                $("#cgpa_header").html(data.cgpa);
                $("#name").html(data.name);
                $("#dept").html(data.department);
                $("#id").html(data.id);
                $("#religion").html(data.religion);
                $("#blood").html(data.blood_group);
                $("#dob").html(data.dob);
                $("#mobile").html(data.mobile);
                $("#email").html(data.email);
                $("#gender").html(data.gender);
                $("#faname").html(data.father_name);
                $("#faprof").html(data.father_prof);
                $("#moname").html(data.mother_name);
                $("#moprof").html(data.mother_prof);
                $("#guardian_name").html(data.guardian_name);
                $("#guardian_mobile").html(data.guardian_mobile);
                $("#present").html(data.present_address);
                $("#permenant").html(data.permanent_address);
                $("#nationality").html(data.nationality);
                localStorage.setItem("level", data.level);
                localStorage.setItem("term", data.term);
            },
            data: JSON.stringify(student)
        });
    }

    send();

});