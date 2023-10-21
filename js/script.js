document.addEventListener("DOMContentLoaded", function () {
  // Get the form and relevant fields
  const form = document.querySelector(".contact-form");
  const emailField = form.querySelector("#email");
  const errorMessage = form.querySelector(".error-message");

  // Function to validate the email
  function validateEmail() {
    const email = emailField.value.trim();
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (pattern.test(email)) {
      // Valid email, clear error message and return true
      errorMessage.textContent = ""; // Clear the message on the page
      return true;
    } else {
      // Invalid email, display an error message in the <span> element
      errorMessage.textContent = "Please enter a valid email";
      emailField.classList.add("error");

      return false;
    }
  }

  // Form submission event
  form.addEventListener("submit", function (event) {
    if (!validateEmail()) {
      // If the email is not valid, prevent form submission
      event.preventDefault();
    } else {
      // Valid email, redirect to the thank you page
      redirectToThankYou();
    }
  });

  // Email field input event
  emailField.addEventListener("input", function () {
    validateEmail();
  });
});
