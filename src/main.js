import { BootScene } from './scenes/boot-scene';
import { PreloadScene } from './scenes/preload-scene';
import { GameScene } from './scenes/game-scene';
import { AUTO, Scale, Game, Physics } from 'phaser';

const config = {
    type: AUTO,
    width: 450,
    height: 640,
    roundPixels: true,
    pixelArt: true,
    backgroundColor: '#028af8',
    parent: 'game-container',
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    backgroundColor: '#000',
    scene: [
        BootScene,
        PreloadScene,
        GameScene
    ],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 },
            debug: true
        }
    }
};

export default new Game(config);
