function deleteTiming(button) {
  // Get the parent row of the clicked button and remove it
  var row = button.parentNode;
  row.parentNode.removeChild(row);
}

function addTiming(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input value
  var newTimingInput = document.getElementById("newTiming");
  var newTiming = newTimingInput.value;

  if (newTiming.trim() !== "") {
    // Create a new row with the entered timing and a delete button
    var newRow = document.createElement("div");
    newRow.className = "row flex-row";
    newRow.innerHTML =
      '<p class="m-2">' +
      newTiming +
      "</p>" +
      '<button class="btn login-btn m-2" onclick="deleteTiming(this)">Delete</button>';

    // Append the new row to the showTimings container
    document.getElementById("showTimings").appendChild(newRow);

    // Clear the input field
    newTimingInput.value = "";
  }
}

function addTheatre() {
  // Get theatre details from input fields
  var theatreId = document.getElementById("theatreId").value;
  var theatreName = document.getElementById("theatreName").value;
  var city = document.getElementById("city").value;
  var numOfScreens = document.getElementById("numOfScreens").value;
  var numOfShows = document.getElementById("numOfShows").value;

  // Create a new row with theatre data
  var newRow = document.createElement("tr");
  newRow.innerHTML =
    "<td>" +
    theatreId +
    "</td>" +
    "<td>" +
    theatreName +
    "</td>" +
    "<td>" +
    city +
    "</td>" +
    "<td>" +
    numOfScreens +
    "</td>" +
    "<td>" +
    numOfShows +
    "</td>" +
    "<td>" +
    '<button class="btn btn-detail-crud m-2" onclick="editTheatre(\'' +
    theatreId +
    "')\">" +
    '<i class="fa fa-edit" aria-hidden="true"></i>' +
    "</button>" +
    '<button class="btn btn-detail-crud m-2" onclick="deleteTheatre(\'' +
    theatreId +
    "')\">" +
    '<i class="fa fa-trash" aria-hidden="true"></i>' +
    "</button>" +
    "</td>";

  // Append the new row to the table
  document
    .getElementById("mydata")
    .getElementsByTagName("tbody")[0]
    .appendChild(newRow);

  // Clear input fields
  document.getElementById("theatreId").value = "";
  document.getElementById("theatreName").value = "";
  document.getElementById("city").value = "";
  document.getElementById("numOfScreens").value = "";
  document.getElementById("numOfShows").value = "";
}

function deleteTheatre(theatreId) {
  // Get the confirmation modal
  var confirmationModal = new bootstrap.Modal(
    document.getElementById("deleteConfirmationModal")
  );

  // Get the confirm delete button
  var confirmDeleteBtn = document.getElementById("confirmDeleteBtn");

  // Set up a click event listener for the confirmation button
  confirmDeleteBtn.addEventListener("click", function confirmDelete() {
    // Remove the event listener to avoid multiple executions
    confirmDeleteBtn.removeEventListener("click", confirmDelete);

    // Perform the deletion
    var table = document.getElementById("mydata");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName("td");
      if (cells.length > 0 && cells[0].innerHTML === theatreId) {
        table.deleteRow(i);
        confirmationModal.hide(); // Hide the modal
        break;
      }
    }
  });

  // Display the confirmation modal
  confirmationModal.show();
}
var editTheatreModal = new bootstrap.Modal(
  document.getElementById("editTheatreModal")
);

function editTheatre(theatreId) {
  // Find the row in the table with the given theatreId
  var table = document.getElementById("mydata");
  var rows = table.getElementsByTagName("tr");

  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    if (cells.length > 0 && cells[0].innerHTML === theatreId) {
      // Set the current data in the modal inputs
      document.getElementById("editTheatreId").value = theatreId;
      document.getElementById("editTheatreName").value = cells[1].innerHTML;
      document.getElementById("editCity").value = cells[2].innerHTML;
      document.getElementById("editNumOfScreens").value = cells[3].innerHTML;
      document.getElementById("editNumOfShows").value = cells[4].innerHTML;

      // Open the edit theatre modal
      editTheatreModal.show();
      break;
    }
  }
}

function saveChanges() {
  // Reset previous error messages
  resetErrorMessages();

  var theatreName = document.getElementById("editTheatreName").value;
  var city = document.getElementById("editCity").value;
  var numOfScreens = document.getElementById("editNumOfScreens").value;
  var numOfShows = document.getElementById("editNumOfShows").value;

  var isValid = true;

  if (theatreName.trim() === "") {
    displayErrorMessage("errorTheatreName", "Theatre Name is required");
    isValid = false;
  }

  if (city.trim() === "") {
    displayErrorMessage("errorCity", "City is required");
    isValid = false;
  }

  if (numOfScreens.trim() === "") {
    displayErrorMessage("errorNumOfScreens", "Number of Screens is required");
    isValid = false;
  }

  if (numOfShows.trim() === "") {
    displayErrorMessage("errorNumOfShows", "Number of Shows is required");
    isValid = false;
  }

  if (isValid) {
    // Display success message
    document.getElementById("successMessage").style.display = "block";
    console.log("Changes saved successfully!");
  }
}

function displayErrorMessage(elementId, message) {
  var errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.innerText = message;
  }
}

function resetErrorMessages() {
  var errorElements = document.querySelectorAll(".text-danger");
  errorElements.forEach(function (element) {
    element.innerText = "";
  });

  // Hide success message when resetting error messages
  document.getElementById("successMessage").style.display = "none";
}
