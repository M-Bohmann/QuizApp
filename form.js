const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector(
  '[data-js="form__question-textarea"]'
);
const answerInput = document.querySelector('[data-js="form__answer-textarea"]');
const tagInput = document.querySelector('[data-js="form__tag-input"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newQuizCard = document.createElement("fieldset");
  newQuizCard.classList.add("quiz-card");
  form.append(newQuizCard);

  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.classList.add("quiz-card__bookmark-button");
  newQuizCard.append(newBookmarkButton);

  const newQuestion = document.createElement("p");
  newQuestion.textContent = questionInput.value;
  newQuizCard.append(newQuestion);

  const newShowAnswerButton = document.createElement("button");
  newShowAnswerButton.classList.add("quiz-card__answert-button");
  newShowAnswerButton.textContent = "Show Answer";
  newQuizCard.append(newShowAnswerButton);

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("quiz-card__answer");
  newAnswer.textContent = answerInput.value;
  newQuizCard.append(newAnswer);

  const newList = document.createElement("ul");
  newList.classList.add("quiz-card__tags-list");
  newQuizCard.append(newList);

  const newTag = document.createElement("li");
  newTag.textContent = tagInput.value;
  newList.append(newTag);

  console.log(data);
});
