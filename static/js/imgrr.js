// Problem 2 (Peekaboo) ------------------------------------------------------
// 
$('#toggle_img').click(function() {
if($('#toggle_img').text() === "Go Away!"){
	$('#toggle_img').text("Bring it back!")
	$('#main_img').hide()
} else {
	$('#toggle_img').text("Go Away!")
	$('#main_img').show()
}});

// Problem 3 (Swap Em) -----------------------------------------------
// WRITE CODE HERE
$('#change_img').click(function() {
	$('#main_img').attr('src','/static/img/' + $('#new_img_file').val())	
});

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
	$(this).attr('width', '200px');
	$('#main_img').attr('src',$(this).attr('src'));
});

// Problem 5 (Imgrr) -------------------------------------------------

