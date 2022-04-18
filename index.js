const listContainer = document.getElementById("list-container");
const addItemBtn = document.getElementById("create-list-button");
const clearListBtn = document.getElementById("clear-list-button");
const deleteLastItemBtn = document.getElementById("delete-last-item");
const inputItem = document.getElementById("input-item");

addItemBtn.addEventListener("click", () => {
  if (inputItem.value === "" && inputItem.required === true) {
    return alert("please fill out input field");
  } else {
    if (isElementEmpty(listContainer)) {
      addHeader();
      const itemList = createItemList();
      addItemToList(itemList);
    } else {
      const itemList = document.getElementById("to-do-list");
      addItemToList(itemList);
    }
  }
});

clearListBtn.addEventListener("click", clearList);

deleteLastItemBtn.addEventListener("click", removeLastListItem);

function removeLastListItem() {
  const itemList = document.getElementById("to-do-list");
  itemList.removeChild(itemList.lastChild);
}

function clearList() {
  listContainer.innerHTML = "";
}

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
