document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".text-slide");

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("show");
      slide.classList.add("hide");
    });
    slides[index].classList.remove("hide");
    slides[index].classList.add("show");
  }
  function nextSlide() {
    slides[currentIndex].classList.remove("show");
    slides[currentIndex].classList.add("hide");

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].style.display = "block";
      slides[currentIndex].classList.remove("hide");
      slides[currentIndex].classList.add("show");
    }, 2000);
  }
  showSlide(currentIndex);
  setInterval(nextSlide, 3000);
});

window.addEventListener("scroll", () => {
  const scrollButton = document.getElementById("scrollButton");
  const sections = document.querySelectorAll(
    ".description-container, .container__about-us, .container__abous-parte2, .container__meet, .container-progress"
  );
  const homeSection = document.querySelector(".home-container");
  let isAnySectionVisible = false;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      isAnySectionVisible = true;
    }
  });
  if (isAnySectionVisible) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
  if (homeSection) {
    const homeRect = homeSection.getBoundingClientRect();
    if (homeRect.top <= 0 && homeRect.bottom >= 0) {
      scrollButton.classList.remove("show");
    }
  }
});

document.querySelectorAll(".menu__link").forEach((link) => {
  link.addEventListener("mouseover", () => {
    document.querySelectorAll(".menu__link").forEach((otherLink) => {
      otherLink.style.opacity = "0.5";
    });
    link.style.opacity = "1";
  });
  link.addEventListener("mouseout", () => {
    document.querySelectorAll(".menu__link").forEach((otherLink) => {
      otherLink.style.opacity = "1";
    });
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header-container");
  const navLinks = document.querySelectorAll(".menu__link");
  const logoIcon = document.querySelector(".header-container__logo .icon");
  const darkSections = document.querySelectorAll(".dark-bg");
  const lightSections = document.querySelectorAll(".light-bg");
  const homeSection = document.querySelector(".home-container");
  

  let isDarkBackgroundSectionVisible = false;
  let isLightBackgroundSectionVisible = false;
  
  darkSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      isDarkBackgroundSectionVisible = true;
    }
  });
  lightSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      isLightBackgroundSectionVisible = true;
    }
  });
  if (isDarkBackgroundSectionVisible) {
    navLinks.forEach((link) => {
      link.classList.add("white-text");
      link.classList.remove("black-text");
    });
    logoIcon.classList.add("white-fill");
    logoIcon.classList.remove("black-fill");
    header.classList.add("black-bg");
    header.classList.remove("white-bg");
  } else if (isLightBackgroundSectionVisible) {
    navLinks.forEach((link) => {
      link.classList.add("black-text");
      link.classList.remove("white-text");
    });
    logoIcon.classList.add("black-fill");
    logoIcon.classList.remove("white-fill");
    header.classList.add("white-bg");
    header.classList.remove("black-bg");
  } else {
    navLinks.forEach((link) => {
      link.classList.remove("white-text");
      link.classList.remove("black-text");
    });
    logoIcon.classList.remove("white-fill");
    logoIcon.classList.remove("black-fill");
    header.classList.remove("black-bg");
    header.classList.remove("white-bg");
  }
  if (homeSection) {
    const homeRect = homeSection.getBoundingClientRect();
    if (homeRect.top <= 0 && homeRect.bottom >= 0) {
      navLinks.forEach((link) => {
        link.classList.remove("white-text");
        link.classList.remove("black-text");
      });
      logoIcon.classList.remove("white-fill");
      logoIcon.classList.remove("black-fill");
      header.classList.remove("black-bg");
      header.classList.remove("white-bg");
    }
  }
});

document.querySelectorAll(".container-footer__footer__links-group-list-item").forEach((link) => {
  link.addEventListener("mouseover", () => {
    document.querySelectorAll(".container-footer__footer__links-group-list-item").forEach((otherLink) => {
      otherLink.style.opacity = "0.5";
    });
    link.style.opacity = "1";
  });
  link.addEventListener("mouseout", () => {
    document.querySelectorAll(".container-footer__footer__links-group-list-item").forEach((otherLink) => {
      otherLink.style.opacity = "1";
    });
  });
});
window.dispatchEvent(new Event("scroll"));
