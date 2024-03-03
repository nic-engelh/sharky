function stopGame () {
    intervalIds.forEach(clearInterval);
}

/**
 * 
 * @param {function} fn 
 * @param {number} time 
 */
function setStoppableInterval (fn, time) {
    let id = setInterval (fn, time);
    intervalIds.set(id, id);
}


function eraseObjectFromCanvas (array, object) {
    let index = array.indexOf(object);
    array.splice(index, 1);
}

function hideButton() {
    const btnStart = document.getElementById("btn-start");
    btnStart.style.display = "none";
}

document.getElementById("btn-start").addEventListener("click", hideButton);