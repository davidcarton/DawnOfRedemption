// Resize Pc -- Movil -- Pc -------------------------------------------- //
// Detecta si pasa a formato escritorio —> regresar al loading
window.addEventListener("resize", () => {
  const esMovil = window.matchMedia("(max-width: 768px)").matches;

  if (!esMovil) {
    window.location.href = "../index.html"; // volver al loading
  }
});

// Abrir canción al pulsar un cuadro
document.addEventListener("click", (e) => {
  const cuadro = e.target.closest(".cuadro");
  if (!cuadro) return;

  const url = cuadro.dataset.url;
  if (url) {
    window.open(url, "_blank"); // abre YouTube en nueva pestaña
  }
});
