/* Bookmarks */

const saveBookmarkButton = document.querySelector('[data-js="save-bookmark"]');
const bookmark = document.querySelector('[data-js="bookmark"]');

saveBookmarkButton.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark");
});

const answerButton = document.querySelector(
  '[data-js="quiz-card__answer-button"]'
);
const answerParagraph = document.querySelector('[data-js="quiz-card__answer"]');

answerButton.addEventListener("click", () => {
  answerParagraph.classList.toggle("quiz-card__answer--hidden");
});
