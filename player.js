//define class for updating and changing between sprites frames (image and different animation frame sets)
//the frame set will be an array with the location of the sprites in the sprite sheet ([0] -> first sprite)

// "use scrict";
// const SPRITE_SIZE = 16; //each sprite sheet tile should be 16x16 pixels wide and high


class Player {
    constructor(height, width, x, frame_set, delay, ctx, canvas) {
        this.height = height,
            this.width = width,
            this.jumping = true,
            this.ctx = ctx,
            this.x = x, //center of the canvas
            this.y = canvas.height - 75,
            this.x_velocity = 0,
            this.y_velocity = 0,
            this.numberOfJumps = 0

    }

    newPos() {
        this.x += this.x_velocity;
        this.y += this.y_velocity;

        //this.img = new Image,
        //this.img.src = url,
    }

    // moveleft
    moveLeft() {
        this.x_velocity -= 0.5;
        this.newPos()
    }

    // moveright
    moveRight() {
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

    // stopMove() {
    //     this.player.speedX = 0;
    //     this.player.speedY = 0;
    // }


    draw() {
        this.ctx.save();
        this.ctx.fillStyle = "#FF8002"
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.restore();
    };


    update() {
        //     //gravity:
        this.y_velocity += 1.5;
        //friction in -x and x



        // this.x_velocity *= 0.9;
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
    }
}







