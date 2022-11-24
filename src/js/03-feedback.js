import throttle from 'lodash.throttle';

// sem@gmail.com
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
let selectedFields = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

getFormOutput();

form.addEventListener(
  'input',
  throttle(e => {
    selectedFields[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedFields));
  }, 500)
);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  let savedFormData = Object.values(selectedFields);
  if (!savedFormData.includes('')) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    selectedFields = {};
  } else {
    alert('Заполните все поля, пожалуйста!');
  }
}

function getFormOutput() {
  if (selectedFields) {
    Object.entries(selectedFields).forEach(([name, value]) => {
      selectedFields[name] = value;
      form.elements[name].value = value;
    });
  }
}
