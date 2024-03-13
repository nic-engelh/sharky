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


function toggleMuteIcon() {
    let icon = document.getElementById('muteIcon');
    let isMuted = icon.classList.contains('muted');
    if (isMuted) {
        unmuteBackgroundMusic(icon);
    } else {
        muteBackgroundMusic(icon);
    }
}

function unmuteBackgroundMusic (icon) {
    icon.classList.remove('muted');
    icon.src = '/assets/img/6.Botones/Control/volume_up_FILL0_wght400_GRAD0_opsz24.svg'; // Replace with the path to your unmute icon
    if (ocean.hero.isEndbossNear()) {
        ocean.level.enemies[5].startBossAmbientMusic();
        return;
    }
    ocean.startAmbientMusic();
}

function muteBackgroundMusic (icon) {
    icon.classList.add('muted');
    icon.src = '/assets/img/6.Botones/Control/volume_mute_FILL0_wght400_GRAD0_opsz24.svg'; // Replace with the path to your mute icon
    ocean.stopAmbientMusic();
    ocean.level.enemies[5].stopBossAmbientMusic();
}