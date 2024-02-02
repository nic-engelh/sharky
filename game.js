
function init () {
    canvas = document.getElementById('canvas');
    ocean = new World(canvas);
    keyboard = new Keyboard();
    
} 

window.addEventListener("keydown", (event) => {
    console.log(event);
    pressedKey = event.code;
    if (pressedKey == "ArrowDown") {
        this.keyboard.reset();
        this.keyboard.down = true;
    } 
    if (pressedKey == "ArrowRight") {
        this.keyboard.right = true;
    }
    if (pressedKey == "ArrowLeft") {
        this.keyboard.left = true;
    }
    if (pressedKey == "ArrowUp") {
        this.keyboard.up = true;
    }
    if (pressedKey == "Enter") {
        this.keyboard.enter = true;
    }
    if (pressedKey == "Space") {
        this.keyboard.space = true;
    }
    if (pressedKey == "Escape") {
        this.keyboard.escape = true;
    }
} );

window.addEventListener("keyup", (event) => {
    console.log(event);
    pressedKey = event.code;
    if (pressedKey == "ArrowDown") {
        this.keyboard.down = false;
    } 
    if (pressedKey == "ArrowRight") {
        this.keyboard.right = false;
    }
    if (pressedKey == "ArrowLeft") {
        this.keyboard.left = false;
    }
    if (pressedKey == "ArrowUp") {
        this.keyboard.up = false;
    }
    if (pressedKey == "Enter") {
        this.keyboard.enter = false;
    }
    if (pressedKey == "Space") {
        this.keyboard.space = false;
    }
    if (pressedKey == "Escape") {
        this.keyboard.escape = false;
    }
} );
