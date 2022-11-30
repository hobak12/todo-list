import {
  addTodoListItem,
  deleteTodoListItem,
  getTodoList,
} from "./crud/index.js";

const getInputDOM = () => document.querySelector("input");

const handleKeyPressInTodoInput = (event) => {
  if (event.keyCode === 13) {
    addTodoListItem(event.target.value);
    event.target.value = "";
  }
};

const init = () => {
  const todoInput = getInputDOM();

  todoInput.addEventListener("keypress", handleKeyPressInTodoInput);

  getTodoList();
};

window.addEventListener("DOMContentLoaded", () => {
  removeEventsListeners();
  init();
});

const removeEventsListeners = () => {
  const todoInput = getInputDOM();

  todoInput.removeEventListener("keyPress", handleKeyPressInTodoInput);
};
