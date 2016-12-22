// Hide loading page and display content
$(document).ready(function() {
	$("#loader").hide();
	$("#mainContent").hide();
	$(".opening").hide();
	$("#btnStartContainer").show();
});

function startProgram() {
	$("#btnStartContainer").fadeOut();
	setTimeout(function() {
	    $("#mainContent").fadeIn();
		$(".opening").hide().delay(500).fadeIn(800);
		$(".opening p").hide().delay(1800).fadeIn(800);
			// Play background music
		$("#bg-sound").get(0).play();
	}, 50);
	
	setTimeout(function() {
		$(".opening").append("<p>Nhưng mà tính đúng ra thì biết nhau gần 1 năm rồi nhỉ?</p>").children(':last').hide().fadeIn(800);
		setTimeout(function() {
		    $(".opening").append("<p>Thấy nhanh quá ha, mới đây mà đã hơn 6 tháng quen nhau rồi.</p>").children(':last').hide().fadeIn(800);
		    setTimeout(function() {
			    $(".opening").append("<p>Lonton với anh trải qua bao nhiêu buồn vui. Đòi chia tay quá trời.</p>").children(':last').hide().fadeIn(800);
			    setTimeout(function() {
				    $(".opening").append("<br><h3>Mà có chia tay đâu..?</h3>").children(':last').hide().fadeIn(800);
				}, 4000);
			}, 3000);
		}, 3000);
	}, 4500);
	
	setTimeout(function() {
		$(".opening").fadeOut(800);
		setTimeout(function() {
		    $(".opening").empty();
		    $(".opening").append("<h1>Lonton biết tại sao không?</h1>").fadeIn(800);
		    setTimeout(function() {
		        $(".opening").append("<br><br><h2>Tại anh với em yêu nhau..</h2>").children(':last').hide().fadeIn(800);
		    }, 2000);
		}, 800);
	}, 16500);
	
	setTimeout(displaySlider, 22500);
}

function displaySlider() {
	$("#slider").fadeIn(500);
	$("#snowflakeContainer").fadeOut(5000);
	$("#mainContent").fadeOut(3000);
	setTimeout(displayAnotherSlider, 50000);
}

function displayAnotherSlider() {
	$("#slider").fadeOut(3000);
	$("#anotherSlider").fadeIn(3000);
	$("#snowflakeContainer").fadeIn(3000);
}