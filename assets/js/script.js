"use strict";

function handleMenu() {
  const header = document.querySelector(".header");
  const btnMenu = document.querySelector(".header__button");
  const menuText = document.querySelector(".header__button-text");
  const linksMainNav = document.querySelectorAll(".main-navigation__link");

  function toggleMenu() {
    header.classList.toggle("active");
    const isActive = header.classList.contains("active");
    btnMenu.setAttribute("aria-expanded", isActive);
    menuText.textContent = isActive ? "Fechar" : "Menu";
  }

  btnMenu.addEventListener("click", toggleMenu);
  linksMainNav.forEach((e) => {
    e.addEventListener("click", toggleMenu);
  });
}

function imageRevealFeature() {
  const revealContainer = document.querySelector(".reveal-container");
  const revealImage = document.querySelector(".img-reveal");
  let isHovering = false;
  let time = 0;

  function animate() {
    if (!isHovering) {
      time += 0.01;
      const autoX = 50 + 50 * Math.sin(time);
      const autoY = 50 + 33.33 * Math.cos(time * 1.5);
      revealImage.style.setProperty("--x", `${autoX}%`);
      revealImage.style.setProperty("--y", `${autoY}%`);
    }
    requestAnimationFrame(animate);
  }

  animate();

  revealContainer.addEventListener("mouseenter", () => {
    isHovering = true;
    // Opcional: Remove a transição para o mouse responder instantaneamente
    revealImage.style.transition = "none";
  });

  revealContainer.addEventListener("mouseleave", () => {
    isHovering = false;
    // Opcional: Devolve a transição para suavizar o início da automação
    revealImage.style.transition = "--x 1s ease, --y 1s ease";
  });

  // Quando o mouse MOVE (Igual ao código anterior)
  revealContainer.addEventListener("mousemove", (e) => {
    if (isHovering) {
      const rect = revealContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Aqui usamos pixels (px) porque é a posição exata do mouse
      revealImage.style.setProperty("--x", `${x}px`);
      revealImage.style.setProperty("--y", `${y}px`);
    }
  });
}

handleMenu();
imageRevealFeature();
