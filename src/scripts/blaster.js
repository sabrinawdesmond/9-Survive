import Beam from "./beams";

export default class Blaster {
  beams = []

  constructor(canvas) {
    this.canvas = canvas
  }

  shootUp(x, y, speed, damage, direction) {
      this.beams.push(new TopBeam(x, y, speed, damage, direction))
  }
 
  draw(ctx) {
    this.beams.forEach((beam) => beam.draw(ctx));
  }

  collidewith(enemy) {
    return this.beams.some(beam => {
      if (beam.collidewith(enemy)) {
        this.beams.splice(this.beams.indexOf(beam), 1);
        return true
      }
      return false
    })
  }
}