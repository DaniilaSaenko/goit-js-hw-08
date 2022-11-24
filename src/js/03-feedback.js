import throttle from 'lodash.throttle';

// sem@gmail.com
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
let selectedFields = {};

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
  if (selectedFields.email && selectedFields.message) {
    e.preventDefault();
    e.currentTarget.reset();
    /*    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))); */
    localStorage.removeItem(STORAGE_KEY);
    selectedFields = {};
  } else {
    alert('Заполните все поля, пожалуйста!');
  }
}

function getFormOutput() {
  let persistedFields = localStorage.getItem(STORAGE_KEY);
  if (persistedFields) {
    persistedFields = JSON.parse(persistedFields);
    Object.entries(persistedFields).forEach(([name, value]) => {
      selectedFields[name] = value;
      form.elements[name].value = value;
    });
  }
}
