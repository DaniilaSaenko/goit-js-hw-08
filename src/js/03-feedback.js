import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', handleSubmit);

const STORAGE_KEY = 'feedback-form-state';
const saveLocalItems = localStorage.getItem(STORAGE_KEY);
const parsSaveLocalItems = JSON.parse(saveLocalItems);

function onInput(e) {
  const userDetails = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  userDetails[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userDetails));
}

function getLocalStorageItems() {
  if (saveLocalItems) {
    !parsSaveLocalItems.email
      ? ''
      : (refs.email.value = parsSaveLocalItems.email);
    !parsSaveLocalItems.message
      ? ''
      : (refs.message.value = parsSaveLocalItems.message);
  }
}

getLocalStorageItems();

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Заполните все поля, пожалуйста!');
  }
  console.log(`Email: ${email.value} Message: ${message.value}`);
  e.currentTarget.reset();
  removeStorageItems();
}

function removeStorageItems() {
  localStorage.removeItem(STORAGE_KEY);
}
