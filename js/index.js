const CHECKBOX_INPUT_SELECTOR = "input[type='checkbox']";
const TEXT_INPUT_SELECTOR = "input[type='text']";

const guestBookForm = document.querySelector('#guest-book-form');

guestBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const guestName = e.target.querySelector(TEXT_INPUT_SELECTOR).value;
  const numOfMatchingMovies = [
    ...e.target.querySelectorAll(CHECKBOX_INPUT_SELECTOR),
  ].reduce((sum, checkbox) => sum + checkbox.checked, 0);

  alert(`${guestName}님, 저와 ${numOfMatchingMovies}개의 취향이 같으시네요!`);
});

guestBookForm.addEventListener('reset', (e) => {
  e.preventDefault();

  const checkboxes = e.target.querySelectorAll(CHECKBOX_INPUT_SELECTOR);
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
});
