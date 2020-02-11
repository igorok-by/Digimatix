// Main js file

$( ()=> {

  // Toggle list
  let hiddenInfo = $('.schedule__item:nth-child(n+4)'),
      btnMoreInfo = $('#btnShow'),
      title = btnMoreInfo.find('.link__text'),
      icon = btnMoreInfo.find('.link__icon-arr'),
      classHidden = 'schedule__item--hidden';

  hiddenInfo.toggleClass(classHidden);

  btnMoreInfo.click( ()=> {
    hiddenInfo.toggleClass(classHidden);
    icon.toggleClass('link__icon-arr--reverse');

    hiddenInfo.hasClass(classHidden) ? title.html('Загрузить больше') : title.html('Свернуть');
  });


  // Initialize slider
  $('.slider').slick({
    dots: true,
    dotsClass: 'slider__dots',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: 'unslick'
      }
    ]
  });

  // Initialize browserUpdater
  const browserUpdater = new ya.browserUpdater.init({
    theme: 'green',
    lang: 'ru',
    exclusive: false,
    browsers: {
      chromium: 80,
      safari: 13,
      fx: 71,
      ie: 10,
      chrome: 79
    },
    remember: false
  });
});