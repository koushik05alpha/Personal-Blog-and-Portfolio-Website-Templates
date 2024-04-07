// ===============  media responsive =========

const navlist = document.querySelector(".navlist");
const menuBTN = document.querySelector(".ri-menu-line");

menuBTN.onclick = function () {
  navlist.classList.toggle("active");
  menuBTN.classList.toggle("ri-arrow-up-doulbe-line");
};

// =============== Fixwd Nav =========

window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolling", scrollY > 50);
});

// =============== Portfolio =========

let portfolioTabs = document.getElementsByClassName("portfolio-tab");
let tabContents = document.getElementsByClassName("tab-content");

function tabOpen(x) {
  for (portfolioTab of portfolioTabs) {
    portfolioTab.classList.remove("active");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(x).classList.add("active-content");
}

// =============== Theme toggler =========

let themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = function () {
  themeBtn.classList.toggle("ri-sun-line");
  if (themeBtn.classList.contains("ri-sun-line")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

//================ scrolling anumi============

const sr = ScrollReveal({
  distance: "80px",
  duration: 2500,
  delay: 200,
  reset: true,
});

sr.reveal(".home-container .left", { origin: "top" });
sr.reveal(".home-container .right", { origin: "left" });
sr.reveal(".about-container .right", { origin: "top" });
sr.reveal(".about-container .left", { origin: "left" });
sr.reveal(".service", { origin: "bottom" });
sr.reveal(".portfolio-title", { origin: "bottom" });
sr.reveal(".portfolio-container", { origin: "left" });
sr.reveal(".portfolio-buttons", { origin: "top" });
sr.reveal(".testimonial", { origin: "bottom" });
sr.reveal(".contact", { origin: "top" });
sr.reveal(".copyright", { origin: "bottom" });
