const dropDownButton = document.getElementById("dropdown-button");
const dropdown = document.getElementById("dropdown");

dropDownButton.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});
