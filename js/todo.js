"use strict";
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODO_KEY = "todos";
let toDos = loadTodos();
function loadTodos() {
    const savedTodos = localStorage.getItem(TODO_KEY);
    if (savedTodos === null) {
        return [];
    }
    else {
        return JSON.parse(savedTodos);
    }
}
function saveTodos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}
function removeToDo(event) {
    if (event.target instanceof HTMLElement) {
        const li = event.target.parentElement;
        if (li !== null) {
            toDos = toDos.filter((data) => {
                return data.id !== parseInt(li.id);
            });
            saveTodos();
            li.remove();
        }
    }
}
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id.toString();
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", removeToDo);
    toDoList === null || toDoList === void 0 ? void 0 : toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault();
    if (toDoInput instanceof HTMLInputElement) {
        const newTodoObj = {
            text: toDoInput.value,
            id: Date.now(),
        };
        toDoInput.value = "";
        toDos.push(newTodoObj);
        paintToDo(newTodoObj);
        saveTodos();
    }
}
toDoForm === null || toDoForm === void 0 ? void 0 : toDoForm.addEventListener("submit", handleToDoSubmit);
toDos.forEach(paintToDo);
