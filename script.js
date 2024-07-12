var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",

  breakpoints: {
    100: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "1",

      coverflowEffect: {
        rotate: 40,
        stretch: 10,
        depth: 40,
        modifier: 1,
        scale: 0.9,
      },

      autoplay: {
        delay: 5000,
      },
    },

    550: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "2",

      coverflowEffect: {
        rotate: 0,
        stretch: 130,
        depth: 50,
        modifier: 1,
        scale: 0.8,
      },

      autoplay: {
        delay: 5000,
      },
    },

    700: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "3",

      coverflowEffect: {
        rotate: 0,
        stretch: -10,
        depth: 50,
        modifier: 1,
        scale: 0.85,
      },

      autoplay: {
        delay: 5000,
      },
    },

    910: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "4",

      coverflowEffect: {
        rotate: 0,
        stretch: -10,
        depth: 50,
        modifier: 1,
        scale: 0.85,
      },

      autoplay: {
        delay: 5000,
      },
    },

    1121: {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "5",

      coverflowEffect: {
        rotate: 0,
        stretch: -30,
        depth: 50,
        modifier: 1,
        scale: 0.85,
      },

      autoplay: {
        delay: 5000,
      },
    },
  },
});

const scrollTop = document.querySelector(".scrollTop");

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const scrollVisibility = () => {
  if (window.scrollY >= 1000) {
    console.log(1);
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
};

window.addEventListener("scroll", scrollVisibility);

scrollVisibility();
