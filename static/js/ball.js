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

  //run an iteration of the game
  var updateGame = function() {
    x = x + 5
//blank the canvas
  drawSquare(0, 0, 800, 'white');
//drawing the circle and moving
    drawCircle(x, 20, 20, 'blue');
      setTimeout(updateGame,10);
  };


  updateGame();
});
