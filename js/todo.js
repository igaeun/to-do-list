const introUser = document.querySelector(".intro-user");
const todoListFormText = document.querySelector(".todo-list-form__text");
const todoListFormSubmit = document.querySelector(".todo-list-form__submit");

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
