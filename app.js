const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  greeting.classList.remove("hidden");
  greeting.innerText = "Hello " + username;
}

loginForm.addEventListener("submit", onLoginSubmit);
