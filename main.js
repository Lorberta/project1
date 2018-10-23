var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
//OR context = document.querySelector('canvas').getContext('2d');

var width = canvas.width
var height = canvas.height


//BACKGROUND

var bg = new Background(ctx, '../images/bg2.jpg', 1)
var bgClouds = new Background(ctx, '../images/clouds_lg.png', 2)
var myObstacle = new Obstacle(ctx, 50, 50, canvas.width + 1, canvas.height - 75, 3)
var myPlayer = new Player(20, 20, 30, 0, 0, ctx)

setInterval(function () {
    update()
    drawEverything()
}, 1000 / 30)

function update() {

    // counter + 1. Everytime counter % 100 if math random = 1, create new obstacle. 
    bg.update()
    bgClouds.update()
    myObstacle.update()
    // myPlayer.update()
}

function drawEverything() {
    ctx.clearRect(0, 0, width, height)
    bg.draw()
    bgClouds.draw()
    myObstacle.draw()
    myPlayer.draw()
}

//PLAYER
document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37: //the left arrow key
            console.log("left from keydown")

            break;
        case 38: //the up arrow key
            console.log("up from keydown")
            break;
        case 39: //the right arrow key
            console.log("right from keydown")
            break;

    }
}

// alert(key.keyCode){
// }


//KEYLISTENER

// window.addEventListener("keydown", myPlayer.controller.keyListener);
// window.addEventListener("keyup", myPlayer.controller.keyListener);


//OBSTACLE NOT FINISHED
//Arrow function => same as this: // function startGame(){}
//startGame = () => {}

