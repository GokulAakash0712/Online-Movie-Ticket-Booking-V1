// Function to handle movie rating
window.rateMovie = function (rating) {
  var stars = document.getElementById("ratingStars").getElementsByTagName("i");

  for (var i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].classList.remove("fa-star-o");
      stars[i].classList.add("fa-star");
    } else {
      stars[i].classList.remove("fa-star");
      stars[i].classList.add("fa-star-o");
    }
  }
};

// Function to submit the rating
window.submitRating = function () {
  var stars = document
    .getElementById("ratingStars")
    .getElementsByClassName("fa-star").length;

  // Display the submitted rating within the modal
  var submittedRatingDiv = document.getElementById("submittedRating");
  submittedRatingDiv.innerHTML =
    "<p>You submitted a rating of " + stars + " stars!</p>";
};

function validateEmail(email) {
  var emailInput = document.querySelector(".form-control");
  var subscribeButton = document.querySelector(".btn-subscribe");

  var emailRegex = /^[^*,!"\/\\{}\[\].,~#$%^&()+\-=?<>\s']+@\S+\.\S{2,6}$/;

  var isValidEmail = emailRegex.test(email);

  if (isValidEmail) {
    // Apply valid email styling
    emailInput.classList.remove("invalid-email");
    emailInput.classList.add("valid-email");
    subscribeButton.disabled = false;
  } else {
    // Apply invalid email styling
    emailInput.classList.remove("valid-email");
    emailInput.classList.add("invalid-email");
    subscribeButton.disabled = true;
  }
}
function validateEmail1() {
  var email = document.getElementById("email1").value;
  var emailError = document.getElementById("emailError1");

  // Reset previous error messages
  emailError.innerText = "";

  if (email.trim() === "") {
    emailError.innerText = "Email is required";
  } else if (!isValidEmail(email)) {
    emailError.innerText = "Invalid email address";
  }
}

function validateMobile() {
  var mobile = document.getElementById("mobile").value;
  var mobileError = document.getElementById("mobileError");

  // Reset previous error messages
  mobileError.innerText = "";

  if (mobile.trim() === "") {
    mobileError.innerText = "Mobile is required";
  } else if (!isValidMobile(mobile)) {
    mobileError.innerText = "Invalid mobile number";
  }
}

function isValidEmail(email) {
  return email.trim() !== "";
}

function isValidMobile(mobile) {
  return mobile.trim() !== "";
}

function resendBookingConfirmation() {
  // Reset previous success message
  document.getElementById("successMessage").style.display = "none";

  // Validate the form
  validateEmail1();
  validateMobile();

  var emailError = document.getElementById("emailError1");
  var mobileError = document.getElementById("mobileError");

  // Check if there are any error messages
  if (emailError.innerText === "" && mobileError.innerText === "") {
    // Form is valid, display success message
    document.getElementById("successMessage").style.display = "block";
  }
}
