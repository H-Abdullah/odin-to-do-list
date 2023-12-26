export function dragDropPanelHandler() {
  const panels = document.querySelectorAll(".panel");
  const trashCanPanel = document.getElementById("trash-can-panel");
  const trashCanIconWrapper = document.getElementById("trash-can-icon-wrapper");
  const taskPanel = document.getElementById("task-panel");

  function resetTrashCan() {
    trashCanPanel.style.backgroundColor = "#f5f5f5";
  }

  function handleDragStart() {
    this.classList.add("draggable");
    trashCanIconWrapper.classList.add("animate-trash-can");
    // add EventListener to dragEnter and dragLeave
    trashCanPanel.addEventListener("dragenter", handleDragEnter);
    trashCanPanel.addEventListener("dragleave", handleDragLeave);
  }

  function handleDragEnd() {
    this.classList.remove("draggable");
    trashCanIconWrapper.classList.remove("animate-trash-can");
    // remove EventListener to prevent memory leaking
    trashCanPanel.removeEventListener("dragenter", handleDragEnter);
    trashCanPanel.removeEventListener("dragleave", handleDragLeave);
    // Reset the trash can color
    resetTrashCan();
  }

  function handleDragEnter() {
    trashCanPanel.style.backgroundColor = "red";
  }

  function handleDragLeave() {
    resetTrashCan();
  }

  function handleDragOver(ev) {
    ev.preventDefault();
  }

  function handleDrop(ev) {
    ev.preventDefault();
    if (ev.target.id === "trash-can-panel") {
      const draggedPanel = document.querySelector(".draggable");
      if (draggedPanel) {
        taskPanel.removeChild(draggedPanel);
        resetTrashCan();
      }
    }
  }

  function startPanelsEvent() {
    // invoked all eventListener
    panels.forEach(panel => {
      panel.addEventListener("dragstart", handleDragStart);
      panel.addEventListener("dragend", handleDragEnd);
    });
  }

  function startTrashCanEvent() {
    trashCanPanel.addEventListener("dragover", handleDragOver);
    trashCanPanel.addEventListener("drop", handleDrop);
  }

  return {
    startPanelsEvent: startPanelsEvent(),
    startTrashCanEvent: startTrashCanEvent(),
  };
}