// Simple requestAnimationFrame polyfill/fallback
window.requestAnimFrame = (function(){
  return window.requestAnimationFrame  ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

let noOfPoints = 3; // the initial number of points for our shape
let points = initPoints(noOfPoints); // array of 2-dimensional vectors
let width, height; // width & height globals to set canvas size

// Initialiase the canvas
const canvas = document.createElement('canvas');
const c = canvas.getContext('2d');

// Prep our canvas to stretch across the screen
canvas.style.position = 'absolute';
canvas.style.top = '0px';
canvas.style.left = '0px';
canvas.style.zIndex = '-1';

// Add the canvas to the document
document.body.appendChild(canvas);

// Re-render when necessary, setting the width/height for the canvas and
// triggering the animation loop.
function render() {
  width = document.documentElement.clientWidth;
  height = document.documentElement.clientHeight;

  canvas.width = width;
  canvas.height = height;

  animloop();
}

// initPoints takes an integer n and returns an array of random 2-dimensional
// vectors n elements long
function initPoints(n) {
  let p = [];
  for(let i = 0; i < n; i++) {
    p.push(getRandomPoint());
  }

  return p;
}

// getRandomPoint returns a 2-dimensional vector with x,y coords between 0-100
// to indicate position as a percentage
function getRandomPoint() {
  return [Math.random() * 100, Math.random() * 100];
}

// clearCanvas takes a canvas context and an array of points, iterates over
// the points to find the bounding box, then clears the canvas around that area
function clearCanvas(ctx, p) {
  let px = p.map(pt => pt[0]);
  let py = p.map(pt => pt[1]);

  let xmax = px.reduce((a, b) => Math.max(a, b)) * (width/100);
  let xmin = px.reduce((a, b) => Math.min(a, b)) * (width/100);
  let ymax = py.reduce((a, b) => Math.max(a, b)) * (height/100);
  let ymin = py.reduce((a, b) => Math.min(a, b)) * (height/100);

  ctx.clearRect(0, 0, xmax, ymax);
}

// drawPoints takes a canvas context and an array of points, iterates over
// the points and draws a continuous polygon
function drawPoints(ctx, p) {
  ctx.fillStyle = 'rgba(239, 84, 13, 1)';
  ctx.beginPath();
  ctx.moveTo(p[0][0] * (width/100), p[0][1] * (height/100));
  for(let i = 1; i < p.length; i++) {
    ctx.lineTo(p[i][0] * (width/100), p[i][1] * (height/100));
  }
  ctx.closePath();
  ctx.fill();
}

// jitter accepts an array of 2-dimensional points and randomly shifts them
function jitter(p) {
  let pn = p;
  for(let i = 0; i < pn.length; i++) {
    pn[i][0] += ((Math.random() * 2) - 1)/10;
    pn[i][1] += ((Math.random() * 2) - 1)/10;
  }

  return pn;
}

function animloop(){
  requestAnimFrame(animloop);
  clearCanvas(c, points); // clear the canvas of old points
  points = jitter(points); // shuffle the points around a tad
  drawPoints(c, points); // draw the new points to the canvas
}

// Showtime
render();


// Event listeners
// When the user clicks, generate a new, more complex polygon
document.addEventListener('click', function() {
  noOfPoints++;
  if(noOfPoints == 10) {
    noOfPoints = 3;
  }
  points = initPoints(noOfPoints)
  c.clearRect(0,0,width,height)
});

// When the user resizes the window, rerender
window.addEventListener('resize', render);
