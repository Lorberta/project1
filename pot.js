class Pot {
    constructor(height, width, x, y, speed, ctx) {
        this.ctx = ctx
        this.speed = speed
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.color = 'yellow'
        this.frames = 0
        this.isCrashed = false
        //this.img = new Image(),
        //this.img.src = url,
    }

    update() {
        this.x -= this.speed
        this.color = 'yellow'
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        //this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        //ctx.stroke();
        //ctx.fill();
    }
    // stop() {
    //     clearInterval(this.interval);
    // }
}
