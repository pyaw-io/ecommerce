"use strict";

const container = document.querySelector(".container");
const navList = document.querySelector(".nav-list");
const nav = document.querySelector(".nav");
const body = document.querySelector("html");
const hero = document.querySelector(".hero");

// open and close func
container.addEventListener("click", function (e) {
  const open = e.target.closest(".open-btn");
  const close = e.target.closest(".close-btn");

  if (open) {
    body.style.overflow = "hidden";
    navList.classList.add("show");
  }
  if (close) {
    body.style.overflow = "auto";
    navList.classList.remove("show");
  }
});

//Fix Nav
let observerOptions = {
  root: null,
  threshold: 0.9,
};

const observerCallback = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("fix-nav");
  } else {
    nav.classList.remove("fix-nav");
  }
};

// Snapping of sections
const headerObserver = new IntersectionObserver(
  observerCallback,
  observerOptions
);

headerObserver.observe(hero);
