$(function () {


	// Плавающая шапка
	$(window).scroll(function() {
        if ($(this).scrollTop() > 800){  
            $('.nav-offer').addClass("sticky");
        }
        else{
            $('.nav-offer').removeClass("sticky");
        }
    });


	// // Всплывающее окно
 //    $('#exampleModal').arcticmodal();

    // Animate
    $(window).scroll(function() {
	$('.heading-h2-anim').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("fadeInLeft");
		}
	});
	});

	$(window).scroll(function() {
	$('.works-list__item1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("fadeInLeft");
		}
	});
	});

	$(window).scroll(function() {
	$('.works-list__item2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("fadeInDown");
		}
	});
	});

	$(window).scroll(function() {
	$('.works-list__item3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("fadeInRight");
		}
	});
	});


});


// 	$(window).scroll(function() {
// 	$('.waiting3').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 		if (imagePos < topOfWindow+650) {
// 			$(this).addClass("fadeInRight");
// 		}
// 	});
// });
   


