document.addEventListener("DOMContentLoaded", function () {
  // Cargar el encabezado con JavaScript
  const headerContainer = document.createElement("div");
  headerContainer.id = "header-container";

  fetch("header.html") // Carga el contenido del archivo header.html
    .then((response) => response.text()) // Convierte la respuesta a texto
    .then((headerHtml) => {
      headerContainer.innerHTML = headerHtml; // Agrega el contenido al contenedor
    })
    .catch((error) => {
      console.error("Error al cargar el encabezado:", error);
    });

  // Agregar el encabezado al comienzo del cuerpo del documento
  const body = document.querySelector("body");
  body.insertBefore(headerContainer, body.firstChild);

  // Función para validar el correo electrónico
  function validateEmail() {
    const form = document.querySelector(".contact-form");
    const emailField = form.querySelector("#email");
    const errorMessage = form.querySelector(".error-message");
    const email = emailField.value.trim();
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (pattern.test(email)) {
      // Correo electrónico válido, borrar mensaje de error y retornar true
      errorMessage.textContent = ""; // Borrar el mensaje en la página
      return true;
    } else {
      // Correo electrónico inválido, mostrar un mensaje de error en el elemento <span>
      errorMessage.textContent = "Por favor, ingrese un correo electrónico válido";
      emailField.classList.add("error");

      return false;
    }
  }

  // Evento de envío del formulario
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (event) {
    if (!validateEmail()) {
      // Si el correo electrónico no es válido, evitar el envío del formulario
      event.preventDefault();
    } else {
      // Correo electrónico válido, redirigir a la página de agradecimiento
      redirectToThankYou();
    }
  });

  // Evento de entrada en el campo de correo electrónico
  const emailField = form.querySelector("#email");
  emailField.addEventListener("input", function () {
    validateEmail();
  });

  // Otras funciones y código de tu script principal
  function redirectToThankYou() {
    // Código para redirigir a la página de agradecimiento
  }
});
