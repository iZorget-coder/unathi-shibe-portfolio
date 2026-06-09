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
    name: {value: '', isValid: false, touched: false},
    email: {value: '', isValid: false, touched: false},
    subject: {value: '', isValid: false, touched: false},
    message: {value: '', isValid: false, touched: false}
};

function validateField(fieldName, value){
    switch(fieldName){
        case 'name':
            return value.trip().length >= 2;
        case 'email':
            return validateField(value);
        case 'subject':
            return value.trim().length >= 3;
        case 'message':
            return value.trim().length >= 10;
        default:
            return false;

    }
}

function getErrorMessage(fieldName, value){
    switch (fieldName){
        case 'name':
            return 'Name must be at least 2 characters';
        case 'email':
            return 'Please enter a valid email address';
        case 'subject':
            return 'Subject must be at least 3 characters';
        case 'message':
            return 'Message must be at least 10 charcters';
            default:
                return '';
    }
}


function showError(input, errorElement, message){
    input.classList.add('error');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}


function updateSubmitButton(){
    const allValid = formState.name.isValid &&
    formState.email.isValid &&
    formState.subject.isValid &&
    formState.message.isValid;

    if(allValid){
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
    const {id, value} = e.target;
}