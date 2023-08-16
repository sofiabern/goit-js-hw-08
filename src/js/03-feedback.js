import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

//
form.addEventListener('input', throttle(localStoreHandler, 500));

function localStoreHandler() {
  const storedData = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(LOCAL_KEY, JSON.stringify(storedData));
}

//
const storedDataBefore = JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? {};

if (storedDataBefore.email) {
  form.email.value = storedDataBefore.email;
}
if (storedDataBefore.message) {
  form.message.value = storedDataBefore.message;
}

//
form.addEventListener('submit', submitHandler);
function submitHandler(evt) {
  evt.preventDefault();
  console.log({
    email: form.email.value,
    message: form.message.value,
  });
  localStorage.removeItem(LOCAL_KEY);
  form.email.value = '';
  form.message.value = '';
}
