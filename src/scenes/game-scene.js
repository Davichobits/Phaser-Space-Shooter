import { Scene } from 'phaser';
import { Player } from '../objects/player';
import { ScoutEnemy } from '../objects/enemies/scout-enemy';

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.pack('asset_pack', 'assets/data/assets.json');
    }

    create() {
        const player = new Player(this);
        const enemy = new ScoutEnemy(this, this.scale.width / 2, 20);
    }
}
