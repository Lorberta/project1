class Obstacle {
    constructor(height, width, x, y, speed, ctx) {
        this.ctx = ctx
        this.speed = speed
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.color = 'white'
        this.frames = 0
        this.isCrashed = false
        this.img = new Image()
        var obstaclePool = ['./images/catwalk4.png', './images/rake1.png']
        this.img.src = obstaclePool[Math.floor(Math.random() * obstaclePool.length)]
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

// class Cat extends Obstacle {

// }

//function chooseObstacle() { ... return obj; }