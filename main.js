var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
//OR context = document.querySelector('canvas').getContext('2d');

var width = canvas.width
var height = canvas.height

var frames = 0
var counter = 1;

var background = new Image();
background.src = "./images/bg2.jpg"

var sky = new Image();
sky.src = "./images/clouds_lg.png"




var myObstacles = [];
var myLuckstacles = [];

$("#game").hide();
//BACKGROUND

var bg, bgClouds, myCloud, myObstacle, myLuckstacle, myPlayer, myPot, interval;


$(".startbutton").click(function () {
    $("#start").hide();
    $("#game").show();
    startGame();

});


function update() {
    frames++

    bg.update()
    bgClouds.update()

    addObstacle()
    updateObstacles();
    clearGoneObstacles()

    addLuckstacle()
    updateLuckstacle()
    clearGoneLuckstacles()

    myPlayer.update()

    if (counter >= 7 && myPot.x >= canvas.width - myPot.width) {
        myPot.update()
    }
    if (counter >= 7 && myCloud.x >= canvas.width - 70) {
        myCloud.update()
    }

    collisionPlayerAndObstacle()

    gameOver()
    gameWon()
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

    ctx.font = "20px Arial";
    ctx.fillStyle = "orange"
    ctx.fillText("LUCK" + counter, 10, 50);


    myPlayer.draw()
    myPot.draw()
    myCloud.draw()
}

//OBSTACLE ARRAY

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


// LUCKSTACLE ARRAY
function addLuckstacle() {
    randomY = 0;
    if (/*counter < 3 &&*/ frames % 130 === 0) {
        randomY = Math.floor(Math.random() * 100) + 10;
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
                break;
            case 38: //the up arrow key
                controller.up = key_state;
                if (controller.up && myPlayer.jumping == false) {
                    myPlayer.moveUp()
                }
                break;
            case 39: //the right arrow key
                controller.right = key_state;
                if (controller.right) {

                    myPlayer.moveRight()
                }
                break;
        }
    }
}


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
        }
    }
}

// END GAME OPTIONS

function gameOver() {
    if (counter == 0) {
        $("#unlucky").show();
        return clearInterval(interval);
    }
}

$(".tryagainbutton").click(function () {
    $("#unlucky").hide();
    startGame();
    resetValues()
});

function startGame() {
    bg = new Background(ctx, background, 1);
    bgClouds = new Background(ctx, sky, 2);
    myCloud = new Cloud(65, 90, canvas.width + 1, 25, 5, ctx);
    myObstacle = new Obstacle(80, 80, canvas.width + 1, canvas.height - 75, 3, ctx);
    myLuckstacle = new Luckstacle(80, 80, canvas.width + 1, 100, 2, ctx);
    myPlayer = new Player(20, 20, 30, 0, 0, ctx, canvas);
    myPot = new Pot(40, 40, canvas.width + 1, canvas.height - 85, 1, ctx);
    interval = setInterval(function () {
        update();
        drawEverything();
    }, 1000 / 30);
}

function resetValues() {
    myObstacles = []
    myLuckstacles = []
    frames = 0
    counter = 1;
}

function gameWon() {
    if (myPlayer.x + myPlayer.width > myPot.x && myPlayer.x < myPot.x + myPot.width && myPlayer.y + myPlayer.height >= myPot.y && !myPot.isCrashed) {
        myPot.isCrashed = true
        clearInterval(interval);
        $("#win").show();
        return clearInterval(interval);
    }
}
$(".playagainbutton").click(function () {
    $("#win").hide();
    $("#greedy").show();

});