var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
//OR context = document.querySelector('canvas').getContext('2d');

var width = canvas.width
var height = canvas.height

var myObstacles = [];
function randomAddAndMoveObstacles() {
    myObstacle.frames += 1;
    if (myObstacle.frames % 200 === 0) {
        myObstacles.push(new Obstacle(20, 20, canvas.width + 1, canvas.height - 75, 3, ctx));
    }
    for (i = 0; i < myObstacles.length; i++) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
}
function clearGoneObstacles() {
    for (var i = 0; i < myObstacles.length; i++) {
        var currentObstacle = myObstacles[i];
        if (currentObstacle.x + currentObstacle.width < -1) {
            delete myObstacles[i];
        }
    }
    myObstacles = myObstacles.filter(Boolean);
}

//BACKGROUND

var bg = new Background(ctx, '../images/bg2.jpg', 1)
var bgClouds = new Background(ctx, '../images/clouds_lg.png', 2)
var myObstacle = new Obstacle(20, 20, canvas.width + 1, canvas.height - 75, 3, ctx)
var myPlayer = new Player(20, 20, 30, 0, 0, ctx, canvas)

setInterval(function () {
    update()
    drawEverything()
}, 1000 / 30)

function update() {
    // counter + 1. Everytime counter % 100 if math random = 1, create new obstacle. 
    bg.update()
    bgClouds.update()
    randomAddAndMoveObstacles()
    clearGoneObstacles()
    console.log(myObstacles.length)
    myPlayer.update()
}

function drawEverything() {
    ctx.clearRect(0, 0, width, height)
    bg.draw()
    bgClouds.draw()
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].draw();
    }
    myPlayer.draw()
}


controller = {
    left: false,
    right: false,
    up: false,
    keyListener: function (e) {
        var key_state = (e.type == "keydown") ? true : false;
        switch (e.keyCode) {
            case 37: //the left arrow key
                controller.left = key_state;
                if (controller.left) {
                    myPlayer.moveLeft()
                }
                console.log("left from keydown")
                break;
            case 38: //the up arrow key
                controller.up = key_state;
                if (controller.up && myPlayer.jumping == false) {
                    myPlayer.moveUp()
                }
                console.log("up from keydown")
                break;
            case 39: //the right arrow key
                controller.right = key_state;
                if (controller.right) {

                    myPlayer.moveRight()
                }
                console.log(myPlayer.x_velocity)
                console.log("right from keydown")
                break;

        }
    }
}
// document.onkeyup = function (e) {
//     stopMove();
// }


//KEYLISTENER

window.addEventListener("keydown", controller.keyListener);
// window.addEventListener("keyup", controller.keyListener);


//OBSTACLE NOT FINISHED
//Arrow function => same as this: // function startGame(){}
//startGame = () => {}



