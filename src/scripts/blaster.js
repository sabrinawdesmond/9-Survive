import TopBeam from "./topBeams"
// import BottomBeam from "./bottomBeams"

export default class Blaster {
  topBeams = []
  bottomBeams = []
  leftBeams = []
  rightBeams = []
  timeBetween = 0
  constructor(canvas) {
    this.canvas = canvas
  }

  shootUp(x, y, speed, damage, delay) {
    if (this.timeBetween <= 0) {
      this.topBeams.push(new TopBeam(x, y, speed, damage))
      this.timeBetween = delay
    }
    this.timeBetween--
  }
  // shootDown(x, y, speed, damage, delay) {
  //   console.log("hit")
  //   if (this.timeBetween <= 0) {
  //     this.bottomBeams.push(new BottomBeam(x, y, speed, damage))
  //     this.timeBetween = delay
  //   }
  //   this.timeBetween--
  // }
  // shoot(x, y, speed, damage, delay) {
  //   if (this.timeBetween <= 0) {
  //     this.topBeams.push(new TopBeam(x, y, speed, damage))
  //     this.timeBetween = delay
  //   }
  //   this.timeBetween--
  // }
  // shoot(x, y, speed, damage, delay) {
  //   if (this.timeBetween <= 0) {
  //     this.topBeams.push(new TopBeam(x, y, speed, damage))
  //     this.timeBetween = delay
  //   }
  //   this.timeBetween--
  // }
  // shoot(x, y, speed, damage, delay) {
  //   if (this.timeBetween <= 0) {
  //     this.topBeams.push(new TopBeam(x, y, speed, damage))
  //     this.timeBetween = delay
  //   }
  //   this.timeBetween--
  // }
  draw(ctx) {
    this.topBeams.forEach((beam) => beam.draw(ctx));
  }
}