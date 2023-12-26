import { addTaskHandler } from "./components/add-task-panel-handler.js";
import { dragDropPanelHandler } from "./components/drag-drop-panel-handler.js";


document.addEventListener("DOMContentLoaded", () => {
  addTaskHandler();
  dragDropPanelHandler();
})

