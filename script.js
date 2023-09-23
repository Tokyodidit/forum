// init
var maxx = document.body.clientWidth;
var maxy = document.body.clientHeight;
var halfx = maxx / 1.5;
var halfy = maxy / 2;
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = maxx;
canvas.height = maxy;
var context = canvas.getContext("2d");
var dotCount = 350;
var dots = [];
// create dots
for (var i = 0; i < dotCount; i++) {
  dots.push(new dot());
}

// dots animation
function render() {
  context.fillStyle = "#000000";
  context.fillRect(0, 0, maxx, maxy);
  for (var i = 0; i < dotCount; i++) {
    dots[i].draw();
    dots[i].move();
  }
  requestAnimationFrame(render);
}

// dots class
// @constructor
function dot() {
  
  this.rad_x = 3 * Math.random() * halfx + 1;
  this.rad_y = 1.2 * Math.random() * halfy + 1;
  this.alpha = Math.random() * 30 + 1;
  this.speed = Math.random() * 10 < 50 ? 1 : -1;
  this.speed *= 0.1;
  this.size = Math.random() * 10 + 1;
  this.color = Math.floor(Math.random() * 256);
  
}

// drawing dot
dot.prototype.draw = function() {
  
  // calc polar coord to decart
  var dx = halfx + this.rad_x * Math.cos(this.alpha / 80 * Math.PI);
  var dy = halfy + this.rad_y * Math.sin(this.alpha / 80 * Math.PI);
  // set color
  // Create a linear gradient from blue to purple
var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, "blue");
gradient.addColorStop(1, "purple");

// Set the fill style to the gradient
context.fillStyle = gradient;

// Now you can use the gradient to fill shapes
  // draw dot
  context.fillRect(dx, dy, this.size, this.size);
  
};

// calc new position in polar coord
dot.prototype.move = function() {
  
  this.alpha += this.speed;
  // change color
  if (Math.random() * 100 < 50) {
    this.color += 1;
  } else {
    this.color -= 1;
  }
  
};

// start animation
render();