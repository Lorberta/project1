//define class for updating and changing between sprites frames (image and different animation frame sets)
//the frame set will be an array with the location of the sprites in the sprite sheet ([0] -> first sprite)

// "use scrict";
// const SPRITE_SIZE = 16; //each sprite sheet tile should be 16x16 pixels wide and high


class Player {
    constructor(height, width, x, frame_set, delay, ctx) {
        this.height = height,
            this.width = width,
            this.jumping = true,
            this.ctx = ctx,
            this.x = x, //center of the canvas
            this.x_velocity = 0,
            this.y = 100,
            this.y_velocity = 0,
            //this.img = new Image,
            //this.img.src = url,

            this.count = 0 //counting game loop since the last change
        // this.delay = delay; // number of game cycles to wait until the next change
        // this.frame = 0; //value of the sprite image in the sprite sheet
        // this.frame_index = frame_set; //current animation frame set that holds sprite tile values

    };

    // moveleft
    // moveright
    // jumping

}

draw() {
    this.ctx.fillStyle = '#FFFF00',
        this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fill();
}
};
    // }
    // update() {
    //     if (this.controller.up && this.jumping == false) {
    //         console.log("jumping from update")
    //         this.y_velocity -= 20;
    //         this.jumping = true;
    //     }
    //     if (this.controller.left) {
    //         console.log("left from update")

    //         this.x_velocity -= 0.5;
    //     }
    //     if (this.controller.right) {
    //         console.log("right from update")

    //         this.x_velocity += 0.5;
    //     }

    //     //gravity:
    //     this.y_velocity += 1.5;
    //     this.x += this.x_velocity;
    //     this.y += this.y_velocity;
    //     //friction in -x and x
    //     this.x_velocity *= 0.9;
    //     this.y_velocity *= 0.9;

    //     //border floor line
    //     if (this.y > 180 - 16 - 32) {
    //         this.jumping = false;
    //         this.y = 180 - 16 - 32;
    //         this.y_velocity = 0;
    //     }

    //     //if this goes past left border
    //     if (this.x < -32) {
    //         this.x = 320; //
    //     }
    //     //if this goes past right border
    //     else if (this.x > 320) {
    //         this.x = -32;
    //     }




