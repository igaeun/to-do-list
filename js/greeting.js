const greeting = document.querySelector(".intro-set__greeting");
const intro = document.querySelector(".intro-set__intro");
const introSet = document.querySelector(".intro-set");
const loginInputText = document.querySelector(".login-form__text");
const loginInputSubmit = document.querySelector(".login-form__submit");

const HIDDEN_CLASSNAME = "hidden";

function openLoginForm() {
    greeting.classList.add(HIDDEN_CLASSNAME); // 부드럽게
    intro.classList.add(HIDDEN_CLASSNAME); // 부드럽게
    loginInputText.classList.remove(HIDDEN_CLASSNAME);
    loginInputSubmit.classList.remove(HIDDEN_CLASSNAME);
}

introSet.addEventListener("click", openLoginForm);

