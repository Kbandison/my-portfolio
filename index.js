"use strict";

let button = document.querySelector(".switch");

let page = document.querySelector("body");

let slider = document.querySelector("#switch-btn");

let banner = document.querySelector("#title");

let mobileSwitch = document.querySelector(".mobile-switch");

let mobileButton = document.querySelector(".mbl-btn");

let mobileSwitchLabel = document.querySelector(".mobile-switch label");

button.addEventListener("click", () => {
  button.classList.toggle("dark");

  if (button.classList.contains("dark")) {
    page.style.backgroundColor = "rgba(10, 10, 10)";
    page.style.transition = "200ms ease-in-out";
    button.style.backgroundColor = "rgba(30,30,30)";
    slider.style.borderColor = "#6017e3";
    banner.style.color = "white";
  } else {
    page.style.backgroundColor = "rgba(255, 255, 255)";
    page.style.transition = "200ms ease-in-out";
    button.style.backgroundColor = "#efecec";
    banner.style.color = "#6017e3";
  }
});

mobileSwitch.addEventListener("click", () => {
  mobileSwitch.classList.toggle("dark");

  if (mobileSwitch.classList.contains("dark")) {
    page.style.backgroundColor = "rgba(10, 10, 10)";
    page.style.transition = "200ms ease-in-out";
    button.style.backgroundColor = "rgba(30,30,30)";
    slider.style.borderColor = "#6017e3";
    banner.style.color = "white";
    mobileSwitchLabel.innerText = "Light Mode";
    mobileButton.style.backgroundColor = "white";
  } else {
    page.style.backgroundColor = "rgba(255, 255, 255)";
    page.style.transition = "200ms ease-in-out";
    button.style.backgroundColor = "#efecec";
    banner.style.color = "#6017e3";
    mobileSwitchLabel.innerText = "Dark Mode";
    mobileButton.style.backgroundColor = "rgba(10,10,10)";
  }
});
