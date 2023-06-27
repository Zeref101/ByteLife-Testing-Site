const logo = document.querySelector(".loading-logo");
const logoPage = document.querySelector(".show-logo");
const navbar = document.querySelector(".navbar");
const logo2 = document.querySelector(".logo");
// ? timeline

const tl = gsap.timeline();
tl.to(logo, { scale: 1.5, duration: 1 });
tl.to(logo, { z: 200, duration: 1 });
tl.to(logo, { y: -100, duration: 0.5 });
tl.play();

window.addEventListener("scroll", () => {
  const lt = gsap.timeline();
  lt.to(logoPage, { y: -1000, duration: 0.5 });
  lt.play();
  logoPage.classList.add("hide");
  navbar.classList.remove("hide");
  const nl = gsap.timeline();
  nl.to(logo2, { x: 250, duration: 0.6 });
});
