

const buttons = document.querySelectorAll<HTMLButtonElement>('.services__button');
const images = document.querySelectorAll<HTMLImageElement>('.services__image');
const drowpdown = document.querySelector<HTMLElement>('.dropdown');
const drowTeams = document.getElementById('menu-dropdown');

buttons.forEach((button, index) => {

  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('active');
      btn.style.backgroundColor = "";
    });

    images.forEach(image => image.classList.remove('active'));

    button.classList.add('active');
    button.style.backgroundColor = "#e5e5e5";

    if (images[index]) {
      images[index].classList.add('active');
    }

    console.log(index);
    console.log("funcionaa")
  });
});

drowTeams?.addEventListener('click', () => {
  const visibilidad = drowpdown!.style.visibility;
  drowpdown!.style.visibility = visibilidad === "visible" ? "hidden" : "visible";
});

