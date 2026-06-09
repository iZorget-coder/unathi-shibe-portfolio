const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');

let formState = {
    name: { value: '', isValid: false, touched: false },
    email: { value: '', isValid: false, touched: false },
    subject: { value: '', isValid: false, touched: false },
    message: { value: '', isValid: false, touched: false }
};

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateField(fieldName, value) {
    switch (fieldName) {
        case 'name':
            return value.trim().length >= 2;
        case 'email':
            return validateEmail(value);
        case 'subject':
            return value.trim().length >= 3;
        case 'message':
            return value.trim().length >= 10;
        default:
            return false;
    }
}

function getErrorMessage(fieldName, value) {
    switch (fieldName) {
        case 'name':
            return 'Name must be at least 2 characters';
        case 'email':
            return 'Please enter a valid email address';
        case 'subject':
            return 'Subject must be at least 3 characters';
        case 'message':
            return 'Message must be at least 10 characters';
        default:
            return '';
    }
}

function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function hideError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

function updateSubmitButton() {
    const allValid = formState.name.isValid &&
        formState.email.isValid &&
        formState.subject.isValid &&
        formState.message.isValid;

    if (allValid) {
        submitBtn.disabled = false;
        submitBtn.classList.add('active');
        submitBtn.textContent = 'Send Message';
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('active');
        submitBtn.textContent = 'Please fill all fields correctly';
    }
}

function handleInput(e) {
    const { id, value } = e.target;
    const fieldName = id;
    const isValid = validateField(fieldName, value);

    formState[fieldName] = {
        value: value,
        isValid: isValid,
        touched: formState[fieldName].touched
    };

    if (formState[fieldName].touched) {
        if (!isValid) {
            showError(e.target, document.getElementById(`${fieldName}Error`), getErrorMessage(fieldName, value));
        } else {
            hideError(e.target, document.getElementById(`${fieldName}Error`));
        }
    }

    updateSubmitButton();
}

function handleBlur(e) {
    const { id, value } = e.target;
    const fieldName = id;
    const isValid = validateField(fieldName, value);

    formState[fieldName] = {
        value: value,
        isValid: isValid,
        touched: true
    };

    if (!isValid) {
        showError(e.target, document.getElementById(`${fieldName}Error`), getErrorMessage(fieldName, value));
    } else {
        hideError(e.target, document.getElementById(`${fieldName}Error`));
    }
    updateSubmitButton();
}

function handleSubmit(e) {
    e.preventDefault();

    const allValid = formState.name.isValid &&
        formState.email.isValid &&
        formState.subject.isValid &&
        formState.message.isValid;

    if (allValid) {
        console.log('Form submitted:', {
            name: formState.name.value,
            email: formState.email.value,
            subject: formState.subject.value,
            message: formState.message.value
        });
        alert('Thank you for your message! I\'ll get back to you soon.');

        form.reset();
        formState = {
            name: { value: '', isValid: false, touched: false },
            email: { value: '', isValid: false, touched: false },
            subject: { value: '', isValid: false, touched: false },
            message: { value: '', isValid: false, touched: false }
        };
        updateSubmitButton();
    }
}

nameInput.addEventListener('input', handleInput);
nameInput.addEventListener('blur', handleBlur);
emailInput.addEventListener('input', handleInput);
emailInput.addEventListener('blur', handleBlur);
subjectInput.addEventListener('input', handleInput);
subjectInput.addEventListener('blur', handleBlur);
messageInput.addEventListener('input', handleInput);
messageInput.addEventListener('blur', handleBlur);
form.addEventListener('submit', handleSubmit);