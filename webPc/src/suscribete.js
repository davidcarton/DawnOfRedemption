document.getElementById("formSuscribir").addEventListener("submit", (e) => {
  e.preventDefault(); // Bloquea el envío real

  const formData = new FormData(e.target);

  // --- Simulación cuerpo POST ---
  const datosPost = {
    nombre: formData.get("nombre"),
    apellido: formData.get("apellido"),
    email: formData.get("email"),
    telefono: formData.get("telefono"),
  };

  // --- Mostrar POST en texto ---
  const mensaje = document.getElementById("mensajePost");
  mensaje.innerHTML = `
    <strong>✔ POST enviado correctamente</strong><br>
    <strong>Método:</strong> POST<br>
    <strong>Datos:</strong><br>
    • Nombre: ${datosPost.nombre}<br>
    • Apellido: ${datosPost.apellido}<br>
    • Email: ${datosPost.email}<br>
    • Telefono: ${datosPost.telefono}
    
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
