const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");

function paintGreetings(name: string) {
  const greeting = document.querySelector("#greeting");

  if (greeting instanceof HTMLElement) {
    greeting.innerText = `Hello ${name}`;
    greeting.classList.remove(HIDDEN_CLASS);
  }
}

function onLoginSubmit(event: Event) {
  const loginInput = document.querySelector("#login-form input");
  event.preventDefault();

  if (loginInput instanceof HTMLInputElement) {
    const name = loginInput.value;
    localStorage.setItem(USERNAME_KEY, name);
    loginForm?.classList.add(HIDDEN_CLASS);
    paintGreetings(name);
  }
}

const username = localStorage.getItem(USERNAME_KEY);

if (username === null) {
  loginForm?.classList.remove(HIDDEN_CLASS);
  loginForm?.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(username);
}
