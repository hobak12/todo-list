export const getTodoList = () => {
  const todos = window.localStorage.getItem("todos");
  const parsedTodos = JSON.parse(todos);

  if (!parsedTodos) return;

  parsedTodos.forEach((todo) => {
    const todoListContainer = document.querySelector(".list-container");

    const todoListItem = document.createElement("div");
    todoListItem.classList.add("list-item-container");
    todoListItem.innerText = todo;

    todoListContainer.append(todoListItem);
  });
};
