
function init () {
    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    ocean = new World(canvas, keyboard);
    checkingMusicStatus() 
} 
/**
 * Event listener waits for keyboard interactions. It will changes the keyboard variables if pressed with true or false if not pressed
 * 
 */
window.addEventListener("keydown", (event) => {
    pressedKey = event.code;
    if (pressedKey == "ArrowDown") {
        keyboard.down = true;
    } 
    if (pressedKey == "ArrowRight") {
        keyboard.right = true;
    }
    if (pressedKey == "ArrowLeft") {
        keyboard.left = true;
    }
    if (pressedKey == "ArrowUp") {
        keyboard.up = true;
    }
    if (pressedKey == "Enter") {
        keyboard.enter = true;
    }
    if (pressedKey == "Space") {
        keyboard.space = true;
    }
    if (pressedKey == "Escape") {
        keyboard.escape = true;
    }
    if (pressedKey == "KeyD") {
        keyboard.d = true;
    }
} );

/**
 * Event listener waits for keyboard interactions. It will changes the keyboard variables if pressed with true or false if not pressed
 * 
 */
window.addEventListener("keyup", (event) => {
    pressedKey = event.code;
    if (pressedKey == "ArrowDown") {
        keyboard.down = false;
    } 
    if (pressedKey == "ArrowRight") {
        keyboard.right = false;
    }
    if (pressedKey == "ArrowLeft") {
        keyboard.left = false;
    }
    if (pressedKey == "ArrowUp") {
        keyboard.up = false;
    }
    if (pressedKey == "Enter") {
        keyboard.enter = false;
    }
    if (pressedKey == "Space") {
        keyboard.space = false;
    }
    if (pressedKey == "Escape") {
        keyboard.escape = false;
    }
    if (pressedKey == "KeyD") {
        keyboard.d = false;
    }
} );

/**
 * Eventlistener for the game buttons in mobile version
 * 
 */
window.addEventListener("click",  (event) => {
    pressedButton = event.target.id;
    if (pressedButton == "gamepad-button-up" || pressedButton == "gamepad-button-up-arrow") {
        keyboard.up = true;
    }
    if (pressedButton == "gamepad-button-down"|| pressedButton == "gamepad-button-down-arrow") {
        keyboard.down = true;
    }
    if (pressedButton == "gamepad-button-left"|| pressedButton == "gamepad-button-left-arrow") {
        keyboard.left = true;
    }
    if (pressedButton == "gamepad-button-right"|| pressedButton == "gamepad-button-right-arrow") {
        keyboard.right = true;
    }
    if (pressedButton == "gamepad-button-attack-range" || pressedButton == "gamepad-button-attack-range-text") {
        keyboard.d = true;
    }
    if (pressedButton == "gamepad-button-attack-melee" || pressedButton == "gamepad-button-attack-melee-text") {
        keyboard.space = true;
    }
});

window.addEventListener("mouseup", () => {
    resetKeyboard();
});

window.addEventListener("touchend", () => {
    resetKeyboard();
});

/**
 * Functions resets the keyboard flags as one would let lose of the keyboard
 * 
 */
function resetKeyboard() {
    for (let key in keyboard) {
        keyboard[key] = false;
    }
}



