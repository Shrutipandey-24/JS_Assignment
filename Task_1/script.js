const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();


addBtn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    tasks.push(input.value);
    updateStorage();
    renderTasks();

    input.value = "";
});


function renderTasks() {
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        list.appendChild(li);
    });
}


function editTask(i) {
    let newText = prompt("Edit task:", tasks[i]);
    if (newText !== null && newText.trim() !== "") {
        tasks[i] = newText;
        updateStorage();
        renderTasks();
    }
}


function deleteTask(i) {
    tasks.splice(i, 1);
    updateStorage();
    renderTasks();
}


function updateStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
