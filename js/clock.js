const clock = document.querySelector(".clock");

// padStart 문자열을 길게 만들어야 할 때 사용

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 1000);
// setTimeout(sayHello, 1000); only one time

getClock();
setInterval(getClock, 1000);
