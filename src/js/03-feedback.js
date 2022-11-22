import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', handleSubmit);

const STORAGE_KEY = 'feedback-form-state';

function onInput(e) {
  const userMessage = e.target.value;
  localStorage.setItem(STORAGE_KEY, userMessage);
}

function getLocalStorage() {
  const saveLocalItems = localStorage.getItem(STORAGE_KEY);
  if (saveLocalItems) {console.log(saveLocalItems);}
}

getLocalStorage();

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
  localStorage.removeItem(STORAGE_KEY);
}

