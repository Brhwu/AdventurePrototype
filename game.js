class Room extends AdventureScene {
    constructor() {
        super("room", "Your Room");
    }

    preload() {
        this.load.image('button_back', 'Back Button.png');
        this.load.image('bed', 'Bed.png');
        this.load.image('door', 'Door.png');
        this.load.image('shelf', 'Shelf.png');
        this.load.image('flipper1', 'Flipper1.png');
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
                this.showMessage("This is a door");
            }
            })
            .on('pointerdown', () => {
                this.gotoScene('flip');
            }) 

        let button = this.add.text(this.w * 0.5, this.w * 0.15, "🔴 button")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice button.")
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

        let flipper1 = this.add.image(
            500,//x
            200,//y
            'flipper1',//imagename
            )
            .setScale(0.2)
            .setInteractive()
            .setAngle(25)
            .on('pointerover', () => {
                this.showMessage("It's an orange figure.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the orange figure.");
                this.gainItem('Orange Figure');
                this.tweens.add({
                    targets: flipper1,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => flipper1.destroy()
                });
            })      

    }
}

class Flip extends AdventureScene {
    constructor() {
        super("flip", "The Flip Place");
    }
    preload() {
        this.load.image('flipper', 'Flipper.png');
        //this.load.image('flipsign', 'FlipSign.png');
        this.load.image('flip', 'Flip.png');
        this.load.image('pns', 'pns.png');
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
            600,//x
            200,//y
            'flip',//imagename
        ) 
        .setInteractive()
        .setScale(0.8)
        .on('pointerover', () => {
            this.showMessage("Wow, its a flip!")
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
                    this.showMessage("You can hand him the flip.");
                } else {
                    this.showMessage("You hear him mutter something about a flip.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("flip")) {
                    this.loseItem("flip");
                    this.showMessage("Weeeeee!");
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
                            this.gotoScene('spicy');
                        }) 
                }
            })

        /*this.add.tween({
            targets: thing,
            scale: {from: 0, to: 1},
            duration: 1000
        }); */
        let pns = this.add.image(
            1200,//x
            200,//y
            'pns',//imagename
            )
            .setScale(0.2)
            .setInteractive()
            //.setAngle(25)
            .on('pointerover', () => {
                this.showMessage("Wow! Its a Pain and Suffering from the game Granblue Fantasy.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the Pain and Suffering and wonder how much your dark grid will improve.");
                this.gainItem('Pain and Suffering');
                this.tweens.add({
                    targets: pns,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => pns.destroy()
                });
            })      



    }
}

class Spicy extends AdventureScene {
    constructor() {
        super("spicy", "Spice City");
    }
    preload() {
        this.load.image('cow', 'Cowupdated.png');
        this.load.image('bucket', 'Bucket.png');
        this.load.image('spicytext', 'SpicyText.png');
        this.load.image('collect', 'Collect1.png');
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
                this.showMessage("You can milk the cow for milk.");
            } else {
                this.showMessage("It is a cow.");
            }
        })
        .on('pointerdown', () => {
            if (this.hasItem("empty bucket")) {
                this.loseItem("empty bucket");
                this.showMessage("You have milked the cow.");
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
            400,
            200,
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
                    this.showMessage("You eat the chili pepper and quickly drink the milk afterwards. Even with the milk it is extremely spicy and you pass out");
                    //door.setText("🚪 unlocked door");
                    //this.showMessage("There is a mild burning sensation in your throat");
                    this.tweens.add({
                        targets: chili,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => chili.destroy()
                    });
                    this.time.delayedCall(1000, () => {
                        this.gotoScene('star');
                    })
                }
                else {
                    this.showMessage("You feel like there is no going back if you eat this without any precautions.");
                }
            })
        let collectable = this.add.image(
            1000,//x
            500,//y
            'collect',//imagename
            )
            .setScale(0.2)
            .setInteractive()
            //.setAngle(25)
            .on('pointerover', () => {
                this.showMessage("Its a weird looking figure.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the weird looking figure.");
                this.gainItem('Weird Figure');
                this.tweens.add({
                    targets: collectable,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => collectable.destroy()
                });
            })     
    }
} 

class Star extends AdventureScene {
    constructor() {
        super("star", "???");
    }
    preload() {
        this.load.image('star', 'Star.png');
        this.load.image('flipper1', 'Flipper1.png');
        this.load.image('pns', 'pns.png')
        this.load.image('collect', 'Collect1.png');
    }
    onEnter() {
        let check = this.add.rectangle(400, 500, 200, 200, 0xFFA500)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You can place an orange figure on this")
            })
            .on('pointerdown', () => {
                if (this.hasItem("Orange Figure")) {
                    this.add.image(
                        400,//x
                        320,//y
                        'flipper1',//imagename
                    )
                    .setScale(0.2)
                    this.loseItem("Orange Figure");
                    this.showMessage("You place the figure on the platform");
                }
            }) 
            
        let check1 = this.add.rectangle(1300, 500, 250, 250, 0x800080)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You can place Pain and Suffering on this")
            })
            .on('pointerdown', () => {
                if (this.hasItem("Pain and Suffering")) {
                    this.add.image(
                        1250,//x
                        250,//y
                        'pns',//imagename
                    )
                    .setScale(0.2)
                    this.loseItem("Pain and Suffering");
                    this.showMessage("With great reluctance you place Pain and Suffering on the platform");
                }
            }) 

        let check2 = this.add.rectangle(750, 1000, 300, 300, 0xFF0000)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You can place a weird figure on this")
            })
            .on('pointerdown', () => {
                if (this.hasItem("Weird Figure")) {
                    this.add.image(
                        750,//x
                        730,//y
                        'collect',//imagename
                    )
                    .setScale(0.2)
                    this.loseItem("Weird Figure");
                    this.showMessage("You place the weird figure on the platform");
                }
            }) 

        let finish = this.add.image(
            1000,
            400,
            'star'
        )
            .setInteractive()
            .setScale(0.1)
            .on('pointerover', () => {
                this.showMessage('Too slow!');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    //rotate: 20,
                    duration: 200
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
        this.add.text(50,50, "You’re asleep in your room and had a weird dream").setFontSize(50);
        this.add.text(50,100, "where the area outside your room was drastically changed.").setFontSize(50);  
        this.add.text(50,150, "You start to wake up and are suddenly filled with").setFontSize(50); 
        this.add.text(50,200, "the urge to explore outside.").setFontSize(50);
        this.add.text(50,300, "Click anywhere to wake up.").setFontSize(40);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('room'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    preload() {
        this.load.image('cow', 'Cowupdated.png');
        this.load.image('flipper', 'Flipper.png');
    } 
    create() {
        /* let cow1 = this.add.image(
            500,//x
            400,//y
            'cow',//imagename
        )
        his.tweens.add({
            targets: cow1,
            x: this.s + (this.h - 2 * this.s) * Math.random(),
            y: this.s + (this.h - 2 * this.s) * Math.random(),
            duration: 500
        });

        let cow2 = this.add.image(
            500,//x
            400,//y
            'cow',//imagename
        ) */
        this.imageObject = this.add.image(
            100,//x
            400,//y
            'flipper',//imagename
        )
        .setScale(.5)
        this.tweens.add({
            targets: this.imageObject,
            x: 1800,
            //ease: 'Sine.inOut',
            rotation: 100,
            duration: 1000,
            repeat: -1
        });
        this.add.text(50, 50, "You're Outside!").setFontSize(50);


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
    scene: [Intro, Room, Flip, Spicy, Star, Outro],
    title: "Adventure Game",
});


