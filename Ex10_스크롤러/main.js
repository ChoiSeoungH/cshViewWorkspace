 // 스크롱을 내리면(윈도우 브라우저)
 $(window).scroll(
  function () {
    if ($(this).scrollTop() > 50) {
      $('header, .btn-top').addClass('active');
    } else {
      $('header , .btn-top').removeClass('active');
    }
  }
);