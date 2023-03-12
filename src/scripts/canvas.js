const canvas = document.querySelector('canvas')
canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid blue";

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight *  0.8;



let ctx = canvas.getContext('2d');

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})


let midx = canvas.width/2
let midy = canvas.height/2

function Circle (x, y, radius) {
  this.x = x
  this.y = y
  this.radius = radius
  // this.minRadius = radius
  // this.color = colorArr[Math.floor(Math.random() * colorArr.length)]

  this.draw = function() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    // ctx.strokeStyle = "purple"
    // ctx.stroke()
    ctx.fillStyle = "blue"
    ctx.fill()
  }
  this.draw()
}

window.onload = function() {
  drawEnemies();
}

function drawEnemies() {
  for (let i = 0; i < enemyPositions.length; i++) {
    const { x, y } = enemyPositions[i];
    ctx.fillStyle = enemyColor;
    ctx.fillRect(x, y, enemySize, enemySize);
  }
}
  
let circle = new Circle(midx, midy, 30)

const enemySize = 50;
const enemyColor = 'red';
const enemyPositions = [
  // starting positions
  { x: 100, y: 100 },
  { x: 100, y: 300 },
  { x: 800, y: 100 },
  { x: 800, y: 300 },
];

function Enemies(x, y, dx, dy, height, width, color) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.height = height
  this.width = width
  this.color = color
}

