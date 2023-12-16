function showTaskForm() {
  const taskForm = document.getElementById("add-task-form-wrapper");
  const addTaskBtn = document.getElementById("new-task");
  addTaskBtn.addEventListener('click', () => {
    taskForm.classList.remove("hide");
    taskForm.classList.add("visible");
  });
}

function hideTaskForm() {
  const taskForm = document.getElementById("add-task-form-wrapper");
  const closeBtn = document.getElementById("hide-task-form-btn");
  closeBtn.addEventListener('click', () => {
    taskForm.classList.add("hide");
    taskForm.classList.remove("visible");
  });
}

export default function taskFormVisibilty() {
  hideTaskForm();
  showTaskForm();
}
