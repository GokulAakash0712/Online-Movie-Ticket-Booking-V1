document.addEventListener("DOMContentLoaded", function () {
  // click event listener to all buttons with class "btn-detail"
  var cancelButtons = document.querySelectorAll(".btn-detail");

  cancelButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Show confirmation modal
      $("#confirmationModal").modal("show");

      // Store the row to remove on confirmation
      var rowToRemove = this.closest("tr");

      // click event listener to the confirm button in the modal
      document
        .getElementById("confirmCancel")
        .addEventListener("click", function () {
          // Remove the stored row
          rowToRemove.parentNode.removeChild(rowToRemove);

          // Hide the confirmation modal
          $("#confirmationModal").modal("hide");
        });
    });
  });
});
