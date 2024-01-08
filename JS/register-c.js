function validateForm() {
  // Validate each field
  var isFirstnameValid = validateFirstname();
  var isLastnameValid = validateLastname();
  var isUsernameValid = validateUsername();
  var isEmailValid = validateEmail();
  var isMobileValid = validateMobile();
  var isPasswordValid = validatePassword();
  var isConfirmPasswordValid = validateConfirmPassword();

  // Check if all validations pass
  if (
    isFirstnameValid &&
    isLastnameValid &&
    isUsernameValid &&
    isEmailValid &&
    isMobileValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    // If all validations pass, show success message
    document.getElementById("successMessage").style.display = "block";
    return false; // Returning false to prevent form submission
  } else {
    // If any validation fails, return false to prevent form submission
    return false;
  }
}

function validateFirstname() {
  var firstname = document.getElementById("firstname").value;
  var firstnameError = document.getElementById("firstnameError");

  firstnameError.innerHTML = "";

  var validAlphabetic = /^[A-Za-z]+$/;

  if (firstname.trim() === "") {
    firstnameError.innerHTML = "Firstname is required";
    firstnameError.classList.add("error-message");
    return false;
  } else if (!validAlphabetic.test(firstname)) {
    firstnameError.innerHTML = "Firstname must contain only alphabets";
    firstnameError.classList.add("error-message");
    return false;
  } else {
    firstnameError.classList.remove("error-message");
    return true;
  }
}

function validateLastname() {
  var lastname = document.getElementById("lastname").value;
  var lastnameError = document.getElementById("lastnameError");

  lastnameError.innerHTML = "";

  var validAlphabetic = /^[A-Za-z]+$/;

  if (lastname.trim() === "") {
    lastnameError.innerHTML = "Lastname is required";
    lastnameError.classList.add("error-message");
    return false;
  } else if (!validAlphabetic.test(lastname)) {
    lastnameError.innerHTML = "Lastname must contain only alphabets";
    lastnameError.classList.add("error-message");
    return false;
  } else {
    lastnameError.classList.remove("error-message");
    return true;
  }
}

function validateUsername() {
  var username = document.getElementById("username").value;
  var usernameError = document.getElementById("usernameError");

  usernameError.innerHTML = "";

  // Check if the username starts with a letter
  var validUsername = /^[A-Za-z][A-Za-z0-9_]*$/;

  if (username.trim() === "") {
    usernameError.innerHTML = "Username is required";
    usernameError.classList.add("error-message");
    return false;
  } else if (!validUsername.test(username)) {
    usernameError.innerHTML = "Invalid username format";
    usernameError.classList.add("error-message");
    return false;
  } else {
    usernameError.classList.remove("error-message");
    return true;
  }
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailError = document.getElementById("emailError");

  emailError.innerHTML = "";

  var validEmail = /^[^*,!"\/\\{}\[\].,~#$%^&()+\-=?<>\s']+@\S+\.\S{2,6}$/;

  if (email.trim() === "") {
    emailError.innerHTML = "Email is required";
    emailError.classList.add("error-message");
    return false;
  } else if (!validEmail.test(email)) {
    emailError.innerHTML = "Invalid email address";
    emailError.classList.add("error-message");
    return false;
  } else {
    emailError.classList.remove("error-message");
    return true;
  }
}

function validateMobile() {
  var mobile = document.getElementById("mobile").value;
  var mobileError = document.getElementById("mobileError");

  mobileError.innerHTML = "";

  // Check if the mobile number is valid
  var validMobile = /^[6-9]\d{9}$/;

  if (mobile.trim() === "") {
    mobileError.innerHTML = "Mobile is required";
    mobileError.classList.add("error-message");
    return false;
  } else if (!validMobile.test(mobile)) {
    mobileError.innerHTML = "Invalid mobile number";
    mobileError.classList.add("error-message");
    return false;
  } else {
    mobileError.classList.remove("error-message");
    return true;
  }
}

function validatePassword() {
  var password = document.getElementById("password").value;
  var passwordError = document.getElementById("passwordError");

  passwordError.innerHTML = "";

  if (password.trim() === "") {
    passwordError.innerHTML = "Password is required";
    passwordError.classList.add("error-message");
    return false;
  } else if (password.length < 6) {
    passwordError.innerHTML = "Password must be at least 6 characters";
    passwordError.classList.add("error-message");
    return false;
  } else {
    passwordError.classList.remove("error-message");
    return true;
  }
}

function validateConfirmPassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var confirmPasswordError = document.getElementById("confirmPasswordError");

  confirmPasswordError.innerHTML = "";

  if (confirmPassword.trim() === "") {
    confirmPasswordError.innerHTML = "Confirm Password is required";
    confirmPasswordError.classList.add("error-message");
    return false;
  } else if (confirmPassword !== password) {
    confirmPasswordError.innerHTML = "Passwords do not match";
    confirmPasswordError.classList.add("error-message");
    return false;
  } else {
    confirmPasswordError.classList.remove("error-message");
    return true;
  }
}

function redirectToSignIn() {
  window.location.href = "7.login.html";
}
