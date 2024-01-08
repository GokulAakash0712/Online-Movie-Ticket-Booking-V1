function changePassword() {
  // Validate the form
  var isPasswordValid = validatePassword();
  var isConfirmPasswordValid = validateConfirmPassword();

  // Display success message if passwords are valid
  if (isPasswordValid && isConfirmPasswordValid) {
    var successMessage = document.getElementById("successMessage");
    successMessage.innerHTML =
      '<div class="alert alert-success" role="alert">Password changed successfully!</div>';
    document.getElementById("passwordFields").appendChild(successMessage);
  }
}

function redirectToSignIn() {
  window.location.href = "7.login.html";
}

function validateForm() {
  var isEmailValid = validateEmail();
  var isOTPValid = validateOTP();
  var isPasswordValid = validatePassword();
  var isConfirmPasswordValid = validateConfirmPassword();

  return (
    isEmailValid && isOTPValid && isPasswordValid && isConfirmPasswordValid
  );
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailError = document.getElementById("emailError");

  emailError.innerHTML = "";

  var emailRegex = /^[^*,!"\/\\{}\[\].,~#$%^&()+\-=?<>\s']+@\S+\.\S{2,6}$/;

  if (email.trim() === "") {
    emailError.innerHTML = "Email is required";
    emailError.classList.add("error-message");
    enableDisableBtn("sendOTPBtn", false);
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.innerHTML = "Invalid email format";
    emailError.classList.add("error-message");
    enableDisableBtn("sendOTPBtn", false);
    return false;
  } else {
    emailError.classList.remove("error-message");
    enableDisableBtn("sendOTPBtn", true);
    return true;
  }
}

function sendOTP() {
  if (validateEmail()) {
    // Display OTP-related elements
    document.getElementById("OTPError").innerHTML = "";
    document.getElementById("passwordFields").style.display = "none"; // Hide password fields initially

    // Enable Enter button
    enableDisableBtn("enterBtn", true);
  }
}

function validateOTP() {
  var otp = document.getElementById("OTP").value;
  var otpError = document.getElementById("OTPError");

  otpError.innerHTML = "";

  var staticOTP = "1234";

  if (otp.trim() === "") {
    otpError.innerHTML = "OTP is required";
    otpError.classList.add("error-message");
    enableDisableBtn("enterBtn", false);
    return false;
  } else if (otp !== staticOTP) {
    otpError.innerHTML = "Incorrect OTP";
    otpError.classList.add("error-message");
    enableDisableBtn("enterBtn", false);
    return false;
  } else {
    otpError.classList.remove("error-message");
    enableDisableBtn("enterBtn", true);
    return true;
  }
}

function showPasswordFields() {
  if (validateOTP()) {
    // Display password-related elements
    document.getElementById("passwordFields").style.display = "block";

    // Enable Change Password button
    enableDisableBtn("changePasswordBtn", true);
  }
}

function validatePassword() {
  var password = document.getElementById("password").value;
  var passwordError = document.getElementById("passwordError");

  passwordError.innerHTML = "";

  if (password.trim() === "") {
    passwordError.innerHTML = "Password is required";
    passwordError.classList.add("error-message");
    enableDisableBtn("changePasswordBtn", false);
    return false;
  } else if (password.length < 6) {
    passwordError.innerHTML = "Password must be at least 6 characters";
    passwordError.classList.add("error-message");
    enableDisableBtn("changePasswordBtn", false);
    return false;
  } else {
    passwordError.classList.remove("error-message");
    enableDisableBtn("changePasswordBtn", true);
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
    enableDisableBtn("changePasswordBtn", false);
    return false;
  } else if (confirmPassword !== password) {
    confirmPasswordError.innerHTML = "Passwords do not match";
    confirmPasswordError.classList.add("error-message");
    enableDisableBtn("changePasswordBtn", false);
    return false;
  } else {
    confirmPasswordError.classList.remove("error-message");
    enableDisableBtn("changePasswordBtn", true);
    return true;
  }
}

function enableDisableBtn(btnId, isEnabled) {
  var btn = document.getElementById(btnId);
  btn.disabled = !isEnabled;
}
