function filterActors() {
  var searchKeyword = document
    .getElementById("searchActor")
    .value.toLowerCase();
  var actorCheckboxes = document.querySelectorAll(
    '#popular-actor input[name="actors"]'
  );

  actorCheckboxes.forEach(function (checkbox) {
    var actorName = checkbox.dataset.actorName.toLowerCase();
    var actorDiv = checkbox.parentElement;

    if (actorName.includes(searchKeyword)) {
      actorDiv.style.display = "block";
    } else {
      actorDiv.style.display = "none";
    }
  });
}
function filterCrew() {
  var searchCrewKeyword = document
    .getElementById("searchCrew")
    .value.toLowerCase();
  var crewCheckboxes = document.querySelectorAll(
    '#popular-Crew input[name="crew"]'
  );

  crewCheckboxes.forEach(function (checkbox) {
    var crewName = checkbox.dataset.crewName.toLowerCase();
    var crewDiv = checkbox.parentElement;

    if (crewName.includes(searchCrewKeyword)) {
      crewDiv.style.display = "block";
    } else {
      crewDiv.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var addActorButton = document.querySelector("#addActorButton");
  var deleteButton = document.querySelector("#deleteButton");

  addActorButton.addEventListener("click", function () {
    // Get all checkboxes that are checked
    var checkboxes = document.querySelectorAll(
      '#popular-actor input[type="checkbox"]:checked'
    );

    checkboxes.forEach(function (checkbox) {
      // Get the parent div of the checkbox
      var actorDiv = checkbox.closest(".col");

      // Get the actor name from the p element
      var actorName = actorDiv.querySelector("p").innerText;

      // Create a new div for the selected actor
      var selectedActorDiv = document.createElement("div");
      selectedActorDiv.classList.add("col");
      selectedActorDiv.innerHTML = `
          <img src="${actorDiv.querySelector("img").src}" alt="" />
          <p class="m-2 p-2">${actorName}</p>
        `;

      // Append the selected actor div to the actor-container
      document.querySelector("#actor-container").appendChild(selectedActorDiv);

      // Uncheck the checkbox
      checkbox.checked = false;
    });
  });

  deleteButton.addEventListener("click", function () {
    // Clear the actor-container
    var actorContainer = document.querySelector("#actor-container");
    actorContainer.innerHTML = "";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var newActorButton = document.querySelector("#newActor");
  var deleteButton = document.querySelector("#deleteButton");

  newActorButton.addEventListener("click", function () {
    // Get the actor name from the input field
    var actorNameInput = document.querySelector(
      '#popular-actor input[type="text"]'
    );
    var actorName = actorNameInput.value.trim();

    if (actorName !== "") {
      // Get the file input and extract the image URL
      var actorImageInput = document.querySelector(
        '#popular-actor input[type="file"]'
      );
      var actorImage = actorImageInput.files[0];

      if (actorImage) {
        // Create a new div for the selected actor
        var selectedActorDiv = document.createElement("div");
        selectedActorDiv.classList.add("col");
        selectedActorDiv.innerHTML = `
                <img src="${URL.createObjectURL(actorImage)}" alt="" /><br />
                <input type="checkbox" name="actors" data-actor-name="${actorName}" data-actor-image="${URL.createObjectURL(
          actorImage
        )}" />
                <p class="m-2 p-2">${actorName}</p>
              `;

        // Append the selected actor div to the popular-actor container
        document
          .querySelector("#popular-actor .overflow-scroll")
          .appendChild(selectedActorDiv);

        // Clear the input fields
        actorNameInput.value = "";
        actorImageInput.value = "";
      }
    }
  });

  deleteButton.addEventListener("click", function () {
    // Clear the actor-container
    var actorContainer = document.querySelector("#actor-container");
    actorContainer.innerHTML = "";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var addCrewButton = document.querySelector("#addCrewButton");
  var deleteCrewButton = document.querySelector("#deleteCrewButton");

  addCrewButton.addEventListener("click", function () {
    // Get all checkboxes that are checked
    var checkboxes = document.querySelectorAll(
      '#popular-Crew input[type="checkbox"]:checked'
    );

    checkboxes.forEach(function (checkbox) {
      // Get the parent div of the checkbox
      var CrewDiv = checkbox.closest(".col");

      // Get the actor name from the p element
      var CrewName = CrewDiv.querySelector("p").innerText;

      // Create a new div for the selected actor
      var selectedCrewDiv = document.createElement("div");
      selectedCrewDiv.classList.add("col");
      selectedCrewDiv.innerHTML = `
          <img src="${CrewDiv.querySelector("img").src}" alt="" />
          <p class="m-2 p-2">${CrewName}</p>
        `;

      // Append the selected actor div to the actor-container
      document.querySelector("#crew-container").appendChild(selectedCrewDiv);

      // Uncheck the checkbox
      checkbox.checked = false;
    });
  });

  deleteCrewButton.addEventListener("click", function () {
    // Clear the actor-container
    var crewContainer = document.querySelector("#crew-container");
    crewContainer.innerHTML = "";
  });
});

document.getElementById("newActor").addEventListener("click", function (event) {
  event.preventDefault();

  // Get the actor name from the input field
  var actorNameInput = document.getElementById("actorNameInput");
  var actorName = actorNameInput.value;

  // Get the actor image file
  var actorImageInput = document.getElementById("rcv");
  var actorImageFile = actorImageInput.files[0];

  // Validate input
  if (actorName.trim() === "") {
    alert("Please enter the actor name.");
    return;
  }

  // Create HTML elements for the new actor
  var newActorDiv = document.createElement("div");
  newActorDiv.className = "col";
  newActorDiv.innerHTML = `
      <img src="${URL.createObjectURL(actorImageFile)}" alt="" /><br />
      <input type="checkbox" name="actors" data-actor-name="${actorName}" data-actor-image="${URL.createObjectURL(
    actorImageFile
  )}" />
      <p class="m-2 p-2">${actorName}</p>
    `;

  // Append the new actor to the popular actors container
  var popularActorContainer = document
    .getElementById("popular-actor")
    .getElementsByClassName("row")[1];
  popularActorContainer.appendChild(newActorDiv);

  // Clear the input fields
  actorNameInput.value = "";
  actorImageInput.value = "";
});

function filterActors() {
  var input, filter, container, actors, actor, name;
  input = document.getElementById("searchActor");
  filter = input.value.toUpperCase();
  container = document
    .getElementById("popular-actor")
    .getElementsByClassName("row")[1];
  actors = container.getElementsByClassName("col");

  for (var i = 0; i < actors.length; i++) {
    actor = actors[i];
    name = actor.getElementsByTagName("p")[0].innerText;
    if (name.toUpperCase().indexOf(filter) > -1) {
      actor.style.display = "";
    } else {
      actor.style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("newCrew")
    .addEventListener("click", function (event) {
      event.preventDefault();

      // Get the crew name from the input field
      var crewNameInput = document.getElementById("crewNameInput");
      var crewName = crewNameInput.value;

      // Get the crew image file
      var crewImageInput = document.getElementById("rcv");
      var crewImageFile = crewImageInput.files[0];

      // Validate input
      if (crewName.trim() === "") {
        alert("Please enter the crew name.");
        return;
      }

      // Create HTML elements for the new crew
      var newCrewDiv = document.createElement("div");
      newCrewDiv.className = "col";
      newCrewDiv.innerHTML = `
        <img src="${URL.createObjectURL(crewImageFile)}" alt="" /><br />
        <input type="checkbox" name="crew" data-crew-name="${crewName}" data-crew-image="${URL.createObjectURL(
        crewImageFile
      )}" />
        <p class="m-2 p-2">${crewName}</p>
      `;

      // Append the new crew to the crew container
      var crewContainer = document.getElementById("crew-container");
      crewContainer.appendChild(newCrewDiv);

      // Clear the input fields
      crewNameInput.value = "";
      crewImageInput.value = "";
    });

  function filterCrew() {
    var input, filter, container, crews, crew, name;
    input = document.getElementById("searchCrew");
    filter = input.value.toUpperCase();
    container = document.getElementById("crew-container");
    crews = container.getElementsByClassName("col");

    for (var i = 0; i < crews.length; i++) {
      crew = crews[i];
      name = crew.getElementsByTagName("p")[0].innerText;
      if (name.toUpperCase().indexOf(filter) > -1) {
        crew.style.display = "";
      } else {
        crew.style.display = "none";
      }
    }
  }

  document
    .getElementById("deleteCrewButton")
    .addEventListener("click", function (event) {
      event.preventDefault();

      // Get all checked crew checkboxes
      var checkedCrews = document.querySelectorAll(
        'input[name="crew"]:checked'
      );

      // Remove the corresponding crew elements
      checkedCrews.forEach(function (crewCheckbox) {
        var crewDiv = crewCheckbox.closest(".col");
        crewDiv.remove();
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  var deleteButton = document.querySelector("#deleteButton");
  var confirmationModal = new bootstrap.Modal(
    document.getElementById("confirmationModal")
  );

  deleteButton.addEventListener("click", function () {
    confirmationModal.show();
  });

  var confirmDeleteButton = document.querySelector("#confirmDelete");
  confirmDeleteButton.addEventListener("click", function () {
    // Perform your delete action

    var actorContainer = document.querySelector("#actor-container");
    actorContainer.innerHTML = "";

    // Close the modal
    confirmationModal.hide();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var deleteCrewButton = document.querySelector("#deleteCrewButton");
  var confirmationModalCrew = new bootstrap.Modal(
    document.getElementById("confirmationModalCrew")
  );

  deleteCrewButton.addEventListener("click", function () {
    confirmationModalCrew.show();
  });

  var confirmDeleteCrewButton = document.querySelector("#confirmDeleteCrew");
  confirmDeleteCrewButton.addEventListener("click", function () {
    // Perform your delete action
    var crewContainer = document.querySelector("#crew-container");
    crewContainer.innerHTML = "";

    // Close the modal
    confirmationModalCrew.hide();
  });
});
