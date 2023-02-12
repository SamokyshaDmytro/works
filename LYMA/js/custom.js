jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	
	let carousel = jQuery('#slider_main');
		
	carousel.owlCarousel({
		items: 1,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		autoplaySpeed: 2500,
		loop: true,
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: true,
		dotsData: true,
		pagination : false,
		mouseDrag: true,
		margin: 0,
		stagePadding: 0,
		autoWidth: false,
		animateIn: 'animate__fadeIn',
		animateOut: 'animate__fadeOut',
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				mouseDrag: true,
				autoplay: false,

			},
			320:{
				items: 1,
				mouseDrag: true,
				autoplay: false,

			},
			640:{
				items: 1,
				mouseDrag: true,
				autoplay: true,

			},
			1000:{
				items: 3,
				mouseDrag: true,
				autoplay: true,

			},
			1600:{
				items: 3,

				mouseDrag: true,
				autoplay: true,

			}
		}
	});





	
	
});





