window.alert("This website is under Pre development");


function search() {
    let textToSearch = document.getElementById("search-box").value;
    let mainBody = document.querySelector(".main-b1");

    if (!mainBody) {
        alert("Element with class 'main-b1' not found.");
        return;
    }

    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    let pattern = new RegExp(textToSearch, "gi");

    mainBody.innerHTML = mainBody.innerHTML.replace(pattern, match => `<mark>${match}</mark>`);
}

