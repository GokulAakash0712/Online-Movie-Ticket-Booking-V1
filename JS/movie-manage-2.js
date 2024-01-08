function addMovie() {
  // Validate the form before proceeding
  if (validateForm()) {
    // The form is valid, proceed with adding the movie to the table
    addToTable();
    alert("Movie added successfully!");
  }
}

function validateForm() {
  // Validate movie name
  var movieName = document.getElementById("movieName").value;
  if (movieName.trim() === "") {
    displayErrorMessage("Please enter a valid Movie Name.");
    return false;
  }

  // Validate votes
  var votes = document.getElementById("votes").value;
  if (isNaN(votes) || votes <= 0) {
    displayErrorMessage("Please enter a valid Votes value.");
    return false;
  }

  // Validate movie length
  var movieLength = document.getElementById("movieLength").value;
  if (movieLength.trim() === "") {
    displayErrorMessage("Please enter a valid Movie Length.");
    return false;
  }

  // Validate file extensions for images
  var rcv1 = document.getElementById("rcv1").files[0];
  if (!validateFileExtension(rcv1, ["jpg", "jpeg", "png"])) {
    displayErrorMessage("Please select a valid image file for Movie Image 1.");
    return false;
  }

  var rcv2 = document.getElementById("rcv2").files[0];
  if (!validateFileExtension(rcv2, ["jpg", "jpeg", "png"])) {
    displayErrorMessage("Please select a valid image file for Movie Image 2.");
    return false;
  }

  // Validate file extension for video
  var videoFile = document.getElementById("videoFile").files[0];
  if (!validateVideoExtension(videoFile, ["mp4"])) {
    displayErrorMessage("Please select a valid video file for the Trailer.");
    return false;
  }

  // Validate future date for upload date
  var today = new Date();
  var uploadDateInput = new Date(document.getElementById("uploadDate").value);
  if (uploadDateInput <= today) {
    displayErrorMessage("Please select a future date for Upload Date.");
    return false;
  }

  return true;
}

function validateFileExtension(fileInput, allowedExtensions) {
  if (!fileInput) {
    return false;
  }

  var fileName = fileInput.name;
  var fileExtension = fileName.split(".").pop().toLowerCase();

  return allowedExtensions.includes(fileExtension);
}

function validateVideoExtension(fileInput, allowedExtensions) {
  return validateFileExtension(fileInput, allowedExtensions);
}

function displayErrorMessage(message) {
  document.getElementById("errorMessageText").innerText = message;
  $("#errorMessageModal").modal("show");
}

function addToTable() {
  var table = document
    .getElementById("mydata")
    .getElementsByTagName("tbody")[0];

  // Create a new row
  var newRow = table.insertRow(table.rows.length);

  // Get values from the form
  var movieName = document.getElementById("movieName").value;
  var votes = document.getElementById("votes").value;
  var dimension = document.getElementById("dimension").value;
  var language = document.getElementById("language").value;
  var movieLength = document.getElementById("movieLength").value;
  var rcv1 = document.getElementById("rcv1").files[0]; // Use files[0] to get the selected file
  var rcv2 = document.getElementById("rcv2").files[0]; // Use files[0] to get the selected file
  var uploadDate = document.getElementById("uploadDate").value;
  var aboutContent = document.getElementById("aboutContent").value;

  //  cells with the form values to the new row
  newRow.insertCell(0).innerHTML = movieName;
  newRow.insertCell(1).innerHTML = votes;
  newRow.insertCell(2).innerHTML = dimension;
  newRow.insertCell(3).innerHTML = language;
  newRow.insertCell(4).innerHTML = movieLength;

  // Create img elements for displaying images
  var img1 = document.createElement("img");
  img1.src = URL.createObjectURL(rcv1);
  img1.alt = "Movie Image 1";
  img1.style.width = "50px"; 
  newRow.insertCell(5).appendChild(img1);

  var img2 = document.createElement("img");
  img2.src = URL.createObjectURL(rcv2);
  img2.alt = "Movie Image 2";
  img2.style.width = "50px"; 
  newRow.insertCell(6).appendChild(img2);

  newRow.insertCell(7).innerHTML = uploadDate;
  newRow.insertCell(8).innerHTML = aboutContent;
}
