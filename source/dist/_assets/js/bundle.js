/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "smoothScroll": function() { return /* binding */ smoothScroll; }
/* harmony export */ });
const smoothScroll = () => {
  $('a[href^="#"]').on("click", e => {
    let speed = 600;
    let href = $(e.currentTarget).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body, html").delay(200).animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
};

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swiperSlider": function() { return /* binding */ swiperSlider; }
/* harmony export */ });
const swiperSlider = () => {
  // const colorSecTopAreaSlider = new Swiper(".js-colorSecTopAreaSlider.swiper-container", {
  //   watchOverflow: true, // スライドが1枚しかなかったらスライダー機能をなくす
  //   speed: 800, // スライド切替スピード
  //   spaceBetween: 0, // スライド間のmarginは0px
  //   slidesPerView: 1, // 1スライド表示
  //   autoplay: true,
  //   observer: true, // 初期状態でスライダーが非表示でも動くようにする
  //   observeParents: true, // 初期状態でスライダーが非表示でも動くようにする
  //   effect: "fade", // エフェクト
  //   fadeEffect: {
  //     crossFade: true,
  //   },
  //   breakpoints: {
  //     1000: {},
  //     767: {},
  //   },
  // });
  // const colorSecBottomAreaSlider = new Swiper(".js-colorSecBottomAreaSlider.swiper-container", {
  //   watchOverflow: true, // スライドが1枚しかなかったらスライダー機能をなくす
  //   speed: 800, // スライド切替スピード
  //   spaceBetween: 0, // スライド間のmarginは0px
  //   slidesPerView: 1, // 1スライド表示
  //   observer: true, // 初期状態でスライダーが非表示でも動くようにする
  //   observeParents: true, // 初期状態でスライダーが非表示でも動くようにする
  //   loop: true, // ループ(クローンスライドが作られる)
  //   effect: "fade", // エフェクト
  //   fadeEffect: {
  //     crossFade: true,
  //   },
  //   pagination: {
  //     el: ".colorSec .swiper-pagination", // ページャー
  //     clickable: true, // ページャークリッカブル
  //   },
  //   navigation: {
  //     prevEl: ".colorSec .swiper-button-prev", // 前へボタン
  //     nextEl: ".colorSec .swiper-button-next", // 次へボタン
  //   },         `
  //   breakpoints: {
  //     1000: {},
  //     767: {},
  //   },
  // });
  const bgSectionSlider = new Swiper(".swbiper-container", {
    watchOverflow: true,
    // スライドが1枚しかなかったらスライダー機能をなくす
    speed: 800,
    // スライド切替スピード
    spaceBetween: 0,
    // スライド間のmarginは0px
    slidesPerView: 1,
    // 1スライド表示
    autoplay: {
      delay: 4000,
      // 自動スライド・1スライド滞在時間
      disableOnInteraction: false,
      // ユーザーがスライド操作した後もautoplay続行
      waitForTransition: true // スライドの移動を待ったあとに自動再生する

    },
    loop: true,
    // ループ(クローンスライドが作られる)
    observer: true,
    // 初期状態でスライダーが非表示でも動くようにする
    observeParents: true,
    // 初期状態でスライダーが非表示でも動くようにする
    effect: "fade",
    // エフェクト
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      1000: {},
      767: {}
    }
  });
};

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wowEffects": function() { return /* binding */ wowEffects; }
/* harmony export */ });
const wowEffects = () => {
  const ua = window.navigator.userAgent;

  const wowInit = () => {
    let wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 100,
      mobile: true,
      live: true,
      callback: function (box) {},
      scrollContainer: null
    });
    wow.init();
  }; // IE Browser


  if (ua.indexOf('Trident') != -1 || ua.indexOf('MSIE') != -1) {
    $(window).on('load', e => {
      wowInit();
    });
  } else {
    wowInit();
  }
};

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollFixedBnrVisible": function() { return /* binding */ scrollFixedBnrVisible; }
/* harmony export */ });
const scrollFixedBnrVisible = () => {
  const topBtn = $(".js-bottomBnr");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.addClass("is_fixed");
    } else {
      topBtn.removeClass("is_fixed");
    }
  });
};

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parallax": function() { return /* binding */ parallax; }
/* harmony export */ });
const parallax = () => {
  var image = document.getElementsByClassName("parallax");
  var imageProduct = document.getElementsByClassName("parallax_png");
  new simpleParallax(image, {
    orientation: "down",
    scale: 1.2,
    transition: "cubic-bezier(0.16, 1, 0.3, 1)"
  });
  new simpleParallax(imageProduct, {
    orientation: "down",
    scale: 1.2,
    overflow: true,
    transition: "cubic-bezier(0.16, 1, 0.3, 1)"
  });
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_swiperSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_wowEffects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_scrollFixedBnrVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _modules_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
var $window = $(window);





$(function () {
  (0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)();
  (0,_modules_wowEffects__WEBPACK_IMPORTED_MODULE_2__.wowEffects)();
  (0,_modules_swiperSlider__WEBPACK_IMPORTED_MODULE_1__.swiperSlider)();
  (0,_modules_parallax__WEBPACK_IMPORTED_MODULE_4__.parallax)();
}); // load scroll

$(window).on('load scroll', e => {
  (0,_modules_scrollFixedBnrVisible__WEBPACK_IMPORTED_MODULE_3__.scrollFixedBnrVisible)();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map