const sendForm = () => {
  const form = document.querySelector('.modal');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = form.querySelector('input[type=text]');
    const tel = form.querySelector('input[type=tel]');
    const email = form.querySelector('input[type=email]');

    const sendObj = {
      name: text.value,
      phone: tel.value,
      email: email.value,
    }

  });










}

sendForm();