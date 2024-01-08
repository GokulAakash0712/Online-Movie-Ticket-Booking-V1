var selectedSeats = {}; // Object to store selected seats by row
var rate = 0; // Initial rate

// Function to toggle seat selection
function toggleSeat(row, seatNumber) {
  // Check if the row is in the selectedSeats object
  if (!selectedSeats[row]) {
    selectedSeats[row] = []; // If not, initialize an array for the row
  }

  // Check if the seat is already selected in the row
  var seatIndex = selectedSeats[row].indexOf(seatNumber);
  if (seatIndex === -1) {
    // Seat is not selected, so add it to the array for the row
    selectedSeats[row].push(seatNumber);
    updateRate(true); // Increase rate
    document
      .getElementById(row + "-" + seatNumber)
      .classList.add("selected-clr"); // Add a class to indicate selected seat
  } else {
    // Seat is already selected, so remove it from the array for the row
    selectedSeats[row].splice(seatIndex, 1);
    updateRate(false); // Decrease rate
    document
      .getElementById(row + "-" + seatNumber)
      .classList.remove("selected-clr"); // Remove the class to indicate unselected seat
  }
}

// Function to update the rate based on seat selection
function updateRate(isSeatSelected) {
  // Increment or decrement the rate based on seat selection
  rate += isSeatSelected ? 150 : -150;

  // Update the button text with the new rate
  document.getElementById("rateButton").innerText =
    "Pay Rs." + Math.max(0, rate);
}

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
