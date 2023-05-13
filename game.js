class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }

    preload() {
        this.load.image('button_back', 'Back Button.png');
        this.load.image('bed', 'Bed.png');
        this.load.image('door', 'Door.png');
        this.load.image('shelf', 'Shelf.png');
    }
    

    onEnter() {

        //this.add.rectangle(this.w * 1.25, 0, this.w * 1.75, this.h).setOrigin(0, 0).setFillStyle(0);

        let bed = this.add.image(
            1000,//x
            1000,//y
            'bed',//imagename
        )
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's your bed"))
            .on('pointerdown', () => {
                this.showMessage("You probably should not sleep");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            }); 

        let shelf = this.add.image(
            1000,//x
            400,//y
            'shelf',//imagename
        )
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's your shelf, you should get something to place on it soon."))
            /*.on('pointerdown', () => {
                this.showMessage("You probably should not sleep");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            }); */


            let backbutton = this.add.image(
                600,//x
                700,//y
                'button_back',//imagename
            )

                .setInteractive()
                .on('pointerover', () => {
                    if (this.hasItem("button")) {
                        this.showMessage("You put the button on the block");
                    } else {
                        this.showMessage("Its a block, you feel like a button should be here");
                    }
                })
                .on('pointerdown', () => {
                    if (this.hasItem("button")) {
                        this.loseItem("buttom");
                        this.showMessage("*ding*");
                        this.tweens.add({
                            targets: door,
                            x:200,
                            y:800
                        });
                    }
                }) 

            let door = this.add.image(
                200,//x
                1600,//y
                'door',//imagename
            )

                .setInteractive()
                .on('pointerover', () => {
                    if (this.hasItem("button")) {
                        this.showMessage("This is a door");
                    } else {
                        this.showMessage("Its a block, you feel like a button should be here");
                    }
                })
                .on('pointerdown', () => {
                    this.gotoScene('demo2');
                }) 

        let button = this.add.text(this.w * 0.5, this.w * 0.15, "🔴 button")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the button.");
                this.gainItem('button');
                this.tweens.add({
                    targets: button,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => button.destroy()
                });
            })  

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    preload() {
        this.load.image('flipper', 'Flipper.png');
        this.load.image('flipsign', 'FlipSign.png');
        this.load.image('door', 'Door.png');
        this.load.image('shelf', 'Shelf.png');
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Outro],
    title: "Adventure Game",
});


