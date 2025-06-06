// // Mảng lưu danh sách công việc
// let tasks = [];

// // Bắt sự kiện khi người dùng nhấn nút "Thêm công việc"
// document.getElementById("add-task").addEventListener("click", addTask);

// // Hàm thêm công việc mới
// function addTask() {
//   const input = document.getElementById("new-task");
//   const taskText = input.value.trim(); // Lấy nội dung và loại bỏ khoảng trắng

//   // Kiểm tra rỗng/null
//   if (taskText === "") {
//     alert("Vui lòng nhập nội dung công việc.");
//     return;
//   }

//   // Tạo đối tượng công việc
//   const task = {
//     id: Date.now(),
//     text: taskText,
//   };

//   // Thêm vào mảng
//   tasks.push(task);

//   // Hiển thị danh sách mới
//   renderTasks();

//   // Xóa nội dung ô input
//   input.value = "";
// }

// // Hàm hiển thị danh sách công việc
// function renderTasks() {
//   const taskList = document.getElementById("task-list");
//   taskList.innerHTML = ""; // Xóa danh sách cũ

//   tasks.forEach((task) => {
//     const li = document.createElement("li");
//     li.textContent = task.text;
//     taskList.appendChild(li);
//   });
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let tasks = [];

// document.getElementById("add-task").addEventListener("click", addTask);

// function addTask() {
//   const input = document.getElementById("new-task");
//   const taskText = input.value.trim();

//   if (taskText === "") {
//     alert("Vui lòng nhập nội dung công việc.");
//     return;
//   }

//   const task = {
//     id: Date.now(),
//     text: taskText,
//     isDone: false,
//   };

//   tasks.push(task);
//   renderTasks();
//   input.value = "";
// }

// function renderTasks() {
//   const taskList = document.getElementById("task-list");
//   taskList.innerHTML = "";

//   tasks.forEach((task) => {
//     const li = document.createElement("li");

//     // Nội dung công việc
//     const span = document.createElement("span");
//     span.textContent = task.text;
//     span.style.cursor = "pointer";

//     if (task.isDone) {
//       span.style.textDecoration = "line-through";
//       span.style.color = "gray";
//     }

//     // Sự kiện click để đánh dấu hoàn thành
//     span.addEventListener("click", () => {
//       task.isDone = !task.isDone; // đảo trạng thái
//       renderTasks(); // cập nhật lại giao diện
//     });

//     // Nút xóa công việc
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Xóa";
//     deleteBtn.style.marginLeft = "10px";
//     deleteBtn.style.backgroundColor = "#dc3545";
//     deleteBtn.style.color = "white";
//     deleteBtn.style.border = "none";
//     deleteBtn.style.borderRadius = "5px";
//     deleteBtn.style.padding = "5px 10px";
//     deleteBtn.style.cursor = "pointer";

//     deleteBtn.addEventListener("click", () => {
//       tasks = tasks.filter((t) => t.id !== task.id); // xóa khỏi mảng
//       renderTasks(); // cập nhật lại giao diện
//     });

//     li.appendChild(span);
//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);
//   });
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tasks = [];

// Khi trang load xong, tải dữ liệu từ localStorage
window.addEventListener("load", () => {
  loadTasksFromLocalStorage();
  renderTasks();
});

document.getElementById("add-task").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("new-task");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Vui lòng nhập nội dung công việc.");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    isDone: false,
  };

  tasks.push(task);
  saveTasksToLocalStorage(); // lưu sau khi thêm
  renderTasks();
  input.value = "";
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.style.cursor = "pointer";

    if (task.isDone) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    }

    span.addEventListener("click", () => {
      task.isDone = !task.isDone;
      saveTasksToLocalStorage(); // lưu sau khi sửa
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xóa";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.backgroundColor = "#dc3545";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "5px";
    deleteBtn.style.padding = "5px 10px";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasksToLocalStorage(); // lưu sau khi xóa
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// 🔐 Lưu danh sách vào localStorage
function saveTasksToLocalStorage() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// 📦 Tải danh sách từ localStorage
function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("todoTasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}
