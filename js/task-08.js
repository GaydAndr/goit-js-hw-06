const form = document.querySelector('.login-form');
const userData = {};

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Будь-ласка заповніть всі поля!');
  }

  userData.email = email.value;
  userData.password = password.value;

  console.log(userData);

  event.currentTarget.reset();
}
