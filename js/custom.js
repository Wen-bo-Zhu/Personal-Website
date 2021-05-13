$(document).ready(function(){
	setInterval(function() {
  $("div").velocity("callout.shake");
}, 5000);

	$("div").velocity("fadeIn", {
    duration: 3000
	});

	var move = true;
	$("div").mouseenter(function(){
   		$(this).addClass('back');
  	});
  $("div").mouseleave(function(){
   		$(this).removeClass('back');
  	});

  		$("#firow").click(function(){
  			if (move) {
  			$('body').css('background-image','url(images/1.jpg)');
  			move = false;}
  			else{
  				$('body').css('background-image','url(image/2.jpg)');
  				move = true;
  			}
  	});
});
