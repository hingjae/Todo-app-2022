const title = document.querySelector(".hw");

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
  title.className = "black-background";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
  title.className = "white-background";
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
