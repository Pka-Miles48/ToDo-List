class ToDo {
    constructor(text) {
        this.text = text;
        this.isComplete = false;
    }
}

class ToDoList {
    constructor() {
        this.toDoItems = [];
    }

    addToDo(text) {
        const toDo = new ToDo(text);
        this.toDoItems.push(toDo);
    }

    toggleComplete(index) {
        this.toDoItems[index].isComplete = !this.toDoItems[index].isComplete;
    }

    displayToDos() {
        const ul = document.getElementById("myUL");
        ul.innerHTML = ''; // Clear the list before displaying items
        this.toDoItems.forEach((toDo, index) => {
            const li = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = toDo.isComplete;
            checkbox.onclick = () => this.toggleComplete(index);
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(`${index + 1}. ${toDo.text}`));
            ul.appendChild(li);
        });
    }

    resetToDos() {
        this.toDoItems = []; // Clear the ToDo items
    }
}

const myToDoList = new ToDoList();

// Add some tasks
myToDoList.addToDo('Buy milk');
myToDoList.addToDo('Walk the dog');
myToDoList.addToDo('Water the plants');
myToDoList.addToDo('Fold clothes');
myToDoList.addToDo('Play ball with friends');
myToDoList.addToDo('Watch a movie');
myToDoList.addToDo('Organize gaming system');
myToDoList.addToDo('Make art');

// Display the tasks
myToDoList.displayToDos();

// Mark the first task as complete
myToDoList.toggleComplete(0);

// Display the tasks again to see the change
myToDoList.displayToDos();

function newElement() {
    var inputValue = document.getElementById("myInput").value;
    myToDoList.addToDo(inputValue);
    myToDoList.displayToDos();
    document.getElementById("myInput").value = ""; // Clear the input field
}

document.getElementById("addButton").addEventListener("click", function() {
    alert("Add button clicked!");
  });

  function resetInput() {
    document.getElementById("myInput").value = ""; // Clear the input field
}

document.getElementById("addButton").addEventListener("click", newElement);
