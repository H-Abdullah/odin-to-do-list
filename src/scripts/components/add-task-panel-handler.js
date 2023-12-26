import { inputErrorText } from "./input-error.js";
import createPanel from "./create-panel.js";


export function addTaskHandler() {
  const taskInput = document.getElementById("add-task");
  const taskInputLabel = document.querySelector(`label[for='${taskInput.id}']`);
  const taskPanel = document.getElementById("task-panel");

  // invoke eventlistener for clicking '+' label 
  taskInputLabel.addEventListener('click', () => {
    // set logic to handle task input 
    // Set letter limit smaller than 4
    if (taskInput.value.length < 4) {
      inputErrorText().showError("Minimum is 4 letters, Maximum is 15");
    };

    // Proceed if letter more than 4 
    if (taskInput.value.length >= 4) {
      inputErrorText().hideError();
      // create a new panel 
      const panelDiv = new createPanel(taskInput);
      // append panel div to parent 
      taskPanel.appendChild(panelDiv);
      // clear task input after creating a new task panel 
      taskInput.value = "";
    }
  });
}
