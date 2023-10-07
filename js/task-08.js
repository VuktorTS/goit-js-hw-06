const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(even) {
  even.preventDefault();

  const formElements = even.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;
  const user = {};

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені.");
  } else {
    user.password = password;
    user.email = email;
    formEl.reset();
  }
}
