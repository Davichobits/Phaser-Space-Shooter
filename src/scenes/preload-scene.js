import { Scene } from 'phaser';

export class PreloadScene extends Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.pack('asset_pack', 'assets/data/assets.json');
  }

  create() {
    this.#createAnimations();
    this.scene.start('GameScene');
  }

  #createAnimations() {
    const data = this.cache.json.get('animations_json');
    data.forEach((animation) => {
      const frames = animation.frames
        ? this.anims.generateFrameNames(animation.assetKey, { frames: animation.frames })
        : this.anims.generateFrameNames(animation.assetKey);
      this.anims.create({
        key: animation.key,
        frames: frames,
        frameRate: animation.frameRate,
        repeat: animation.repeat,
      })
    });
  }

}
