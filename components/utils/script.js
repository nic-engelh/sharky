document.getElementById("btn-start").addEventListener("click", hideButton);
const impressumButton = document.getElementById("button-impressum");
const impressumDialog = document.getElementById("dialog-impressum");
const impressumText = document.getElementById("dialog-impressum-text-box");

/**
 * functions hides the game starts button if its clicked.
 *
 */
function hideButton() {
  const btnStart = document.getElementById("btn-start");
  btnStart.style.display = "none";
}

/**
 * function resets the opacity of the canvas element after the start button was clicked
 *
 */
function resetOpacity() {
  const canvas = document.getElementById("canvas");
  canvas.classList.remove("opaque");
}

/**
 * function checks the orientation of the device if its in the portrait mode, it shows a dialog message.
 * the dialog can't be closed. It will be closed, if user rotates the device in the landscape mode
 *
 * @returns
 */
function checkOrientation() {
  const dialogElement = document.getElementById("dialog-device-orientation");
  if (!dialogElement) return;

  if (window.matchMedia("(orientation: portrait)").matches) {
    dialogElement.showModal();
  } else {
    if (typeof dialogElement.close === "function") {
      dialogElement.close();
    }
  }
}

/**
 * window event listener to check the orientation
 * Check the orientation when the screen changes size or the device is rotated
 *
 */
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

/**
 * Check the alignment when the page loads
 *
 */
window.onload = function () {
  checkOrientation();
};

/**
 * event listener to check vor clicks on the impressum or legal notice button / symbol. It will open the impressum or legal notice dialog with further informaiton.
 *
 */
impressumButton.addEventListener("click", function () {
  impressumDialog.showModal();
  impressumText.innerHTML = impressumHTML();
});

/**
 * function will close the legal notice (impressum) dialog
 *
 */
function closeImpressumDialog() {
  impressumDialog.close();
  impressumText.innerHTML = "";
}

/**
 * function will open the given dialog element by id.
 *
 */
function openWinDialog() {
  const modal = document.getElementById("dialog-win-box");
  modal.showModal();
}

/**
 * function will open the given dialog element by id.
 *
 */
function openLoseDialog() {
  const modal = document.getElementById("dialog-lose-box");
  modal.showModal();
}

/**
 * function will close the given dialog element by id.
 *
 */
function closeDialog(elementId) {
  const modal = document.getElementById(elementId);
  modal.close();
}

/**
 * function will open the given dialog element by id.
 *
 */
function openDialog(elementId) {
  const modal = document.getElementById(elementId);
  modal.showModal();
}

/**
 * function will toggle the mute and unmute status for the music by clicking the mute unmute symbol
 *
 */
function toggleMuteIcon() {
  let icon = document.getElementById("muteIcon");
  let isMuted = icon.classList.contains("muted");
  if (isMuted) {
    unmuteBackgroundMusic(icon);
  } else {
    muteBackgroundMusic(icon);
  }
}

/**
 * function controlls the mute status of the game. It will changes the symbol mute if clicked. It will start the different background musics according to the position of the hero
 *
 * @param {Element} icon
 * @returns
 */
function unmuteBackgroundMusic(icon) {
  setLocalStorage("game-mute", false);
  icon.classList.remove("muted");
  icon.src =
    "./assets/img/6.Botones/Control/volume_up_FILL0_wght400_GRAD0_opsz24.svg"; // Replace with the path to your unmute icon
  if (ocean.hero.isEndbossNear()) {
    ocean.worldAudioManager.stopSound("ambient");
    ocean.worldAudioManager.playSound("ambientBoss");
    ocean.worldAudioManager.setVolumeForAll();
    return;
  }
  ocean.worldAudioManager.setVolumeForAll();
  
}

/**
 * function will mute all background music but not the effect sounds. It will change the symbol
 *
 * @param {Element} icon
 */
function muteBackgroundMusic(icon) {
  setLocalStorage("game-mute", true)
  icon.classList.add("muted");
  icon.src =
    "./assets/img/6.Botones/Control/volume_mute_FILL0_wght400_GRAD0_opsz24.svg"; // Replace with the path to your mute icon
  ocean.worldAudioManager.muteAllSounds();
}

/**
 * function checks music status within the local storage if the last game was muted or not
 * 
 * @returns boolean
 */
function checkingMusicStatus () {
  let muteStatus = getLocalStorage("game-mute");
  if (muteStatus) {
    toggleMuteIcon();
    return true; 
  }
  return false
}

/**
 * function will reload the website
 *
 */
function reloadPage() {
  location.reload();
}

/**
 * event listener for clicking on the document in order to close the dialog
 * If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
 *
 */
document.addEventListener(
  "click",
  function (event) {
    // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
    if (
      event.target.matches("#dialog-instructions-box") ||
      event.target.matches("#dialog-instructions-picture-container") ||
      event.target.matches("#dialog-impressum")
    ) {
      document.getElementById("dialog-instructions-box").close();
      document.getElementById("dialog-impressum").close();
    }
  },
  false
);
