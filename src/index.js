// import Example from "./scripts/example"
import Circle from "./scripts/circle"
// import Square from "./scripts/squares";

document.addEventListener("DOMContentLoaded", () => {
  // console.log('Hello World')
  // const main = document.getElementById("main");
  // new Example(main);

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
  let circle = new Circle(midx, midy, 20)

  window.onload = function() {
    // drawEnemies();
    // debugger;
    // circle.animate(ctx);
    animate();
  }
  const enemySize = 50;
  const enemyColor = 'black';
  const enemyPositions = [
    // starting positions
    { x: 10, y: midy, direction: [1,0] },
    { x: midx, y: 10, direction: [0, -1] },
    { x: canvas.width - 60, y: midy, direction: [-1, 0] },
    { x: midx, y: canvas.height - 60, direction: [0, 1] },
  ];
  // const enemies = enemyPositions.map(options => {
  //   return new Square(options);
  // });
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
  
    update() {
      // this.x += this.direction[0];
      // this.y += this.direction[1];
     
      if (this.x < midx) {
        this.x += .1
      } else {
        this.x -= .1
      }
  
      if (this.y < midy) {
        this.y += .1
      } else {
        this.y -= .1
      }
    }
    animate(ctx) {
      requestAnimationFrame(this.animate.bind(this, ctx));
      
      this.update();
      this.drawEnemies();
    }
  }
  let enemies = enemyPositions.map(options => {
    return new Square(options.x, options.y, options.direction);
  });

  function animate() {
    requestAnimationFrame(animate);
    ctx.drawImage(background,0,0,canvas.width, canvas.height); 
    // endrawEnemies();
    // circle.update();
    circle.draw(ctx);
    // enemies.forEach(enemy => enemy.drawEnemies(ctx));
    enemies.forEach(enemy => enemy.animate(ctx));
  }

});