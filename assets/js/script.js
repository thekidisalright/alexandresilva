const menuButton = document.querySelector(".header__container_menu_button");

function toggleMenu() {
  const menu = document.querySelector(".header");
  menu.classList.toggle("header--active");
  if(menu.classList.contains("header--active")){
    menuButton.textContent = "Fechar";
  } else {
    menuButton.textContent = "Menu";
  }
}

menuButton.addEventListener("click", toggleMenu);