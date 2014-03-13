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

  var drawTriplet = function(x, y, color) {
    drawCircle(x+60, y+50, 50, color);
    drawCircle(x+25, y+100, 50, color);
    drawCircle(x+100, y+100, 50, color);
  }
  // Challenge:
  var drawTriforce = function(x, y, sideLen, color){
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x+sideLen/2, y+sideLen*(Math.sqrt(3)/2));
    context.lineTo(x-sideLen/2, y+sideLen*(Math.sqrt(3)/2));
    context.lineTo(x, y);
    context.closePath();
    context.fill();
  }
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

  $('#p6').click(function(){
    drawTriplet(100, 100, 'green');
  });

  $('#p7').click(function(){
    drawTriplet(100, 100, 'blue');
  });

  $('#p8').click(function(){
    drawTriplet(50, 50, 'blue');
    drawTriplet(300, 300, 'red');
    drawTriplet(50, 300, 'green');
    drawTriplet(300, 50, 'black');
  });

  $('#p9').click(function(){
    drawTriforce(100, 100, 35, 'green');
  })
  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //

});
