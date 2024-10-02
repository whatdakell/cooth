console.log('testttt')
jQuery(function ($) {
	$.fn.isInViewport = function () {
		var elementTop = $(this).offset().top + 150;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(window).on('resize scroll', function () {
		$('.hh-in-view').each(function () {
			if ($(this).isInViewport()) {
				$(this).addClass('in-viewport');
			}
		});
	});

	$(function () {
		$('body').addClass('animate-ready');
		setTimeout(function () {
			$('body').addClass('animate-in');
		}, 500);
	});
});


jQuery(function ($) {
	console.log('hello');
	$(function () {
		var isMenuAlreadyOpen = false;
		$('.hh-header .elementor-menu-toggle').on('click', function () {
			console.log('click');
			// let isMenuAlreadyOpen = false;
			console.log(isMenuAlreadyOpen);
			// e.stopPropagation();
			$('body').css('overflow', isMenuAlreadyOpen ? 'auto' : 'hidden');
			isMenuAlreadyOpen = !isMenuAlreadyOpen;
		});

		$('.select-selected2').on('click', function (e) {
			console.log('click');
			e.stopPropagation();
			// closeAllSelect(this);
			console.log(this);
			$('.select-items').toggleClass('select-hide');
			// this.classList.toggle('select-arrow-active');
		});

		// $('.select-items div').each((element) => {
		// 	console.log(element);
		// });
		$('#customToggle').on('change', function () {
			var inputVal = $('#customToggle').val();

			console.log('change', $('.custom-select select').val());
			var cont = document.getElementById('faq');
			var cont1 = document.getElementById('faq2');
			if (inputVal == 1) {
				cont1.classList.remove('active');
				cont.classList.add('active');
			} else {
				cont.classList.remove('active');
				cont1.classList.add('active');
			}
		});
	});
});


jQuery(function ($) {
	$(function () {
		//OWL

		$(".toggle-click").click(function(e){
			// console.log(e.currentTarget)
			$(e.currentTarget).toggleClass('active')
			// console.log(e);
			$(".toggle-class").fadeToggle();
		});

		console.log('init owl');

		function initOwl() {
			$('.place-back-counter .counter-grid-item').each(function () {
				$(this).appendTo('.owl-carousel').wrapAll("<div class='item' />");
			});
		}

		// function initCardOwl() {
		// 	$('.copy-card-caro-init .caro').each(function () {
		// 		$(this)
		// 			.find('.caro-next')
		// 			.on('click', function () {
		// 				next();
		// 			});
		// 		$(this).appendTo('.copy-card-owl-init').wrapAll("<div class='item' />");
		// 		// console.log($('.caro-next'));
		// 	});
		// }

		function initCardOwl() {
			$('.owl-card').each(function () {
				// console.log(this, $(this).attr('id'));
				// $(this)
				// 	.find('.caro-next')
				// 	.on('click', function () {
				// 		next();
				// 	});
				$(this).appendTo('.owl-carousel').wrapAll(`<div class='item' data-hash='${$(this).attr('id')}' />`);
				$(this).removeAttr('id');
				// console.log($('.caro-next'));
			});
		}

		// var owl = $('.owl-carousel');
		initCardOwl();

		var owlCard = $('.owl-carousel');
		

		owlOptions = {
			items: 1,
			loop: true,
			center: true,
			autoplay: false,
			dots:false,
			nav: true,
			URLhashListener:true,
			startPosition: 'URLHash',
			touchDrag: false,
			mouseDrag: false,
			// animateOut: 'animate__fadeOut',
			// // animateOut: 'animate__fadeInUp',
			// animateIn: 'animate__fadeInUp',
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			// items:1,
		};

		// hero-mode-toggle



		const toggleInput = $('.hero-mode-toggle input');
		console.log(toggleInput)
		$(toggleInput).on( "change", function() {
			if (this.checked) {
				if(window.location.href != "/hero"){
					// return false;
								window.location.href = "/hero";
				}
				else{
					return false;
					// window.location.href = "/hero";
				}
				console.log("Checkbox is checked..");
			} else {
				window.location.href = "/";
				console.log("Checkbox is not checked..");
			}
		} );



	// 	$( document ).ready(function() {
	// 		// console.log( "ready!" );
	// 		// console.log(location.href.includes('/hero/'));
	// 		// if(window.location.href = "/hero"){
	// 			if(location.href.includes('/hero/')){
	// 				$(toggleInput).attr('checked','checked')
	// 			}
	// 			console.log('its hero');
		
	// 	// }
	// });



	if(location.href.includes('/hero/')){
		$(toggleInput).attr('checked','checked')
	}

		


		// owlCardOptions = {
		// 	items: 1,
		// 	loop: true,
		// 	margin: 10,
		// 	dots: true,
		// 	autoHeight: true,
		// 	smartSpeed: 500,
		// };
		// animateOut: 'animate__fadeOutLeft',
		// animateIn: 'animate__fadeInRight',
		owlCard.owlCarousel(owlOptions);

		$('.owl-nav').wrap(`<div class='controls' />`)
		console.log($('.liked-popup'))
		// $('.liked-popup').appendTo('.controls')
		$('.liked-popup').each(function () {
			console.log(this)
			$(this).click(function(e){
				// console.log(e.currentTarget)
				$(e.currentTarget).toggleClass('active')
			});

			
		});

		// owlCard.on('resized.owl.carousel', function (event) {
		// 	setOwlHeight();
		// });

		// owlCard.on('translated.owl.carousel', function (event) {
		// 	//....
		// 	setOwlHeight();
		// });

		// if ($(window).width() < 768) {
		// 	initOwl();
		// 	var owlActive = owl.owlCarousel(owlOptions);
		// } else {
		// 	owl.addClass('off');
		// }

		// $(window).resize(function () {
		// 	if ($(window).width() < 768) {
		// 		if ($('.owl-carousel').hasClass('off')) {
		// 			initOwl();
		// 			var owlActive = owl.owlCarousel(owlOptions);
		// 			owl.removeClass('off');
		// 		}
		// 	} else {
		// 		if (!$('.owl-carousel').hasClass('off')) {
		// 			owl.addClass('off').trigger('destroy.owl.carousel');
		// 			owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
		// 		}
		// 	}
		// });

		// function callback(e) {
		// 	items = e.item.count;
		// 	item = e.item.index;
		// }

		// function next() {
		// 	owlCard.trigger('next.owl.carousel');
		// }

		// function prev() {
		// 	owl.trigger('prev.owl');
		// }
	});
});

(function($) {
	$ && $(function() {
			$('.elementor-toggle-item:first-child')
					.children('.elementor-tab-title')
							.addClass('elementor-active')
							.attr({
									'aria-expanded': 'true',
									tabindex: '0',
									'aria-selected': 'true'
							})
							.end()
					.children('.elementor-tab-content')
							.addClass('elementor-active')
							.css('display', 'block');
	});
})(window.jQuery);