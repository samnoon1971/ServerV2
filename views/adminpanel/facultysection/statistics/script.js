$(document).ready(function () {
    console.log("Ready");
    let ctx1 = $("#pie-chartcanvas-1");

    let options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Pie Chart",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };


    function send() {
        $.ajax({
            url: "http://localhost:3000/stats/",
            type: "get",
            dataType: "json",
            contentType: "application/json",

            success: function (data) {
                console.log(data);
                $("#csedata").append("CSE : " + data.cse);
                $("#eeedata").append("EEE : " + data.eee);
                $("#cedata").append("CE : " + data.ce);
                $("#bbadata").append("BBA : " + data.bba);
                $("#englishdata").append("English : " + data.english);
                $("#lawdata").append("Law : " + data.law);
                let data1 = {
                    labels: ["CSE", "EEE", "CE", "BBA", "English", "Law"],
                    datasets: [
                        {
                            label: "Department-wise Students",
                            data: [data.cse, data.eee, data.ce, data.bba, data.english, data.law],
                            backgroundColor: [
                                "#DEB887",
                                "#A9A9A9",
                                "#DC143C",
                                "#F4C460",
                                "#6E8Bf7",
                                "#3E8B23"
                            ],
                            borderColor: [
                                "#CDA776",
                                "#989898",
                                "#CB252B",
                                "#E39371",
                                "#1D7A46",
                                "#E36371"
                            ],
                            borderWidth: [1, 1, 1, 1, 1, 1]
                        }
                    ]
                };


                chart1 = new Chart(ctx1, {
                    type: "pie",
                    data: data1,
                    options: options
                });
                return data.totalStudents + data.totalFaculty + data.totalCourses;

            },

        });
    }

    send();

})