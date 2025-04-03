import { SCENE_KEYS } from "./scenes/scene-key.js";
import { PreloadScene } from "./scenes/preload-scene.js";

const game = new Phaser.Game({
    parent: 'game-container',
});

game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);