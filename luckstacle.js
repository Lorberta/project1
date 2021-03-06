class Luckstacle {
    constructor(height, width, x, y, speed, ctx) {
        this.ctx = ctx
        this.speed = speed
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.color = 'green'
        this.frames = 0
        this.isCrashed = false
        this.img = new Image()
        this.img.src = './images/clover.png'
    }

    update() {
        this.x -= this.speed
    }

    draw() {
        this.ctx.fillStyle = this.color;
        //this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        //ctx.stroke();
        //ctx.fill();
    }

    // stop() {
    //     clearInterval(this.interval);
    // }
}

// class Clover extends Obstacle {

// }

//function chooseObstacle() { ... return obj; }