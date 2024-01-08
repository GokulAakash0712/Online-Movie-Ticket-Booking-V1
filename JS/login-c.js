function validateForm() {
  var username = document.getElementById("user").value;
  var password = document.getElementById("pswd").value;

  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");
  var invalidError = document.getElementById("invalidError");

  // Reset error messages
  usernameError.innerHTML = "";
  passwordError.innerHTML = "";
  invalidError.innerHTML = "";

  // Static username and password
  var sampleUsername = "GokulAakash07";
  var samplePassword = "Aakash@0712";

  var isUsernameValid = true;
  var isPasswordValid = true;

  // Validate username
  if (username.trim() === "") {
    usernameError.innerHTML = "Username is required.";
    isUsernameValid = false;
  } else if (!/^[A-Za-z]/.test(username)) {
    usernameError.innerHTML = "Username must start with an alphabet.";
    isUsernameValid = false;
  } else if (username !== sampleUsername) {
    isUsernameValid = false;
  }

  // Validate password
  if (password.trim() === "") {
    passwordError.innerHTML = "Password is required.";
    isPasswordValid = false;
  } else if (password !== samplePassword) {
    isPasswordValid = false;
  }

  // Display specific invalid messages for each field, even if they are empty
  if (password.trim() !== "" && username.trim() !== "") {
    if (!isUsernameValid || !isPasswordValid) {
      invalidError.innerHTML = "Invalid username or password.";
    }
  }
  // Return false if either the username or password is invalid or if any field is empty
  return isUsernameValid && isPasswordValid;
}
