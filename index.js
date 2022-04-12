const listContainer = document.getElementById("list-container");
const createListButton = document.getElementById("create-list-button");
const inputItem = document.getElementById("input-item");

createListButton.addEventListener("click", () => {
  createHeader();
});

function createHeader() {
  const header = document.createElement("div");
  header.innerText = "To-do list";
  listContainer.appendChild(header);
}
