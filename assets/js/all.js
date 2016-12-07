// Hide loading page and display content
$(document).ready(function() {
	$("#loader").hide();
	$("#mainContent").hide();
	$("#btnStartContainer").show();
});

function startProgram () {
	$("#btnStartContainer").hide();
	$("#mainContent").fadeIn();
	$(".opening").hide().delay(500).fadeIn(800);
	$(".opening>p").hide().delay(1800).fadeIn(800);

	// Play background music
	$("#bg-sound").get(0).play();
}
