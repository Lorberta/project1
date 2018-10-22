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
    //change the current animation frame set, e.g. from [0,1] to [2,3] and sets the delay
    // change(frame_set, delay = 15) {
    //     if(this.frame_set != frame_set){
    //         this.count = 0; //count reset
    //         // this.delay = delay; //setting delay
    //         // this.frame_index = 0; //starting with the first frame 
    //         // this.frame_set = this.frame_set[this.frame_index]; //set the new frame value
    //     }

    // }
    update() {
        if (this.controller.up && this.jumping == false) {
            console.log("jumping from update")
            this.y_velocity -= 20;
            this.jumping = true;
        }
        if (this.controller.left) {
            console.log("left from update")

            this.x_velocity -= 0.5;
        }
        if (this.controller.right) {
            console.log("right from update")

            this.x_velocity += 0.5;
        }

        //gravity:
        this.y_velocity += 1.5;
        this.x += this.x_velocity;
        this.y += this.y_velocity;
        //friction in -x and x
        this.x_velocity *= 0.9;
        this.y_velocity *= 0.9;

        //border floor line
        if (this.y > 180 - 16 - 32) {
            this.jumping = false;
            this.y = 180 - 16 - 32;
            this.y_velocity = 0;
        }

        //if this goes past left border
        if (this.x < -32) {
            this.x = 320; //
        }
        //if this goes past right border
        else if (this.x > 320) {
            this.x = -32;
        }
        // this.count++; //counting loops/cycles since last frame change
        // if (this.count == this.delay) { //if enought cycles have passed, change the frame
        //     this.count = 0; //reset the count
        //if the frame set value is the last value, reset to 0. If not add 1;
        // this.frame_index = (this.frame_index == this.frame_set.length - 1) ? 0 : this.frame_index + 1;
        // this.frame = this.frame_set[this.frame_index]; // change the current frame value

    }

    draw() {
        this.ctx.fillStyle = '#FFFF00';
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
    }

    // jumping
    //call function left, call function right, call function up


    controller() {
        left = false;
        right = false;
        up = false;
        keyListener = () => {
            var key_state = (event.type == "keydown") ? true : false;
            switch (event.keyCode) {
                case 37: //the left arrow key
                    console.log("left from keydown")

                    this.controller.left = key_state;
                    break;
                case 38: //the up arrow key
                    console.log("up from keydown")

                    this.controller.up = key_state;
                    break;
                case 39: //the right arrow key
                    console.log("right from keydown")

                    this.controller.right = key_state;
                    break;
            }
        }
    }
};



