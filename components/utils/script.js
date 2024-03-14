document.getElementById("btn-start").addEventListener("click", hideButton);
const impressumButton = document.getElementById("button-impressum");
const impressumDialog = document.getElementById("dialog-impressum");
const impressumText = document.getElementById("dialog-impressum-text-box");

function hideButton() {
  const btnStart = document.getElementById("btn-start");
  btnStart.style.display = "none";
}

function resetOpacity() {
  const canvas = document.getElementById("canvas");
  canvas.classList.remove("opaque");
}

function checkOrientation() {
  const dialogElement = document.getElementById("dialog-device-orientation");
  if (!dialogElement) return; // Wenn das Dialog-Element nicht gefunden wurde, die Funktion abbrechen

  if (window.matchMedia("(orientation: portrait)").matches) {
    // Wenn das Gerät im Hochformat ist
    dialogElement.showModal(); // Dialog anzeigen
  } else {
    // Wenn das Gerät im Querformat ist
    if (typeof dialogElement.close === "function") {
      dialogElement.close(); // Dialog schließen, falls close() verfügbar ist
    }
  }
}

// Die Ausrichtung überprüfen, wenn sich die Bildschirmgröße ändert oder das Gerät gedreht wird
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

// Überprüfen Sie die Ausrichtung, wenn die Seite geladen wird
window.onload = function () {
  checkOrientation();
};

impressumButton.addEventListener("click", function () {
  impressumDialog.showModal();
  impressumText.innerHTML = impressumHTML();
});

function closeImpressumDialog() {
  impressumDialog.close();
  impressumText.innerHTML = "";
}
