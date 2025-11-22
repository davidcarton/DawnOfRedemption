document.getElementById("formSuscribir").addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  const contenedor = document.getElementById("mensajeExito");

  contenedor.innerHTML = `
    <strong>✔ ¡Formulario enviado correctamente!</strong><br><br>
    <strong>Nombre:</strong> ${nombre}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Mensaje:</strong> ${mensaje}
  `;

  contenedor.style.display = "block";

  setTimeout(() => {
    contenedor.style.opacity = 1;
  }, 100);

  e.target.reset();

  // Ocultar después de unos segundos
  setTimeout(() => {
    contenedor.style.opacity = 0;
  }, 5000);
});
