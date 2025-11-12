// Resize Pc -- Movil -- Pc -------------------------------------------- //
// Detecta si pasa a formato escritorio —> regresar al loading
window.addEventListener("resize", () => {
  const esMovil = window.matchMedia("(max-width: 768px)").matches;

  if (!esMovil) {
    window.location.href = "../index.html"; // volver al loading
  }
});
