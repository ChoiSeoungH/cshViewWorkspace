$(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) {
    $('header , .btn-up').addClass('active');
  } else {
    $('header , .btn-up').removeClass('active');
  }
});
$('.btn-up').on("click", function () {
  $.scrollTo(0, 300);
});

$('.myslider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.myslider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 200,
  fade: true,
  cssEase: 'linear',
  // speed: 200
});

$('.sliders').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.trigger').click(
  function () {
    // toggleClass 안에다가 . 안붙임 주의 
    $(this).toggleClass('active')
    $('.gnb , .sns').toggleClass('on')
  }
);