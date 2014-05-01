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
var b0 = {
  radius: 20, x: 20, y: 20, vx: 5, vy: 5, color: 'red'
};
var b1 = {
  radius: 15, x: 50, y: 80, vx: 5, vy: 5, color: 'blue'
};
var b2 = {
  radius: 30, x: 80, y: 200, vx: 5, vy: 5, color: 'green'
};
var balls = [b0, b1, b2];

  // Run an interation of the game
  var updateGame = function() {
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
  });

  updateGame();
});
