import { BotScoutInputComponent } from "../../components/input/bot-scrout-input-component";
import { VerticalMovementComponent } from "../../components/movement/vertical-movement-component";
import { ENEMY_SCOUT_MOVEMENT_VERTICAL_VELOCITY } from "../../config";

export class ScoutEnemy extends Phaser.GameObjects.Container {
  #inputComponent;
  #verticalMovementComponent;
  #shipSprite;
  #shipEngineSprite;

  constructor(scene, x, y) {
    super(scene, x, y, []);

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setSize(24, 24);
    this.body.setOffset(-12, -12);

    this.#shipSprite = scene.add.sprite(0, 0, 'scout', 0);
    this.#shipEngineSprite = scene.add.sprite(0, 0, 'scout_engine').setFlipY(true);
    this.#shipEngineSprite.play('scout_engine');
    this.add([this.#shipEngineSprite, this.#shipSprite]);

    this.#inputComponent = new BotScoutInputComponent();
    this.#verticalMovementComponent = new VerticalMovementComponent(
      this, this.#inputComponent, ENEMY_SCOUT_MOVEMENT_VERTICAL_VELOCITY
    )

    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    this.once(
      Phaser.GameObjects.Events.DESTROY,
      () => {
        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
      },
      this
    );
  }

  update(ts, dt) {
    this.#inputComponent.update();
    this.#verticalMovementComponent.update();
  }
}