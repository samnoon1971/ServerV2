const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const files = document.getElementById("files");
    const name = document.getElementById("code").value;
    const formData = new FormData();

    formData.append("files", files.files[0], "Assessment" + "_" + name + ".pdf");

    fetch("http://localhost:3000/upload/single", {
        method: 'post',
        body: formData
    })
        .then((res) => console.log(res),
            clearFileInput("files"))
        .catch((err) => ("Error occured", err));
}

function clearFileInput(id) {
    let oldInput = document.getElementById(id);

    let newInput = document.createElement("input");

    newInput.type = "file";
    newInput.id = oldInput.id;
    newInput.name = oldInput.name;
    newInput.className = oldInput.className;
    newInput.style.cssText = oldInput.style.cssText;

    oldInput.parentNode.replaceChild(newInput, oldInput);
}
