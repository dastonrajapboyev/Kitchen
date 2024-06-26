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

// for collapse

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// navigate account.html
function navigateToAccount() {
  window.location.href = "./account.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const signInBtn = document.querySelector(".sign-in_btn");
  if (signInBtn) {
    signInBtn.addEventListener("click", navigateToAccount);
  }
});

// modal
document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("modal");
  let addressIcon = document.getElementById("address-icon");
  let closeModal = document.getElementById("close-modal");

  addressIcon.addEventListener("click", function () {
    modal.classList.add("active");
  });

  closeModal.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  // Optionally, close modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });
});

// close modal
document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("modal");
  let addressIcon = document.getElementById("address-icon");
  let closeModal = document.getElementById("close-modal");

  addressIcon.addEventListener("click", function () {
    modal.classList.add("active");
  });

  closeModal.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  // Optionally, close modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });
});

const logoImg = document.querySelector(".logo-img");

// Add a click event listener to the image element
logoImg.addEventListener("click", function () {
  // Navigate to the main page (e.g., index.html)
  window.location.href = "index.html";
});

////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    dateClick: function (info) {
      // Show the modal
      var modal = document.getElementById("modal");
      var selectedDate = document.getElementById("selected-date");
      selectedDate.textContent = info.dateStr;
      modal.style.display = "block";

      // Save event button click handler
      document.getElementById("save-event").onclick = function () {
        var time = document.getElementById("event-time").value;
        if (time) {
          var eventTime = info.dateStr + "T" + time + ":00";
          calendar.addEvent({
            title: "New Event",
            start: eventTime,
          });
        }
        modal.style.display = "none";
      };
    },
  });
  calendar.render();

  // Close modal functionality
  document.getElementById("close-modal").addEventListener("click", function () {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  });
});
