
jQuery(function ($) {
	// if($('.elementor-nav-menu--burger .elementor-active')){
	// 	console.log('hello')
	// 	.on( "click", function() {
	// 		$( "p" ).toggle( flip++ % 2 === 0 );
	// 	});
	// }

	$('.elementor-menu-toggle').on( "click", function() {
		$('html').toggleClass('menu-open');
		// console.log('s')
		// $('body:after').css({"visibility": "visible"});
	// 	$('html, body').css({
	// 		overflow: 'hidden',
	// 		height: '100%',
	// });

	});
	$.fn.isInViewport = function () {
		var elementTop = $(this).offset().top + 150;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(window).on('resize scroll', function () {
		$('.in-view').each(function () {
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


// jQuery(function ($) {
// 	// $(function () {
// 	// 	var isMenuAlreadyOpen = false;
// 	// 	$('.hh-header .elementor-menu-toggle').on('click', function () {
// 	// 		$('body').css('overflow', isMenuAlreadyOpen ? 'auto' : 'hidden');
// 	// 		isMenuAlreadyOpen = !isMenuAlreadyOpen;
// 	// 	});

// 	// 	$('.select-selected2').on('click', function (e) {
// 	// 		e.stopPropagation();
// 	// 		$('.select-items').toggleClass('select-hide');
// 	// 	});

// 		// $('#customToggle').on('change', function () {
// 		// 	var inputVal = $('#customToggle').val();

// 		// 	var cont = document.getElementById('faq');
// 		// 	var cont1 = document.getElementById('faq2');
// 		// 	if (inputVal == 1) {
// 		// 		cont1.classList.remove('active');
// 		// 		cont.classList.add('active');
// 		// 	} else {
// 		// 		cont.classList.remove('active');
// 		// 		cont1.classList.add('active');
// 		// 	}
// 		// });
// 	});
// });


jQuery(function ($) {
	$(function () {
		//OWL


		// function initOwl() {
		// 	$('.place-back-counter .counter-grid-item').each(function () {
		// 		$(this).appendTo('.owl-carousel').wrapAll("<div class='item' />");
		// 	});
		// }
		function setOwlStageHeight(event) {
			var maxHeight = 0;
			$('.owl-item.active').each(function () { // LOOP THROUGH ACTIVE ITEMS
				// console.log(this,'currenta');
					var thisHeight = parseInt( $(this).height() );
					console.log(thisHeight);
					maxHeight=(maxHeight>=thisHeight?maxHeight:thisHeight);
					// console.log(maxHeight);
			});
			$('.owl-carousel').css('height', maxHeight );
			$('.owl-stage-outer').css('height', maxHeight ); // CORRECT DRAG-AREA SO BUTTONS ARE CLICKABLE
	}

		function initCardOwl() {
			$('.owl-card').each(function () {
				$(this).appendTo('.owl-carousel').wrapAll(`<div class='item' data-hash='${$(this).attr('id')}' />`);
				$(this).removeAttr('id');
			});
		}

		initCardOwl();

		var owlCard = $('.owl-carousel');

		owlOptions = {
			items: 1,
			loop: true,
			center: true,
			autoplay: false,
			dots:false,
			autoHeight: false,
			nav: true,
			URLhashListener:true,
			startPosition: 'URLHash',
			touchDrag: false,
			mouseDrag: false,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			onInitialized: setOwlStageHeight,
			onResized: setOwlStageHeight,
			onTranslated: setOwlStageHeight,
			responsive:
			{
							0: {
									items:1,
							autoHeight: false
							},
							768: {
											items:1,
							autoHeight: false
							}
			}
		};

		const toggleInput = $('.hero-mode-toggle input');
		$(toggleInput).on( "change", function() {
			if (this.checked) {
				if(window.location.href != "/hero"){
					window.location.href = "/hero";
				}
				else{
					return false;
				}
			} else {
				window.location.href = "/";
			}
		} );


	if(location.href.includes('/hero/')){
		$(toggleInput).attr('checked','checked')
	}

	// function setOwlHeight() {

	// }


		// owlCard.on('resized.owl.carousel', function (event) {
		// 	// setOwlHeight();

		// 	var target = event.currentTarget;
		// 	console.log('resize',$(target).find(".owl-item.active"));
		// 	console.log(event);
		// 	})


			owlCard.on('changed.owl.carousel', function (event) {
				setOwlStageHeight(event)
				// var target = event.currentTarget;
				// console.log(event,event.relatedTarget,'relate');
				// console.log('changed', $(target).find(".owl-item.active"));
				// var currentItem = event.item.index; // Index of the current item
				// // Do something with the currentItem
				// console.log(currentItem);
				// console.log("current: ",event.relatedTarget.current())
			//....
			// setOwlHeight();
			})

		// 	function setOwlStageHeight(event) {
		// 		var maxHeight = 0;
		// 		$('.owl-item.active').each(function () { // LOOP THROUGH ACTIVE ITEMS
		// 			console.log(this,current);
		// 				var thisHeight = parseInt( $(this).height() );
		// 				console.log(thisHeight);
		// 				maxHeight=(maxHeight>=thisHeight?maxHeight:thisHeight);
		// 				console.log(maxHeight);
		// 		});
		// 		$('.owl-carousel').css('height', maxHeight );
		// 		$('.owl-stage-outer').css('height', maxHeight ); // CORRECT DRAG-AREA SO BUTTONS ARE CLICKABLE
		// }
		// setOwlStageHeight();
			owlCard.owlCarousel(owlOptions);
			owlCard.on('changed.owl.carousel', function (event) {
				setOwlStageHeight(event);
				var target = event.currentTarget;
				console.log(event,event.relatedTarget,'relate');
				console.log('changed', $(target).find(".owl-item.active"));
				// var currentItem = event.item.index; // Index of the current item
				// // Do something with the currentItem
				// console.log(currentItem);
				// console.log("current: ",event.relatedTarget.current())
			//....
			// setOwlHeight();
			})
		$('.owl-nav').wrap(`<div class='controls' />`)
		$('.liked-popup').each(function () {
			$(this).click(function(e){
				$(e.currentTarget).toggleClass('active')
			});
		});

		$(".toggle-click").click(function(e){
			$(e.currentTarget).toggleClass('active');
			$(".toggle-class").fadeToggle();

			setTimeout(function () {
				setOwlStageHeight(e);
			}, 500);
		});

	});
});

// (function($) {
// 	$ && $(function() {
// 			$('.elementor-toggle-item:first-child')
// 					.children('.elementor-tab-title')
// 							.addClass('elementor-active')
// 							.attr({
// 									'aria-expanded': 'true',
// 									tabindex: '0',
// 									'aria-selected': 'true'
// 							})
// 							.end()
// 					.children('.elementor-tab-content')
// 							.addClass('elementor-active')
// 							.css('display', 'block');
// 	});
// })(window.jQuery);