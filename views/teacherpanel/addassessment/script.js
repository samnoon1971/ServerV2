
function readURL(input) {
    if (input.files && input.files[0]) {

        /*
        let reader = new FileReader();

        reader.onload = function(e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };
         reader.readAsDataURL(input.files[0]);

         */
        $('.image-upload-wrap').hide();

        $('.file-upload-content').show();

        $('.image-title').html(input.files[0].name);
        let data = input.files[0];
        $.ajax({
            url: "https://localhost:3000/upload/single",
            type: "POST",
            contentType: false,
            processData: false,
            cache: false,
            data: data,
            success: function (res) {
                alert(res);
            },
            error: function () {
                alert("Error sending the file");
            }
        })


    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});

