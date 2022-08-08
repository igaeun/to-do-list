const greeting = document.querySelector(".intro-set__greeting");
const intro = document.querySelector(".intro-set__intro");
const introSet = document.querySelector(".intro-set");
const loginForm = document.querySelector(".login-form");
const loginInputText = document.querySelector(".login-form__text");
const loginInputSubmit = document.querySelector(".login-form__submit");
const introUser = document.querySelector(".intro-user");
const todoListFormText = document.querySelector(".todo-list-form__text");
const todoListFormSubmit = document.querySelector(".todo-list-form__submit");

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

function paintIntroWithUser(username) {
    introUser.innerText = `${username}'s to-do list`;
    introUser.classList.remove(HIDDEN_CLASSNAME);
    introUser.animate(
        {
            transform: [
                'translateY(-50px)'
            ]
        },
        {
            duration: 500, // 단위: ms
            fill: 'forwards', // 종료 시 속성
            easing: 'ease' // 가속도 종류
        }
    );
    todoListFormText.classList.remove(HIDDEN_CLASSNAME);
    todoListFormSubmit.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintIntroWithUser(savedUsername);
    greeting.classList.add(HIDDEN_CLASSNAME);
    intro.classList.add(HIDDEN_CLASSNAME);
    loginInputText.classList.add(HIDDEN_CLASSNAME);
    loginInputSubmit.classList.add(HIDDEN_CLASSNAME);
}

introSet.addEventListener("click", openLoginForm);

