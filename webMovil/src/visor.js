document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("iframeCancion");
  const volver = document.getElementById("btnVolverCanciones");

  // Leer ID desde la URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  // Cargar vídeo
  if (id) {
    iframe.src = `https://www.youtube.com/embed/${id}`;
  }

  // Botón volver
  volver.addEventListener("click", () => {
    window.location.href = "canciones.html";
  });
});
