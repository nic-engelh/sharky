

function init () {
    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    ocean = new World(canvas, keyboard);

} 

window.addEventListener("keydown", (event) => {
    console.log(event);
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
    if (pressedKey == "d") {
        keyboard.d = true;
    }
} );

window.addEventListener("keyup", (event) => {
    console.log(event);
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
    if (pressedKey == "d") {
        keyboard.d = false;
    }
} );
