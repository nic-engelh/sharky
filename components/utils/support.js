/**
 * function stopps all intervals. Interates over all interval ids in the map and clears them.
 *
 */
function stopGame() {
  intervalIds.forEach(clearInterval);
}

/**
 * function activates a interval and pushes the intervall id in to a map
 *
 * @param {function} fn
 * @param {number} time
 */
function setStoppableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervalIds.set(id, id);
}

/**
 * functions erases object from a given array. Example: enemy object from enemies array
 *
 * @param {array} array
 * @param {object} object
 */

function eraseObjectFromCanvas(array, object) {
  let index = array.indexOf(object);
  array.splice(index, 1);
}


/**
 * Function sets key and value in the local storage. The value is stringified within the function. Any error will be put into the console
 * 
 * @param {string} key 
 * @param {object} value 
 */
function setLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("An Error occurred while safeing into local storage:", error);
  }
}

/**
 * Function gets via key the data from the local storage. The value is parsed back into needed datatyp. Any error will be put into th console
 * 
 * @param {string} key 
 * @returns 
 */
function getLocalStorage(key) {
    try {
        let value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (error) {
        console.error("An Error occurred while loading from local storage:", error);
        return null;
      }
}
