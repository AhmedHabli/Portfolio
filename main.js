AOS.init({
  offset: 250,
  delay: 0,
  easing: "slide",
  duration: 800,
  once: true,
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
let intro = document.querySelector(".intro");
let cnit = document.querySelector(".logo-cnit");
let rotary = document.querySelector(".rotary-1");
let interact = document.querySelector(".interact-1");
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    setTimeout(() => {
      cnit.classList.add("active");
    }, 400);

    setTimeout(() => {
      setTimeout(() => {
        cnit.classList.remove("active");
        cnit.classList.add("fade");
      }, 50);
    }, 1500);
    setTimeout(() => {
      rotary.classList.add("active");
    }, 400);

    setTimeout(() => {
      setTimeout(() => {
        rotary.classList.remove("active");
        rotary.classList.add("fade");
      }, 50);
    }, 1500);
    setTimeout(() => {
      interact.classList.add("active");
    }, 400);

    setTimeout(() => {
      setTimeout(() => {
        interact.classList.remove("active");
        interact.classList.add("fade");
      }, 50);
    }, 1500);
  });
  setTimeout(() => {
    intro.style.top = "-100%";
  }, 1700);
});
document
  .querySelector(".intro")
  .addEventListener("wheel", preventScroll, { passive: false });

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();

  return false;
}
