export default class Pipe extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'pipe');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.initialize();
    }

    initialize() {
        this.body.allowGravity = false;
        this.body.velocity.x -= 100;

        this.body.setSize(
            this.width * 0.9,
            this.height * 1
        );
    }
}