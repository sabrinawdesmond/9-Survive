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
    this.shootUp()
    // this.shootDown()
  }
  
  keydown(event) {
    if (event.code === 'ArrowUp' ) { // up arrow
      this.upArrow = true;
      // this.shooting = true
    } 
    if (event.code === 'ArrowDown') { // down arrow
      this.downArrow = true;
      // this.shooting = true
      // console.log("down key pressed")
    } 
    if (event.code === 'ArrowLeft') { // left arrow
      this.leftArrow = true;
      // console.log("left key pressed")
    }  
    if (event.code === 'ArrowRight') { // right arrow
      this.rightArrow = true;
      // console.log("right key pressed")
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

    shootUp() {
      if (this.upArrow === true){
        console.log('pew pew')
        const speed = 6;
        const delay = 5;
        const damage = 1;
        const beamX = this.x
        const beamY = this.y
        this.beam.shootUp(beamX, beamY, speed, damage, delay)
      }
    }
    // }
    // shootDown() {
    //   if (this.downArrow === true){
    //     // console.log('pew')
    //     const speed = 6;
    //     const delay = 5;
    //     const damage = 1;
    //     const beamX = this.x
    //     const beamY = this.y
    //     this.beam.shootDown(beamX, beamY, speed, damage, delay)
    //   }
    // }
    // shoot() {
    //   if (this.upArrow === true || this.downArrow === true || this.leftArrow === true || this.rightArrow === true){
    //     console.log('pew pew')
    //     const speed = 6;
    //     const delay = 5;
    //     const damage = 1;
    //     const beamX = this.x + this.radius/2
    //     const beamY = this.y
    //     this.beam.shoot(beamX, beamY, speed, damage, delay)
    //   }
    // }
    // shoot() {
    //   if (this.upArrow === true || this.downArrow === true || this.leftArrow === true || this.rightArrow === true){
    //     console.log('pew pew')
    //     const speed = 6;
    //     const delay = 5;
    //     const damage = 1;
    //     const beamX = this.x + this.radius/2
    //     const beamY = this.y
    //     this.beam.shoot(beamX, beamY, speed, damage, delay)
    //   }
    // }
  
  animate(ctx) {
    requestAnimationFrame(this.animate.bind(this, ctx));
    
    this.update();
    this.draw(ctx);
  }
}