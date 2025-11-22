// ======================================================================
//   CANCIONES – abrir YouTube al pulsar un .cuadro
// ======================================================================
document.addEventListener("click", (e) => {
  // Primero: permitir que los enlaces <a> funcionen normalmente
  if (e.target.tagName === "A") return;

  // Detectar si se pulsó un cuadro
  const cuadro = e.target.closest(".cuadro");
  if (!cuadro) return;

  const url = cuadro.dataset.url;
  if (url) {
    window.open(url, "_blank");
  }
});
