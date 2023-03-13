let midx = canvas.width/2
let midy = canvas.height/2

const enemySize = 50;
const enemyColor = 'black';
const enemyPositions = [
  // starting positions
  { x: 10, y: midy, direction:[1,0] },
  { x: midx, y: 10, direction: [0, -1] },
  { x: canvas.width - 60, y: midy, direction: [-1, 0] },
  { x: midx, y: canvas.height - 60, direction: [0, 1] },
];

export default class Square {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction
  }
  enemies = enemyPositions.map(options => {
    return new Enemy(options);
  });

  draw(ctx) {
    for (let i = 0; i < enemies.length; i++) {
      const { x, y } = enemyPositions[i];
      ctx.fillStyle = enemyColor;
      ctx.fillRect(x, y, enemySize, enemySize);
    }
  }

  update() {
    this.x += this.direction[0]
    this.y += this.direction[1]
  }
  animate(ctx) {
    requestAnimationFrame(this.animate.bind(this, ctx));
    
    this.update();
    this.draw(ctx);
  }
}

