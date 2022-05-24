const h1 = document.querySelector("div.hw h1");

function clickTmp() {
  if (h1.className == "black-background") {
    h1.className = "white-background";
  } else {
    h1.className = "black-background";
  }
}

h1.addEventListener("click", clickTmp);
