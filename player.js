//define class for updating and changing between sprites frames (image and different animation frame sets)
//the frame set will be an array with the location of the sprites in the sprite sheet ([0] -> first sprite)

// "use scrict";
// const SPRITE_SIZE = 16; //each sprite sheet tile should be 16x16 pixels wide and high


class Player {
    constructor(height, width, x, y, delay, ctx, canvas) {
        this.jumping = true
        this.ctx = ctx
        this.x_velocity = 0
        this.y_velocity = 0
        this.numberOfJumps = 0
        this.curFrame = 0
        this.spriteWidth = 84
        this.spriteHeight = 57
        this.rows = 2
        this.cols = 5
        this.height = this.spriteHeight / this.rows
        this.width = this.spriteWidth / this.cols
        this.x = x //center of the canvas
        this.y = canvas.height - 75 - this.height
        this.srcY = this.spriteHeight / 2
        this.srcX = 0
        this.speed = 20
        this.direction = "right"
        this.img = new Image
        this.img.src = "./images/Leprechaun_walk.png"
        this.moveRight()
        this.characterInterval = setInterval(this._update.bind(this), 400)

    }

    newPos() {
        this.x += this.x_velocity;
        this.y += this.y_velocity;

        //this.img = new Image,
        //this.img.src = url,
    }

    // moveleft
    moveLeft() {
        this.curFrame = 0
        this.frameCount = 5
        this.curRow = 0
        this.x_velocity -= 0.5;
        this.newPos()
    }

    // moveright
    moveRight() {
        this.curFrame = 0
        this.frameCount = 5
        this.curRow = 1
        this.direction = "right"
        this.x_velocity += 0.5;
        this.newPos()
    }

    // jumping
    moveUp() {
        this.y_velocity -= 20;
        this.numberOfJumps++
        if (this.numberOfJumps >= 2) {
            this.jumping = true;
        } else {
            this.jumping = false
        }
        // this.y_velocity += 1.5;
        this.newPos()
    }


    draw() {
        // this.ctx.save();
        // this.ctx.fillStyle = "#FF8002"
        // this.ctx.fillRect(this.x, this.y, this.width, this.height);
        // this.ctx.restore();
        this.ctx.drawImage(
            this.img,
            this.srcX, this.srcY,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height);
    };

    _update() {
        this.curFrame = ++this.curFrame % this.frameCount
        this.srcX = this.curFrame * this.width
        this.srcY = this.height * this.curRow
    }

    update() {
        //     //gravity:
        this.y_velocity += 1.5;
        //friction in -x and x



        //this.x_velocity *= 0.9; --> without it the Player doesn't stop -> friction!
        // possible solution: only use it if the player's x-coordinate is equal to this.y

        this.y_velocity *= 0.9;
        this.newPos()

        //     //border floor line
        if (this.y >= canvas.height - 75) {
            this.jumping = false;
            this.numberOfJumps = 0
            this.y = canvas.height - 75;
            this.y_velocity = 0;
            // this.x += this.speedX;
        }
        if (this.y == canvas.height - 75) {
            this.x_velocity *= 0.9;
        }


        //if this goes past left border
        if (this.x <= 0) {
            this.x = 0; //
            this.x_velocity = 0; //
        }
        //if this goes past right border
        else if (this.x + this.width >= canvas.width) {
            this.x = canvas.width - this.width;
            this.x_velocity = 0
        }
        this.ctx.clearRect(this.x, this.y, this.width, this.height)
    }
}







