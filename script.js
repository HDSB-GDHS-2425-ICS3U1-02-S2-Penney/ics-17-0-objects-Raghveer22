/**** SETUP CODE ****/

// Call the init function when the HTML window loads
window.onload = init;

function init() {
  // Init function that sets up our canvas. 
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  // Start the first frame request to begin the game loop
  window.requestAnimationFrame(gameLoop);

}

/**** OBJECT CREATION FUNCTIONS ****/

// Write the circle object function here
function circle(x, y, color) {
  this.x =x;
  this.y = y;
  this.color = color;
}


// Write the createCircle function here. 
function createCircle(){
ctx.beginPath();
ctx.arc(10, 10, 10, 0, 2 * Math.PI);             
ctx.fillStyle = "white";
ctx.fill();
}

// Write the randomInteger function here. 



/**** GAMELOOP ****/

function gameLoop(timestamp) {

  // Call the createCircle function here.


  // This causes the game to loop every frame (Do not change this)
  window.requestAnimationFrame(gameLoop);
}



