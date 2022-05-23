const h1 = document.querySelector("div.hw h1");

function clickTmp() {
  if (h1.className == "active") {
    h1.className = "passive";
  } else {
    h1.className = "active";
  }
}

h1.addEventListener("click", clickTmp);
