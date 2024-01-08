document.addEventListener("DOMContentLoaded", function () {
  var editButtons = document.querySelectorAll(".editBtn");
  var deleteButtons = document.querySelectorAll(".deleteBtn");

  // Function to open edit modal and populate form fields
  function openEditModal(row) {
    var cells = row.cells;

    // Populate form fields with existing data
    $("#editMovieName").val(cells[0].innerText);
    $("#editVotes").val(cells[1].innerText);
    $("#editDimension").val(cells[2].innerText);
    $("#editLanguage").val(cells[3].innerText);
    $("#editMovieLength").val(cells[4].innerText);
    $("#editMovieImage").val(""); // set the actual image URL if available
    $("#editBannerImage").val(""); // set the actual banner URL if available
    $("#editDate").val(cells[7].innerText);
    $("#editTrailerVideo").val(""); // set the actual video URL if available

    // Show the edit modal
    $("#editMovieModal").modal("show");
  }

  // Function to open delete confirmation modal
  function openDeleteModal(row) {
    // Set a click event listener for the delete button inside the modal
    $("#deleteMovieBtn")
      .off("click")
      .on("click", function () {
        // Confirm and delete the row if confirmed
        row.remove();
        $("#deleteMovieModal").modal("hide"); // Hide the delete confirmation modal
      });

    // Show the delete confirmation modal
    $("#deleteMovieModal").modal("show");
  }

  // Edit and Delete button click events
  editButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var row = this.closest("tr");
      openEditModal(row);
    });
  });

  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var row = this.closest("tr");
      openDeleteModal(row);
    });
  });
});

function validateForm() {
  // Reset previous error messages and success message
  resetErrorMessages();
  resetSuccessMessage();

  var movieName = document.getElementById("editMovieName").value;
  var votes = document.getElementById("editVotes").value;
  var dimension = document.getElementById("editDimension").value;
  var movieImageInput = document.getElementById("editMovieImage");
  var bannerImageInput = document.getElementById("editBannerImage");
  var date = document.getElementById("editDate").value;
  var trailerVideoInput = document.getElementById("editTrailerVideo");

  var isValid = true;

  if (movieName.trim() === "") {
    displayErrorMessage("errorEditMovieName", "Movie Name is required");
    isValid = false;
  }

  if (votes.trim() === "") {
    displayErrorMessage("errorEditVotes", "Votes is required");
    isValid = false;
  }

  if (dimension.trim() === "") {
    displayErrorMessage("errorEditDimension", "Dimension is required");
    isValid = false;
  }

  // Validate Movie Image
  if (!validateFile(movieImageInput, ["jpg", "jpeg", "png"])) {
    displayErrorMessage(
      "errorEditMovieImage",
      "Invalid image file. Please choose a JPG, JPEG, or PNG file."
    );
    isValid = false;
  }

  // Validate Banner Image
  if (!validateFile(bannerImageInput, ["jpg", "jpeg", "png"])) {
    displayErrorMessage(
      "errorEditBannerImage",
      "Invalid image file. Please choose a JPG, JPEG, or PNG file."
    );
    isValid = false;
  }

  // Validate Trailer Video
  if (!validateFile(trailerVideoInput, ["mp4", "mov", "avi"])) {
    displayErrorMessage(
      "errorEditTrailerVideo",
      "Invalid video file. Please choose an MP4, MOV, or AVI file."
    );
    isValid = false;
  }

  if (isValid) {
    // Proceed with saving changes
    // Display success message
    displaySuccessMessage("Changes saved successfully");
  }
}

function validateFile(input, allowedExtensions) {
  var fileName = input.value;
  var fileExtension = fileName.split(".").pop().toLowerCase();

  // Check file extension
  if (!allowedExtensions.includes(fileExtension)) {
    return false;
  }

  return true;
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
}

function displaySuccessMessage(message) {
  // You can display the success message wherever you want

  var successElement = document.getElementById("successMessage");
  if (successElement) {
    successElement.innerText = message;
  }
}

function resetSuccessMessage() {
  var successElement = document.getElementById("successMessage");
  if (successElement) {
    successElement.innerText = "";
  }
}
