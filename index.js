const listContainer = document.getElementById("list-container");
const inputItem = document.getElementById("input-item");
const addItemBtn = document.getElementById("create-list-button");
const clearListBtn = document.getElementById("clear-list-button");
const deleteLastItemBtn = document.getElementById("delete-last-item");

addItemBtn.addEventListener("click", () => {
  if (inputItem.value === "" && inputItem.required === true) {
    return alert("please fill out input field");
  } else {
    if (isElementEmpty(listContainer)) {
      addHeader();
      const itemList = createItemList();
      addItem(itemList);
    } else {
      const itemList = document.getElementById("to-do-list");
      addItem(itemList);
    }
  }
});

clearListBtn.addEventListener("click", clearList);

deleteLastItemBtn.addEventListener("click", removeLastListItem);

function editItem(element) {
  // store the innerText value of selected element for later use
  const innerText = element.innerText;

  // create input element and add attributes. Set value to innerText previously saved
  const editMode = document.createElement("input");
  editMode.setAttribute("type", "text");
  editMode.setAttribute("class", "input");
  editMode.value = innerText;

  // empty innerHTML of selected element and add newly created input field as innerHTML
  element.innerHTML = "";
  element.appendChild(editMode);
}

function removeLastListItem() {
  const itemList = document.getElementById("to-do-list");
  itemList.removeChild(itemList.lastChild);
}

function clearList() {
  listContainer.innerHTML = "";
}

function addItem(listElement) {
  newItem = document.createElement("li");
  newItem.innerText = inputItem.value;
  newItem.addEventListener("click", () => editItem(newItem));
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
