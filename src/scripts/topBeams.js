export default class TopBeam {
  colors = ['red', 'green', 'lime','aqua', 'blue', 'pink', 'lavendar', 'orange', 'purple', 'yellow']

  constructor(x, y, speed, damage) {
    this.x = x;
    this.y = y;
    this.speed = speed; 
    this.damage = damage

    this.width = 3;
    this.height = 10
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    this.y -= this.speed
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}