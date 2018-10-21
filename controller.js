var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
//OR context = document.querySelector('canvas').getContext('2d');


ctx.canvas.height = 180; 
ctx.canvas.width = 320;

// var drawingContext;
// var controller;
// var player;
// var gameLoop;

var context, controller, rectangle, loop;

rectangle = {
    height: 32,
    jumping: true,
    width: 32,
    x: 144, //center of the canvas
    x_velocity: 0,
    y: 0,
    y_velocity: 0
};

//ctx.rect(20,20,150,100);
//ctx.stroke();


controller = {
    left: false,
    right: false,
    up: false,
    keyListener: function(event) {
        var key_state = (event.type == "keydown") ? true : false;
        switch(event.keyCode) {
            case 37: //the left arrow key
                controller.left = key_state;
            break;
            case 38: //the up arrow key
                controller.up = key_state;
            break; 
            case 39: //the right arrow key
                controller.right = key_state;
            break;
        }
    }

}

loop = function() {
    if(controller.up && rectangle.jumping == false){
        rectangle.y_velocity -= 20;
        rectangle.jumping = true;
    }
    if(controller.left){
        rectangle.x_velocity -= 0.5;
    }
    if (controller.right){
        rectangle.x_velocity += 0.5;
    }

//gravity:
rectangle.y_velocity += 1.5;
rectangle.x += rectangle.x_velocity;
rectangle.y += rectangle.y_velocity;
//friction in -x and x
rectangle.x_velocity *= 0.9;
rectangle.y_velocity *= 0.9;

//border floor line
if (rectangle.y > 180 - 16 - 32){
    rectangle.jumping = false;
    rectangle.y = 180 - 16 - 32;
    rectangle.y_velocity = 0;
}

//if rectangle goes past left border
if (rectangle.x < -32){
    rectangle.x = 320; //??
}
//if rectangle goes past right border
else if (rectangle.x > 320){
    rectangle.x = -32;
}

ctx.fillStyle = '#ADFF2F';
ctx.fillRect(0,0,320,180); // x, y, width, heigth
ctx.fillStyle = '#FFFF00';
ctx.beginPath();
ctx.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
ctx.fill();
ctx.strokeStyle = '#0000ff';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(0, 164); //164?
ctx.lineTo(320, 164); //164?
ctx.stroke();

//update browser
window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);



