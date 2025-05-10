const modalOpen = document.querySelectorAll(".modal__open");
const modal = document.querySelector(".modal");

modalOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.showModal(); 
    modal.querySelector(".modal__content").focus();
  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.close();
  }
});