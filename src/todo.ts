const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

interface ToDoObj {
  text: string;
  id: number;
}

let toDos: ToDoObj[] = loadTodos();

function loadTodos(): ToDoObj[] {
  const savedTodos = localStorage.getItem(TODO_KEY);

  if (savedTodos === null) {
    return [];
  } else {
    return JSON.parse(savedTodos) as ToDoObj[];
  }
}

function saveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function removeToDo(event: Event) {
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

function paintToDo(newTodo: ToDoObj) {
  const li = document.createElement("li");
  li.id = newTodo.id.toString();

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "❌";

  li.appendChild(button);
  li.appendChild(span);

  button.addEventListener("click", removeToDo);
  toDoList?.appendChild(li);
}

function handleToDoSubmit(event: Event) {
  event.preventDefault();

  if (toDoInput instanceof HTMLInputElement) {
    const newTodoObj: ToDoObj = {
      text: toDoInput.value,
      id: Date.now(),
    };

    toDoInput.value = "";

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
  }
}

toDoForm?.addEventListener("submit", handleToDoSubmit);

toDos.forEach(paintToDo);
