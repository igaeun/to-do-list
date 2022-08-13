const introUser = document.querySelector(".intro-user");
const toDoListForm = document.querySelector(".todo-list-form");
const todoListFormText = document.querySelector(".todo-list-form__text");
const todoListFormSubmit = document.querySelector(".todo-list-form__submit");
const toDoList = document.querySelector(".todo-list")

let toDos = [];

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

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    // 클릭한 li.id와는 다른 toDo만 남겨둠.
    toDos = toDos.filter((toDo) => toDo.li !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const button = document.createElement("i");
    button.setAttribute("class", "fa-regular fa-square");
    button.addEventListener("click", deleteToDo);

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    li.appendChild(button);
    li.appendChild(span);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // input의 value를 새로운 변수에 복사
    const newTodo = todoListFormText.value;
    // input의 value를 비움
    todoListFormText.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoListForm.addEventListener("submit", handleToDoSubmit);
