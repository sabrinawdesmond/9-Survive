
export default class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    
    window.addEventListener("keydown", this.keydown)
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
    
    if (event.code === 'ArrowUp') {
      // this.upPressed = true
      // console.log("up key pressed")
    } // up arrow
    if (event.code === 'ArrowDown') {
      // this.downPressed = true
      // console.log("down key pressed")
    } // down arrow
    if (event.code === 'ArrowLeft') {
      // this.leftPressed = true
      // console.log("left key pressed")
    }  // left arrow
    if (event.code === 'ArrowRight') {
      // this.rightPressed = true
      // console.log("up key pressed")
    }  // right arrow

  }

  // keyup(event) {
  //   if (event.code === 'ArrowUp') {
  //     // this.upPressed = false
  //     // console.log("up key unpressed")
  //   } // up arrow
  //   if (event.code === 'ArrowDown') {
  //     // this.downPressed = false
  //     // console.log("down key unpressed")
  //   } // down arrow
  //   if (event.code === 'ArrowLeft') {
  //     // this.leftPressed = false
  //     // console.log("left key unpressed")
  //   }  // left arrow
  //   if (event.code === 'ArrowRight') {
  //     // this.rightPressed = false
  //     // console.log("up key unpressed")
  //   } 
  // }
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