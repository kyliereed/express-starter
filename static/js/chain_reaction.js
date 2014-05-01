$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  
 var drawCircle = function(x, y, radius, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.closePath();
    context.fill();
  };

  var drawSquare = function(x, y, sideLen, color) {
      context.fillStyle = color;
      context.fillRect(x, y, sideLen, sideLen);
      context.fill();
    };
  // PUT STUFF HERE
var numBalls = 50;

var balls = [];

var colors = ['aqua', 'grey', 'magenta', 'violet', 'lightblue', 'lightcoral', 'turquoise'];

for (var i = 0; i < numBalls; i++){
    var b0 = {
    radius: Math.random()*10+5, x: Math.random()*770+15, y: Math.random()*570+15, 
    vx: Math.random()*7-3.5, vy: Math.random()*7-3.5, 
    color: colors[Math.floor(Math.random()*colors.length)]
};
  balls.push(b0)
  };

  // Run an interation of the game
  var updateGame = function() {
    drawSquare(0, 0, 800, 'lavender');
    for (var i = 0; i < balls.length; i++){
      balls[i].x = balls[i].x + balls[i].vx;
      balls[i].y = balls[i].y + balls[i].vy;
      if (balls[i].x >= canvas.width - balls[i].radius) {
      balls[i].vx = -balls[i].vx
    };
      if (balls[i].y >= canvas.height - balls[i].radius) {
      balls[i].vy = -balls[i].vy
    };
      if (balls[i].x <= 0 + balls[i].radius) {
      balls[i].vx = -balls[i].vx
    };
      if (balls[i].y <= 0 + balls[i].radius) {
      balls[i].vy = -balls[i].vy
    };
    }; 
  for (var i = 0; i < balls.length; i++){
      drawCircle(balls[i].x, balls[i].y, balls[i].radius, balls[i].color)
    };
          
    setTimeout(updateGame, 10);
    };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
    var b0 = {
    radius: Math.random()*10+5, x: x, y: y, 
    vx: Math.random()*7-3.5, vy: Math.random()*7-3.5, 
    color: colors[Math.floor(Math.random()*colors.length)]
};
  balls.push(b0)
  });

  updateGame();
});
