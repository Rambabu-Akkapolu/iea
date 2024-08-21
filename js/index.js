const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  closeIcon.classList.add("hidden");
  menuIcon.classList.remove("hidden");
});
