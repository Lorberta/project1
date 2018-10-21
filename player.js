//define class for updating and changing between sprites frames (image and different animation frame sets)
//the frame set will be an array with the location of the sprites in the sprite sheet ([0] -> first sprite)

(function(){
    "use scrict";
    const SPRITE_SIZE = 16; //each sprite sheet tile should be 16x16 pixels wide and high


    class Animation {
        constructor(frame_set, delay) {
            this.count = 0; //counting game loop since the last change
            this.delay = delay; // number of game cycles to wait until the next change
            this.frame = 0; //value of the sprite image in the sprite sheet
            this.frame_index = frame_set; //current animation frame set that holds sprite tile values
                
        };
        //change the current animation frame set, e.g. from [0,1] to [2,3] and sets the delay
        change(frame_set, delay = 15) {
            if(this.frame_set != frame_set){
                this.count = 0; //count reset
                this.delay = delay; //setting delay
                this.frame_index = 0; //starting with the first frame 
                this.frame_set = this.frame_set[this.frame_index]; //set the new frame value
            }

        }
        update(){
            this.count ++; //counting loops/cycles since last frame change
            if (this.count == this.delay) { //if enought cycles have passed, change the frame
                this.count = 0; //reset the count
                //if the frame set value is the last value, reset to 0. If not add 1;
                this.frame_index = (this.frame_index == this.frame_set.length - 1) ? 0 : this.frame_index + 1;
                this.frame = this.frame_set[this.frame_index]; // change the current frame value
            }
        }
    };

})

var buffer, controller, display, loop, player, render, resize, sprite_sheet;

    buffer = document.createElement("canvas").getContext("2d");
    display = document.querySelector("canvas").getContext("2d");

