const darkModeToggle = document.querySelector('[data-js="dark-mode-toggle"]');
const bodyElement = document.querySelector('[data-js="body"]');

darkModeToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
