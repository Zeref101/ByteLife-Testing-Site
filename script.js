const logo = document.querySelector(".loading-logo");
const logoPage = document.querySelector(".show-logo");
const navbar = document.querySelector(".navbar");
const logo2 = document.querySelector(".logo");
const container2 = document.querySelector(".dummy")
// ? timeline

const tl = gsap.timeline();
tl.to(logo, { scale: 1.5, duration: 1 });
tl.to(logo, { z: 200, duration: 1 });
tl.to(logo, { y: -100, duration: 0.5 });
tl.play();

window.addEventListener("scroll", () => {
  logoPage.style.transform = `translateY(-1000px)`;
  navbar.classList.remove("hide");
  setTimeout(()=>{
    navbar.style.transform = `translateY(70px)`;
  },500)
  const nl = gsap.timeline();
  nl.to(logo2, { x: 250, duration: 0.6, delay:0.9 });
});