// Get the registration <form> element from the DOM.
const form = document.getElementById("registration-form");
const submitButton = form.querySelector("button");
// Get the <input> elements from the DOM.
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const checkPasswords = () => {
    const passwordsMatch = passwordInput.value === confirmPasswordInput.value;
    if (passwordsMatch) {
        // Clear any previous error message.
        confirmPasswordInput.setCustomValidity("");
    } else {
        // Setting this error message will prevent the form from being submitted.
        confirmPasswordInput.setCustomValidity("Sus contraseñas no coinciden. Por favor, escribe la misma contraseña de nuevo.");
    }
};

const addPasswordInputEventListeners = () => {
    passwordInput.addEventListener("input", checkPasswords, false);
    confirmPasswordInput.addEventListener("input", checkPasswords, false);
};

const formSubmissionAttempted = () => {
    form.classList.add("submission-attempted");
};

const addSubmitClickEventListener = () => {
    submitButton.addEventListener("click", formSubmissionAttempted, false);
};

addPasswordInputEventListeners();
addSubmitClickEventListener();
