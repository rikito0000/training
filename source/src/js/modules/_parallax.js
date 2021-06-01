
export const parallax = () => {
  var image = document.getElementsByClassName("parallax");
  var imageProduct = document.getElementsByClassName("parallax_png")
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
