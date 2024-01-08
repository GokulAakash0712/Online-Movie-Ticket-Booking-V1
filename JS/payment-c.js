function showCardFields() {
  document.getElementById("cardFields").style.display = "block";
  document.getElementById("upiFields").style.display = "none";
}

function showUPIFields() {
  document.getElementById("cardFields").style.display = "none";
  document.getElementById("upiFields").style.display = "block";
}

function openPaymentModal() {
  var cardFields = document.getElementById("cardFields");
  var upiFields = document.getElementById("upiFields");

  var cardPayment = document.getElementById("cardPayment").checked;
  var upiPayment = document.getElementById("upi").checked;

  if (cardPayment) {
    showCardFields();
  } else if (upiPayment) {
    showUPIFields();
  }

  document.getElementById("paymentModal").style.display = "block";
}

function closePaymentModal() {
  document.getElementById("paymentModal").style.display = "none";
}

function validateCardFields() {
  var cardNumber = document.getElementById("cardNumber").value;
  var expiryDate = document.getElementById("expiryDate").value;
  var cvv = document.getElementById("cvv").value;

  var cardNumberError = document.getElementById("cardNumberError");
  var expiryDateError = document.getElementById("expiryDateError");
  var cvvError = document.getElementById("cvvError");

  cardNumberError.innerHTML = "";
  expiryDateError.innerHTML = "";
  cvvError.innerHTML = "";

  var cardNumberRegex = /^[0-9]{16}$/;
  var expiryDateRegex = /^(0[1-9]|1[0-2])\/[2-9][0-9]$/; // Updated regex for MM/YY

  if (cardNumber.trim() === "") {
    cardNumberError.innerHTML = "Card number is required";
    cardNumberError.classList.add("error-message");
    return false;
  } else if (!cardNumberRegex.test(cardNumber)) {
    cardNumberError.innerHTML = "Invalid card number";
    cardNumberError.classList.add("error-message");
    return false;
  }

  if (expiryDate.trim() === "") {
    expiryDateError.innerHTML = "Expiry date is required";
    expiryDateError.classList.add("error-message");
    return false;
  } else if (!expiryDateRegex.test(expiryDate)) {
    expiryDateError.innerHTML = "Invalid expiry date";
    expiryDateError.classList.add("error-message");
    return false;
  } else {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear() % 100;
    var currentMonth = currentDate.getMonth() + 1;

    var inputMonth = parseInt(expiryDate.split("/")[0]);
    var inputYear = parseInt(expiryDate.split("/")[1]);

    if (
      inputYear < currentYear ||
      (inputYear === currentYear && inputMonth < currentMonth)
    ) {
      expiryDateError.innerHTML = "Expiry date should be in the future";
      expiryDateError.classList.add("error-message");
      return false;
    }
  }

  if (cvv.trim() === "") {
    cvvError.innerHTML = "CVV is required";
    cvvError.classList.add("error-message");
    return false;
  } else if (!/^[0-9]{3}$/.test(cvv)) {
    cvvError.innerHTML = "Invalid CVV";
    cvvError.classList.add("error-message");
    return false;
  }

  // Validation passed
  return true;
}

function validateUpiFields() {
  var upiId = document.getElementById("upiId").value;
  var upiIdError = document.getElementById("upiIdError");

  upiIdError.innerHTML = "";

  var upiIdRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (upiId.trim() === "") {
    upiIdError.innerHTML = "UPI ID is required";
    upiIdError.classList.add("error-message");
    return false;
  } else if (!upiIdRegex.test(upiId)) {
    upiIdError.innerHTML = "Invalid UPI ID";
    upiIdError.classList.add("error-message");
    return false;
  }

  // Validation passed
  return true;
}

function redirectToPaymentPage() {
  var cardPayment = document.getElementById("cardPayment").checked;

  var isValid;
  if (cardPayment) {
    isValid = validateCardFields();
  } else {
    isValid = validateUpiFields();
  }

  if (isValid) {
    console.log("Redirecting to payment.html");
    // Redirect to the payment.html page
    window.location.href = "6.Payment Successful.html";
  } else {
    console.log("Validation failed. Errors present.");
  }
}

function validateEmailFooter(email1) {
  var emailInput = document.querySelector(".form-control");
  var subscribeButton = document.querySelector(".btn-subscribe");

  var emailRegex = /^[^*,!"\/\\{}\[\].,~#$%^&()+\-=?<>\s']+@\S+\.\S{2,6}$/;
  var isValidEmail = emailRegex.test(email1);

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
