
// var buffer, controller, display, loop, player, render, resize, sprite_sheet;

//     buffer = document.createElement("canvas").getContext("2d");
//     display = document.querySelector("canvas").getContext("2d");

// controller = { //chnage to: each key object should know it's physical state as well as it's active state
//     left:  { active:false, state:false },
//     right: { active:false, state:false },
//     up:    { active:false, state:false },
//     keyUpDown: function(event) {  //
//         var key_state = (event.type == "keydown") ? true : false;
//         switch(event.keyCode) {
//             case 37: //the left arrow key
//             if (controller.left.state != key_state) {
//                 controller.left.active = key_state;
//                 controller.left.state  = key_state; // Always update the physical state.
//             } 
//             break;
//             case 38: //the up arrow key
//             if (controller.up.state != key_state) {
//                 controller.up.active = key_state;
//                 controller.up.state  = key_state;
//             }
//             break; 
//             case 39: //the right arrow key
//             if (controller.right.state != key_state) {
//                 controller.right.active = key_state;
//                 controller.right.state  = key_state;
//             }
  
//             break;
//         }
//     console.log("left:  " + controller.left.state + ", " + controller.left.active + "\nright: " + controller.right.state + ", " + controller.right.active + "\nup:    " + controller.up.state + ", " + controller.up.active);
//     } /* If the virtual state of the key is not equal to the physical state
//     of the key, we know something has changed, and we must update the active
//     state of the key. By doing this it prevents repeat firing of keydown events
//     from altering the active state of the key. Basically, when you are jumping,
//     holding the jump key down isn't going to work. You'll have to hit it every
//     time, but only if you set the active key state to false when you jump. */

// }


//  // the object player is just a rectangle with an animation object -> sprite

// class NewAnimation {
//     constructor () {
//         this.jumping = true;
//         this.height = 16;
//         this.width = 16;
//         this.x = 0;
//         this.y = 40 - 18;
//         this.x_velocity = 0;
//         this.y_velocity = 0;
//     }

// }

 /* The sprite sheet object holds the sprite sheet graphic and some animation frame
  sets. An animation frame set is just an array of frame values that correspond to
  each sprite image in the sprite sheet, just like a tile sheet and a tile map. */


  //   sprite_sheet = {

//     frame_sets:[[0, 1], [2, 3], [4, 5]],// standing still, walk right, walk left
//     image:new Image()

//   };

//   loop = function(time_stamp) {

//     if (controller.up.active && !player.jumping) {

//       controller.up.active = false;
//       player.jumping = true;
//       player.y_velocity -= 2.5;

//     }

//     if (controller.left.active) {

//       /* To change the animation, all you have to do is call animation.change. */
//       player.animation.change(sprite_sheet.frame_sets[2], 15);
//       player.x_velocity -= 0.05;

//     }

//     if (controller.right.active) {

//       player.animation.change(sprite_sheet.frame_sets[1], 15);
//       player.x_velocity += 0.05;

//     }

//     /* If you're just standing still, change the animation to standing still. */
//     if (!controller.left.active && !controller.right.active) {

//       player.animation.change(sprite_sheet.frame_sets[0], 20);

//     }

//     player.y_velocity += 0.25;

//     player.x += player.x_velocity;
//     player.y += player.y_velocity;
//     player.x_velocity *= 0.9;
//     player.y_velocity *= 0.9;

//     if (player.y + player.height > buffer.canvas.height - 2) {

//       player.jumping = false;
//       player.y = buffer.canvas.height - 2 - player.height;
//       player.y_velocity = 0;

//     }

//     if (player.x + player.width < 0) {

//       player.x = buffer.canvas.width;

//     } else if (player.x > buffer.canvas.width) {

//       player.x = - player.width;

//     }

//     player.animation.update();

//     render();

//     window.requestAnimationFrame(loop);

//   };

//   render = function() {

//     /* Draw the background. */
//     buffer.fillStyle = "#7ec0ff";
//     buffer.fillRect(0, 0, buffer.canvas.width, buffer.canvas.height);
//     buffer.strokeStyle = "#8ed0ff";
//     buffer.lineWidth = 10;
//     buffer.beginPath();
//     buffer.moveTo(0, 0);
//     buffer.bezierCurveTo(40, 20, 40, 0, 80, 0);
//     buffer.moveTo(0, 0);
//     buffer.bezierCurveTo(40, 20, 40, 20, 80, 0);
//     buffer.stroke();
//     buffer.fillStyle = "#009900";
//     buffer.fillRect(0, 36, buffer.canvas.width, 4);

//     /* When you draw your sprite, just use the animation frame value to determine
//     where to cut your image from the sprite sheet. It's the same technique used
//     for cutting tiles out of a tile sheet. Here I have a very easy implementation
//     set up because my sprite sheet is only a single row. */

//     /* 02/07/2018 I added Math.floor to the player's x and y positions to eliminate
//     antialiasing issues. Take out the Math.floor to see what I mean. */
//     buffer.drawImage(sprite_sheet.image, player.animation.frame * SPRITE_SIZE, 0, SPRITE_SIZE, SPRITE_SIZE, Math.floor(player.x), Math.floor(player.y), SPRITE_SIZE, SPRITE_SIZE);

//     display.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, display.canvas.width, display.canvas.height);

//   };

//   resize = function() {

//     display.canvas.width = document.documentElement.clientWidth - 32;

//     if (display.canvas.width > document.documentElement.clientHeight) {

//       display.canvas.width = document.documentElement.clientHeight;

//     }

//     display.canvas.height = display.canvas.width * 0.5;

//     display.imageSmoothingEnabled = false;

//   };

//       ////////////////////
//     //// INITIALIZE ////
//   ////////////////////

//   buffer.canvas.width = 80;
//   buffer.canvas.height = 40;

//   window.addEventListener("resize", resize);

//   window.addEventListener("keydown", controller.keyUpDown);
//   window.addEventListener("keyup", controller.keyUpDown);

//   resize();

//   sprite_sheet.image.addEventListener("load", function(event) {// When the load event fires, do this:

//     window.requestAnimationFrame(loop);// Start the game loop.

//   });

//   sprite_sheet.image.src = "animation.png";// Start loading the image.

// })();