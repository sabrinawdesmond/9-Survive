
export default class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "blue";
    ctx.fill();
  }
  
  update() {
    this.x++;
  }
  
  animate(ctx) {
    requestAnimationFrame(this.animate.bind(this, ctx));
    
    this.update();
    this.draw(ctx);
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