document.addEventListener("DOMContentLoaded", function () {
  // Load the header content with JavaScript
  fetch("header-template.html") // Load the content from the header-template.html file
    .then((response) => response.text()) // Convert the response to text
    .then((headerHtml) => {
      // Add the content of the header directly to the beginning of the document body
      const body = document.querySelector("body");
      body.insertAdjacentHTML("afterbegin", headerHtml);
    })
    .catch((error) => {
      console.error("Error while loading the header:", error);
    });

  // Function to validate the email
  function validateEmail() {
    const form = document.querySelector(".contact-form");
    const emailField = form.querySelector("#email");
    const errorMessage = form.querySelector(".error-message");
    const email = emailField.value.trim();
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (pattern.test(email)) {
      // Valid email, clear error message and return true
      errorMessage.textContent = ""; // Clear the message on the page
      return true;
    } else {
      // Invalid email, show an error message in the <span> element
      errorMessage.textContent = "Por favor, coloca un mail válido";
      emailField.classList.add("error");

      return false;
    }
  }

  // Form submission event
  const form = document.querySelector(".contact-form");
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
  const emailField = form.querySelector("#email");
  emailField.addEventListener("input", function () {
    validateEmail();
  });
});
