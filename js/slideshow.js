$('.slideshow').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
// $('.slideshow').slick({
//     autoplay:true,
//     autoplaySpeed:5000,
//     dots:true,
//     centerMode: true,
//     centerPadding: '100px',
//   });
  	
// $('.slider').slick();