// var a;
// a = 'Hello, World!';
// alert( a );

// alert('Hello, World!');

var btn = document.getElementById('btn');
btn.onclick = function () {
	var text = document.querySelector('p.intro');
	text.classList.add('red');
	var img = document.querySelector('.image');
	img.style.display = 'none';
}

$(window).scroll(function() {
	$('.wait-title').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("fadeInDownBig");
		}
	});
});

$(window).scroll(function() {
	$('.waiting1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("fadeInLeft");
		}
	});
});

$(window).scroll(function() {
	$('.waiting2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("fadeInUp");
		}
	});
});

$(window).scroll(function() {
	$('.waiting3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("fadeInRight");
		}
	});
});

$(window).scroll(function() {
	$('.tickets-anim').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("jackInTheBox");
		}
	});
});

