document.getElementById("formSuscribir").addEventListener("submit", (e) => {
  e.preventDefault(); // Bloquea el envío real

  const formData = new FormData(e.target);

  // --- Simulación cuerpo POST ---
  const datosPost = {
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    mensaje: formData.get("mensaje"),
  };

  // --- Mostrar POST en texto ---
  const mensaje = document.getElementById("mensajePost");
  mensaje.innerHTML = `
    <strong>✔ POST enviado correctamente</strong><br>
    <strong>Método:</strong> POST<br>
    <strong>Datos:</strong><br>
    • Nombre: ${datosPost.nombre}<br>
    • Email: ${datosPost.email}<br>
    • Mensaje: ${datosPost.mensaje}
  `;
  mensaje.style.opacity = "1";

  // --- Mostrar JSON ---
  const json = document.getElementById("jsonPost");
  json.textContent = JSON.stringify(datosPost, null, 2);
  json.style.opacity = "1";

  // --- Reset del formulario ---
  e.target.reset();

  // --- Ocultar todo después de unos segundos ---
  setTimeout(() => {
    mensaje.style.opacity = "0";
    json.style.opacity = "0";
  }, 10000);
});
