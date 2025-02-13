const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    // Style Message for Error
    if (!isValid) {
        message.textContent = 'Please Fill out All Fields';
        message.style.color = 'var(--color4)';
        messageContainer.style.border= 'solid 2px var(--color4)';
        messageContainer.style.backgroundColor = 'var(--textColor)';
        return;
    }
    // Check if passwords Match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.border = 'var(--color3)';
        password2El.style.border = 'var(--color3)';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'var(--color4)';
        messageContainer.style.border= 'solid 2px var(--color4)';
        messageContainer.style.backgroundColor = 'var(--textColor)';
        password1El.style.borderColor = 'var(--color4)';
        password2El.style.borderColor = 'var(--color4)';
    }
    return;
    // Style Message for Success
    if (isValid && passwordsMatch) {
        message.textContent = 'Registration Successful';
        message.style.color = 'var(--color3)';
        messageContainer.style.border= 'solid 2px var(--color3)';
        messageContainer.style.backgroundColor = 'var(--textColor)';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Proceed with User Data Here
}

function processFormData(event) {
    event.preventDefault();
    // Validate Form
    validateForm();
    // Submit Data if Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}


// Event Listeners
form.addEventListener('submit', processFormData);