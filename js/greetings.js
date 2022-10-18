const loginForm = document.querySelector('#login-form');
const placeHolder = document.getElementById('placeholder');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector("#greeting");
const ul = document.querySelector('#ul-session');
const enter = document.querySelector('#enter');
const todoForm = document.querySelector('#todo-form');



const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';


function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    placeHolder.classList.add(HIDDEN_CLASSNAME);
    ul.classList.add(HIDDEN_CLASSNAME);
    enter.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

    ul.classList.remove(HIDDEN_CLASSNAME);
    enter.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    placeHolder.classList.remove(HIDDEN_CLASSNAME);

    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}