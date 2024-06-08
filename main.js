document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-icon");
  const navItems = document.querySelector(".nav-items");

  burgerMenu.addEventListener("click", function () {
    navItems.classList.toggle("active");
  });
});

// ================================
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelector(".menu-section_nav");
  let isDown = false;
  let startX;
  let scrollLeft;

  navItems.addEventListener("mousedown", (e) => {
    isDown = true;
    navItems.classList.add("active");
    startX = e.pageX - navItems.offsetLeft;
    scrollLeft = navItems.scrollLeft;
  });

  navItems.addEventListener("mouseleave", () => {
    isDown = false;
    navItems.classList.remove("active");
  });

  navItems.addEventListener("mouseup", () => {
    isDown = false;
    navItems.classList.remove("active");
  });

  navItems.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - navItems.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    navItems.scrollLeft = scrollLeft - walk;
  });
});
//================================

document.addEventListener("DOMContentLoaded", function () {
  const updateWeekdays = () => {
    const weekdays = document.querySelectorAll(".weekdays");
    if (window.innerWidth <= 768) {
      weekdays.forEach((day) => {
        if (day.textContent.trim() === "Monday") {
          day.textContent = "MO";
        }
      });
    } else {
      weekdays.forEach((day) => {
        if (day.textContent.trim() === "MO") {
          day.textContent = "Monday";
        }
      });
    }
  };

  updateWeekdays();

  window.addEventListener("resize", () => {
    updateWeekdays();
  });
});

// =========================

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    // centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
    },
    on: {
      slideChangeTransitionEnd: function () {
        // const slides = document.querySelectorAll(".swiper-slide");
        // slides.forEach((slide) => {
        //   slide.style.opacity = "1";
        // });
        // slides[swiper.activeIndex].style.opacity = "1";
        // if (swiper.activeIndex > 0) {
        //   slides[swiper.activeIndex - 1].style.opacity = "0.5";
        // }
        // if (swiper.activeIndex < slides.length - 1) {
        //   slides[swiper.activeIndex + 1].style.opacity = "0.5";
        // }
      },
    },
  });

  // Initial state
  const slides = document.querySelectorAll(".swiper-slide");
  slides.forEach((slide) => {
    // slide.style.opacity = "1";
  });
  if (slides.length > 1) {
    // slides[1].style.opacity = "0.5";
  }
});
