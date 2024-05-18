interface Task {
    text: string;
    isComplete: boolean;
}

// Add some tasks
myToDoList.addToDo('Buy milk');
myToDoList.addToDo('Walk the dog');

// Display the tasks
myToDoList.displayToDos();

// Mark the first task as complete
myToDoList.toggleComplete(0);

// Display the tasks again to see the change
myToDoList.displayToDos();