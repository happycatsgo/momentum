"use strict";
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
const loginForm = document.querySelector("#login-form");
function paintGreetings(name) {
    const greeting = document.querySelector("#greeting");
    if (greeting instanceof HTMLElement) {
        greeting.innerText = `Hello ${name}`;
        greeting.classList.remove(HIDDEN_CLASS);
    }
}
function onLoginSubmit(event) {
    const loginInput = document.querySelector("#login-form input");
    event.preventDefault();
    if (loginInput instanceof HTMLInputElement) {
        const name = loginInput.value;
        localStorage.setItem(USERNAME_KEY, name);
        loginForm === null || loginForm === void 0 ? void 0 : loginForm.classList.add(HIDDEN_CLASS);
        paintGreetings(name);
    }
}
const username = localStorage.getItem(USERNAME_KEY);
if (username === null) {
    loginForm === null || loginForm === void 0 ? void 0 : loginForm.classList.remove(HIDDEN_CLASS);
    loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreetings(username);
}
