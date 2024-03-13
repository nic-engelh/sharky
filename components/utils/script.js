function hideButton() {
    const btnStart = document.getElementById("btn-start");
    btnStart.style.display = "none";
}

function resetOpacity() {
    const canvas = document.getElementById("canvas");
    canvas.classList.remove("opaque");
}

document.getElementById("btn-start").addEventListener("click", hideButton);





