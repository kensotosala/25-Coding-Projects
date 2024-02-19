const btnBrowseFiles = document.querySelector("btnBrowseFiles");

function openModal() {
  var modalSection = document.querySelector(".modal-section");
  modalSection.style.display = "block";
}

function closeModal() {
  var modalSection = document.querySelector(".modal-section");
  modalSection.style.display = "none";
}

const button = document.getElementById("btnBrowseFiles");

const options = {
  accept: "image/*",
};

button.addEventListener("click", () => {
  var modalSection = document.querySelector(".modal-section");
  modalSection.style.display = "block";
});
