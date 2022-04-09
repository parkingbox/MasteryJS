"use strict";

const tag = document.querySelector(".tag");
const target = document.querySelector(".target");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");

document.addEventListener("mousemove", (event) => {
  const X = event.clientX;
  const Y = event.clientY;
  vertical.style.left = `${X}px`;
  horizontal.style.top = `${Y}px`;
  target.style.top = `${Y}px`;
  target.style.left = `${X}px`;
  tag.style.top = `${Y}px`;
  tag.style.left = `${X}px`;
  tag.innerHTML = `${X}px, ${Y}px`;
});