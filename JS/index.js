function validateEmail(email) {
  var emailInput = document.querySelector(".form-control");
  var subscribeButton = document.querySelector(".btn-subscribe");

  var emailRegex = /^[^*,!"\/\\{}\[\].,~#$%^&()+\-=?<>\s']+@\S+\.\S{2,6}$/;

  var isValidEmail = emailRegex.test(email);

  if (isValidEmail) {
    emailInput.classList.remove("invalid-email");
    emailInput.classList.add("valid-email");
    subscribeButton.disabled = false;
  } else {
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

$(document).ready(function () {
  // Function to display movies based on the search input
  function displayMovies(searchTerm) {
    var movieList = $("#movieList");
    var allMovies = $(".card-movie");

    allMovies.hide(); // Hide all movies initially

    allMovies
      .filter(function () {
        return $(this).text().toLowerCase().includes(searchTerm.toLowerCase());
      })
      .show(); // Show only the matching movies
  }

  // Event listener for the search input
  $("#movieSearch").on("input", function () {
    var searchTerm = $(this).val();
    displayMovies(searchTerm);
  });
});
