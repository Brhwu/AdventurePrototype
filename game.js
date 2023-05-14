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

        let backbutton = this.add.image(
            600,//x
            700,//y
            'button_back',//imagename
        )
            .setInteractive()
            .on('pointerover', () => {
            if (this.hasItem("button")) {
                this.showMessage("You put the button on the block");
                } 
            else {
                this.showMessage("Its a block, you feel like a button should be here");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("button")) {
                    this.add.text(575, 700, "🔴")
                    .setFontSize(this.s * 2)
                    this.loseItem("button");
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
            } 
            else {
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
        //this.load.image('flipsign', 'FlipSign.png');
        this.load.image('flip', 'Flip.png');
        //this.load.image('NotDoor', 'Shelf.png');
    }
    onEnter() {
/*
        let flipsign = this.add.image(
            300,//x
            600,//y
            'flipsign',//imagename
        )
*/
        let flip = this.add.image(
            500,//x
            300,//y
            'flip',//imagename
        ) 
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Wow, its a free flip!")
        })
        .on('pointerdown', () => {
            this.showMessage("You pick up the flip.");
            this.gainItem('flip');
            this.tweens.add({
                targets: flip,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => flip.destroy()
            });
        })

        let thing = this.add.circle(1000, 600, 300, 0xff0000);

        let flipper = this.add.image(
            300,//x
            600,//y
            'flipper',//imagename
            )
            .setScale(0.8)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("flip")) {
                    this.showMessage("You can hand him the flip");
                } else {
                    this.showMessage("You hear him mutter something about a flip");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("flip")) {
                    this.loseItem("flip");
                    this.showMessage("Weeeeee");
                    this.tweens.add({
                        targets: flipper,
                        x: 5000,
                        y: 200,
                        duration: 1000,
                        rotation: 20
                    });
                    this.tweens.add({
                        targets: thing,
                        x: 5000,
                        y: 200,
                        duration: 1000,
                        rotation: 20
                    });
                    let exit = this.add.circle(1000, 600, 300, 0x000000)
                        .setInteractive()
                        .on('pointerover', () => {
                            this.showMessage("Keep going")
                        })
                        .on('pointerdown', () => {
                            this.gotoScene('demo3');
                        }) 
                }
            })

        /*this.add.tween({
            targets: thing,
            scale: {from: 0, to: 1},
            duration: 1000
        }); */



    }
}

class Demo3 extends AdventureScene {
    constructor() {
        super("demo3", "The third room has a long name (it truly does).");
    }
    preload() {
        this.load.image('cow', 'Cowupdated.png');
        this.load.image('bucket', 'Bucket.png');
        this.load.image('spicytext', 'SpicyText.png');
        //this.load.image('NotDoor', 'Shelf.png');
    }
    onEnter() {

        let cow = this.add.image(
            350,//x
            800,//y
            'cow',//imagename
        )
        .setInteractive()
        .setScale(0.5)
        .on('pointerover', () => {
            if (this.hasItem("bucket")) {
                this.showMessage("You can milk the cow for milk");
            } else {
                this.showMessage("It is a cow.");
            }
        })
        .on('pointerdown', () => {
            if (this.hasItem("empty bucket")) {
                this.loseItem("empty bucket");
                this.showMessage("You have milked the cow");
                this.gainItem('bucket of milk');
                /*this.tweens.add({
                    targets: flipper,
                    x: 5000,
                    y: 200,
                    duration: 1000,
                    rotation: 20
                }); */
            }
        })

        let bucket = this.add.image(
            1200,//x
            950,//y
            'bucket',//imagename
        )
            .setInteractive()
            .setScale(0.3)   
            .on('pointerover', () => {
                this.showMessage("It's a bucket.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the bucket.");
                this.gainItem('empty bucket');
                this.tweens.add({
                    targets: bucket,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => bucket.destroy()
                });
            }) 

        let spicytext = this.add.image(
            1000,
            400,
            'spicytext'
        )
            .setInteractive()
            .setScale(0.8)
            .on('pointerover', () => {
                this.showMessage("How ominous...")
            })   

        let chili = this.add.text(1200, 50, "🌶️")
            .setFontSize(this.s * 4)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Just looking at it gives you a burning sensation")
            })   
            .on('pointerdown', () => {
                if (this.hasItem("bucket of milk")) {
                    this.loseItem("bucket of milk");
                    this.showMessage("You eat the chili pepper and quickly drink the milk afterwards. There is a mild burning sensation in your throat");
                    //door.setText("🚪 unlocked door");
                    //this.showMessage("There is a mild burning sensation in your throat");
                    this.tweens.add({
                        targets: chili,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => chili.destroy()
                    });
                    this.gotoScene('demo4');
                }
            })
    }
} 

class Demo4 extends AdventureScene {
    constructor() {
        super("demo4", "The 4th room has a long name (it truly does).");
    }
    preload() {
        //this.load.image('cow', 'Cowupdated.png');
        //this.load.image('bucket', 'Bucket.png');
        //this.load.image('spicytext', 'Spicytext.png');
        //this.load.image('NotDoor', 'Shelf.png');
    }
    onEnter() {

        let cow = this.add.image(
            300,//x
            600,//y
            'cow',//imagename
        )
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
    scene: [Intro, Demo1, Demo2, Demo3, Outro],
    title: "Adventure Game",
});


