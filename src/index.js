import Circle from "./scripts/circle"
// import Square from "./scripts/squares";

document.addEventListener("DOMContentLoaded", () => {


  const canvas = document.querySelector('canvas')
  canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto";
  let ctx = canvas.getContext('2d');

  //background image
  var background = new Image();
  background.src = "src/assets/background2.png";

  background.onload = function(){
    ctx.drawImage(background,0,0,canvas.width, canvas.height);   
  }


  canvas.width = window.innerWidth * 0.5;
  canvas.height = window.innerHeight *  0.8;


  let midx = canvas.width/2
  let midy = canvas.height/2
  let circle = new Circle(midx, midy, 20)

  window.onload = function() {
    // drawEnemies();
    // debugger;
    // circle.animate(ctx);
    animate();
  }
  const enemySize = 50;
  const enemyColor = 'black';
  const startPos = [
    // starting positions
    { x: 10, y: midy, direction: [1,0] },
    { x: midx, y: 10, direction: [0, -1] },
    { x: canvas.width - 60, y: midy, direction: [-1, 0] },
    { x: midx, y: canvas.height - 60, direction: [0, 1] },  
    { x: 10, y: midy, direction: [1,0] },
    { x: midx, y: 10, direction: [0, -1] },
    { x: canvas.width - 60, y: midy, direction: [-1, 0] },
    { x: midx, y: canvas.height - 60, direction: [0, 1] },  
    { x: 10, y: midy, direction: [1,0] },
    { x: midx, y: 10, direction: [0, -1] },
    { x: canvas.width - 60, y: midy, direction: [-1, 0] },
    { x: midx, y: canvas.height - 60, direction: [0, 1] },
  ];
 
  class Square {
    constructor(x, y, direction) {
      this.x = x;
      this.y = y;
      this.direction = direction
    }
  
    drawEnemies() {
      for (let i = 0; i < enemies.length; i++) {
        const { x, y } = enemies[i];
        ctx.fillStyle = enemyColor;
        ctx.fillRect(x, y, enemySize, enemySize);
      }
    }
    // movement animation
    update() {
      if (this.x < midx) {
        this.x += 0.25
      } else {
        this.x -= 0.25
      }
  
      if (this.y < midy) {
        this.y += 0.25
      } else {
        this.y -= 0.25
      }
    }
    animate(ctx) {
      requestAnimationFrame(this.animate.bind(this, ctx));
      
      this.update();
      this.drawEnemies();
    }
  }

  // grab random starting positions
  let attackPos = []
  for (let i = 0; i < 10; i++){
    attackPos.push(startPos[Math.floor(Math.random() * startPos.length)])
  }

// puts attack positions into an array
  let enemies = attackPos.map(options => {
    return new Square(options.x, options.y, options.direction);
  });

  function animate() {
    requestAnimationFrame(animate);
    ctx.drawImage(background,0,0,canvas.width, canvas.height); 
    
    circle.draw(ctx);
    
    //send out attacks 1 by 1
    let i = 0;
    function drawNextEnemy() {
      if (i < enemies.length) {
        enemies[i].animate(ctx)
        i++
        setTimeout(drawNextEnemy, 1000)
      }
    }
    drawNextEnemy()
  }
});

class InputHandler {
  constructor() {
    this.keyInputs = []
    window.addEventListener("keydown", function(event) {
      if ((event.key === '38' || 
      event.key === '40' ||
      event.key === '37' ||
      event.key === '39') && !this.keyInputs.includes(event.key)) {
        this.keyInputs.push(event.key)
      }
      return keyInputs
    })
  }
}

const input = new InputHandler()
// event listeners
