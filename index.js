document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("list"); // Input field
    const addButton = document.getElementById("button"); // Add List button
    const taskList = document.getElementById("listitem"); // Task list container (ul)

    function addTask() {
        const taskValue = inputField.value; // Get the input value

        if (taskValue === "") {
            alert("Please enter a task!");
            return;
        }

        const taskItem = document.createElement("li");
        taskItem.style.display = "flex"; 
        taskItem.style.alignItems = "center";
        taskItem.style.marginBottom = "10px"; 

        // Create a checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.marginRight = "10px";

        const taskText = document.createTextNode(taskValue);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);

        taskList.appendChild(taskItem);

        inputField.value = "";
    }

    addButton.addEventListener("click", addTask);
});
