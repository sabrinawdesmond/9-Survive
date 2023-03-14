
export default class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    
    window.addEventListener("keyup", this.keyup)
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "blue";
    ctx.fill();
  }
  
  // update() {
  //   this.x++;
  // }
  
  animate(ctx) {
    requestAnimationFrame(this.animate.bind(this, ctx));
    
    this.update();
    this.draw(ctx);
  }

  keydown(event) {
    if (event.key === '38') {
      this.upPressed = true
      console.log("up key pressed")
    } // up arrow
    if (event.key === '40') {
      this.downPressed = true
      console.log("down key pressed")
    } // down arrow
    if (event.key === '37') {
      this.leftPressed = true
      console.log("left key pressed")
    }  // left arrow
    if (event.key === '39') {
      this.rightPressed = true
      console.log("up key pressed")
    }  // right arrow

  }

  keyup(event) {
    if (event.key === '38') this.upPressed = false // up arrow
    if (event.key === '40') this.downPressed = false // down arrow
    if (event.key === '37') this.leftPressed = false  // left arrow
    if (event.key === '39') this.rightPressed = false 
  }
}
// let circle = new Circle(midx, midy, 20)

// window.onload = function() {
  //   circle.draw()
  // }
  
  
  // let midx = canvas.width/2
  // let midy = canvas.height/2
  
  // export default function Circle (x, y, radius) {
  //   this.x = x
  //   this.y = y
  //   this.radius = radius
  
  //   this.draw = function(ctx) {
  //     ctx.beginPath()
  //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
  //     ctx.fillStyle = "blue"
  //     ctx.fill()
  //   }
  //   // this.draw()
  // }