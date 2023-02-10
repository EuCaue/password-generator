import genPassword from './genPassowrd';

const form = document.querySelector('#form');
const passwordField = document.querySelector('#password');
const numberCheckbox = document.querySelector('#num');
const charsCheckbox = document.querySelector('#char');
const upperCaseCheckbox = document.querySelector('#upper-case');
const lowerCaseCheckbox = document.querySelector('#lower-case');
const lengthCheckbox = document.querySelector('#len');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (
    !numberCheckbox.checked &&
    !upperCaseCheckbox.checked &&
    !lowerCaseCheckbox.checked
  ) {
    passwordField.classList.add('text-red-600');
    passwordField.textContent = 'Select something';
    return;
  } else {
    passwordField.classList.remove('text-red-600');
    passwordField.textContent = genPassword(
      lengthCheckbox.value,
      upperCaseCheckbox.checked,
      lowerCaseCheckbox.checked,
      numberCheckbox.checked,
      charsCheckbox.checked,
    );
  }
});
