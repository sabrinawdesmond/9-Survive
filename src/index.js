// import Example from "./scripts/example"
import Circle from "./scripts/worker"

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
    console.log("bg");
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

  function animate() {
    requestAnimationFrame(animate);
    ctx.drawImage(background,0,0,canvas.width, canvas.height); 

    drawEnemies();
    // circle.update();
    // enemies.forEach(enemy => enemy.draw(ctx));
    circle.draw(ctx);
  }



  const enemySize = 50;
  const enemyColor = 'black';
  const enemyPositions = [
    // starting positions
    { x: 100, y: 100, direction:[0, 1] },
    { x: 100, y: 300, dir: [-1, 0] },
    { x: 800, y: 100 },
    { x: 800, y: 300 },
  ];

  // const enemies = enemyPositions.map(options => {
  //   return new Enemy(options);
  // });

  function drawEnemies() {
    for (let i = 0; i < enemyPositions.length; i++) {
      const { x, y } = enemyPositions[i];
      ctx.fillStyle = enemyColor;
      ctx.fillRect(x, y, enemySize, enemySize);
    }
    // this.update = function() {
  
    //   if (this.x + 20 < 470) {
    //     this.x ++
    //   }
    //   if (this.y + 20 < 240) {
    //     this.y ++
    //   }
    // }
    // this.drawEnemies()
  }
});