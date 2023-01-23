jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	
	
	jQuery(".fancybox").fancybox();
	
	let carousel = jQuery('#slider-1');
		
	carousel.owlCarousel({
		items: 1,
		center: true,
		animateIn: "animate__bounceInRight",
		animateOut: "animate__bounceOutLeft",
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 5000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: [''],
		dots: false,
		dotsEach: false,
		mouseDrag: true,
		margin: 56,
		stagePadding: 0,
		autoWidth: false,
		merge:false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: false,
				nav: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000,
				margin: 10,

			},
			479:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000,
				margin: 10

			},
			767:{
				items: 2,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000,
				margin: 10
			},
			991:{
				items: 2,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			1099:{
				items: 3,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 2000
			}
		}
	});
	


});






// CODE

