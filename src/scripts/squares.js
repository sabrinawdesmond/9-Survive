import canvas from "/src/index"

let midx = canvas.width/2
let midy = canvas.height/2

const enemySize = 50;
const enemyColor = 'black';
const enemyPositions = [
  // starting positions
  { x: 10, y: midy },
  { x: midx, y: 10 },
  { x: canvas.width - 60, y: midy },
  { x: midx, y: canvas.height - 60 },
];

class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  enemies = enemyPositions.map(options => {
    return new Square(options);
  });

  drawEnemies(ctx) {
    for (let i = 0; i < enemies.length; i++) {
      const { x, y } = enemies[i];
      ctx.fillStyle = enemyColor;
      ctx.fillRect(x, y, enemySize, enemySize);
    }
  }

  update() {
    if (this.x < midx) {
      this.x += 1
    } else {
      this.x -= 1
    }

    if (this.y < midy) {
      this.y += 1
    } else {
      this.y -= 1
    }
  }
  animate(ctx) {
    requestAnimationFrame(this.animate.bind(this, ctx));
    
    this.update();
    this.drawEnemies(ctx);
  }
}

