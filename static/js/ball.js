$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE
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

  var x = 20
  var y = 20

  //run an iteration of the game
  var ball = {
      radius: 20, x: x, y: y, vx: 5, vy: 5
    };
  var updateGame = function() {
    ball.x = ball.x + ball.vx;
    ball.y = ball.y + ball.vy;
    if (ball.x >= canvas.width - 20) {
      ball.vx = -ball.vx
    };
    if (ball.y >= canvas.height - 20) {
      ball.vy = -ball.vy
    };
    if (ball.x <= 0 + 20) {
      ball.vx = -ball.vx
    };
    if (ball.y <= 0 + 20) {
      ball.vy = -ball.vy
    };
//blank the canvas
  drawSquare(0, 0, 800, 'white');
//drawing the circle and moving
    drawCircle(ball.x, ball.y, 20, 'blue');
      setTimeout(updateGame,10);
  };


  updateGame();
});
