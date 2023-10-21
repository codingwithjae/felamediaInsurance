document.addEventListener("DOMContentLoaded", function () {
  // Get the form and relevant fields
  let form = document.querySelector(".contact-form");
  let emailField = form.querySelector("#email");
  let errorMessage = emailField.nextElementSibling;
  let errorIcon = emailField.nextElementSibling.nextElementSibling;

  // Email validation function
  function validateEmail() {
    let email = emailField.value.trim();
    let pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zAZ0-9-.]+$/;

    if (pattern.test(email)) {
      errorMessage.textContent = "";
      emailField.classList.remove("error");
      errorIcon.style.display = "none";
      return true;
    } else {
      errorMessage.textContent = "Formato de correo no válido";
      errorMessage.style.color = "#FF6F5B";
      emailField.classList.add("error");
      return false;
    }
  }

  // Form submit event
  form.addEventListener("submit", function (event) {
    if (!validateEmail()) {
      // If the email is not valid, prevent form submission
      event.preventDefault();
    } else {
      // Email is valid, redirect to thank you page
      redirectToThankYou();
    }
  });

  // Email field input event
  emailField.addEventListener("input", function () {
    validateEmail();
  });
});






