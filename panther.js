// panther Scripts
// get variables from DOM
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("password").addEventListener("blur", validatePassword);
document
  .getElementById("confirmed-password")
  .addEventListener("blur", validateConfirmPassword);
document.getElementById("email").addEventListener("blur", validateEmail);
function validateName() {
  const name = document.getElementById("name");
  const regexName = /^[a-zA-Z ]{2,70}$/;

  if (!regexName.test(name.value)) {
    name.classList.add("not-correct");
  } else {
    name.classList.remove("not-correct");
  }
}

function validatePassword() {
  const password = document.getElementById("password");
  const regexPassword = /^[a-zA-Z0-9_\-\.@+=!&*$£]{2,50}$/;

  if (!regexPassword.test(password.value)) {
    password.classList.add("not-correct");
  } else {
    password.classList.remove("not-correct");
  }
}

function validateConfirmPassword() {
  const confirmedPassword = document.getElementById("confirmed-password");

  if (confirmedPassword.value === password.value) {
    confirmedPassword.classList.remove("not-correct");
  } else {
    confirmedPassword.classList.add("not-correct");
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,50})$/;

  if (!regexEmail.test(email.value)) {
    email.classList.add("not-correct");
  } else {
    email.classList.remove("not-correct");
  }
}

// function validatePantherForm() {}

function changeIcon() {
  const eye = document.getElementById("eye");
  const eyeslash = document.getElementById("eye-slash");
  if (eye.style.display === "none") {
    eye.style.display = "block";
    eyeslash.style.display = "none";

    document.getElementById("confirmed-password").type = "text";
  } else {
    eye.style.display = "none";
    eyeslash.style.display = "block";
    document.getElementById("confirmed-password").type = "password";
  }


}
