/* Bookmarks */
const quizCards = document.querySelectorAll('[data-js="quiz-cards"]');

quizCards.forEach((card) => {
  const saveBookmarkButton = card.querySelector('[data-js="save-bookmark"]');
  const bookmark = card.querySelector('[data-js="bookmark"]');
  saveBookmarkButton.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark");
  });
});

quizCards.forEach((card) => {
  const answerButton = card.querySelector(
    '[data-js="quiz-card__answer-button"]'
  );
  const answerParagraph = card.querySelector('[data-js="quiz-card__answer"]');
  answerButton.addEventListener("click", () => {
    answerParagraph.classList.toggle("quiz-card__answer--hidden");
  });
});
