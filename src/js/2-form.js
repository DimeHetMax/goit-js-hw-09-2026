const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const local = localStorage.getItem(STORAGE_KEY);

const formData = {
  email: '',
  message: '',
};

if (local) {
  const { email, message } = JSON.parse(local);
  formData.email = email;
  formData.message = message;
  formEl.elements.email.value = email;
  formEl.elements.message.value = message;
}
const handleInput = e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
const handleSubmit = e => {
  e.preventDefault();

  const { email, message } = formData;
  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formEl.reset();
};
formEl.addEventListener('input', handleInput);
formEl.addEventListener('submit', handleSubmit);
