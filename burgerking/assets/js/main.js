const hamberger = document.querySelector('.hamberger');
const mMenu = document.querySelector('.m-menu');

hamberger.addEventListener('click', () => {
  mMenu.classList.toggle('active');
});

const menuBtn = document.querySelectorAll('.m-menu-top > .m-menu-btn');

menuBtn.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault(); //링크 이동 막기
    
    const submenu = this.closest('.m-menu-item').querySelector('.m-submenu');

    if(submenu.style.maxHeight){
      submenu.style.maxHeight = null;
    }else{
      submenu.style.maxHeight = submenu.scrollHeight + "px";
    }
  });
});

  const mainSwiper = new Swiper('.main-swiper', {
    slidesPerView: 1,
    speed: 400,
    loop: true,
    pagination: {
      el: '.main-swiper .swiper-pagination',
      type: 'bullets',
      clickable:true,
    },
    autoplay: {
      delay: 3000,
    },
  });

  
   const adSwiper = new Swiper('.ad-swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.ad-swiper .swiper-pagination',
      type: 'bullets',
      clickable:true,
    },
    allowTouchMove: false
  });

  const menuSwiper = new Swiper('.menu-swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.menu-swiper .swiper-pagination',
      type: 'bullets',
      clickable:true,
    },
    autoplay: {
      delay: 3000,
    },
  });

