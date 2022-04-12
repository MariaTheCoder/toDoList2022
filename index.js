const listContainer = document.getElementById("list-container");
const createListButton = document.getElementById("create-list-button");
const inputItem = document.getElementById("input-item");

createListButton.addEventListener("click", () => {
  createListItem();
});

function createHeader() {
  const header = document.createElement("div");
  header.innerText = "To-do list";
  listContainer.appendChild(header);
}

function createListItem() {
  const list = document.getElementById("list");
  const item = document.createElement("li");
  item.innerText = inputItem.value;
  list.appendChild(item);
}
