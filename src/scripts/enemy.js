

const enemySize = 50;
const enemyColor = 'black';
const enemyPositions = [
  // starting positions
  { x: 100, y: 100 },
  { x: 100, y: 300 },
  { x: 800, y: 100 },
  { x: 800, y: 300 },
];
function Enemy (x, y, dx, dy) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy

  this.drawEnemies = function () {
    for (let i = 0; i < enemyPositions.length; i++) {
      const { x, y } = enemyPositions[i];
      ctx.fillStyle = enemyColor;
      ctx.fillRect(x, y, enemySize, enemySize);
    }
  }
  
  this.update = function() {
    if (this.x + 20 < 470) {
      this.x += this.dx
    }
    if (this.y + 20 < 240) {
      this.y += this.dy
    }
  }
  this.drawEnemies()
}

function init(){
  enemies = []

  for (let i = 0; i < 4; i ++) {
    const { x, y } = enemyPositions[i]
    let dx = (Math.random() - 0.5) * 2// velocity
    let dy = (Math.random() - 0.5) * 2
    enemies.push(new Enemy(x, y, dx, dy))
  }
}
function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, innerWidth, innerHeight)

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update()
  }
}

class Enemy {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.vel = 0
  }

  drawEnemies = function () {

    let enemySize = 50;
    let enemyColor = 'black';
    let enemyPositions = [
      // starting positions
      { x: 100, y: 100 },
      { x: 100, y: 300 },
      { x: 800, y: 100 },
      { x: 800, y: 300 },
    ];
    for (let i = 0; i < enemyPositions.length; i++) {
      const { x, y } = enemyPositions[i];
      ctx.fillStyle = enemyColor;
      ctx.fillRect(x, y, enemySize, enemySize);
    }
  }
}