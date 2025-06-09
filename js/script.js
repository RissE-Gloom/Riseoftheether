var swiper1 = new Swiper(".swiper-1", {
	pagination: {
	  el: ".swiper-pagination",
	  dynamicBullets: true,
	},
  });

  var swiper2 = new Swiper(".swiper-2", {
	direction: "vertical",
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
  });

  var swiper3 = new Swiper(".swiper-3", {
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
  });

 //  var swiper6 = new Swiper(".swiper-6", {
	// slidesPerView: 1,
	// spaceBetween: 30,
	// autoplay: {
 //        delay: 2500,
 //        disableOnInteraction: false,
 //      },
	// pagination: {
	//   el: ".swiper-pagination",
	//   clickable: true,
	// },
 //  });

var swiper7 = new Swiper(".swiper-7", {
      slidesPerView: 1,
      spaceBetween: 30,
	  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  var swiper4 = new Swiper(".swiper-4", {
	pagination: {
	  el: ".swiper-pagination",
	  dynamicBullets: true,
	},
  });

  var swiper5 = new Swiper(".swiper-5", {
	// direction: "vertical",
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
  });

  let button = document.querySelector(".demo");
  let btn = document.querySelector(".busty");

  button.addEventListener('mousemove', (e) => {
	  x = e.offsetX;
	  y = e.offsetY;
	  button.style.setProperty('--mouse-x', x + "px");
	  button.style.setProperty('--mouse-y', y + "px");
  });

  btn.addEventListener('mousemove', (e) => {
	x = e.offsetX;
	y = e.offsetY;
	btn.style.setProperty('--mouse-x', x + "px");
	btn.style.setProperty('--mouse-y', y + "px");
});

AOS.init();
