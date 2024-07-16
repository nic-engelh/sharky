class AudioManager {
  constructor() {
    this.sounds = {};
    this.loadSounds();
    this.mute = false;
  }

  /**
   * Function adds the sounds into an object with certain key.
   *
   */
  loadSounds() {
    this.sounds["waterflowEffect"] = new Audio(
      "./sharky/assets/sounds/underwater-loop-amb-6182.mp3"
    );
    this.sounds["ambient"] = new Audio(
      "./sharky/assets/sounds/027210_39danger-and-beauty39-ukulele-loop-by-reamp3-71291.mp3"
    );
    this.sounds["bottle"] = new Audio("../../assets/sounds/bottle-pop-45531.mp3");
    this.sounds["coin"] = new Audio(
      "./sharky/assets/sounds/short-success-sound-glockenspiel-treasure-video-game-6346.mp3"
    );
    this.sounds["heroHurt"] = new Audio(
      "./sharky/assets/sounds/male-hurt-sound-95206.mp3"
    );
    this.sounds["introSound"] = new Audio(
      "./sharky/assets/sounds/evil-laugh-45966.mp3"
    );
    this.sounds["ambientBoss"] = new Audio(
      "./sharky/assets/sounds/tribal-loop-azteca-154482.mp3"
    );
    this.sounds["biteSounds"] = new Audio(
      "./sharky/assets/sounds/monster-bite-44538.mp3"
    );
    this.sounds["winSound"] = new Audio(
      "./sharky/assets/sounds/you-win-sequence-2-183949.mp3"
    );
    this.sounds["woundingSound"] = new Audio(
      "./sharky/assets/sounds/giant-breath-1-184041.mp3"
    );
    this.sounds["swimming"] = new Audio(
      "./sharky/assets/sounds/fish-in-river-6114.mp3"
    );
    this.sounds["bubbleShot"] = new Audio(
      "./sharky/assets/sounds/sfx_submerge-14424.mp3"
    );
    this.sounds["finSlap"] = new Audio(
      "./sharky/assets/sounds/indiana-jones-style-punchwav-14551.mp3"
    );
    this.sounds["enemyBubblePop"] = new Audio(
      "./sharky/assets/sounds/balloonpop-83760.mp3"
    );
    this.sounds["shocked"] = new Audio(
      "./sharky/assets/sounds/electric_zap_001-6374.mp3"
    );
    this.sounds["transform"] = new Audio(
      "./sharky/assets/sounds/balloon-inflate-1-184052.mp3"
    );
  }

  /**
   * Funktion zum Abspielen eines Sounds mit dem übergebenen Namen. Lädt den Sound aus dem Sounds-Objekt.
   *
   * @param {string} name - Der Name des Sounds, der abgespielt werden soll.
   */
  playSound(name) {
    try {
      if (this.sounds[name]) {
        if (this.sounds[name].paused) {
          this.sounds[name].play();
        }
      }
    } catch (error) {
      console.error("Fehler beim Abspielen des Sounds:", error);
    }
  }

  /**
   * Funktion zum Stoppen eines Sounds mit dem übergebenen Namen. Pausiert den Sound aus dem Sounds-Objekt.
   *
   * @param {string} name - Der Name des Sounds, der gestoppt werden soll.
   */
  stopSound(name) {
    try {
      if (this.sounds[name]) {
        if (!this.sounds[name].paused) {
          this.sounds[name].pause();
          this.sounds[name].currentTime = 0;
        }
      }
    } catch (error) {
      console.error("Fehler beim Stoppen des Sounds:", error);
    }
  }

  /**
   * Functions sets the volume of the sound according to the given arguments. Number as a float.
   *
   * @param {string} name
   * @param {number} volume
   */
  setVolume(name, volume) {
    if (this.sounds[name]) {
      this.sounds[name].volume = volume;
    }
  }

  /**
   * Function reduces alls sounds in the object to 0.1
   *
   */
  setVolumeForAll() {
    for (const soundName in this.sounds) {
      this.setVolume(soundName, 0.1);
    }
  }

  /**
   * Functions mutes all sounds. It reduces alls sounds in the sounds object to volume 0.0.
   *
   */
  muteAllSounds() {
    for (const soundName in this.sounds) {
      this.setVolume(soundName, 0.0);
    }
  }
}
