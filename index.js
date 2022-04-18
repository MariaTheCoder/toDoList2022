const listContainer = document.getElementById("list-container");
const addItemBtn = document.getElementById("create-list-button");
const inputItem = document.getElementById("input-item");

addItemBtn.addEventListener("click", () => {
  console.log(isElementEmpty(listContainer));
  if (isElementEmpty(listContainer)) {
    addHeader();
    const itemList = createItemList();
    addItemToList(itemList);
  } else {
    const itemList = document.getElementById("to-do-list");
    addItemToList(itemList);
  }
  console.log(listContainer.children);
});

function addItemToList(listElement) {
  newItem = document.createElement("li");
  newItem.innerText = inputItem.value;
  listElement.appendChild(newItem);
}

function createItemList() {
  const itemList = document.createElement("ul");
  itemList.setAttribute("id", "to-do-list");
  listContainer.appendChild(itemList);
  return itemList;
}

function addHeader() {
  const header = document.createElement("h3");
  header.innerText = "To-do List";
  listContainer.appendChild(header);
}

function isElementEmpty(element) {
  return element.innerHTML === "" ? true : false;
}
