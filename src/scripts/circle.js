export default class Circle {
  constructor(x, y, radius, beam) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.beam = beam
    
    document.addEventListener('keydown', this.keydown.bind(this))
    document.addEventListener('keyup', this.keyup.bind(this))
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "blue";
    ctx.fill();

    // this.shoot()
    // this.shootUp()
    // this.shootDown()
  }
  
  keydown(event) {
    let x = 0, y = 0;

    if (event.code === 'ArrowUp' ) { // up arrow
      this.upArrow = true;
      // this.shooting = true
      y = -1;
    } 
    if (event.code === 'ArrowDown') { // down arrow
      this.downArrow = true;
      y = 1;
      // this.shooting = true
      // console.log("down key pressed")
    } 
    if (event.code === 'ArrowLeft') { // left arrow
      this.leftArrow = true;
      x = -1;
        // console.log("left key pressed")
    }  
    if (event.code === 'ArrowRight') { // right arrow
      this.rightArrow = true;
      x = 1;
        // console.log("right key pressed")
    }

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) {
      const speed = 6;
      const delay = 5;
      const damage = 5;
      const beamX = this.x
      const beamY = this.y
      this.beam.shootUp(beamX, beamY, speed, damage, delay, {x, y});
    }

  }

  keyup(event) {
      if (event.code === 'ArrowUp' ) { // up arrow
        this.upArrow = false;
      } 
      if (event.code === 'ArrowDown') { // down arrow
        this.downArrow = false;
      } 
      if (event.code === 'ArrowLeft') { // left arrow
        this.leftArrow = false;
      }  
      if (event.code === 'ArrowRight') { // right arrow
        this.rightArrow = false;
      }  
    }
  
  animate(ctx) {
    requestAnimationFrame(this.animate.bind(this, ctx));
    
    this.update();
    this.draw(ctx);
  }
}