var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
//OR context = document.querySelector('canvas').getContext('2d');


ctx.canvas.height = 320; 
ctx.canvas.width = 600;

class Background {
    constructor(ctx, url, speed) {
      this.ctx = ctx
      this.speed = speed
      this.img = new Image()
      this.img.src = url
      this.x = 0
      this.height = this.ctx.canvas.height
      this.width = this.height*this.img.width/this.img.height
    }
    update() {
      this.x -= this.speed
      if (this.x < -this.width) {
        this.x += this.width
      }
    }
    draw() {
      for (var i = 0; this.x+i*this.width < this.ctx.canvas.width; i++) {
        this.ctx.drawImage(this.img,this.x+i*this.width,0,this.width,this.height)
      }
    }


}

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var bg = new Background(ctx, '../images/bg2.jpg', 1)
//var bgCloud = new Background(ctx, '../images/cloud4.png', 2)
var bgClouds = new Background(ctx, '../images/clouds_lg.png', 2)

setInterval(function() {
  update()
  drawEverything()
}, 1000/30)

function update() {
  bg.update()
  //bgCloud.update()
  bgClouds.update()
}

function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw()
  //bgCloud.draw()
  bgClouds.draw()
}


