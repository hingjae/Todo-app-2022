const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const btn = document.querySelector(".btn");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginInput.classList.add(HIDDEN_CLASSNAME);
  btn.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username} !`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginInput.classList.add(HIDDEN_CLASSNAME);
  btn.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}

//반복되는 구문은 함수로 정의해서 사용
