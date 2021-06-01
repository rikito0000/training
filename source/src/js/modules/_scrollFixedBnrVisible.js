export const scrollFixedBnrVisible = () => {
  const topBtn = $(".js-bottomBnr");

  $(window).scroll (function () {
    if ($(this).scrollTop() > 100 ) {
      topBtn.addClass("is_fixed");
    } else {
      topBtn.removeClass("is_fixed");
    }
  });
};