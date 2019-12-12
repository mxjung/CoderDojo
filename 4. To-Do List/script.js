// This has to go before the event listeners, or toDoEntryBox will be undefined
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

// var clearButton = document.getElementById("clear-completed-button");
// clearButton.addEventListener("click", clearCompletedToDoItem);

// var emptyButton = document.getElementById("empty-button");
// emptyButton.addEventListener("click", emptyList);

// var saveButton = document.getElementById("save-button");
// saveButton.addEventListener("click", saveList);

function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

function newToDoItem(itemText, completed) {
  var toDoItem = document.createElement("li");
  var toDoText = document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);

  if (completed) {
    toDoItem.classList.add("completed");
  }

  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);
}
