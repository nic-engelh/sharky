function hideButton() {
    const btnStart = document.getElementById("btn-start");
    btnStart.style.display = "none";
}

function resetOpacity() {
    const canvas = document.getElementsByTagName("canvas");
    canvas.style.opacity = "none";
}

document.getElementById("btn-start").addEventListener("click", hideButton);

