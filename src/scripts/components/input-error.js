export function inputErrorText(text) {

  // private variable
  // get text input
  let getText = text;

  // get input-error <p>
  const textInputError = document.querySelector("p.input-error");

  function showError(getText) {
    // remove .hide-error to show
    textInputError.classList.remove("hide-error");
    // change text dynamically 
    textInputError.textContent = getText;
  }

  function hideError() {
    // add .hide-error to hide
    textInputError.classList.add("hide-error");    
  }
  
  // public methods
  return {
    showError: showError,
    hideError: hideError,
  }
}
