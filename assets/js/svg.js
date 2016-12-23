$("#circle1").click(function() {
  var path = document.querySelector("#line1");
  var length = path.getTotalLength();
    // Clear any previous transition
  path.style.transition = path.style.WebkitTransition = 'none';
    // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
  path.getBoundingClientRect();
    // Define our transition
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
    // Go!
  path.style.strokeDashoffset = length*48/100;
  setTimeout(function(){$("#circle1-1").attr('fill','#A21B14');}, 2000);
    
    // Change background image
  $("#anotherSlider").fadeOut(2000);
  $("#anotherSlider").empty();
  setTimeout(function(){
    $("#anotherSlider").css("background-image", "url(assets/images/12.jpg)");
  }, 2000);

    // Append new div container
  $("body").append('<div id="svgTextContainer"></div>').children(':last').hide().fadeIn(200);
  $("#svgTextContainer").empty().append('<p>Này chắc là lần đầu tiên anh với em đi chơi?</p><p>Nhớ pika gọi nhầm pà Q là chị hoài mấy lần...</p><p>Nhụt chết..</p><p>Đi xem phim xong đi ăn nữa chứ..</p><p>June 15, 2016</p>').children(':last').hide().fadeIn(800);
});

$("#circle1-1").click(function() {
  var path = document.querySelector("#line1");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length*48/100;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = length*2/100;
  setTimeout(function(){$("#circle2").attr('fill','#A21B14');}, 2000);

  $("#anotherSlider").fadeIn(3000);
  $("#mainContent").fadeOut(2000);
  setTimeout(function(){
    $("#mainContent").css("background-image", "url(assets/images/13.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append('<p>Này là đi chơi với cả nhà lonton đồ..</p><p>Anh sợ chết đc, ko biết nên làm j..</p><p>Lau chùi dọn dẹp xe bà Ty để cbị đi chơi cả 1 buổi chiều này..</p><p>Lần đầu thấy lonton mặc đồ bơi :( hốt quá mà cứ mặc hoài..</p><p>Mai mốt bỏ đi nghen!!</p><p>July 27, 2016</p>').children(':last').hide().fadeIn(800);
});

$("#circle2").click(function() {
  var path = document.querySelector("#line2");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle3").attr('fill','#A21B14');}, 2000);

  $("#mainContent").fadeIn(3000);
  $("#anotherSlider").fadeOut(2000);
  setTimeout(function(){
    $("#anotherSlider").css("background-image", "url(assets/images/14.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append('<p>Lần này mặt pika nổi nguyên cục de chóa</p><p>Xấu ơi là xấu luôn huhu..</p>').children(':last').hide().fadeIn(800);
});

$("#circle3").click(function() {
  var path = document.querySelector("#line3");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = length*37/100;
  setTimeout(function(){$("#circle3-1").attr('fill','#A21B14');}, 2000);

  $("#anotherSlider").fadeIn(3000);
  $("#mainContent").fadeOut(2000);
  setTimeout(function(){
    $("#mainContent").css("background-image", "url(assets/images/15.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append('<p>Này là pika với lonton đi lễ trọng gì đấy với ông bà nè :)</p><p>Lôi ra đọc tin nhắn thấy pika tỉnh gớm..</p><p>Lonton chạy xong lonton té ớ.. Cái pika nói lonton ngốc..</p><hr /><p>Lonton: Lonton say nên lonton té ớ</p><p>Pika: Đứng gần pikachuu đẹp chai là phải cẩn thận..  pikachuu đẹp chai đẹp rạng ngời và luôn chói loá ớ.. Say cho chết ớ..</p><hr /><p>Xong lonton bảo trc pika đâu khùng vầy :(</p><p>August 15, 2016</p>').children(':last').hide().fadeIn(800);
});

$("#circle3-1").click(function() {
  var path = document.querySelector("#line3");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length*37/100;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle4").attr('fill','#A21B14');}, 2000);

  $("#mainContent").fadeIn(3000);
  $("#anotherSlider").fadeOut(2000);
  setTimeout(function(){
    $("#anotherSlider").css("background-image", "url(assets/images/16.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append('<p>Lonton vô downtown với chai :D</p><p>Lần đầu tiên lonton vô downtown nè.. phụ pikachuu bán crawfish..</><p>Cũng k biết sao lúc đó lonton lại đc cho đi nữa</p><p>Nhớ về nhà cứ mỗi lần em ăn crawfish lại nhớ pika</p><p>Thương lonton :*</p><p>May 21, 2016</p>').children(':last').hide().fadeIn(800);
});

$("#circle4").click(function() {
  var path = document.querySelector("#line4");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle5").attr('fill','#A21B14');}, 2000);

  $("#anotherSlider").fadeIn(3000);
  $("#mainContent").fadeOut(2000);
  setTimeout(function(){
    $("#mainContent").css("background-image", "url(assets/images/17.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append('<p>Đi ăn trung thu với lonton</p><p></p><p>Pika bỏ lonton qua nhà chú Khí phụ ổng làm tàu ớ..</p><p>Cái lonton nhõng nhẽo pika ớ :)</p><p>Lonton ăn no xong bắt pika bế đi vòng vòng cho bớt no</p><p>Xong anh bảo anh đi làm sao em bớt no đc :D</p><p>Đọc lại mới thấy.. lonton ngốc thật :*</p><p>September 16, 2016</p>').children(':last').hide().fadeIn(800);
});

$("#circle5").click(function() {
  var path = document.querySelector("#line5");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle6").attr('fill','#A21B14');}, 2000);

  $("#mainContent").fadeIn(3000);
  $("#anotherSlider").fadeOut(2000);
  setTimeout(function(){
    $("#anotherSlider").css("background-image", "url(assets/images/18.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append('<p>Có lần pika với lonton cãi nhau</p><p>Đòi chia tay ớ.. Cái pika bí..</><p>Pika k biết làm sao sẽ bth đc..</p><p>Pika lôi.. bánh bông lan trứng muối ra dụ lonton</p><p>Với dụ bánh tráng đủ các loại :D nào ăn hết thì mình ct nhớ ko?</p><p>October 2, 2016</p>').children(':last').hide().fadeIn(800);
});

$("#circle6").click(function() {
  var path = document.querySelector("#line6");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle7").attr('fill','#A21B14');}, 2000);

  $("#anotherSlider").fadeIn(3000);
  $("#mainContent").fadeOut(2000);
  setTimeout(function(){
    $("#mainContent").css("background-image", "url(assets/images/19.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append('<p>Hôm này anh chở 2 đứa đi nhà thờ tập hát</p><p>Xong lonton với anh đi mua nước uống</p><p>Tính ra pika với lonton đi cũng nhiều chớ..</p><p>October 20, 2016</p>').children(':last').hide().fadeIn(800);
});

$("#circle7").click(function() {
  var path = document.querySelector("#line7");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle8").attr('fill','#A21B14');}, 2000);

  $("#mainContent").fadeIn(3000);
  $("#anotherSlider").fadeOut(2000);
  setTimeout(function(){
    $("#anotherSlider").css("background-image", "url(assets/images/20.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append('<p>Lonton sợ đi k rũ đc pika</p><p>Ai dè đâu lonton hỏi, ba cho 2s ;)</><p>Nhớ tấm j lonton ăn dính mặt.. pika chụp lại haha..</p><p>Lonton xí quách!!</p><p>October 8, 2016</p>').children(':last').hide().fadeIn(800);
});

$("#circle8").click(function() {
  var path = document.querySelector("#line8");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle9").attr('fill','#A21B14');}, 2000);

  $("#anotherSlider").fadeIn(3000);
  $("#mainContent").fadeOut(2000);
  setTimeout(function(){
    $("#mainContent").css("background-image", "url(assets/images/21.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append('<p>Lonton đi trại bỏ pika ở nhà..</p>').children(':last').hide().fadeIn(800);
});

$("#circle9").click(function() {
  var path = document.querySelector("#line9");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle10").attr('fill','#A21B14');}, 2000);

  $("#mainContent").fadeIn(3000);
  $("#anotherSlider").fadeOut(2000);
  setTimeout(function(){
    $("#anotherSlider").css("background-image", "url(assets/images/22.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append('<p>Lần đầu tiên anh giận lonton.. block luôn fb của em..</p><p>Anh xin lỗi nhé</><p>Nghĩ sẽ ct luôn rồi..</p><p>Hì ko sao, pika với lonton đều lì..</p><p>October 17, 2016</p>').children(':last').hide().fadeIn(800);
});

$("#circle10").click(function() {
  var path = document.querySelector("#line10");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle11").attr('fill','#A21B14');}, 2000);
  
  $("#anotherSlider").fadeIn(3000);
  $("#mainContent").fadeOut(2000);
  setTimeout(function(){
    $("#mainContent").css("background-image", "url(assets/images/23.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append('<p>Nhà thờ có lễ gì đó..</p><p>Pika cũng đi với lonton</><p>Lần đầu tiên.. anh với em giận nhau khi gặp mặt..</p><p>October 22, 2016</p>').children(':last').hide().fadeIn(800);
});

$("#circle11").click(function() {
  var path = document.querySelector("#line11");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle12").attr('fill','#A21B14');}, 2000);

  $("#mainContent").fadeIn(3000);
  $("#anotherSlider").fadeOut(2000);
  setTimeout(function(){
    $("#anotherSlider").css("background-image", "url(assets/images/24.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append("<p>Tú Anh với pika đi xem lonton hát</p><p>Trường lonton hát hay nhứt :D</><p>I'm proud of you</p><p>November 29, 2016</p>").children(':last').hide().fadeIn(800);
});

$("#circle12").click(function() {
  var path = document.querySelector("#line12");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle13").attr('fill','#A21B14');}, 2000);

  $("#anotherSlider").fadeIn(3000);
  $("#mainContent").fadeOut(2000);
  setTimeout(function(){
    $("#mainContent").css("background-image", "url(assets/images/25.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append('<p>Lonton với anh có đẹp đôi hông ta?</p><p>Pika hơi lùn thôi.. nhưng chắc k sao?</p>').children(':last').hide().fadeIn(800);
});


$("#circle13").click(function() {
  var path = document.querySelector("#line13");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle14").attr('fill','#A21B14');}, 2000);

  $("#mainContent").fadeIn(3000);
  $("#anotherSlider").fadeOut(2000);
  setTimeout(function(){
    $("#anotherSlider").css("background-image", "url(assets/images/26.jpg)");
  }, 2000);

  $("#svgTextContainer").empty().append("<p>Mãi tới giờ mới thấy lòi con cocoa..</p><p>Nó mà thấy đc chắc buồn chết hehe</>").children(':last').hide().fadeIn(800);
});

$("#circle14").click(function() {
  var path = document.querySelector("#line14");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
  path.style.strokeDashoffset = '0';
  setTimeout(function(){$("#circle15").attr('fill','#A21B14');}, 2000);

  $("#anotherSlider").fadeIn(3000);
  $("#mainContent").fadeOut(2000);
  $("#svgTextContainer").empty().append('<p>Này có vẻ là lần đầu tiên pika với em chính thức hẹn hò?</p><p>Lonton xinh.. mà có điều ráng xinh hơn mới hợp với pika..</p><p>MUAHAHAHAHA ... (evil laugh)</p><p>Anh yêu em</p><p>December 17, 2016</p>').children(':last').hide().fadeIn(800);
});

$("#circle15").click(function() {
  $("#circle15").attr('fill','none');
  var path = document.querySelector("#line14");
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = 0;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
  path.style.strokeDashoffset = length;
  
  setTimeout(function(){
    $("#anotherSlider").fadeOut(2000);
    $("#last").fadeIn(1000);
  }, 14000);
  
  setTimeout(function(){
    $("#circle14").attr('fill','none');
    var path = document.querySelector("#line13");
    var length = path.getTotalLength();
    path.style.transition = path.style.WebkitTransition = 'none';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = 0;
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
    path.style.strokeDashoffset = length;
    setTimeout(function(){
      $("#circle13").attr('fill','none');
      var path = document.querySelector("#line12");
      var length = path.getTotalLength();
      path.style.transition = path.style.WebkitTransition = 'none';
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = 0;
      path.getBoundingClientRect();
      path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
      path.style.strokeDashoffset = length;
      setTimeout(function(){
        $("#circle12").attr('fill','none');
        var path = document.querySelector("#line11");
        var length = path.getTotalLength();
        path.style.transition = path.style.WebkitTransition = 'none';
        path.style.strokeDasharray = length + ' ' + length;
        path.style.strokeDashoffset = 0;
        path.getBoundingClientRect();
        path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
        path.style.strokeDashoffset = length;
        setTimeout(function(){
          $("#circle11").attr('fill','none');
          var path = document.querySelector("#line10");
          var length = path.getTotalLength();
          path.style.transition = path.style.WebkitTransition = 'none';
          path.style.strokeDasharray = length + ' ' + length;
          path.style.strokeDashoffset = 0;
          path.getBoundingClientRect();
          path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
          path.style.strokeDashoffset = length;
          setTimeout(function(){
            $("#circle10").attr('fill','none');
            var path = document.querySelector("#line9");
            var length = path.getTotalLength();
            path.style.transition = path.style.WebkitTransition = 'none';
            path.style.strokeDasharray = length + ' ' + length;
            path.style.strokeDashoffset = 0;
            path.getBoundingClientRect();
            path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
            path.style.strokeDashoffset = length;
            setTimeout(function(){
              $("#circle9").attr('fill','none');
              var path = document.querySelector("#line8");
              var length = path.getTotalLength();
              path.style.transition = path.style.WebkitTransition = 'none';
              path.style.strokeDasharray = length + ' ' + length;
              path.style.strokeDashoffset = 0;
              path.getBoundingClientRect();
              path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
              path.style.strokeDashoffset = length;
              setTimeout(function(){
                $("#circle8").attr('fill','none');
                var path = document.querySelector("#line7");
                var length = path.getTotalLength();
                path.style.transition = path.style.WebkitTransition = 'none';
                path.style.strokeDasharray = length + ' ' + length;
                path.style.strokeDashoffset = 0;
                path.getBoundingClientRect();
                path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
                path.style.strokeDashoffset = length;
                setTimeout(function(){
                  $("#circle7").attr('fill','none');
                  var path = document.querySelector("#line6");
                  var length = path.getTotalLength();
                  path.style.transition = path.style.WebkitTransition = 'none';
                  path.style.strokeDasharray = length + ' ' + length;
                  path.style.strokeDashoffset = 0;
                  path.getBoundingClientRect();
                  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
                  path.style.strokeDashoffset = length;
                  setTimeout(function(){
                    $("#circle6").attr('fill','none');
                    var path = document.querySelector("#line5");
                    var length = path.getTotalLength();
                    path.style.transition = path.style.WebkitTransition = 'none';
                    path.style.strokeDasharray = length + ' ' + length;
                    path.style.strokeDashoffset = 0;
                    path.getBoundingClientRect();
                    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
                    path.style.strokeDashoffset = length;
                    setTimeout(function(){
                      $("#circle5").attr('fill','none');
                      var path = document.querySelector("#line4");
                      var length = path.getTotalLength();
                      path.style.transition = path.style.WebkitTransition = 'none';
                      path.style.strokeDasharray = length + ' ' + length;
                      path.style.strokeDashoffset = 0;
                      path.getBoundingClientRect();
                      path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
                      path.style.strokeDashoffset = length;
                      setTimeout(function(){
                        $("#circle4").attr('fill','none');
                        var path = document.querySelector("#line3");
                        var length = path.getTotalLength();
                        path.style.transition = path.style.WebkitTransition = 'none';
                        path.style.strokeDasharray = length + ' ' + length;
                        path.style.strokeDashoffset = 0;
                        path.getBoundingClientRect();
                        path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
                        path.style.strokeDashoffset = length;
                        setTimeout(function(){
                          $("#circle3-1").attr('fill','none');
                        }, 500);
                        setTimeout(function(){
                          $("#circle3").attr('fill','none');
                          var path = document.querySelector("#line2");
                          var length = path.getTotalLength();
                          path.style.transition = path.style.WebkitTransition = 'none';
                          path.style.strokeDasharray = length + ' ' + length;
                          path.style.strokeDashoffset = 0;
                          path.getBoundingClientRect();
                          path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
                          path.style.strokeDashoffset = length;
                          setTimeout(function(){
                            $("#circle2").attr('fill','none');
                            var path = document.querySelector("#line1");
                            var length = path.getTotalLength();
                            path.style.transition = path.style.WebkitTransition = 'none';
                            path.style.strokeDasharray = length + ' ' + length;
                            path.style.strokeDashoffset = 0;
                            path.getBoundingClientRect();
                            path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
                            path.style.strokeDashoffset = length;
                            setTimeout(function(){
                              $("#circle1-1").attr('fill','none');
                            }, 500);
                            setTimeout(function(){
                              $("#circle1").attr('fill','none');
                            }, 980);
                          }, 980);
                        }, 980);
                      }, 980);
                    }, 980);
                  }, 980);
                }, 980);
              }, 980);
            }, 980);
          }, 980);
        }, 980);
      }, 980);
    }, 980);
  }, 980);
});