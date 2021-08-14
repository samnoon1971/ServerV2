$(document).ready(function () {
    console.log("Ready");
    let id = localStorage.getItem("id");
    localStorage.clear();

    function send() {
        let student = {

            id: id,

        }
        $.ajax({
            url: "http://localhost:3000/student/find/student",
            type: "post",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                console.log("DONE");
                console.log(data);
                $("#name").html(data.name);
                $("#cgpa").html(data.cgpa);
                $("#payment").html(data.payment);
                $("#religion").html(data.religion);
                $("#blood").html(data.blood_group);
                $("#nationality").html(data.nationality);
                $("#dob").html(data.dob);
                $("#mobile").html(data.mobile);
                $("#email").html(data.email);
                $("#gender").html(data.gender);
                $("#current").html(data.current);
                $("#faname").html(data.father_name);
                $("#faprof").html(data.father_prof);
                $("#moname").html(data.mother_name);
                $("#moprof").html(data.mother_prof);
                $("#guardian_name").html(data.guardian_name);
                $("#guardian_mobile").html(data.guardian_mobile);
                $("#id").html(data.id);
                $("#present_address").html(data.present_address);
                $("#permanent_address").html(data.permanent_address);
                $("#pass").html(data.password);
                $("#dept").html(data.department);
                $("#level").html(data.level);
                $("#term").html(data.term);
                $("#semester").html(data.enrolled_semester);

            },
            data: JSON.stringify(student)
        });
    }

    send();
    $("#back").click(() => {
        $(this).data("clicked", true);
        console.log("Clicked");
        window.location.replace("/views/admin/student");
    })

})