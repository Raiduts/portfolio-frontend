import Player from '../gameObjects/Player.js';
import Pipe from '../gameObjects/Pipe.js';
import PointArea from '../gameObjects/PointArea.js';

export class Game extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    preload() {
        this.load.image('background', 'assets/background.png');

        this.load.image('title', 'assets/title.png');

        this.load.image('gameOver', 'assets/gameover.png');

        this.load.spritesheet('player', 'assets/player/flappy.png', { frameWidth: 34, frameHeight: 24 });

        this.load.image('pipe', 'assets/pipe.png');

        this.load.audio('sfx_fly', 'assets/audio/sfx_fly.mp3');

        this.load.audio('sfx_die', 'assets/audio/sfx_die.mp3');
        
        this.load.audio('sfx_point', 'assets/audio/sfx_point.mp3');
    }

    create() {
        this.initInput();
        this.initVariables();
        this.initPhysics();
    }

    initVariables() {
        this.gameover = false;
        this.delay = 4;
        this.pipeGap = 220;

        this.background = this.add.tileSprite(128, 256, 256, 512, 'background');
        
        this.player = new Player(this, 128, 256);
        this.player.depth = 5;

        this.title = this.add.image(128, 256, 'title');
        this.title.depth = 10;

        this.player.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
            frameRate: 7,
            repeat: -1
        });

        this.player.play('fly');
    }

    update(time, delta) {
        this.tickDelta = delta;

        if (this.gameover) {
            this.canRestart();
            return;
        }

        if (this.player) {
            // Ambil posisi Y player
            const playerY = this.player.y;
            
            // Cek jika player menyentuh batas atas (0) atau batas bawah (512)
            if (playerY <= 0 || playerY >= 512) {
                this.hitPipe();
            }
        }

        this.visualUpdate();
        
        this.summonPipe();
    }

    createScoreText() {
        this.scoreText = this.add.text(128, 128, '0', {
            fontSize: '64px',
            fontFamily: 'Courier New, "Courier", monospace',
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 6,
            align: 'center',
            
        }).setOrigin(0.5, 0.5).setDepth(1000);
    }

    summonPipe() {
        this.delay -= this.tickDelta / 500;

        if (this.delay < 0) {
            this.randomizePipe();
            this.delay = 4;
        }
    }

    visualUpdate() {
        this.background.tilePositionX += 1;
    }

    startGame() {
        this.player.body.allowGravity = true;

        this.tweens.add({
            targets: this.title,
            y: 720,
            duration: 1000,
            ease: 'Sine.inOut'
        });

        this.createScoreText();
    }

    randomizePipe(){
        if (this.player.body.allowGravity == false) return;

        const randomY = Phaser.Math.Between(200, 312);

        this.pointArea = new PointArea(this, 320, randomY);
        const pipeAbove = new Pipe(this, 320, randomY - this.pipeGap);
        const pipeBottom = new Pipe(this, 320, randomY + this.pipeGap);

        this.pipes.add(pipeAbove);
        this.pipes.add(pipeBottom);
        this.pointAreas.add(this.pointArea);

        pipeAbove.setAngle(180);
    }

    initInput() {
        this.isStarted = false;

        this.cursors = this.input.keyboard.createCursorKeys();

        this.cursors.space.once('down', (key, event) => {
            if (this.isStarted) return;
            this.startGame();
            this.isStarted = true;
        });

        this.input.once('pointerdown', () => {
            if (this.isStarted) return;
            this.startGame();
            this.isStarted = true;
        });
    }

    initPhysics() {
        this.pipes = this.add.group();
        this.pointAreas = this.add.group();

        this.physics.add.overlap(this.player, this.pipes, this.hitPipe, null, this);
        this.physics.add.overlap(this.player, this.pointAreas, this.getPoint, null, this);
    }

    getPoint() {
        const firstPoint = this.pointAreas.getFirst(true);
        
        firstPoint.destroy();
        
        this.player.collectPoint();

        this.scoreText.text = this.player.score;
    }

    hitPipe() {
        this.player.die();

        this.physics.pause();

        this.gameover = true;

        this.gameover = this.add.image(128, 256, 'gameOver');

        this.scoreText.text = "SCORE\n" + this.player.score;
    }
    
    canRestart() {
        this.cursors.space.once('down', (key, event) => {
            this.restartGame();
        });

        this.input.once('pointerdown', () => {
            this.restartGame();
        });
    }

    restartGame() {
        this.scene.stop();
        this.scene.restart();
    }
}