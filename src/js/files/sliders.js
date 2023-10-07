/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import {  Pagination, Autoplay, Thumbs, Mousewheel  } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {

	if (document.querySelector('.hero__slider')) {
		new Swiper('.hero__slider', {
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			allowTouchMove: false,

			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			pagination: {
				el: '.hero__slider .hero__pagination',
				clickable: true,
			},

		});
	}

	///////////////////


	if (document.querySelector('.product-trumb-slider')) {
		const productTrumbSlider = new Swiper('.product-trumb-slider', {
			modules: [Mousewheel],
			observer: true,
			observeParents: true,
			slidesPerView: 3.3,
			spaceBetween: 20,
			speed: 300,
			mousewheel: true,
			direction: 'vertical'
		});

		new Swiper('.product-slider', {
			modules: [Thumbs, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,

			speed: 800,

			pagination: {
				el: '.product__pagination',
				clickable: true,
			},

			thumbs: {
				swiper: productTrumbSlider,
			},
		});
	}

	//////

	if (document.querySelector('.slider-partners')) {
		new Swiper('.slider-partners', {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 20,
			speed: 800,

			pagination: {
				el: '.slider-partners .slider-partners__pagination',
				clickable: true,
			},

			breakpoints: {
				375: {
					slidesPerView: 1.2,
					spaceBetween: 20,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});