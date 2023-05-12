/* Bookmarks */

const saveBookmarkButton = document.querySelector('[data-js="save-bookmark"]');
const bookmark = document.querySelector('[data-js="bookmark"]');

saveBookmarkButton.addEventListener("click", () => {
  console.log("Hello");
  bookmark.classList.toggle("bookmark");
});
