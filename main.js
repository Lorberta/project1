var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
//OR context = document.querySelector('canvas').getContext('2d');

var width = canvas.width
var height = canvas.height

var frames = 0
var counter = 5;

var myObstacles = [];
var myLuckstacles = [];


//BACKGROUND

var bg = new Background(ctx, '../images/bg2.jpg', 1)
var bgClouds = new Background(ctx, '../images/clouds_lg.png', 2)
// var myObstacle = new Obstacle(20, 20, canvas.width + 1, canvas.height - 75, 3, ctx)
// var myLuckstacle = new Luckstacle(20, 20, canvas.width + 1, 100, 3, ctx)
var myPlayer = new Player(20, 20, 30, 0, 0, ctx, canvas)


var interval = setInterval(function () {
    update()
    drawEverything()
}, 1000 / 30)

function update() {
    frames++

    // counter + 1. Everytime counter % 100 if math random = 1, create new obstacle. 
    bg.update()
    bgClouds.update()

    addObstacle()
    updateObstacles();
    clearGoneObstacles()

    addLuckstacle()
    updateLuckstacle()
    clearGoneLuckstacles()

    myPlayer.update()

    collisionPlayerAndObstacle()

    gameOver()
}

function drawEverything() {
    ctx.clearRect(0, 0, width, height)
    bg.draw()
    bgClouds.draw()
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].draw();
    }
    for (i = 0; i < myLuckstacles.length; i += 1) {
        myLuckstacles[i].draw();
    }
    myPlayer.draw()
}

// ABOUT THE OBSTACLE ARRAY

function addObstacle() {
    if (frames % 100 === 0) {
        myObstacles.push(new Obstacle(20, 20, canvas.width + 1, canvas.height - 75, 3, ctx));
    }
}

function updateObstacles() {
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

// ABOUT THE LUCKSTACLE ARRAY
function addLuckstacle() {
    if (counter < 6 && frames % 100 === 0) {
        //create randomY number between 100 and 200
        myLuckstacles.push(new Luckstacle(20, 20, canvas.width + 1, randomY, 3, ctx));
    }
}
function updateLuckstacle() {
    for (i = 0; i < myLuckstacles.length; i++) {
        myLuckstacles[i].x += -1;
        myLuckstacles[i].update();
    }
}
function clearGoneLuckstacles() {
    for (var i = 0; i < myLuckstacles.length; i++) {
        var currentLuckstacle = myLuckstacles[i];
        if (currentLuckstacle.x + currentLuckstacle.width < -1) {
            delete myLuckstacles[i];
        }
    }
    myLuckstacles = myLuckstacles.filter(Boolean);
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


//COLLISION

function collisionPlayerAndObstacle() {
    for (var i = 0; i < myObstacles.length; i++) {
        if (((myPlayer.x + myPlayer.width) > myObstacles[i].x && myPlayer.x < (myObstacles[i].x + myObstacles[i].width)) && (myPlayer.y + myPlayer.height >= myObstacles[i].y) && !myObstacles[i].isCrashed) {
            // || (myPlayer.x > (myObstacle.x + myObstacle.width)) && ((myPlayer.x + myPlayer.width) >= myObstacle.x) //redo collision from behind
            myObstacles[i].isCrashed = true
            counter--;
        }
    }

    for (var i = 0; i < myLuckstacles.length; i++) {
        if (((myPlayer.x + myPlayer.width) > myLuckstacles[i].x && myPlayer.x < (myLuckstacles[i].x + myLuckstacles[i].width)) && (myPlayer.y + myPlayer.height >= myLuckstacles[i].y) && (myPlayer.y < (myLuckstacle.y + myLuckstacle.height)) && !myLuckstacles[i].isCrashed) {
            // || (myPlayer.x > (myObstacle.x + myObstacle.width)) && ((myPlayer.x + myPlayer.width) >= myObstacle.x) //redo collision from behind
            myLuckstacles[i].isCrashed = true
            counter++;
            console.log("crashing luckstacle", myLuckstacles[i].isCrashed, i)
        }
    }
    console.log('counter' + counter)
}


function gameOver() {
    if (counter == 0) {
        return clearInterval(interval);
    }
}
