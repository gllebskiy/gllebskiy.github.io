$(function () {
	//Menu opener
	$('.menu-open').click(function () {
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.menu').toggleClass('menu-opened');
	});

	$('.footer-main__btn').click(function () {
		$('.protect li').after('<span>Hello!</span');
	})
	
	// Ya API карты Яндекс
	ymaps.ready(init);    
        function init(){ 
            var myMap = new ymaps.Map('map', {
                center: [55.76, 37.64],
                zoom: 7
            }); 
    }

    	
    
});
