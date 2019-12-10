var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

var clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedToDoItem);

var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);

var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);

function addToDoItem() {
  alert("Add button clicked!");
}
