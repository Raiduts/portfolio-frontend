export default class Player extends Phaser.Physics.Arcade.Sprite {
    
    constructor(scene, x, y) {
        super(scene, x, y, 'player');
        
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.initialize();
    }

    initialize() {
        this.isDead = false;

        this.score = 0;

        this.body.allowGravity = false;

        this.flySound = this.scene.sound.add('sfx_fly');

        this.dieSound = this.scene.sound.add('sfx_die');

        this.pointSound = this.scene.sound.add('sfx_point');
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        if (this.isDead) return;

        this.checkInput();

        this.rotateBird();
    }

    rotateBird() {
        const velY = this.body.velocity.y;

        this.rotation = Phaser.Math.Clamp(
            velY / 500,
            -0.75,
            1
        );
    }

    checkInput() {
        this.cursors = this.scene.cursors;
        this.spaceKey = this.cursors.space.isDown;
        this.mouseTap = this.scene.input.mousePointer.isDown;

        if (this.body.allowGravity == false) return; 

        this.body.velocity.y += 1;

        if (this.spaceKey || this.mouseTap) this.flyUp();
    }

    flyUp() {
        this.flySound.play();

        this.setVelocityY(-256);

    }

    collectPoint() {
        this.pointSound.play();

        this.score++;

        console.log(this.point);
    }

    die() {
        this.isDead = true;

        this.dieSound.play();

        this.stop('fly');
    }
}