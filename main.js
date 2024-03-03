let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    validateInputs(registrationForm);
});

document.getElementById("name").addEventListener("blur", function () {
    validateInput(this);
});

document.getElementById("email").addEventListener("blur", function () {
    validateInput(this);
});

document.getElementById("password").addEventListener("blur", function () {
    validateInput(this);
});

function validateInputs(form) {
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let isValid = true;

    isValid = validateInput(nameInput) && isValid;
    isValid = validateInput(emailInput) && isValid;
    isValid = validateInput(passwordInput) && isValid;

    if (isValid) {
        alert(`Đăng kí thành công`);
        form.reset();
    }
}

function validateInput(input) {
    let isValid = true;

    if (input.value.trim() === "") {
        input.classList.add("invalid");
        isValid = false;
    } else {
        input.classList.remove("invalid");
    }

    if (input.type === "email" && !validateEmail(input.value)) {
        input.classList.add("invalid");
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
