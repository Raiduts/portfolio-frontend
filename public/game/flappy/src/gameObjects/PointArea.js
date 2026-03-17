export default class PointArea extends Phaser.GameObjects.Zone {
    constructor(scene, x, y) {
        super(scene, x, y, 10, 10);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.initialize();
    }

    initialize() {
        this.body.allowGravity = false;
        this.body.velocity.x -= 100;
    }
}