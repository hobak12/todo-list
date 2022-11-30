export const addTodoListItem = (todo) => {
  if (!todo) return;
  const todoListContainer = document.querySelector(".list-container");

  const todoListItem = document.createElement("div");
  todoListItem.classList.add("list-item-container");
  todoListItem.innerText = todo;

  todoListContainer.append(todoListItem);

  saveInLocalStorage(todo);

  // <div class="list-item-container">특강 만들기</div>;
};

const saveInLocalStorage = (todo) => {
  const todos = window.localStorage.getItem("todos");

  if (!todos) {
    // localStorage에 todos가 없다면
    window.localStorage.setItem("todos", JSON.stringify([todo]));
  } else {
    // localStorage에 todos가 있다면
    const parsedTodos = JSON.parse(todos);

    parsedTodos.push(todo);

    window.localStorage.setItem("todos", JSON.stringify(parsedTodos));
  }
};
