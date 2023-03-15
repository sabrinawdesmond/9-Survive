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
    if (
      this.x < enemy.x + enemy.width &&
      this.x + this.width > enemy.x &&
      this.y < enemy.y + enemy.height &&
      this.y + this.height > enemy.y
    ) {
      enemy.takeDamage(this.damage);
      console.log('direct hit')
      return true;
    }
    return false
  }
}
