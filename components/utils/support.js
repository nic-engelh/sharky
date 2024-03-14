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

