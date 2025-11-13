// Simple smooth scroll animation for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fade-in animation on scroll
const fadeElems = document.querySelectorAll("section");

const fadeInOnScroll = () => {
  fadeElems.forEach((elem) => {
    const rect = elem.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      elem.style.opacity = 1;
      elem.style.transform = "translateY(0)";
    }
  });
};

fadeElems.forEach((elem) => {
  elem.style.opacity = 0;
  elem.style.transform = "translateY(20px)";
  elem.style.transition = "all 0.6s ease-out";
});

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);
