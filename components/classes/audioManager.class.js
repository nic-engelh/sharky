class AudioManager {
  constructor() {
    this.sounds = {};
    this.loadSounds();
    this.mute = false;
  }
  loadSounds() {
    this.sounds["waterflowEffect"] = new Audio(
      "/assets/sounds/underwater-loop-amb-6182.mp3"
    );
    this.sounds["ambient"] = new Audio(
      "/assets/sounds/027210_39danger-and-beauty39-ukulele-loop-by-reamp3-71291.mp3"
    );
    this.sounds["bottle"] = new Audio("/assets/sounds/bottle-pop-45531.mp3");
    this.sounds["coin"] = new Audio(
      "/assets/sounds/short-success-sound-glockenspiel-treasure-video-game-6346.mp3"
    );
    this.sounds["heroHurt"] = new Audio(
      "/assets/sounds/male-hurt-sound-95206.mp3"
    );
    this.sounds["introSound"] = new Audio(
      "/assets/sounds/evil-laugh-45966.mp3"
    );
    this.sounds["ambientBoss"] = new Audio(
      "/assets/sounds/tribal-loop-azteca-154482.mp3"
    );
    this.sounds["biteSounds"] = new Audio(
      "/assets/sounds/monster-bite-44538.mp3"
    );
    this.sounds["winSound"] = new Audio(
      "/assets/sounds/you-win-sequence-2-183949.mp3"
    );
    this.sounds["woundingSound"] = new Audio(
      "/assets/sounds/giant-breath-1-184041.mp3"
    );
    this.sounds["swimming"] = new Audio(
      "/assets/sounds/fish-in-river-6114.mp3"
    );
    this.sounds["bubbleShot"] = new Audio(
      "/assets/sounds/sfx_submerge-14424.mp3"
    );
    this.sounds["finSlap"] = new Audio(
      "/assets/sounds/indiana-jones-style-punchwav-14551.mp3"
    );
    this.sounds["enemyBubblePop"] = new Audio(
      "/assets/sounds/balloonpop-83760.mp3"
    );
    this.sounds["shocked"] = new Audio(
      "/assets/sounds/electric_zap_001-6374.mp3"
    );
    this.sounds["transform"] = new Audio ("/assets/sounds/balloon-inflate-1-184052.mp3");
  }

  playSound(name) {
    if (this.sounds[name]) {
      this.sounds[name].play();
    }
  }
  stopSound(name) {
    if (this.sounds[name]) {
      this.sounds[name].pause();
      this.sounds[name].currentTime = 0;
    }
  }

  setVolume(name, volume) {
    if (this.sounds[name]) {
      this.sounds[name].volume = volume;
    }
  }

  setVolumeForAll() {
    for (const soundName in this.sounds) {
      this.setVolume(soundName, 0.1);
    }
  }

  muteAllSounds() {
    for (const soundName in this.sounds) {
      this.setVolume(soundName, 0.0);
    }
  }
}
