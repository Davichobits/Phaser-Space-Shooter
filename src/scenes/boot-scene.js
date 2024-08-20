import { Scene } from 'phaser';

export class BootScene extends Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.load.json('animations_json', 'assets/data/animations.json');
  }

  create() {
    this.scene.start('PreloadScene');
  }
}
