document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    let isValid = true;

    
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");

  
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        name.classList.add("fail");
        name.classList.remove("success");
        isValid = false;
    } else {
        nameError.textContent = "";
        name.classList.add("success");
        name.classList.remove("fail");
    }

    
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        email.classList.add("fail");
        email.classList.remove("success");
        isValid = false;
    } else if (!email.value.includes("@")) {
        emailError.textContent = "Email must contain '@'";
        email.classList.add("fail");
        email.classList.remove("success");
        isValid = false;
    } else {
        emailError.textContent = "";
        email.classList.add("success");
        email.classList.remove("fail");
    }

    // PASSWORD validation
    if (password.value.trim() === "") {
        passError.textContent = "Password is required";
        password.classList.add("fail");
        password.classList.remove("success");
        isValid = false;
    } else if (password.value.length < 8) {
        passError.textContent = "Password must be at least 8 characters";
        password.classList.add("fail");
        password.classList.remove("success");
        isValid = false;
    } else {
        passError.textContent = "";
        password.classList.add("success");
        password.classList.remove("fail");
    }

    // If all is valid
    if (isValid) {
        alert("Form submitted successfully!");
    }
});
