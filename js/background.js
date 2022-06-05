const background = [
  "background1.jpg",
  "background2.jpg",
  "background3.jpg",
  "background4.jpg",
  "background5.jpg",
];

const chosenBackground =
  background[Math.floor(Math.random() * background.length)];
const backgroundImg = document.createElement("img");

backgroundImg.src = `img/${chosenBackground}`;

document.body.appendChild(backgroundImg);
