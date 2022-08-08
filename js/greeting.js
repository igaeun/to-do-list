const greeting = document.querySelector(".intro-set__greeting");
const intro = document.querySelector(".intro-set__intro");
const introSet = document.querySelector(".intro-set");
const loginForm = document.querySelector(".login-form");
const loginInputText = document.querySelector(".login-form__text");
const loginInputSubmit = document.querySelector(".login-form__submit");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function openLoginForm() {
    greeting.classList.add(HIDDEN_CLASSNAME); // 부드럽게
    intro.classList.add(".transform"); // 왜 안돼 !!?
    loginInputText.classList.remove(HIDDEN_CLASSNAME);
    loginInputSubmit.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault(); // 기본동작 실행되지 않도록 막기
    intro.classList.add(HIDDEN_CLASSNAME);
    loginInputText.classList.add(HIDDEN_CLASSNAME);
    loginInputSubmit.classList.add(HIDDEN_CLASSNAME);
    const username = loginInputText.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintIntroWithUser(username);
}

introSet.addEventListener("click", openLoginForm);

