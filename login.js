// Function to set a message for a form, such as an error or success message
function setFormMessage(formElement, type, message) {
    // Find the element within the form that displays messages
    const messageElement = formElement.querySelector(".form__message");
    // Set the text content of the message element
    messageElement.textContent = message;
    // Remove existing success or error classes
    messageElement.classList.remove("form__message--success", "form__message--error");
    // Add a new class based on the message type (success or error)
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
    // Select the login form and the create account form elements
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    // Add an event listener for the login form submission
    loginForm.addEventListener("submit", e => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Set an error message on the form to indicate invalid credentials
        setFormMessage(loginForm, "error", "Invalid credentials");
    });

    // Add blur and input event listeners for all input fields with the "form__input" class
    document.querySelectorAll(".form__input").forEach(inputElement => {
        // Validate the input when the field loses focus (blur event)
        inputElement.addEventListener("blur", e => {
            if (e.target.type === "text" || e.target.type === "password") {
                const inputValue = e.target.value.trim();
                // Check if the input length is between 1 and 6 characters
                if (inputValue.length > 0 && inputValue.length < 6) {
                    setInputError(inputElement, "Field must be at least 6 characters");
                }
            }
        });
        // Clear the error message when the user starts typing (input event)
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });

    // Enhanced login form submission handler with validation logic
    loginForm.addEventListener("submit", e => {
        e.preventDefault(); // Prevent the default form submission behavior
        
        // Get references to the username and password input fields
        const usernameInput = loginForm.querySelector('input[type="text"]');
        const passwordInput = loginForm.querySelector('input[type="password"]');
        
        // Check for any existing error messages for these inputs
        const usernameError = usernameInput.parentElement.querySelector(".form__input-error-message").textContent;
        const passwordError = passwordInput.parentElement.querySelector(".form__input-error-message").textContent;
    
        // Select the general error message element
        const generalErrorMessage = document.querySelector("#generalErrorMessage");

        // If any errors exist, display a general error message and exit the function
        if (usernameError || passwordError) {
            generalErrorMessage.textContent = "Please fix the errors below before continuing.";
            return;
        }
    
        // Retrieve trimmed values for username and password
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();
    
        // If either username or password is empty, show an error message
        if (usernameValue === "" || passwordValue === "") {
            generalErrorMessage.textContent = "Please type a username and password.";
            return;
        }
    
        // Clear the general error message and save the username in localStorage
        generalErrorMessage.textContent = "";
        localStorage.setItem("loggedInUsername", usernameValue);
        // Redirect the user to the main app page
        window.location.href = "app.html";
    });

    // Example: Store a predefined username in localStorage for testing purposes
    const username = "username_from_login";
    localStorage.setItem("loggedInUsername", username);
});
