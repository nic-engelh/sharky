
/**
 * function stopps all intervals. Interates over all interval ids in the map and clears them.
 * 
 */
function stopGame () {
    intervalIds.forEach(clearInterval);
}

/**
 * function activates a interval and pushes the intervall id in to a map
 * 
 * @param {function} fn 
 * @param {number} time 
 */
function setStoppableInterval (fn, time) {
    let id = setInterval (fn, time);
    intervalIds.set(id, id);
}

/**
 * functions erases object from a given array. Example: enemy object from enemies array
 * 
 * @param {array} array  
 * @param {object} object 
 */

function eraseObjectFromCanvas (array, object) {
    let index = array.indexOf(object);
    array.splice(index, 1);
}


function loadImagesFromJSON(jsonPath, imageArray) {
    fetch(jsonPath)
      .then((response) => response.json())
      .then((data) => {
        imageArray.push(...data);
        ocean.hero.loadImages(imageArray);
      })
      .catch((error) =>
        console.error("Error loading images from JSON:", error)
      );
  }

