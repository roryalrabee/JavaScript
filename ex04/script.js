const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

let totalTasks = 0;

function updateTaskCounter() {
    taskCounter.textContent = totalTasks;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.type = "button";

    taskSpan.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
        totalTasks--;
        updateTaskCounter();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    totalTasks++;
    updateTaskCounter();

    taskInput.value = "";
    taskInput.focus();
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

updateTaskCounter();
