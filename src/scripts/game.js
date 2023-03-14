class Survive {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height }
    this.score = 0;
    this.worker = new Circle(midx, midy, 20)
  }

  
}

function gameLoop() {
  Circle.draw
}