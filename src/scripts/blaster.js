import TopBeam from "./topBeams"

export default class Blaster {
  topBeams = []
  bottomBeams = []
  leftBeams = []
  rightBeams = []
  timeBetween = 0
  constructor(canvas) {
    this.canvas = canvas
  }

  shootUp(x, y, speed, damage, delay, direction) {
      this.topBeams.push(new TopBeam(x, y, speed, damage, direction))
  }
 
  draw(ctx) {
    this.topBeams.forEach((beam) => beam.draw(ctx));
  }

  collidewith(enemy) {
    return this.topBeams.some(beam => {
      if (beam.collidewith(enemy)) {
        this.topBeams.splice(this.topBeams.indexOf(beam), 1);
        return true
      }
      return false
    })
  }
}