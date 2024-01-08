var deleteModal = new bootstrap.Modal(
  document.getElementById("deleteConfirmationModal")
);
var confirmDeleteBtn = document.getElementById("confirmDeleteBtn");

function confirmDelete(button) {
  confirmDeleteBtn.addEventListener("click", function () {
    // Remove the entire image container
    var imageContainer = button.parentNode;
    imageContainer.parentNode.removeChild(imageContainer);
    deleteModal.hide();
  });

  // Display the confirmation modal
  deleteModal.show();
}
