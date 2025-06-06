let tasks = [];
let nextId = 1;

window.addEventListener("load", () => {

})

document.getElementById("add-task").addEventListener("click", addTask);

function addTask() {
  let input = document.getElementById("new-task");
  let taskText = input.value.trim();
  if (taskText === "") {
    alert("Vui lòng nhập nội dung công việc.");
    return;
  }

  let item = {
    id: nextId++,
    text: taskText,
    isDone: false,
  };

  tasks.push(item);

  renderTasks();

  input.value = "";
}

function renderTasks() {
  let taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task.text;
    span.style.cursor = "pointer";

    if (task.isDone) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    }

    span.addEventListener("click", () => {
      task.isDone = !task.isDone;
      renderTasks();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xóa";
    deleteBtn.style.color = "white";
    deleteBtn.style.backgroundColor = "red";

    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
