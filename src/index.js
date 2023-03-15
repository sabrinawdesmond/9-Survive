import Circle from "./scripts/circle"
import Blaster from "./scripts/blaster";
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
  const blaster = new Blaster(canvas)
  let circle = new Circle(midx, midy, 20, blaster)

  window.onload = function() {
    // draw();
    // debugger;
    // circle.animate(ctx);
    animate();
  }
  const enemySize = 50;
  const enemyColor = 'black';
  const startPos = [
    // starting positions
    { x: -60, y: midy, direction: [1,0], isMoving: false, health: 5 }, // left
    { x: midx, y: -60, direction: [0, -1], isMoving: false, health: 5 }, // top
    { x: canvas.width, y: midy, direction: [-1, 0], isMoving: false, health: 5 }, // right
    { x: midx, y: canvas.height, direction: [0, 1], isMoving: false, health: 5 },  // bottom
    { x: -60, y: midy, direction: [1,0], isMoving: false, health: 5 },
    { x: midx, y: -60, direction: [0, -1], isMoving: false, health: 5 },
    { x: canvas.width, y: midy, direction: [-1, 0], isMoving: false, health: 5 },
    { x: midx, y: canvas.height, direction: [0, 1], isMoving: false, health: 5 },  
    { x: -60, y: midy, direction: [1,0], isMoving: false, health: 5 },
    { x: midx, y: -60, direction: [0, -1], isMoving: false, health: 5 },
    { x: canvas.width, y: midy, direction: [-1, 0], isMoving: false, health: 5 },
    { x: midx, y: canvas.height, direction: [0, 1], isMoving: false, health: 5 },
  ];

  function game() {
    circle.draw(ctx)
    // enemies.forEach((enemy) => {
    //   if (blaster.collidewith(enemy)) {
    //     if (enemy.health <= 0) {
    //       let index = enemies.indexOf(enemy)
    //       enemies.splice(index, 1)
    //     }
    //   } else {
    //     enemy.draw(ctx)
    //   }
    // })
  }
  setInterval(game, 1000 / 60)
  
 
  class Square {
    constructor(x, y, direction, isMoving, health) {
      this.x = x;
      this.y = y;
      this.direction = direction
      this.isMoving = isMoving
      this.health = health
      
    }

    draw() {
      for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i]
        const { x, y } = enemy;
        ctx.fillStyle = enemyColor;
        ctx.fillRect(x, y, enemySize, enemySize);
        // enemy.isMoving = true
        // console.log(enemy)
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
      this.draw();
    }

    takeDamage(damage) {
      this.health -= damage
    }
  }

  // grab random starting positions
  let attackPos = []
  for (let i = 0; i < 10; i++){
    attackPos.push(startPos[Math.floor(Math.random() * startPos.length)])
  }

// puts attack positions into an array
  let enemies = attackPos.map(options => {
    return new Square(options.x, options.y, options.direction, options.isMoving);
  });

  // let topAttacks = enemies.filter(options => options.y === -60).map(options => ({...options}))
  // let bottomAttacks = enemies.filter(options => options.y === canvas.height).map(options => ({...options}))
  // let leftAttacks = enemies.filter(options => options.x === -60).map(options => ({...options}))
  // let rightAttacks = enemies.filter(options => options.x === canvas.width).map(options => ({...options}))

  function animate() {
    requestAnimationFrame(animate);
    ctx.drawImage(background,0,0,canvas.width, canvas.height); 
    
    blaster.draw(ctx);
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

    enemies.forEach((enemy) => {
      if (blaster.collidewith(enemy)) {
        if (enemy.health <= 0) {
          let index = enemies.indexOf(enemy)
          enemies.splice(index, 1)
        }
      } else {
        enemy.draw(ctx)
      }
    })
  }
})
  
  // keydown(e) {
    
  //   if (e.code === 'ArrowUp') {
  //     // this.upPressed = true
  //     // console.log("up key pressed")
  //   } // up arrow
  //   if (e.code === 'ArrowDown') {
  //     // this.downPressed = true
  //     // console.log("down key pressed")
  //   } // down arrow
  //   if (e.code === 'ArrowLeft') {
  //     // this.leftPressed = true
  //     // console.log("left key pressed")
  //   }  // left arrow
  //   if (e.code === 'ArrowRight') {
  //     // this.rightPressed = true
  //     // console.log("up key pressed")
  //   }  // right arrow

  // }

// });
