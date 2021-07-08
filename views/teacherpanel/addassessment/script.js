const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById("name");
    const files = document.getElementById("files");
    const formData = new FormData();
    formData.append("name", name.value);
    for(let i =0; i < files.files.length; i++) {
        formData.append("files", files.files[i]);
    }
    fetch("http://localhost:3000/upload/multiple", {
        method: 'post',
        body: formData
    })
        .then((res) => console.log(res))
        .catch((err) => ("Error occured", err));
}
