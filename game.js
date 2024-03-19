
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

// Eventlistener für die Spielbuttons in der Mobilversion
window.addEventListener("mousedown", (event) => {
    handleButtonPress(event.target.id, true);
});

window.addEventListener("mouseup", (event) => {
    handleButtonPress(event.target.id, false);
});

window.addEventListener("touchstart", (event) => {
    handleButtonPress(event.target.id, true);
});

window.addEventListener("touchend", (event) => {
    handleButtonPress(event.target.id, false);
});

/**
 * Funktion, um den Tastaturzustand zu aktualisieren
 * 
 * @param {string} pressedButton - ID des gedrückten Buttons
 * @param {boolean} isPressed - Gibt an, ob der Button gedrückt oder losgelassen wurde
 */
function handleButtonPress(pressedButton, isPressed) {
    switch (pressedButton) {
        case "gamepad-button-up":
        case "gamepad-button-up-arrow":
            keyboard.up = isPressed;
            break;
        case "gamepad-button-down":
        case "gamepad-button-down-arrow":
            keyboard.down = isPressed;
            break;
        case "gamepad-button-left":
        case "gamepad-button-left-arrow":
            keyboard.left = isPressed;
            break;
        case "gamepad-button-right":
        case "gamepad-button-right-arrow":
            keyboard.right = isPressed;
            break;
        case "gamepad-button-attack-range":
        case "gamepad-button-attack-range-text":
            keyboard.d = isPressed;
            break;
        case "gamepad-button-attack-melee":
        case "gamepad-button-attack-melee-text":
            keyboard.space = isPressed;
            break;
    }
}

/**
 * Funktion zum Zurücksetzen der Tastaturflags, wenn keine Taste gedrückt ist
 * 
 */
function resetKeyboard() {
    for (let key in keyboard) {
        keyboard[key] = false;
    }
}


