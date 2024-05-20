// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements that we'll be interacting with
    const taskInput = document.getElementById('taskInput'); // Input field for adding new tasks
    const addTaskButton = document.getElementById('addTaskButton'); // Button to add new tasks
    const taskList = document.getElementById('taskList'); // List of all tasks

    // Add an event listener to the "Add Task" button so that when it's clicked, the addTask function is called
    addTaskButton.addEventListener('click', addTask);

    // Add an event listener to the input field so that when the user presses the Enter key, the addTask function is called
    taskInput.addEventListener('keypress', function(event) {
        // Check if the key that was pressed is the Enter key
        if (event.key === 'Enter') {
            // If it is, call the addTask function
            addTask();
        }
    });

    /**
     * Adds a new task to the list when the "Add Task" button is clicked or the Enter key is pressed in the input field.
     */
    function addTask() {
        // Get the text from the input field
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            // Create a new list item
            const listItem = document.createElement('li');
            
            // Add a span element to the list item with the task text
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.addEventListener('click', toggleComplete);

            // Add a delete button to the list item
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', deleteTask);

            // Add the span and delete button to the list item
            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteButton);

            // Add the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field and focus it so that the user can type in a new task
            taskInput.value = '';
            taskInput.focus();
        }
    }

    /**
     * Toggles the "completed" class on a task item when it is clicked.
     * This is used to display completed tasks in a different style.
     */
    function toggleComplete(event) {
        const listItem = event.target.parentElement;
        listItem.classList.toggle('completed');
    }

    /**
     * Removes a task item from the list when the "Delete" button is clicked.
     * This is used to allow users to delete tasks they have completed.
     */
    function deleteTask(event) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
});
