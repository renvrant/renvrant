(function ($, root, undefined) {
	'use strict';
$(function () {
	
	if (typeof console === 'undefined') {
	    window.console = {
	        log: function () {}
	    };
	}
	console.log('Curious, eh? My email is renee@renvrant.com, just to remind you.');

	function toggleActive(section) {
		if($(section).offset().top < $(window).scrollTop() + $(window).outerHeight()) {
			var $link = $('a[href='+section+']');
			$('nav a').removeClass('active');
			$($link).addClass('active'); 		
		} 
	}

	$(window).scroll(function() {
		//Add/remove stickyness
	    if ($(window).scrollTop() > 100) {
	        $('.main-nav').addClass('sticky');
	    } else {
	        $('.main-nav').removeClass('sticky');
	    }
	    toggleActive('#about');
	    toggleActive('#work');
	    toggleActive('#contact');
	});

	$('.mobile-toggle').click(function() {
	    if ($('.main-nav').hasClass('open-nav')) {
	        $('.main-nav').removeClass('open-nav');
	    } else {
	        $('.main-nav').addClass('open-nav');
	    }
	});

	$('.main-nav li a').click(function() {
	    if ($('.main-nav').hasClass('open-nav')) {
	        $('.navigation').removeClass('open-nav');
	        $('.main-nav').removeClass('open-nav');
	    }
	});

	// Navigation Scroll - ljepo radi materem
	$('nav a').click(function(event) {
	    var id = $(this).attr('href');
	    var offset = 70;
	    var target = $(id).offset().top - offset;
	    $('html, body').animate({
	        scrollTop: target
	    }, 500);
	    event.preventDefault();
	});

	$('.hero').mousemove(function(e){
	    var amountMovedX = (e.pageX * -1 / 25);
	    var amountMovedY = (e.pageY * -1 / 25);
	    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
	});
});
	
})(jQuery, this);