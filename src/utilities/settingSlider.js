export const settingSlider = {
  className: "center",
  arrow: true,
  centerMode: true,
  fade: true,
  centerPadding: "0",
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 1,
        infinite: true,
        rows: 1,
        slidesPerRow: 1,
        slidesToShow: 1,
      }
    },
  ]
}