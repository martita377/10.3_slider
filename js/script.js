

$(function(){
	var carouselList = $("#carousel ul");
	var Indx = 0;
	var repeatF=setInterval(changeSlide, 2000);
	carouselList.css({'marginLeft':-500});

	function changeSlide() {
		carouselList.animate({'marginLeft':-500}, 500, moveFirstSlide());
	}

	//Index of photo/bubble
	function countPlusIndx() {
		if(Indx<4) {
			Indx++;
		} else {
			Indx+=-4;
		}
		setBubble();
	}
	function countMinusIndx() {
		if(Indx>0) {
			Indx--;
		} else {
			Indx+=4;
		}
		setBubble();
	}
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({'marginLeft':0});
		countPlusIndx(Indx);
	}
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
	    firstItem.before(lastItem);
	    carouselList.css({'marginLeft':-500});
	    countMinusIndx(Indx);
	}

	function moveBackword() {
	  	carouselList.animate({'marginLeft':0}, 500, moveLastSlide());
	}

	function moveFoward() {
		carouselList.animate({'marginLeft':-500}, 500, moveFirstSlide());
	}

	// Navigation by left arrow 
	$('.left-arrow').click(function(){
		carouselList.css({'marginLeft':0});
		clearInterval(repeatF);
		moveBackword();
		repeatF=setInterval(moveFoward, 2000);
 	});

	// Navigation by right arrow 
 	$('.right-arrow').click(function(){
 		clearInterval(repeatF);
 		moveFoward();
 		repeatF=setInterval(moveFoward, 2000);
 	});
	//Move bubble
	function setBubble() {
		$('.bubble').css('background', 'rgba(0,0,0,0)');
		$('.bubble').eq(Indx).css('background', '#ccc');
	}

	$('.bubble').click(function() {
		$('.bubble').css('background', 'rgba(0,0,0,0)');
		$(this).css('background', '#ccc');
		clearInterval(repeatF);
 		repeatF=setInterval(moveFoward, 2000);
 		var IndxOfBubble=$('.bubble').index(this);
 		var result=-Indx + IndxOfBubble;
 			if (result>0) {
	 		console.log(result);
		 		for(var i=1;i<=result;i++) {
		 			moveFoward();
		 		}
	 		} else if (result<0) {
	 			result= (-1*result);
	 			for(var i=1;i<=result;i++) {
		 			moveBackword();
		 		}
	 		}
	});
	//Stop if mouse over photo
	$(carouselList).mouseover(function() {
         clearInterval(repeatF);
    });
    //Start if mouse out
    $(carouselList).mouseout(function() {
    	
    	repeatF=setInterval(moveFoward, 2000);
    });


});
