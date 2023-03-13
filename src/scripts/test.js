
// Set the initial position of the square
let x = 50;
let y = 50;

// Calculate the destination coordinates at the center of the canvas
const destX = canvas.width / 2;
const destY = canvas.height / 2;

// Calculate the distance the square needs to move on each frame
const dx = (destX - x) / 60; // 60 frames per second
const dy = (destY - y) / 60;

// Set up the animation loop
let frameCount = 0;

function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, innerWidth, innerHeight)
// const animation = setInterval(() => {
//   // Clear the canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update the square position
  x += dx;
  y += dy;
  
  // Draw the square
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, 50, 50);
  
  // Check if the square has reached the destination
  if (++frameCount >= 60) { // 60 frames = 1 second
    clearInterval(animation);
  }
}; // 1000ms / 60 frames = 16.7ms per frame

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Set the initial position of the square
let x = 50;
let y = 50;

// Calculate the destination coordinates at the center of the canvas
const destX = canvas.width / 2;
const destY = canvas.height / 2;

// Calculate the distance the square needs to move on each frame
const dx = (destX - x) / 60; // 60 frames per second
const dy = (destY - y) / 60;

// Set up the animation loop
let frameCount = 0;
const animation = setInterval(() => {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update the square position
  x += dx;
  y += dy;
  
  // Draw the square
  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, 50, 50);
  
  // Check if the square has reached the destination
  if (++frameCount >= 60) { // 60 frames = 1 second
    clearInterval(animation);
  }
}, 16.7); // 1000ms / 60 frames = 16.7ms per frame
