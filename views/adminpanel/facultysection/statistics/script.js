
$(document).ready(function () {
    console.log("Ready");
    let ctx1 = $("#pie-chartcanvas-1");
    let ctx2 = $("#pie-chartcanvas-2");

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
                var data1 = {
                    labels: ["CSE", "EEE", "CE", "BBA", "English", "Law"],
                    datasets: [
                        {
                            label: "Department-wise Students",
                            data: [data.cse, data.eee, data.ce, data.bba, data.english, data.law],
                            backgroundColor: [
                                "#DEB887",
                                "#A9A9A9",
                                "#DC143C",
                                "#F4A460",
                                "#2E8B57",
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

                //pie chart data
                var data2 = {
                    labels: ["match1", "match2", "match3", "match4", "match5"],
                    datasets: [
                        {
                            label: "TeamB Score",
                            data: [20, 35, 40, 60, 50],
                            backgroundColor: [
                                "#FAEBD7",
                                "#DCDCDC",
                                "#E9967A",
                                "#F5DEB3",
                                "#9ACD32"
                            ],
                            borderColor: [
                                "#E9DAC6",
                                "#CBCBCB",
                                "#D88569",
                                "#E4CDA2",
                                "#89BC21"
                            ],
                            borderWidth: [1, 1, 1, 1, 1]
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