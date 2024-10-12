function duplicateContainer() {
    const holdContainer = document.querySelector('.hold-container');
    const originalContainer = document.querySelector('.container');
    const textInput = document.querySelector('.text-input');
  
    const clone = originalContainer.cloneNode(true); // Clone the container with its children
  
    // Get the text element from the cloned container
    const clonedTextElement = clone.querySelector('.text-element');
  
    // Set the text of the cloned text element to the value of the text input
    clonedTextElement.textContent = textInput.value;
  
    // Append the clone to the hold container
    holdContainer.appendChild(clone);
  }
  
  