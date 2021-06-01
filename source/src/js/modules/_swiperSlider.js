export const swiperSlider = () => {
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

  const bgSectionSlider = new Swiper(".swiper-container", {
    watchOverflow: true, // スライドが1枚しかなかったらスライダー機能をなくす
    speed: 800, // スライド切替スピード
    spaceBetween: 0, // スライド間のmarginは0px
    slidesPerView: 1, // 1スライド表示
    autoplay: {
      delay: 4000, // 自動スライド・1スライド滞在時間
      disableOnInteraction: false, // ユーザーがスライド操作した後もautoplay続行
      waitForTransition: true, // スライドの移動を待ったあとに自動再生する
    },
    loop: true, // ループ(クローンスライドが作られる)
    observer: true, // 初期状態でスライダーが非表示でも動くようにする
    observeParents: true, // 初期状態でスライダーが非表示でも動くようにする
    effect: "fade", // エフェクト
    fadeEffect: {
      crossFade: true,
    },
    breakpoints: {
      1000: {},
      767: {},
    },
  });
};
