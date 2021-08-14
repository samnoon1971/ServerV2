$(document).ready(function () {
    console.log("ready!");
    $("#dbox").hide();
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
                $("#name").val(data.name);
                $("#cgpa").val(data.cgpa);
                $("#payment").val(data.payment);
                $("#religion").val(data.religion);
                $("#blood").val(data.blood_group);
                $("#nationality").val(data.nationality);
                $("#dob").val(data.dob);
                $("#mobile").val(data.mobile);
                $("#email").val(data.email);
                $("#gender").val(data.gender);
                $("#current").val(data.current);
                $("#faname").val(data.father_name);
                $("#faprof").val(data.father_prof);
                $("#moname").val(data.mother_name);
                $("#moprof").val(data.mother_prof);
                $("#guardian_name").val(data.guardian_name);
                $("#guardian_mobile").val(data.guardian_mobile);
                $("#id").val(data.id);
                $("#present_address").val(data.present_address);
                $("#permanent_address").val(data.permanent_address);
                $("#pass").val(data.password);
                $("#dept").val(data.department);
                $("#level").val(data.level);
                $("#term").val(data.term);
                $("#semester").val(data.enrolled_semester);

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
    $("#reset").click(() => {
        $(this).data('clicked', true);
        console.log("clicked");
        $("#name").val("");
        $("#cgpa").val("");
        $("#payment").val("");
        $("#religion").val("");
        $("#blood").val("");
        $("#nationality").val("");
        $("#dob").val("");
        $("#mobile").val("");
        $("#email").val("");
        $("#gender").val("");
        $("#current").val("");
        $("#faname").val("");
        $("#faprof").val("");
        $("#moname").val("");
        $("#moprof").val("");
        $("#guardian_name").val("");
        $("#guardian_mobile").val("");
        $("#id").val("");
        $("#present_address").val("");
        $("#permanent_address").val("");
        $("#pass").val("");
        $("#dept").val("");
        $("#level").val("");
        $("#term").val("");
        $("#semester").val("");
    })


    $("#add").click(() => {
        $(this).data('clicked', true);
        console.log("clicked");
        let name = $("#name").val();
        let cgpa = $("#cgpa").val();
        let payment = $("#payment").val();
        let religion = $("#religion").val();
        let bloodGroup = $("#blood").val();
        let nationality = $("#nationality").val();
        let dob = $("#dob").val();
        let mobile = $("#mobile").val();
        let email = $("#email").val();
        let gender = $("#gender").val();
        let current = $("#current").val();
        let faname = $("#faname").val();
        let faprof = $("#faprof").val();
        let moname = $("#moname").val();
        let moprof = $("#moprof").val();
        let guardian_name = $("#guardian_name").val();
        let guardian_mobile = $("#guardian_mobile").val();
        let id = $("#id").val();
        let present = $("#present_address").val();
        let permanent = $("#permanent_address").val();
        let pass = $("#pass").val();
        let dept = $("#dept").val();
        let level = $("#level").val();
        let term = $("#term").val();
        let semester = $("#semester").val();
        // console.log(dob);
        if (name === "" || cgpa === "" || semester === "" || payment === "" || religion === "" ||
            bloodGroup === "" || nationality === "" || dob === "" || mobile === "" ||
            email === "" || gender === "" || current === "" || faname === "" || faprof === "" ||
            moname === "" || moprof === "" || guardian_name === "" || guardian_mobile === "" ||
            id === "" || present === "" || permanent === "" || pass === "" || dept === "" || level === "" || term === "") {
            alert("Please fill all the data fields");
        } else {
            function send2() {
                let student = {
                    name: name,
                    id: id,
                    password: pass,
                    department: dept,
                    level: level,
                    term: term,
                    cgpa: cgpa,
                    payment: payment,
                    guardian_name: guardian_name,
                    guardian_mobile: guardian_mobile,
                    father_name: faname,
                    father_prof: faprof,
                    mother_name: moname,
                    mother_prof: moprof,
                    enrolled_semester: semester,
                    religion: religion,
                    blood_group: bloodGroup,
                    nationality: nationality,
                    dob: dob,
                    mobile: mobile,
                    email: email,
                    gender: gender,
                    present_address: present,
                    permanent_address: permanent,
                    current: current
                }

                $.ajax({
                    url: "http://localhost:3000/student/update",
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        $("#name").val("");
                        $("#cgpa").val("");
                        $("#payment").val("");
                        $("#religion").val("");
                        $("#blood").val("");
                        $("#nationality").val("");
                        $("#dob").val("");
                        $("#mobile").val("");
                        $("#email").val("");
                        $("#gender").val("");
                        $("#current").val("");
                        $("#faname").val("");
                        $("#faprof").val("");
                        $("#moname").val("");
                        $("#moprof").val("");
                        $("#guardian_name").val("");
                        $("#guardian_mobile").val("");
                        $("#id").val("");
                        $("#present_address").val("");
                        $("#permanent_address").val("");
                        $("#pass").val("");
                        $("#dept").val("");
                        $("#level").val("");
                        $("#term").val("");
                        $("#semester").val("");

                        /*
                        $("#dbox").show();
                        $("html, body").animate({scrollTop: $("#dbox").offset().top}, "slow");
                        console.log("Shown");
                         */
                    },

                    data: JSON.stringify(student)
                });
            }

            send2();
        }

    });


});