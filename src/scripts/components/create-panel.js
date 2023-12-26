export default function createPanel(text) {
  // create panel div 
  const panelDiv = document.createElement("div");
  panelDiv.classList.add("panel", "draggable");
  panelDiv.setAttribute("draggable", "true"); /* enable dragging */
  // create panel icon 
  const panelIcon = document.createElement("i");
  panelIcon.classList.add("fa-solid", "fa-bars");
  // create panel text 
  const panelText = document.createElement("p");
  panelText.textContent = text.value.trim();

  // append icon and text to div
  panelDiv.appendChild(panelIcon);
  panelDiv.appendChild(panelText);

  return panelDiv;
}