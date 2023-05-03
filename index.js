const darkModeToggle = document.querySelector('[data-js="dark-mode-toggle"]');
const bodyElement = document.querySelector('[data-js="body"]');

darkModeToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

cards = document.querySelectorAll('[data-js="quiz-cards""]');
cards.forEach((card) => {
  const saveBookmark = document.querySelector('[data-js="save-bookmark"]');
  saveBookmark.addEventListener("click", () => {
    saveBookmark.classList.toggle("bookmark");
  });
});
