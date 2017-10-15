

$(function(){
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 4000);

	function changeSlide() {
		carouselList.animate({'marginLeft':-500}, 500, moveFirstSlide);		
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	function moveLastSlide () {
	    var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
	    firstItem.before(lastItem);
	    carouselList.css({marginLeft:-500});
	}

	// Navigation by left arrow 
	$('.left-arrow').click(function(){
    	carouselList.animate({marginLeft:0}, 500, moveLastSlide());
 	});

	// Navigation by right arrow 
 	$('.right-arrow').click(function(){
    	carouselList.animate({marginLeft:0}, 500, moveFirstSlide());
 	});
		
});
