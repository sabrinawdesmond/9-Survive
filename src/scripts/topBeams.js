export default class TopBeam {
  colors = [
    "red",
    "green",
    "lime",
    "aqua",
    "blue",
    "pink",
    "lavendar",
    "orange",
    "purple",
    "yellow",
  ];

  constructor(x, y, speed, damage, direction) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.damage = damage;
    this.direction = direction;
    
    this.width = 3;
    this.height = 10;

    if (direction.x !== 0) {
      // left or right
      this.width = 10;
      this.height = 3;
    }
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    // this.y -= this.speed;
    this.y += this.direction.y * this.speed;
    this.x += this.direction.x * this.speed;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  collidewith(enemy) {
    const x2 = this.x + this.width;
    const ex2 = enemy.x + 50;
    const y2 = this.y + this.height;
    const ey2 = enemy.y + 50;

    if (
      (enemy.direction[0] === -1 && 
        x2 > enemy.x && 
        x2 < ex2) ||
      (enemy.direction[0] === 1 && 
        this.x < ex2 && 
        this.x > enemy.x) ||
      (enemy.direction[1] === 1 && 
        y2 > enemy.y && 
        x2 < ey2) ||
      (enemy.direction[1] === -1 && 
        this.y < ey2 && 
        this.y > enemy.y)
    ) {
  
      enemy.takeDamage(this.damage);
      console.log('hit');
      return true;
    }
    return false
  }
}
