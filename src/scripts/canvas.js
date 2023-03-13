// import Enemy from "./enemy"
import Circle from "./worker"

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

// function Circle (x, y, radius) {
//   this.x = x
//   this.y = y
//   this.radius = radius

//   this.draw = function() {
//     ctx.beginPath()
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//     ctx.fillStyle = "blue"
//     ctx.fill()
//   }
//   this.draw()
// }
let circle = new Circle(midx, midy, 20)

window.onload = function() {
  drawEnemies();
  circle.draw()
}



const enemySize = 50;
const enemyColor = 'black';
const enemyPositions = [
  // starting positions
  { x: 100, y: 100 },
  { x: 100, y: 300 },
  { x: 800, y: 100 },
  { x: 800, y: 300 },
];

function drawEnemies() {
  for (let i = 0; i < enemyPositions.length; i++) {
    const { x, y } = enemyPositions[i];
    ctx.fillStyle = enemyColor;
    ctx.fillRect(x, y, enemySize, enemySize);
  }
  this.update = function() {
 
    if (this.x + 20 < 470) {
      this.x ++
    }
    if (this.y + 20 < 240) {
      this.y ++
    }
  }
  // this.drawEnemies()
}


// let enemy1 = ctx.fillRect(100, 100, 50, 50)



// function init(){
//   enemies = []

//   for (let i = 0; i < 4; i ++) {
//     const { x, y } = enemyPositions[i]
//     let dx = (Math.random() - 0.5) * 2// velocity
//     let dy = (Math.random() - 0.5) * 2
//     enemies.push(new Enemy(x, y, dx, dy))
//   }
// }
// function animate() {
//   requestAnimationFrame(animate)
//   ctx.clearRect(0, 0, innerWidth, innerHeight)

//   for (let i = 0; i < enemies.length; i++) {
//     enemies[i].update()
//   }
// }