$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
      context.strokeStyle = color;
      context.strokeRect(x, y, sideLen, sideLen);
    };

  var drawCircle = function(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.strokeStyle = color;
    context.closePath();
    context.stroke();
  };

  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  $('#p5').click(function(){
    drawCircle(100, 200, 50, 'green');
    drawCircle(200, 200, 50, 'green');
    drawCircle(150, 150, 50, 'green');
    drawCircle(150, 250, 50, 'green');
    drawCircle(150, 200, 50, 'blue');
    drawSquare(100, 150, 100, 'red');
  });
  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //

});
