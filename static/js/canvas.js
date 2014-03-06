$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //
  $('#p1').click(function(){
  	context.strokeRect(4, 4, 70, 100)
  });

  $('#p2').click(function(){
  	context.strokeRect(4, 4 ,70 ,70 )
  });

  $('#p3').click(function(){
  	context.beginPath()
  	context.arc(100, 100, 50, 0, Math.PI)
  	context.stroke()
  });

  $('#p4').click(function(){
  	context.beginPath()
  	context.arc(100, 100, 50, 0, 2*Math.PI)
  	context.stroke()
  });

  $('#p5').click(function(){
  	context.beginPath()
  	context.moveTo(100, 100)
  	context.lineTo(350, 350)
  	context.closePath()
  	context.stroke()
  });

  $('#p6').click(function(){
  	context.strokeStyle='green';
  	context.strokeRect(50, 50, 100, 150)
  });

  $('#p7').click(function(){
  	context.beginPath()
  	context.arc(100, 100, 50, 0, 2*Math.PI)
  	context.fillStyle='red'
  	context.fill()
  });

  $('#p8').click(function(){
  	context.fillStyle="yellow";
  	context.fillRect(50, 50, 150, 150)
  	context.strokeStyle='blue';
  	context.strokeRect(50, 50, 150, 150)
  });

  $('#p9').click(function(){
  	for(var i = 0; i < 251; i = i + 50){
  		context.strokeRect(i, 100, 50, 50)
  	}
  });

  $('#p10').click(function(){
  	for(var i = 0; i < 501; i = i + 5)
  		context.strokeRect(i, 50, 5, 5)
  });

  $('#p11').click(function(){
  	for
  })
});
