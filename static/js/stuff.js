alert('Surprise!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('¡Hola, todos!');
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
$('#houdini_text').hide();
});

$('#reappear').click(function() {
$('#houdini_text').show();
});

$('#tickle_button').click(function() {
$('#tickled_text').css('color','Pink');
});

$('#tickle_buttonstop').click(function() {
$('#tickled_text').css('color','Black');
});

$('#greetme').click(function() {
alert($('#my_name').val());
});



