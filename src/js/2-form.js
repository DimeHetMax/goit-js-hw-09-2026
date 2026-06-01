const form = document.querySelector('.feedback-form');

const local = localStorage.getItem('feedback-form-state');

console.log(formData);
if (local) {
  const { email, message } = JSON.parse(local);
  form.elements.email.value = email;
  form.elements.message.value = message;
}

const handleSubmit = e => {
  e.preventDefault();
  const formData = new FormData(form);

  const data = {
    email: formData.get('email'),
    message: formData.get('message'),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
  form.reset();
};
form.addEventListener('submit', handleSubmit);
