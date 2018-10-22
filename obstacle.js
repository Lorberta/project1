// var myGamePiece;
// var myObstacle;



class Obstacle {
    constructor(ctx, height, width, x, y, speed) {
        this.ctx = ctx,
            this.speed = speed
        this.x = x,
            this.y = y,
            this.height = height,
            this.width = width,
            this.color = 'white'
        //this.img = new Image(),
        //this.img.src = url,
    }

    //update
    update() {
        this.x -= this.speed
    }

    // draw
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        //ctx.stroke();
        //ctx.fill();
    }

}

