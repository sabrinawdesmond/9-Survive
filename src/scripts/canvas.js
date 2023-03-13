//centering canvas
const canvas = document.querySelector('canvas')
canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto";
let ctx = canvas.getContext('2d');

//background image
var background = new Image();
background.src = "src/assets/background2.png";

background.onload = function(){
  ctx.drawImage(background,0,0,canvas.width, canvas.height);   
}


canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight *  0.8;


let midx = canvas.width/2
let midy = canvas.height/2

function Circle (x, y, radius) {
  this.x = x
  this.y = y
  this.radius = radius

  this.draw = function() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = "blue"
    ctx.fill()
  }
  this.draw()
}
let circle = new Circle(midx, midy, 20)

window.onload = function() {
  drawEnemies();
  circle.draw()
}

function Enemy () {

}
function drawEnemies() {
  for (let i = 0; i < enemyPositions.length; i++) {
    const { x, y } = enemyPositions[i];
    ctx.fillStyle = enemyColor;
    ctx.fillRect(x, y, enemySize, enemySize);
  }
}


// let enemy1= ctx.fillRect(100, 100, 50, 50)

const enemySize = 50;
const enemyColor = 'black';
const enemyPositions = [
  // starting positions
  { x: 100, y: 100 },
  { x: 100, y: 300 },
  { x: 800, y: 100 },
  { x: 800, y: 300 },
];

// function Enemies(x, y, dx, dy, height, width, color) {
//   this.x = x
//   this.y = y
//   this.dx = dx
//   this.dy = dy
//   this.height = height
//   this.width = width
//   this.color = color
// }


// function animate() {
//   requestAnimationFrame(animate)
//   ctx.clearRect(0,0,innerWidth, innerHeight)

//   if ()
// }
// animate()