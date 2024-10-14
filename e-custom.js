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
	$(function () {
		var isMenuAlreadyOpen = false;
		$('.hh-header .elementor-menu-toggle').on('click', function () {
			$('body').css('overflow', isMenuAlreadyOpen ? 'auto' : 'hidden');
			isMenuAlreadyOpen = !isMenuAlreadyOpen;
		});

		$('.select-selected2').on('click', function (e) {
			e.stopPropagation();
			$('.select-items').toggleClass('select-hide');
		});

		$('#customToggle').on('change', function () {
			var inputVal = $('#customToggle').val();

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
			$(e.currentTarget).toggleClass('active')
			$(".toggle-class").fadeToggle();
		});


		function initOwl() {
			$('.place-back-counter .counter-grid-item').each(function () {
				$(this).appendTo('.owl-carousel').wrapAll("<div class='item' />");
			});
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
			autoHeight: true,
			nav: true,
			URLhashListener:true,
			startPosition: 'URLHash',
			touchDrag: false,
			mouseDrag: false,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
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

		owlCard.owlCarousel(owlOptions);

		$('.owl-nav').wrap(`<div class='controls' />`)
		$('.liked-popup').each(function () {
			$(this).click(function(e){
				$(e.currentTarget).toggleClass('active')
			});
		});
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