$( document ).ready(function() {
    console.log( "ready!" );
        function send() {
            console.log("Sending");

            $.ajax({
                url: "http://localhost:3000/download/all",
                type: "post",
                dataType: "text",

                success: function (data) {
                    let ret = "";
                    let box = [];
                    for(let i=1; i<data.length - 1; i++) {
                        if(data[i] === ','){
                            box.push(ret);
                            ret = "";
                        }
                        else {
                            ret += data[i];
                        }
                    }
                    box.push(ret);
                   for(let i = 0; i < box.length; i++) {
                       var file = box[i];
                       console.log(file);
                      //  ret += <td></td>`<a href=\"` + file + `\">` + file + `<br>`;
                        ret += "<tr><td style=\"text-align:center\">" + file + "</td></tr>";

                        //res.write(`<a href=\"` + file + `\">` + file + `<br>`);
                    };
                $("#tblFiles").append(ret);
               // console.log(ret);
                }
            });
        }
        send();

});