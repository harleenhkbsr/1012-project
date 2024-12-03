// Function to set a message for the form, such as an error or success message
function setFormMessage(formElement, type, message) {
    // Find the element within the form that displays messages
    const messageElement = formElement.querySelector(".form__message");

    // Set the text content of the message element
    messageElement.textContent = message;
    // Remove any existing success or error classes
    messageElement.classList.remove("form__message--success", "form__message--error");
    // Add a class based on the message type (success or error)
    messageElement.classList.add(`form__message--${type}`);
}

// Function to display an error message for a specific input field
function setInputError(inputElement, message) {
    // Add an error class to the input field
    inputElement.classList.add("form__input--error");
    // Find the error message element for this input and set its text
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

// Function to clear an error message for a specific input field
function clearInputError(inputElement) {
    // Remove the error class from the input field
    inputElement.classList.remove("form__input--error");
    // Clear the text of the error message element for this input
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

// Add an event listener to execute when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners for all input fields with the "form__input" class
    document.querySelectorAll(".form__input").forEach(inputElement => {
        // Validate the input when the field loses focus (blur event)
        inputElement.addEventListener("blur", e => {
            // Check if the input is the signup username and its length is less than 6
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 6) {
                // Set an error message if the username is too short
                setInputError(inputElement, "Username must be at least 6 characters in length");
            }
        });

        // Clear the error message when the user starts typing (input event)
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
