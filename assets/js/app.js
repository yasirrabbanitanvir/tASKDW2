const navbar = document.querySelector(".mini_navbar");
const scrollTrigger = 20; // Number of pixels scrolled before changing color (adjust as needed)

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollTrigger) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
