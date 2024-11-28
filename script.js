const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");

openModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});
