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
        this.toDoItems.forEach((toDo, index) => {
            const status = toDo.isComplete ? '✅' : '❌';
            console.log(`${index + 1}. ${status} ${toDo.text}`);
        });
    }
}

const myToDoList = new ToDoList();

// Add some tasks
myToDoList.addToDo('Buy milk');
myToDoList.addToDo('Walk the dog');

// Display the tasks
myToDoList.displayToDos();

// Mark the first task as complete
myToDoList.toggleComplete(0);

// Display the tasks again to see the change
myToDoList.displayToDos();